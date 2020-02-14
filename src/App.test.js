import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
//arrange, act, assert

test("simple test for text", () => {
 const { getByText } = render(<App />);

 const fName = getByText(/first name/i);

 expect(fName).toBeInTheDocument();
});
