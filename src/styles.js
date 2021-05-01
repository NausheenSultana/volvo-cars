import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    height: "100%",
    width: "85%",
    margin: "0 25px",
    maxWidth: theme.spacing(180),
  },
  pageTitle: {
    textAlign: "left",
    color: "#488AC7 !important",
    fontWeight: "bolder !important",
    fontFamily: "Volvo Novum !important",
  },
  headers: {
    marginLeft: "29px",
  },
  search: {
    textOverflow: "ellipsis",
    margin: "40px 0",
    width: "20%",
    height: "50px",
    borderRadius: "20px",
    border: "3px solid #488AC7",
    padding: "0px 20px",
    fontSize: "21px",
    ["@media (max-width:500px)"]: { width: "73%" },
  },
  chev: {
    height: "15px",
    width: "15px",
    float: "right",
    marginLeft: "10px",
    marginTop: "2px",
  },
  carImg: {
    width: "400px",
    height: "300px",
    marginTop: "10px",
    ["@media (max-width:500px)"]: { width: "100%" },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "end",
    alignItems: "baseline",
    ["@media (max-width:500px)"]: {
      flexDirection: "column",
      alignItems: "end",
    },
  },
  title: {
    color: "black",
    display: "inline-block",
    fontFamily: "Volvo Novum",
    fontWeight: "bolder",
    marginRight: "10px",
  },
  carDisplay: {
    display: "flex",
    // width: "1900px",
  },
  carTile: {
    margin: "20px",
    padding: "20px",
    display: "grid",
  },
  wrapper: {
    // width: "1900px",
    overflow: "scroll",
    backgroundColor: "#eee",
    ["@media (max-width:500px)"]: { width: "90%" },
  },
  linkContainer: {
    textAlign: "center",
    padding: "20px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  model: {
    fontWeight: "bolder",
    color: "grey",
    fontSize: "1.3rem",
    letterSpacing: "1.5px",
  },
  carLink: {
    color: "#488AC7",
    fontWeight: "bolder",
    textTransform: "uppercase",
    textDecoration: "none",
  },
}));
