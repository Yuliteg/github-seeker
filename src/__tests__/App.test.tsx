import { screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";

import App from "../App";
import { profileSlice } from "../redux/userProfileSlice";
import { renderWithProviders } from "../redux/test-utils";

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
    renderWithProviders(<App />, { store });

    const headings = screen.getAllByRole("heading", { name: "GitHub Seeker" });
    const headingWithText = headings.find(
      (heading) => heading.textContent === "GitHub Seeker"
    );

    expect(headingWithText).toBeInTheDocument();
  });

  it("Renders the Navbar component", () => {
    renderWithProviders(<App />, { store });

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("displays error message when there is an error", async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        user: {
          user: null,
          isLoading: false,
          error: {
            message: "An error occurred!",
            documentation_url: "https://github.com/",
          },
        },
      },
    });
    expect(screen.getByText("An error occurred!")).toBeInTheDocument();
  });
});
