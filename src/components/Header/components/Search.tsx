import { styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  boxShadow: `${theme.shadows[2]} inset`,
}));

export default Search;
