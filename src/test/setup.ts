import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock para CSS modules
const mockCssModule = new Proxy({}, {
  get: function() {
    return 'mock-class-name';
  }
});

// Mock para arquivos CSS
vi.mock('*.css', () => mockCssModule);
vi.mock('*.scss', () => mockCssModule);
vi.mock('*.sass', () => mockCssModule);

// Mock para arquivos de imagem
vi.mock('*.png', () => ({ default: 'mock-image.png' }));
vi.mock('*.jpg', () => ({ default: 'mock-image.jpg' }));
vi.mock('*.jpeg', () => ({ default: 'mock-image.jpeg' }));
vi.mock('*.svg', () => ({ default: 'mock-image.svg' }));

// Mock para window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
}); 