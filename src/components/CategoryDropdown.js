
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import '../static/styles/categoryDropdown.css'

class CategoryDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      open: false
    }
    this.anchorRef = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.selectedCategory) {
      return {
        selectedCategory: props.categoryList.length ? props.categoryList[0] : 0,
      }
    } else {
      return null;
    }
  }
  handleMenuItemClick(event, category) {
    this.setState(
      {
        selectedCategory: category,
        open: false
      }, () => {
        this.props.setSelectedCategory(this.state.selectedCategory);
      }
    );
  };

  handleToggle() {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClose(event) {
    if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    return (
      <Grid container direction="column" alignItems="center" className="container-spacing">
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" display="inline" style={{ padding: "1rem" }}>
            Category
          </Typography>
          <ButtonGroup variant="contained" color="primary" ref={this.anchorRef} aria-label="split button">
            <Button onClick={this.handleClick}>{this.state.selectedCategory ? this.state.selectedCategory.name : ""}</Button>
            <Button
              color="primary"
              size="small"
              aria-controls={this.state.open ? 'split-button-menu' : undefined}
              aria-expanded={this.state.open ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={this.handleToggle.bind(this)}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper open={this.state.open} anchorEl={this.anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose.bind(this)}>
                    <MenuList id="split-button-menu">
                      {this.props.categoryList.length && this.props.categoryList.map((option) => (
                        <MenuItem
                          key={option.id}
                          selected={option.id === this.state.selectedCategory.id}
                          onClick={event => this.handleMenuItemClick(event, option)}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    )
  }
}
export default CategoryDropdown;


