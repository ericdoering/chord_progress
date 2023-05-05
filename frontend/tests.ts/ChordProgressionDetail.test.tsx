import { render, screen } from "@testing-library/react";
import { describe, test, vitest, vi, expect } from "vitest";
import { useParams } from 'react-router-dom';
import { ChordProgressionDetail} from "../src/components/ChordProgressionDetail";
import React from "react";

vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("ChordProgressionDetail component", () => {
  test("It should render", () => {
    render(<ChordProgressionDetail />);
  })
});