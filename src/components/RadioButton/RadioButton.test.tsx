import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    render(<RadioButton label="Test radio" />);
    expect(screen.getByText('Test radio')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<RadioButton />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('handles change event', () => {
    const handleChange = vi.fn();
    render(<RadioButton onChange={handleChange} label="Test radio" />);
    
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies checked state', () => {
    render(<RadioButton defaultChecked label="Test radio" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('applies disabled state', () => {
    render(<RadioButton disabled label="Test radio" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('applies error state', () => {
    render(<RadioButton error label="Test radio" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('applies fullWidth prop', () => {
    render(<RadioButton fullWidth label="Test radio" />);
    const label = screen.getByText('Test radio');
    expect(label.closest('label')).toHaveStyle('width: 100%');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<RadioButton ref={ref} label="Test radio" />);
    expect(ref).toHaveBeenCalled();
  });

  it('handles label click', () => {
    const handleChange = vi.fn();
    render(<RadioButton onChange={handleChange} label="Test radio" />);
    
    const label = screen.getByText('Test radio');
    fireEvent.click(label);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('works in a radio group', () => {
    const handleChange = vi.fn();
    render(
      <div>
        <RadioButton name="group" value="1" onChange={handleChange} label="Option 1" />
        <RadioButton name="group" value="2" onChange={handleChange} label="Option 2" />
      </div>
    );
    
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);
    
    fireEvent.click(radios[0]);
    expect(handleChange).toHaveBeenCalled();
  });
}); 