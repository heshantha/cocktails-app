import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import { fetchRandomCocktails } from "../redux/actions/cocktailsActions";
import { AppDispatch } from "../redux/store";
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchInput from "./SearchInput";

import {
  Button,
  Grid,
  Container,
  CircularProgress,
  Box,
} from "@material-ui/core";
import CocktailCard from "./CocktailCard";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { randomCocktails, loading } = useSelector(
    (state: RootState) => state.cocktails
  );

  useEffect(() => {
    dispatch(fetchRandomCocktails());
  }, [dispatch]);

  useEffect(() => {
  }, [randomCocktails]);

  return (
    <Container className="header-block"  data-testid="CocktailMain">
      <Box className="box-centered">
        <SearchInput placeholder="Search" />
        <Button
          variant="contained"
          title="refresh"
          aria-label="Refresh cocktails"
          color="secondary"
          className="refresh-button"
          onClick={() => dispatch(fetchRandomCocktails())}
          startIcon={<RefreshIcon className="refresh-icon" />}
        >
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center" className="grid-cotiner" data-testid="CocktailGrid">
        {loading ? (
          <CircularProgress className="text-center" />
        ) : randomCocktails && randomCocktails.length >= 5 ? (
          <Grid container spacing={3}>
            {randomCocktails.slice(0, 5).map((drink: any) => (
              <Grid item xs={12} sm={5} md={3} key={drink.idDrink}>
                <CocktailCard cocktail={drink} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid item xs={12} sm={5} md={3} className="text-italic-center">
            No cocktails found
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
