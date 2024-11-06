import React from "react";
import { createRoot } from "react-dom/client";

import * as Components from "./components";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      <h1>TMA UI Component</h1>
      <div
        style={{
          display: "flex",
          gap: "32px",
          flexDirection: "row",
          padding: "16px",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(Components).map((key) => (
          <p key={key}>{key}</p>
        ))}
      </div>
    </React.Fragment>
  </React.StrictMode>,
);
