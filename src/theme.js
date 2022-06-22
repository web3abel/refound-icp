import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "#0070f3",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
    },
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        height:"10px",
        borderRadius:"10px",
      },
      bar2Buffer : {
        backgroundColor: "rgb(225, 142, 19)",
      },
      dashedColorPrimary : {
        backgroundSize: "12px 12px",
        marginTop: "-2px",
        backgroundImage: "radial-gradient(rgb(189, 1, 1) 0%, rgb(189, 1, 1) 16%, transparent 42%)"
      },
    },
    MuiIconButton: {
      label: {
        color: "##0070f3",
      },
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: "##0070f3",
        color: "white",
      },
    },
    MuiListItemIcon: {
      root: {
        color: "##0070f3",
      },
    },
  },
});

export default theme;
