import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {TrendingUp, AlphaH, AlphaM, Home} from 'mdi-material-ui';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Route, Link, Switch } from "react-router-dom";
import Introduction from './Introduction.jsx';
import Phcalc from './modules/Phcalc.jsx'
import Mcalc from './modules/Mcalc.jsx'
import Calcurve from './modules/Calcurve.jsx'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Index extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />

        <List>
          <Link to="/">
            <ListItem button key={1} >
              <ListItemIcon><Home/></ListItemIcon>
              <ListItemText primary={"Index"} />
            </ListItem>
          </Link>
          <Link to="/phcalc">
            <ListItem button key={2} >
              <ListItemIcon><AlphaH/></ListItemIcon>
              <ListItemText primary={"pH Calculator"} />
            </ListItem>
          </Link>
          <Link to="/mcalc">
            <ListItem button key={3} >
              <ListItemIcon><AlphaM/></ListItemIcon>
              <ListItemText primary={"Molarity Calculator"} />
            </ListItem>
          </Link>
          <Link to="/calcurve">
            <ListItem button key={4} >
            <ListItemIcon><TrendingUp/></ListItemIcon>
              <ListItemText primary={"Calibration Curve"} />
            </ListItem>
          </Link>
        </List>

      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Biochemistry Lab Tools
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <Switch>
          <Route exact path="/" component={Mcalc} />
          <Route path="/phcalc" component={Phcalc} />
          <Route path="/mcalc" component={Mcalc} />
          <Route path="/calcurve" component={Calcurve}/>
        </Switch>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Index);