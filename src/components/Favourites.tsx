// src/components/Favourites.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import { removeFavourite } from "../redux/reducers/cocktailsReducer";
import SearchInput from "./SearchInput";
import CocktailCard from "./CocktailCard";
import { Grid, Button, Box, Container } from "@material-ui/core";

const Favourites: React.FC = () => {
  const { favouriteCocktails } = useSelector(
    (state: RootState) => state.cocktails
  );
  const dispatch = useDispatch();

  return (
    <Container>
      <Box className="box-centered">
        {" "}
        <SearchInput placeholder="Search" />
      </Box>

      <Grid container spacing={3} justifyContent="center" className="grid-cotiner">
        {favouriteCocktails.map((drink: any) => (
          <Grid item xs={12} sm={5} md={3} key={drink.idDrink}>
            <Button
              className="removed-button"
              aria-label={`Remove ${drink.strDrink} from favourites`} // aria-label here
              onClick={() => dispatch(removeFavourite(drink.idDrink))}
            >
              X
            </Button>
            <CocktailCard cocktail={drink} />


          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favourites;
