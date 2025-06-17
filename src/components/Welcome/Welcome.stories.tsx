import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Welcome/Design System',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Design System

Bem-vindo ao nosso Design System! Este é um sistema completo de componentes construído com React, TypeScript e Storybook.

## 🎯 Características

- **React + TypeScript**: Componentes tipados e seguros
- **Design Tokens**: Sistema de tokens centralizado
- **Storybook**: Documentação interativa
- **Testes Automatizados**: Cobertura completa
- **Pronto para NPM**: Configurado para publicação

## 🧩 Componentes Disponíveis

- **Button**: Componente de botão com múltiplas variantes
- Mais componentes em desenvolvimento...

## 🚀 Como Usar

\`\`\`tsx
import { Button } from '@your-org/design-system';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Clique aqui
</Button>
\`\`\`

## 🎨 Design Tokens

Todos os componentes utilizam design tokens centralizados definidos em \`tokens.json\`:

- Cores (primary, secondary, success, warning, error)
- Tipografia (fontFamily, fontSize, fontWeight)
- Espaçamentos (spacing)
- Bordas (borderRadius, borderWidth)
- Sombras (shadows)
- Transições (transitions)

## 📚 Navegação

Use o menu lateral para navegar entre os componentes e suas variantes.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <div style={{
      padding: '3rem',
      fontFamily: 'Inter, system-ui, sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      color: '#1f2937'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Design System
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '3rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Um sistema completo de componentes construído com React, TypeScript e Storybook, 
          utilizando design tokens para consistência visual.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1f2937' }}>
              🧩 Componentes
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Componentes reutilizáveis e bem documentados, prontos para uso em qualquer projeto React.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1f2937' }}>
              🎨 Design Tokens
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Sistema de tokens centralizado para cores, tipografia, espaçamentos e muito mais.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1f2937' }}>
              📚 Documentação
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Documentação interativa com Storybook, incluindo exemplos e guias de uso.
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
            🚀 Comece Agora
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
            Use o menu lateral para explorar os componentes disponíveis e suas variantes.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="?path=/docs/components-button--docs"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}
            >
              Ver Componentes
            </a>
            <a 
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#f3f4f6',
                color: '#374151',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block',
                border: '1px solid #d1d5db'
              }}
            >
              Demo App
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
}; 