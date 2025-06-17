import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async (config) => {
    // Configuração do Vite para o Storybook
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': '/src',
      };
    }
    
    return config;
  },
};

export default config;