import { render } from "@testing-library/react";
import { describe, test, vitest, vi } from "vitest";
import { useParams } from 'react-router-dom';
import { ChordProgressionList } from "../src/components/ChordProgressionList";
import React from "react";

vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("ChordProgressionList component", () => {
  test("It should render", () => {
    render(<ChordProgressionList />);
  })
});