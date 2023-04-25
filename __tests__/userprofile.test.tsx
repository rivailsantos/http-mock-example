import MockedUserProfile from "@/app/mocked-user-profile/page";
import { MOCK_API_URL } from "@/src/helper/urlApi";
import { overrideHandler } from "@/src/msw-mocks/server";
import { render, screen } from "@testing-library/react";
import "../src/msw-mocks/setupMsw";

describe("User Profile MSW", () => {
  it("should render profile page properly and show user details", async () => {
    render(<MockedUserProfile />);
    expect(screen.getByText(/MSW Example/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Naomi Ortiz/i)).toBeInTheDocument();
    expect(await screen.findByText(/@Naomi/i)).toBeInTheDocument();
    expect(await screen.findByText(/AU/i)).toBeInTheDocument();
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });

  it("should render profile page with no user loaded", async () => {
    overrideHandler(MOCK_API_URL, 200, []);
    render(<MockedUserProfile />);
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.queryByText(/Naomi Ortiz/i)).not.toBeInTheDocument();
  });

  // it("should throw error when load profile page", async () => {
  //   overrideHandler(MOCK_API_URL, 500, null);
  //   render(<MockedUserProfile />);
  // });
});
