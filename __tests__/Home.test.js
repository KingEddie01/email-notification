import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home Component', () => {
  test('Check if the main element is present', () => {
    render(<Home />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('Check if the logo is present', () => {
    render(<Home />);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('Check if the image with specific alt text is present', () => {
    render(<Home />);
    const mediaImageElement = screen.getByAltText('email-logo');
    expect(mediaImageElement).toBeInTheDocument();
  });

  test('Check if the heading is present', () => {
    render(<Home />);
    const headingElement = screen.getByText('A new sign-in on Windows');
    expect(headingElement).toBeInTheDocument();
  });

  test('Check if the account owner text is present', () => {
    render(<Home />);
    const accountOwnerElement = screen.getByText('Hello Micheal,');
    expect(accountOwnerElement).toBeInTheDocument();
  });

  test('Check if the account text is present', () => {
    render(<Home />);
    const accountTextElement = screen.getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/i);
    expect(accountTextElement).toBeInTheDocument();
  });

  test('Check if the accept button is present', () => {
    render(<Home />);
    const acceptButton = screen.getByText('Accept');
    expect(acceptButton).toBeInTheDocument();
  });

  test('Check if the decline button is present', () => {
    render(<Home />);
    const declineButton = screen.getByText('Decline');
    expect(declineButton).toBeInTheDocument();
  });
});