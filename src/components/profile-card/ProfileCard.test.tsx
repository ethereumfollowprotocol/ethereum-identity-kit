import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

describe("ProfileCard", () => {
  test("renders the Profile Card", () => {
    render(<ProfileCard userAddress="0x1234567890123456789012345678901234567890" />);

    expect(screen.getByRole("paragraph").innerHTML).toContain(".eth");
  });
});