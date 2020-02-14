import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

// test('inputs are rendered-firstname, last, email, and message ', () => {
//     const {getByLabelText} =render(<ContactForm/>);
//     getByLabelText(/first/i);
//     getByLabelText(/last/i);
//     getByLabelText(/email/i);
//     getByLabelText(/message/i);

// })

// test('submit adds inputs to list that in a real scenerio would go to a backend endpoint', () => {
//     const {getByLabelText} = render(<ContactForm/>)

//     const fnameInput = getByLabelText(/first name/i);
//     const lnameInput =  getByLabelText(/last name/i);
//     const emailInput = getByLabelText(/email/i);
//     const messInput = getByLabelText(/message/i);

//     fireEvent

// })

test("email type", () => {
    const { getByText } = render(<ContactForm/>);
   
    const etype = getByText(/type= 'email'/i);
   
    expect(etype).toBeInTheDocument();
   });