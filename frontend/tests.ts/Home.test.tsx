import { render, screen } from "@testing-library/react";
import { describe, test, vitest, vi, expect } from "vitest";
import { useParams } from 'react-router-dom';
import Home from "../src/components/Home";
import React from "react";
import Button from 'react-bootstrap/Button';

vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

  describe("Home component", () => {
    test("It should render", () => {
      render(<Home loggedIn={true} />);


  test('renders a Register button with specific props', () => {
    const handleRegisterClick = vi.fn();
    render(
      <Button
        onClick={handleRegisterClick}
        className="m-2"
        variant="success"
        size="lg"
      >
        Register
      </Button>
    );
    const registerButton = screen.getByRole('button', { name: /Register/i });
    expect(registerButton).toBeDefined()

    })
  })
});

