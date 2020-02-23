import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
//arrange, act, assert

test("renders App without crashing", () => {
  render(<App />);
});


test("simple test for text", () => {
  const { getByText } = render(<App />);
 
  const fName = getByText(/first name/i);
 
  expect(fName).toBeInTheDocument();
  expect(fName).toBeTruthy()
 });
 
//  test("email type", () => {
//   const { getByDisplayValue } = render(<App/>);
 
//   const etype = getByDisplayValue(email);
 
//   expect(etype).toHaveFormValue();
//  });

// test('inputs are rendered-firstname, last, email, and message ', () => {
//     const {getByLabelText} =render(<App/>);
//     getByLabelText(/first name/i);
//     getByLabelText(/last name/i);
//     getByLabelText(/email/i);
//     getByLabelText(/message/i);
// })