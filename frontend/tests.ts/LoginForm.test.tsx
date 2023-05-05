import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "../src/components/LoginForm";
import { describe, test, vitest, vi, expect } from "vitest";
import { useParams } from 'react-router-dom'


vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("LoginForm component", () => {
  test("It should render", () => {
    render(<LoginForm setLoggedIn={() => {}} />);
  })

  test('Button click event', () => {
    const handleClick = vi.fn();

    const button = screen.getByRole('button', { name: /login/i }); 
  
    handleClick();

    fireEvent.click(button); 
  
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });

});