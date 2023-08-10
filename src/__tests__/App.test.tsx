import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "../App";
import { profileSlice } from "../redux/userProfileSlice";

describe("Testing for App.tsx component", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: profileSlice.reducer,
      },
    });
  });

  it('Shows "GitHub Seeker Header"', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const headings = screen.getAllByRole("heading", { name: "GitHub Seeker" });
    const headingWithText = headings.find(
      (heading) => heading.textContent === "GitHub Seeker"
    );

    expect(headingWithText).toBeInTheDocument();
  });

  it("Renders the Navbar component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });
});
