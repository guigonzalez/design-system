import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('design-system-button--primary');
    expect(button).toHaveClass('design-system-button--md');
  });

  it('renders with custom variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('design-system-button--secondary');
  });

  it('renders with custom size', () => {
    render(<Button size="lg">Large Button</Button>);
    
    const button = screen.getByRole('button', { name: /large button/i });
    expect(button).toHaveClass('design-system-button--lg');
  });

  it('renders disabled state', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('design-system-button--disabled');
  });

  it('renders loading state', () => {
    render(<Button loading>Loading Button</Button>);
    
    const button = screen.getByRole('button', { name: /loading button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('design-system-button--loading');
    
    const spinner = screen.getByRole('button').querySelector('.design-system-button__spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('renders full width', () => {
    render(<Button fullWidth>Full Width Button</Button>);
    
    const button = screen.getByRole('button', { name: /full width button/i });
    expect(button).toHaveClass('design-system-button--full-width');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    
    const button = screen.getByRole('button', { name: /clickable button/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
    
    const button = screen.getByRole('button', { name: /disabled button/i });
    fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', () => {
    const handleClick = vi.fn();
    render(<Button loading onClick={handleClick}>Loading Button</Button>);
    
    const button = screen.getByRole('button', { name: /loading button/i });
    fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    
    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('custom-class');
  });

  it('renders with correct type attribute', () => {
    render(<Button type="submit">Submit Button</Button>);
    
    const button = screen.getByRole('button', { name: /submit button/i });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders children correctly', () => {
    render(
      <Button>
        <span>Icon</span>
        Text Content
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Icon');
    expect(button).toHaveTextContent('Text Content');
  });

  it('applies correct styles', () => {
    render(<Button variant="primary" size="md">Test Button</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: expect.any(String),
      borderRadius: expect.any(String),
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes when disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button', { name: /disabled button/i });
      expect(button).toHaveAttribute('disabled');
    });

    it('has correct ARIA attributes when loading', () => {
      render(<Button loading>Loading Button</Button>);
      
      const button = screen.getByRole('button', { name: /loading button/i });
      expect(button).toHaveAttribute('disabled');
    });

    it('can be focused with keyboard', () => {
      render(<Button>Focusable Button</Button>);
      
      const button = screen.getByRole('button', { name: /focusable button/i });
      button.focus();
      
      expect(button).toHaveFocus();
    });
  });

  describe('Different variants', () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'error', 'ghost'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Button variant={variant as any}>{variant} Button</Button>);
        
        const button = screen.getByRole('button', { name: new RegExp(`${variant} button`, 'i') });
        expect(button).toHaveClass(`design-system-button--${variant}`);
      });
    });
  });

  describe('Different sizes', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Button size={size as any}>{size} Button</Button>);
        
        const button = screen.getByRole('button', { name: new RegExp(`${size} button`, 'i') });
        expect(button).toHaveClass(`design-system-button--${size}`);
      });
    });
  });
}); 