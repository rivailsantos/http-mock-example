/**
 * axios mock adapter test
 */

import MockedUser from "@/app/mocked-user/page";
import { mockGet } from "@/src/helper/axiosMock";
import { MOCK_API_URL } from "@/src/helper/urlApi";
import { userMockData } from "@/src/mock";
import { render, screen } from "@testing-library/react";

describe("User Profile", () => {
  it("should render profile", async () => {
    mockGet(MOCK_API_URL, 200, []);
    render(<MockedUser />);
    expect(screen.getByText(/Axios Mock Adapter Example/i)).toBeInTheDocument();
    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.queryByText(/Marten Faber/i)).not.toBeInTheDocument();
  });

  it("should render profile pager and show user details", async () => {
    mockGet(MOCK_API_URL, 200, userMockData.results[1]);
    render(<MockedUser />);
    expect(screen.getByText(/Axios Mock Adapter Example/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Marten Faber/i)).toBeInTheDocument();
    expect(await screen.findByText(/@Marten/i)).toBeInTheDocument();
    expect(await screen.findByText(/DE/i)).toBeInTheDocument();
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
