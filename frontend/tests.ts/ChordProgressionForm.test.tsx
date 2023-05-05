import { render } from "@testing-library/react";
import { ChordProgressionForm } from "../src/components/ChordProgressionForm";
import { describe, test, vitest, vi } from "vitest";
import { useParams } from 'react-router-dom'
import React from "react";


vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("ChordProgressionForm component", () => {
  test("It should render", () => {
    render(<ChordProgressionForm />);
  })
});