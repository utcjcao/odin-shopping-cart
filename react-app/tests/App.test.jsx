// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />); // renders here
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
  //   getBy: test if something exists
  // queryBy: usefor conditional rendering
  // findBy: for things that occur asynchronously (like api calls, or things that comeafter delays)
});
