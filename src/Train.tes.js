import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Counter from './Train';

test('testing counter example', async () => {
  render(<Counter />);
  
  expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /counter example/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add one/i })).toBeInTheDocument();
  
  fireEvent.click(screen.getByRole("button", { name: /add one/i }));
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  
  expect(screen.getByLabelText(/please, insert the last count/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/last count here/i)).toBeInTheDocument();
  
  const insertion = screen.getByPlaceholderText(/last count here/i);
  await userEvent.type(insertion, '12');
  expect(insertion).toHaveValue('12');
  
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText(/submitted value: 12/i)).toBeInTheDocument();
});
