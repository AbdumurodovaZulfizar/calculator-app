import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ButtonPanel from "../../components/ButtonPanel";

test('creates buttonPanel', () => {
  render(<ButtonPanel />);
  const Panel = screen.getByTestId('panel');
  expect(Panel).toHaveTextContent('%');
});
