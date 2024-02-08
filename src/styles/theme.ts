import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#fffefa",
    },
    primary: {
      main: "#fa5553",
    },
  },
  typography: {
    fontFamily: ["Courier New", "sans-serif"].join(","),
  },
});
