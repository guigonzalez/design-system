import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Test Label" placeholder="Test input" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Input helperText="Helper text" placeholder="Test input" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('handles input change', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Test input" />);
    
    const input = screen.getByPlaceholderText('Test input');
    fireEvent.change(input, { target: { value: 'test value' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    render(<Input disabled placeholder="Test input" />);
    const input = screen.getByPlaceholderText('Test input');
    expect(input).toBeDisabled();
  });

  it('applies error state', () => {
    render(<Input error helperText="Error message" placeholder="Test input" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('applies success state', () => {
    render(<Input success helperText="Success message" placeholder="Test input" />);
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('renders with start icon', () => {
    render(<Input startIcon="🔍" placeholder="Test input" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('renders with end icon', () => {
    render(<Input endIcon="✕" placeholder="Test input" />);
    expect(screen.getByText('✕')).toBeInTheDocument();
  });

  it('applies fullWidth prop', () => {
    render(<Input fullWidth placeholder="Test input" />);
    const input = screen.getByPlaceholderText('Test input');
    expect(input).toHaveStyle('width: 100%');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Test input" />);
    expect(ref).toHaveBeenCalled();
  });
}); 