import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    if (navigate) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <Box className="search-input-box">
      <TextField
        className={`textfield-base ${isMobile ? "mobile-textfield" : ""}`}
        id="search-input"
        label={placeholder || "Search"}
        value={query}
        inputProps={{ "aria-label": "Search" }}
        onChange={(e) => setQuery(e.target.value)}
        InputLabelProps={{ htmlFor: "search-input" }}
      />
      <Button
        variant="contained"
        className={`search-button ${isMobile ? "mobile-button" : ""}`}
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;
