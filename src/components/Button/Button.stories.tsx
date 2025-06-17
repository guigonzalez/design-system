import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component

O componente Button é um elemento de interface fundamental que permite aos usuários executar ações.

## Uso

\`\`\`tsx
import { Button } from './Button';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Clique aqui
</Button>
\`\`\`

## Variantes

- **Primary**: Botão principal para ações importantes
- **Secondary**: Botão secundário para ações menos críticas
- **Success**: Para ações positivas ou de confirmação
- **Warning**: Para ações que requerem atenção
- **Error**: Para ações destrutivas ou de erro
- **Ghost**: Botão transparente para ações sutis

## Tamanhos

- **sm**: Pequeno (32px de altura)
- **md**: Médio (40px de altura) - padrão
- **lg**: Grande (48px de altura)

## Estados

- **Default**: Estado normal
- **Hover**: Ao passar o mouse
- **Active**: Ao clicar
- **Disabled**: Desabilitado
- **Loading**: Carregando com spinner
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'ghost'],
      description: 'Variante visual do botão',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o botão',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Mostra estado de carregamento',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Botão ocupa toda a largura disponível',
    },
    onClick: {
      action: 'clicked',
      description: 'Função chamada ao clicar no botão',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

// Todas as variantes
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

// Todos os tamanhos
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Estados
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

// Full width
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
  ),
};

// Com ícone
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button>
        <span style={{ marginRight: '0.5rem' }}>→</span>
        Next
      </Button>
      <Button variant="secondary">
        <span style={{ marginRight: '0.5rem' }}>←</span>
        Previous
      </Button>
      <Button variant="success">
        <span style={{ marginRight: '0.5rem' }}>✓</span>
        Save
      </Button>
    </div>
  ),
};

// Interativo
export const Interactive: Story = {
  args: {
    children: 'Click me!',
    variant: 'primary',
  },
};

// Exemplo de uso em formulário
export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" type="button">
        Cancel
      </Button>
      <Button variant="ghost" type="button">
        Reset
      </Button>
    </div>
  ),
}; 