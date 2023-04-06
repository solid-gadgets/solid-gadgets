import { Routes, Route, A, Router } from "@solidjs/router";
import { render, Index } from "solid-js/web";

import "./index.scss";
import { routes } from "./routes";

const App = () => {
  return (
    <main class="main-container">
      <section class="menu">
        <Index each={routes} fallback={<div>Loading...</div>}>
          {route => (
            <div class="menu-item">
              <A href={route().path}>{route().name}</A>
            </div>
          )}
        </Index>
      </section>
      <section class="view">
        <Routes>
          <Index each={routes} fallback={<div>Loading...</div>}>
            {route => <Route path={route().path} component={route().component} />}
          </Index>
        </Routes>
      </section>
    </main>
  );
};

const root = document.getElementById("root");
if (root) {
  render(
    () => (
      <Router base="solid-gadgets">
        <App />
      </Router>
    ),
    root
  );
}
