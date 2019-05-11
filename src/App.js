import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { AppDrawer } from './AppDrawer';
import CreateEvent from './create_event';
import { LoginPage } from './LoginPage/LoginPage';
import { Preview } from './Preview';
import { RegisterUserPage } from './RegisterUserPage/RegisterUserPage';
import { TopNavBar } from './TopNavBar';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    position: 'absolute',
    top: '56px',
    height: '100%',
  },
}));


const App = (props) => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoggedInState, setIsLoggedInState] = React.useState(JSON.parse(localStorage.getItem("isLoggedIn")));

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        {isLoggedInState ? <TopNavBar handleDrawerToggle={handleDrawerToggle} /> : null}
        {isLoggedInState ?
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <AppDrawer />
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
                <AppDrawer />
              </Drawer>
            </Hidden>
          </nav> : null}
        <main className={classes.content}>
          <Route path="/login" component={() => { return <LoginPage setIsLoggedInState={setIsLoggedInState} /> }} />
          <Route path="/register-user" component={RegisterUserPage} />
          <Route path="/dining" component={Preview} />
          <Route path="/create-event" component={CreateEvent} />
        </main>
      </div>
    </Router>
  );
}

export default App;
