import { render } from "@testing-library/react";
import { RegisterForm } from "../src/components/RegisterForm";
import { describe, test, vitest, vi } from "vitest";
import { useParams } from 'react-router-dom'
import React from "react";


vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("RegisterForm component", () => {
  test("It should render", () => {
    render(<RegisterForm setLoggedIn={() => {}} />);
  })
});