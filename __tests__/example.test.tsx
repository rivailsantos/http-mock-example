import { render } from "@testing-library/react";

const Home = () => {
  return <div>Testing jest configuration</div>;
};

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
