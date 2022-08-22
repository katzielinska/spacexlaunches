import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import { apollo } from "./infrastructure/apollo";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apollo}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
