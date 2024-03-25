import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { TouchBackend } from "react-dnd-touch-backend";

import "./index.css";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const Backend = isMobile ? TouchBackend : HTML5Backend;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DndProvider backend={Backend} options={{ enableMouseEvents: true }}>
      <App />
    </DndProvider>
  </React.StrictMode>
);
