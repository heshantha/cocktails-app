import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchInput from "./SearchInput";
import { Box, Container } from "@mui/material";
import { Grid, Typography } from "@material-ui/core";
import CocktailCard from "./CocktailCard";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[] | null>(null);
  const location = useLocation();

  const handleSearch = async (searchQuery: string = query) => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
    );
    setResults(response.data.drinks || null);
  };
  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get("query") || "";
    if (searchQuery) {
      setQuery(searchQuery);
      handleSearch(searchQuery);
    }
  }, [location.search]);



  return (
    <Container>
      <Box className="search-box">
        <SearchInput
          placeholder="Search"
          onSearch={(query) => handleSearch(query)}
        />
      </Box>

      <Grid item xs={12} container spacing={3} justifyContent="center" className="grid-cotiner">
        {results ? (
          results.map((drink: any) => (
            <Grid item xs={12} sm={5} md={3} key={drink.idDrink}>
              <CocktailCard cocktail={drink} />
            </Grid>
          ))
        ) : (
          <Typography variant="subtitle1" align="center" className="no-cocktails-text">
            No cocktails found
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Search;
