import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", function () {
  test("renders my footer sign", () => {
    render(<Footer />);
    const linkElement = screen.getByText(/omniboyok/i);
    expect(linkElement).toBeInTheDocument();
  });
});
