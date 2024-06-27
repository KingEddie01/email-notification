import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '../notifications/page';

describe('Login Component', () => {
  test('test if the main element is present', () => {
    render(<Login />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  
  test('test if the logo is present', () => {
    render(<Login />);
    const loginLogoElement = screen.getByAltText('logo');
    expect(loginLogoElement).toBeInTheDocument();
  });

  
  test('Check if the image with specific alt text is present', () => {
    render(<Login />);
    const mediaImageElement = screen.getByAltText('true');
    expect(mediaImageElement).toBeInTheDocument();
  });

  
  test('Check if the image with specific alt text is present', () => {
    render(<Login />);
    const mediaImageElement1 = screen.getByAltText('false');
    expect(mediaImageElement1).toBeInTheDocument();
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

  
  test(' Check if the activity recognition text is present', () => {
    render(<Login />);
    const activityTextElement = screen.getByText('Do you recognize this activity?');
    expect(activityTextElement).toBeInTheDocument();
  });

  
  test('Check if the "Yes, it was me" button is present', () => {
    render(<Login />);
    const trueUserButton = screen.getByText('Yes,it was me');
    expect(trueUserButton).toBeInTheDocument();
  });

  
  test('Check if the "No, secure account" button is present', () => {
    render(<Login />);
    const falseUserButton = screen.getByText('No, secure account');
    expect(falseUserButton).toBeInTheDocument();
  });
});
