import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import WebRtcStreamer from "./WebRtcStreamer";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          // Unset the background-color since <CssBaseLine /> applies the default Material Design background color
          // (https://material-ui.com/components/css-baseline/#approach),
          // which however does not match the Streamlit's background.
          backgroundColor: "initial",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WebRtcStreamer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
