import type { Preview } from '@storybook/react-vite'
import tokens from '../src/tokens.json'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      theme: {
        brandTitle: 'Design System',
        brandUrl: 'https://github.com/guigonzalez/design-system',
        brandImage: null,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: tokens.colors.neutral.white,
        },
        {
          name: 'dark',
          value: tokens.colors.secondary[900],
        },
        {
          name: 'primary',
          value: tokens.colors.primary[50],
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

// .storybook/preview.js ou preview.ts
export const parameters = {
  options: {
    storySort: {
      order: [
        'Welcome', // ou 'Welcome' se preferir
        'Design Tokens',
        'Components'
      ],
    },
  },
};