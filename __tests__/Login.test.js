import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '../notifications/page';

describe('Login Component', () => {
  test('Check if the main element is present', () => {
    render(<Login />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('Check if the logo is present', () => {
    render(<Login />);
    const loginLogoElement = screen.getByAltText('logo'); // Ensure 'logo' matches the alt text in your component
    expect(loginLogoElement).toBeInTheDocument();
  });

  test('Check if the true image is present', () => {
    render(<Login />);
    const trueImageElement = screen.getByAltText("checkmark icon"); // Adjust 'true' to match the alt text for the true image
    expect(trueImageElement).toBeInTheDocument();
  });

  test('Check if the false image is present', () => {
    render(<Login />);
    const falseImageElement = screen.getByAltText("warning icon"); // Adjust 'false' to match the alt text for the false image
    expect(falseImageElement).toBeInTheDocument();
  });

  test('Check if the heading is present', () => {
    render(<Login />);
    const headingElement = screen.getByText('A new sign-in on Windows');
    expect(headingElement).toBeInTheDocument();
  });

  test('Check if the account user text is present', () => {
    render(<Login />);
    const accountUserElement = screen.getByText('Hello Micheal,');
    expect(accountUserElement).toBeInTheDocument();
  });

  test('Check if the message text is present', () => {
    render(<Login />);
    const messageElement = screen.getByText(/We noticed a new sign-in to your Karrabo Account on a Windows device/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('Check if the activity recognition text is present', () => {
    render(<Login />);
    const activityTextElement = screen.getByText('Do you recognize this activity?');
    expect(activityTextElement).toBeInTheDocument();
  });

  test('Check if the "Yes, it was me" button is present', () => {
    render(<Login />);
    const trueUserButton = screen.getByText('Yes, it was me'); // Adjusted text to match what's in your component
    expect(trueUserButton).toBeInTheDocument();
  });
});
