import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
