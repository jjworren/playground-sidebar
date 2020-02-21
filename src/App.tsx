import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-item" />
        <div className="sidebar-item" />
        <div className="sidebar-item" />
        <div className="spacer" />
        <div className="sidebar-item active" />
      </div>
    </div>
  );
}
