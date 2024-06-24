import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders hello world message', async () => {
  axios.get.mockResolvedValue({ data: { message: 'Hello World!' } });

  render(<App />);
  const messageElement = await screen.findByText(/Hello World!/i);
  expect(messageElement).toBeInTheDocument();
});

test('changes name when button is clicked', async () => {
  axios.get.mockResolvedValueOnce({ data: { message: 'Hello World!' } });
  axios.post.mockResolvedValueOnce({ data: { success: true, message: 'Name updated successfully!' } });
  axios.get.mockResolvedValueOnce({ data: { message: 'Hello Alice!' } });

  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/Enter a new name/i), { target: { value: 'Alice' } });
  fireEvent.click(screen.getByText(/Change Name/i));

  const updatedMessageElement = await screen.findByText(/Hello Alice!/i);
  expect(updatedMessageElement).toBeInTheDocument();
});
