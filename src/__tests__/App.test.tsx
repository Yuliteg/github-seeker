import { screen, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import App from "../App";
import { profileSlice } from "../redux/userProfileSlice";
import { renderWithProviders } from "../redux/test-utils";
import { User } from "../model/profile";

const mockUserData: User = {
  name: "John Doe",
  username: "johndoe",
  avatarUrl: "https://example.com/avatar.jpg",
  bio: "Software Developer",
  company: "TechCo",
  location: "City, Country",
  website: "https://johndoe.com",
  githubLink: "https://github.com/johndoe",
  repo: 10,
  followers: 100,
  following: 50,
};

describe("Testing for App.tsx component", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: profileSlice.reducer,
      },
    });
  });

  describe("UI and Rendering", () => {
    it('Shows "GitHub Seeker" Header', () => {
      renderWithProviders(<App />, { store });

      const headings = screen.getAllByRole("heading", {
        name: "GitHub Seeker",
      });
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
  });

  describe("Redux Interaction", () => {
    const loadingState = {
      user: {
        user: null,
        isLoading: true,
        error: null,
      },
    };

    const userLoadedState = {
      user: {
        user: mockUserData,
        isLoading: false,
        error: null,
      },
    };

    const errorState = {
      user: {
        user: null,
        isLoading: false,
        error: {
          message: "An error occurred!",
          documentation_url: "https://github.com/",
        },
      },
    };

    it("Renders loading state when isLoading is true and user is null", async () => {
      renderWithProviders(<App />, { preloadedState: loadingState });
      await waitFor(() => {
        const loadingElement = screen.getByTestId("loader");
        expect(loadingElement).toBeInTheDocument();
      });
    });

    it("Renders user content when isLoading is false and user exists", async () => {
      renderWithProviders(<App />, { preloadedState: userLoadedState });
      await waitFor(() => {
        const userContentWrapper = screen.getByTestId("user-content-wrapper");
        expect(userContentWrapper).toBeInTheDocument();
      });
    });

    it("Displays error message when there is an error", async () => {
      renderWithProviders(<App />, { preloadedState: errorState });
      expect(screen.getByText("An error occurred!")).toBeInTheDocument();
    });
  });
});
