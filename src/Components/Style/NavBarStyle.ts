import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navBarContainer:{
    // background: "#BAD1C2",
    "& a.active": {
      background: "#282A3A",
      color: "white",
    },
  },
  nav: {
    padding: "5px 15px 5px 15px",
    fontSize: "20px",
    textDecoration: "none",
    cursor: "pointer",
  }
  
});

export default useStyle;
