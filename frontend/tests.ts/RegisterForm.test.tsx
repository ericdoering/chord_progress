import { fireEvent, render, screen } from "@testing-library/react";
import { RegisterForm } from "../src/components/RegisterForm";
import { describe, test, vitest, vi, expect } from "vitest";
import { useParams } from 'react-router-dom'
import React from "react";


vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("RegisterForm component", () => {
  test("It should render", () => {
    render(<RegisterForm setLoggedIn={() => {}} />);
  })

  test('Button click event', () => {
    const handleClick = vi.fn();
    const button = screen.getByRole('button', { name: /register/i }); 
  
    handleClick();
    fireEvent.click(button); 
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });
});