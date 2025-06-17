import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um componente de input customizável com diferentes variantes, tamanhos, estados e suporte a ícones.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
      description: 'Variante visual do input',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do input',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Estado de erro',
    },
    success: {
      control: { type: 'boolean' },
      description: 'Estado de sucesso',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado desabilitado',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Ocupar toda a largura disponível',
    },
    label: {
      control: { type: 'text' },
      description: 'Label do input',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto de ajuda',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Campo obrigatório',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do input',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    helperText: 'A senha deve ter pelo menos 8 caracteres',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    error: true,
    helperText: 'Email inválido',
  },
};

export const Success: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    success: true,
    helperText: 'Email válido!',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Não é possível editar',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Input pequeno',
    placeholder: 'Digite algo...',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Input grande',
    placeholder: 'Digite algo...',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Input outlined',
    placeholder: 'Digite algo...',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Input filled',
    placeholder: 'Digite algo...',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Input de largura completa',
    placeholder: 'Digite algo...',
    fullWidth: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input variant="default" label="Default" placeholder="Digite algo..." />
      <Input variant="outlined" label="Outlined" placeholder="Digite algo..." />
      <Input variant="filled" label="Filled" placeholder="Digite algo..." />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="small" label="Small" placeholder="Digite algo..." />
      <Input size="medium" label="Medium" placeholder="Digite algo..." />
      <Input size="large" label="Large" placeholder="Digite algo..." />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Normal" placeholder="Digite algo..." />
      <Input label="Erro" placeholder="Digite algo..." error helperText="Campo obrigatório" />
      <Input label="Sucesso" placeholder="Digite algo..." success helperText="Campo válido!" />
      <Input label="Desabilitado" placeholder="Digite algo..." disabled />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input
        label="Email"
        placeholder="Digite seu email"
        startIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      
      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        startIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="16" r="1" fill="currentColor"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        }
        endIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        }
      />
      
      <Input
        label="Buscar"
        placeholder="Digite para buscar..."
        startIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
          </svg>
        }
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const [errors, setErrors] = React.useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      
      // Clear error when user starts typing
      if (errors[field as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const validateForm = () => {
      const newErrors = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };

      if (!formData.name) newErrors.name = 'Nome é obrigatório';
      if (!formData.email) newErrors.email = 'Email é obrigatório';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
      
      if (!formData.password) newErrors.password = 'Senha é obrigatória';
      else if (formData.password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Senhas não coincidem';
      }

      setErrors(newErrors);
      return Object.values(newErrors).every(error => !error);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Formulário enviado com sucesso!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Formulário de Cadastro</h3>
        
        <Input
          label="Nome completo"
          placeholder="Digite seu nome completo"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          required
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          required
        />
        
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          required
        />
        
        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          required
        />
        
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          Cadastrar
        </button>
      </form>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [variant, setVariant] = React.useState<'default' | 'outlined' | 'filled'>('default');
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Controles</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <select value={variant} onChange={(e) => setVariant(e.target.value as any)}>
              <option value="default">Default</option>
              <option value="outlined">Outlined</option>
              <option value="filled">Filled</option>
            </select>
            
            <select value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            
            <label>
              <input
                type="checkbox"
                checked={error}
                onChange={(e) => {
                  setError(e.target.checked);
                  if (e.target.checked) setSuccess(false);
                }}
              />
              Error
            </label>
            
            <label>
              <input
                type="checkbox"
                checked={success}
                onChange={(e) => {
                  setSuccess(e.target.checked);
                  if (e.target.checked) setError(false);
                }}
              />
              Success
            </label>
            
            <label>
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />
              Disabled
            </label>
          </div>
        </div>

        <Input
          label="Input interativo"
          placeholder="Digite algo para testar..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          size={size}
          error={error}
          success={success}
          disabled={disabled}
          helperText={
            error ? 'Este é um erro' :
            success ? 'Este é um sucesso' :
            value ? `Você digitou: "${value}"` :
            'Digite algo para ver a mudança'
          }
        />

        <div style={{ 
          padding: '12px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <strong>Valor atual:</strong> {value || '(vazio)'}
        </div>
      </div>
    );
  },
}; 