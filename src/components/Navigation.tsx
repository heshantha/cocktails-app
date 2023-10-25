import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Badge, Tabs, Tab } from "@material-ui/core";
import logo from '../assets/images/logo-cocktail.png'; 

const useStyles = makeStyles((theme) => ({
  tabLabel: {
    // Add your CSS properties here
    fontSize: '16px',
    minWidth: '100px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',  
      minWidth: '50px',
    },
  },
}));

const Navigation: React.FC = () => {
  const classes = useStyles();

  const { favouriteCocktails } = useSelector(
    (state: RootState) => state.cocktails
  );
  const location = useLocation();

  const getTabValue = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/search":
        return 1;
      case "/favourites":
        return 2;
      default:
        return false;
    }
  };

  return (
    <AppBar position="static">
      <Container className="header-block">
        <Toolbar>
          <Typography
            className="logo-link"
            component={Link}
            to="/"
            variant="h6"
          >
              <img
              src={logo} // Use the imported logo here
              alt="Cocktails Logo"
              className="logo"
            />
          </Typography>

          <Tabs value={getTabValue()}>
            <Tab
              label="Home"
              component={Link}
              to="/"
              className={classes.tabLabel}
            />
            
            <Tab
              label={
                <Badge
                  badgeContent={favouriteCocktails.length}
                  color="secondary"
                  className="badge-block"
                >
                  Favourites
                </Badge>
              }
              component={Link}
              to="/favourites"
              className={classes.tabLabel}
            />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
