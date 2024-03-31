import React from "react";
import { hydrateRoot } from "react-dom/client"; // Import hydrateRoot from "react-dom/client"
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

function Root() {
  return (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

hydrateRoot(document.getElementById("root"), () => <Root />);
