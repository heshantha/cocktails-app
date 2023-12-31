import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import Navigation from "./components/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import './styles/app.scss';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#45aad4', 
      },
      secondary: {
        main: '#FA7268', 
      },
    },
  });

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
