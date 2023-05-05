import { render, screen } from "@testing-library/react";
import About from "../src/components/About";
import { describe, test, vitest, vi, expect } from "vitest";
import { useParams } from 'react-router-dom'


vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("About component", () => {
  test("It should render", () => {
    render(<About />);
  })

 
  test('renders welcome message', () => {
    render(<h1>Welcome to Chord Progress</h1>);
    const welcomeMessage = screen.queryAllByText('Welcome to Chord Progress');
    expect(welcomeMessage).toBeDefined();
  });
});


