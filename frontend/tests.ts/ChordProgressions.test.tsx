import { render } from "@testing-library/react";
import ChordProgressions from "../src/components/ChordProgressions";
import { describe, test, vitest, vi } from "vitest";
import { useParams } from 'react-router-dom'
import React from "react";


let userMock = {
    _id: Object("6440b579e899d0801403dbb8"),
    "firstName": "user3",
    "lastName": "user3last",
    "email": "user3@gmail.com",
    "password": "user345",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N…jA1fQ.Eek-mSc0Yz41jpKZ8KLkYPDs8GbpkuVlPOD8XzgtUU8",
    "chordProgressions": []
}

vi.mock('react-router-dom')
vi.mocked(useParams).mockReturnValue({ test: "test" })

describe("ChordProgressions component", () => {
  test("It should render", () => {
    render(<ChordProgressions user={userMock} />);
  })
});