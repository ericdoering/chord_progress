import { render, screen } from "@testing-library/react";
import { describe, test, vitest, vi, expect, it } from "vitest";
import { useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { ChordProgressionList } from "../src/components/ChordProgressionList";
import React from "react";

vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("ChordProgressionList component", () => {
  test("It should render", () => {
    render(<ChordProgressionList />);
  })

  test('renders a delete button for the chordprogression', () => {
    const deleteChordProgression = vi.fn();
    render(
      <Button size="sm" variant="danger" 
      onClick={() => deleteChordProgression()}
      >x</Button>
    );
    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeDefined()
  });
});

describe("ProgressionList", () => {
  it("renders a list of progression components", () => {

    const listElement = screen.getByRole("list");
    expect(listElement).toBeDefined();
  });
});