import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  bar:{
    display: "flex",
    justifyContent: "space-between",
  },
  tableContainer: {
    marginTop: "30px",
    "& div": {
      width: "70%",
      margin: "0 auto",
      "& table": {
        "& tbody": {
          background: "#BAD1C2",
          "& td": {
            textAlign: "center",
          },
        },
        "& thead": {
          "& th": {
            textAlign: "center",
            color: "white",
            background: "#282A3A",
            fontSize: "1em",
            fontWeight: "700",
            padding: "7px",
          },
        },
      },
    },
  },
});

export default useStyle;
