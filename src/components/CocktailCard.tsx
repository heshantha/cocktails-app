import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {
  addFavourite,
  removeFavourite,
} from "../redux/reducers/cocktailsReducer";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

interface CocktailCardProps {
  cocktail: any;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail }) => {
  const dispatch = useDispatch();
  const { favouriteCocktails } = useSelector(
    (state: RootState) => state.cocktails
  );

  const isFavourite = () => {
    return favouriteCocktails.some(
      (favDrink) => favDrink.idDrink === cocktail.idDrink
    );
  };

  const handleToggleFavourite = () => {
    if (isFavourite()) {
      dispatch(removeFavourite(cocktail.idDrink));
    } else {
      dispatch(addFavourite(cocktail));
    }
  };

  return (
    <Card>
      <img
        className="card-image"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <CardContent>
        <Box className="box-centered">
          <Typography className="card-title" variant="h6">
            {cocktail.strDrink} - {cocktail.strCategory}
          </Typography>
        </Box>
        <IconButton
          className="favourite-button"
          onClick={handleToggleFavourite}
          aria-label={
            isFavourite()
              ? `Remove ${cocktail.strDrink} from favourites`
              : `Add ${cocktail.strDrink} to favourites`
          } // Adding an aria-label here
        >
          {isFavourite() ? <Favorite color="secondary" /> : <FavoriteBorder />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CocktailCard;
