import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Calculator from "./calculator";

describe("Buttons", () => {
  test('"The number 1 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const oneButton = screen.getByRole("button", { name: /1/i });
    userEvent.click(oneButton);
    expect(screen.getAllByText(/1/i)[1]).toBeInTheDocument();
  });

  test('"The number 2 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const twoButton = screen.getByRole("button", { name: /2/i });
    userEvent.click(twoButton);
    expect(screen.getAllByText(/2/i)[1]).toBeInTheDocument();
  });

  test('"The number 3 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const threeButton = screen.getByRole("button", { name: /3/i });
    userEvent.click(threeButton);
    expect(screen.getAllByText(/3/i)[1]).toBeInTheDocument();
  });

  test('"The number 4 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const fourButton = screen.getByRole("button", { name: /4/i });
    userEvent.click(fourButton);
    expect(screen.getAllByText(/4/i)[1]).toBeInTheDocument();
  });

  test('"The number 5 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const fiveButton = screen.getByRole("button", { name: /5/i });
    userEvent.click(fiveButton);
    expect(screen.getAllByText(/5/i)[1]).toBeInTheDocument();
  });

  test('"The number 6 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const sixButton = screen.getByRole("button", { name: /6/i });
    userEvent.click(sixButton);
    expect(screen.getAllByText(/6/i)[1]).toBeInTheDocument();
  });

  test('"The number 7 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const sevenButton = screen.getByRole("button", { name: /7/i });
    userEvent.click(sevenButton);
    expect(screen.getAllByText(/7/i)[1]).toBeInTheDocument();
  });

  test('"The number 8 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const eightButton = screen.getByRole("button", { name: /8/i });
    userEvent.click(eightButton);
    expect(screen.getAllByText(/8/i)[1]).toBeInTheDocument();
  });

  test('"The number 9 button correctly displays the number on the screen', () => {
    render(<Calculator />);
    const nineButton = screen.getByRole("button", { name: /9/i });
    userEvent.click(nineButton);
    expect(screen.getAllByText(/9/i)[1]).toBeInTheDocument();
  });

  test('"The + button correctly displays the plus on the screen', () => {
    render(<Calculator />);
    const plusButton = screen.getByRole("button", { name: "+" });
    userEvent.click(plusButton);
    expect(screen.getAllByText("+")[1]).toBeInTheDocument();
  });

  test('"The - button correctly displays the minus on the screen', () => {
    render(<Calculator />);
    const minusButton = screen.getByRole("button", { name: /-/i });
    userEvent.click(minusButton);
    expect(screen.getAllByText(/-/i)[1]).toBeInTheDocument();
  });

  test('"The . button correctly displays the point on the screen', () => {
    render(<Calculator />);
    const pointButton = screen.getByRole("button", { name: "." });
    userEvent.click(pointButton);
    expect(screen.getAllByText(".")[1]).toBeInTheDocument();
  });
});

describe("Testing of calculation", () => {
  test("The correct amount is obtained by adding two numbers", () => {
    render(<Calculator />);
    const eightButton = screen.getByRole("button", { name: /8/i });
    const plusButton = screen.getByRole("button", { name: "+" });
    const nineButton = screen.getByRole("button", { name: /9/i });
    const equalButton = screen.getByRole("button", { name: /=/i });

    userEvent.click(eightButton);
    userEvent.click(plusButton);
    userEvent.click(nineButton);
    userEvent.click(equalButton);

    expect(screen.getByText(/17/i)).toBeInTheDocument();
  });

  test("The correct amount is obtained by subtracting a number from a number", () => {
    render(<Calculator />);
    const eightButton = screen.getByRole("button", { name: /8/i });
    const pointButton = screen.getByRole("button", { name: "." });
    const minusButton = screen.getByRole("button", { name: /-/i });
    const nineButton = screen.getByRole("button", { name: /9/i });
    const equalButton = screen.getByRole("button", { name: /=/i });

    userEvent.click(eightButton);
    userEvent.click(eightButton);
    userEvent.click(pointButton);
    userEvent.click(eightButton);
    userEvent.click(minusButton);
    userEvent.click(nineButton);
    userEvent.click(equalButton);

    expect(screen.getByText(/79.8/i)).toBeInTheDocument();
  });

  test("The correct amount is obtained by multiplying by two numbers", () => {
    render(<Calculator />);
    const eightButton = screen.getByRole("button", { name: /8/i });
    const dualButton = screen.getByRole("button", { name: /✕/i });
    const nineButton = screen.getByRole("button", { name: /9/i });
    const equalButton = screen.getByRole("button", { name: /=/i });

    userEvent.click(eightButton);
    userEvent.click(dualButton);
    userEvent.click(nineButton);
    userEvent.click(equalButton);

    expect(screen.getByText(/72/i)).toBeInTheDocument();
  });

  test("The correct amount is obtained by dividing the number by the number", () => {
    render(<Calculator />);
    const eightButton = screen.getByRole("button", { name: /8/i });
    const divisionButton = screen.getByRole("button", { name: "/" });
    const nineButton = screen.getByRole("button", { name: /9/i });
    const equalButton = screen.getByRole("button", { name: /=/i });

    userEvent.click(eightButton);
    userEvent.click(divisionButton);
    userEvent.click(nineButton);
    userEvent.click(equalButton);

    expect(screen.getByText(/0.888/i)).toBeInTheDocument();
  });

  test("The CLEAR button work", () => {
    render(<Calculator />);
    const eightButton = screen.getByRole("button", { name: /8/i });
    const divisionButton = screen.getByRole("button", { name: "/" });
    const nineButton = screen.getByRole("button", { name: /9/i });
    const equalButton = screen.getByRole("button", { name: /=/i });
    const clearButton = screen.getByRole("button", { name: /clear/i });

    userEvent.click(eightButton);
    userEvent.click(divisionButton);
    userEvent.click(nineButton);
    userEvent.click(equalButton);
    userEvent.click(clearButton);

    expect(screen.getAllByText(/0/i)[1]).toBeInTheDocument();
  });

  test("When another exercise begins, the calculation starts from the previous result.", () => {
    render(<Calculator />);
    const eightButton = screen.getByRole("button", { name: /8/i });
    const divisionButton = screen.getByRole("button", { name: "/" });
    const nineButton = screen.getByRole("button", { name: /9/i });
    const equalButton = screen.getByRole("button", { name: /=/i });
    const plusButton = screen.getByRole("button", { name: "+" });
    const threeButton = screen.getByRole("button", { name: /3/i });

    userEvent.click(eightButton);
    userEvent.click(divisionButton);
    userEvent.click(nineButton);
    userEvent.click(equalButton);
    userEvent.click(plusButton);
    userEvent.click(threeButton);
    userEvent.click(equalButton);

    expect(screen.getByText(/3.888/i)).toBeInTheDocument();
  });
});
