import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDo from "./index";

describe("ToDo Testləri", () => {
  let button, input;

  beforeEach(() => {
    render(<ToDo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayilan olarak verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/item/i);

    expect(items.length).toEqual(3);
  });

  test("Input ve Button dokumanda bulunmal", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Inputa String girilib butona basilinca listeye eklenmeli", () => {
    //inputu doldur
    const name = "Nicat";
    userEvent.type(input, name);

    //butona clickle
    userEvent.click(button);

    // assertion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
