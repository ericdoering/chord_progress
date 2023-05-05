import { render } from "@testing-library/react";
import { LoginForm } from "../src/components/LoginForm";
import { describe, test, vitest, vi } from "vitest";
import { useParams } from 'react-router-dom'


vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("LoginForm component", () => {
  test("It should render", () => {
    render(<LoginForm setLoggedIn={() => {}} />);
  })
});