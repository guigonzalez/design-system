import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox label="Test checkbox" />);
    expect(screen.getByText('Test checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles change event', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} label="Test checkbox" />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies checked state', () => {
    render(<Checkbox defaultChecked label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('applies disabled state', () => {
    render(<Checkbox disabled label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('applies error state', () => {
    render(<Checkbox error label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('applies indeterminate state', () => {
    render(<Checkbox indeterminate label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('applies fullWidth prop', () => {
    render(<Checkbox fullWidth label="Test checkbox" />);
    const label = screen.getByText('Test checkbox');
    expect(label.closest('label')).toHaveStyle('width: 100%');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Checkbox ref={ref} label="Test checkbox" />);
    expect(ref).toHaveBeenCalled();
  });

  it('handles label click', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} label="Test checkbox" />);
    
    const label = screen.getByText('Test checkbox');
    fireEvent.click(label);
    
    expect(handleChange).toHaveBeenCalled();
  });
}); 