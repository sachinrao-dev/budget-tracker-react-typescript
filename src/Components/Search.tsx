import React from "react";
import useStyle from "./Style/SearchStyle";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const classes = useStyle();
  return (
    <div>
      <input className={classes.search}/>
      <SearchIcon />
    </div>
  );
}

export default Search;
