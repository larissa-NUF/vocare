import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from './api/services/queryClient';
import App from './App';
import { theme } from './styles/theme';
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from './reducers';

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
