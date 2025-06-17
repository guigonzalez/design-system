import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um componente de radio button customizável com diferentes tamanhos, estados e suporte a descrições.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do radio button',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Estado de erro',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado desabilitado',
    },
    label: {
      control: { type: 'text' },
      description: 'Label do radio button',
    },
    description: {
      control: { type: 'text' },
      description: 'Descrição do radio button',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Ocupar toda a largura disponível',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Opção padrão',
  },
};

export const Checked: Story = {
  args: {
    label: 'Opção selecionada',
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Plano Premium',
    description: 'R$ 29,90/mês - Acesso completo a todos os recursos',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Opção pequena',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Opção grande',
  },
};

export const Error: Story = {
  args: {
    label: 'Opção com erro',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Opção desabilitada',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Opção desabilitada e selecionada',
    disabled: true,
    defaultChecked: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Opção de largura completa',
    description: 'Esta opção ocupa toda a largura disponível',
    fullWidth: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioButton size="small" label="Opção pequena" />
      <RadioButton size="medium" label="Opção média" />
      <RadioButton size="large" label="Opção grande" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioButton label="Normal" />
      <RadioButton label="Selecionado" defaultChecked />
      <RadioButton label="Erro" error />
      <RadioButton label="Desabilitado" disabled />
      <RadioButton label="Desabilitado e selecionado" disabled defaultChecked />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioButton
          label="Opção 1"
          name="group1"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={() => setSelectedOption('option1')}
        />
        <RadioButton
          label="Opção 2"
          name="group1"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={() => setSelectedOption('option2')}
        />
        <RadioButton
          label="Opção 3"
          name="group1"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={() => setSelectedOption('option3')}
        />
      </div>
    );
  },
};

export const PlanSelection: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = React.useState('basic');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Escolha seu plano</h3>
        
        <RadioButton
          label="Plano Básico"
          description="R$ 9,90/mês - Recursos essenciais"
          name="plan"
          value="basic"
          checked={selectedPlan === 'basic'}
          onChange={() => setSelectedPlan('basic')}
        />
        
        <RadioButton
          label="Plano Pro"
          description="R$ 19,90/mês - Recursos avançados + suporte"
          name="plan"
          value="pro"
          checked={selectedPlan === 'pro'}
          onChange={() => setSelectedPlan('pro')}
        />
        
        <RadioButton
          label="Plano Enterprise"
          description="R$ 49,90/mês - Recursos completos + suporte prioritário"
          name="plan"
          value="enterprise"
          checked={selectedPlan === 'enterprise'}
          onChange={() => setSelectedPlan('enterprise')}
        />
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <strong>Plano selecionado:</strong> {selectedPlan}
        </div>
      </div>
    );
  },
};

export const PaymentMethod: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = React.useState('credit');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Método de pagamento</h3>
        
        <RadioButton
          label="Cartão de crédito"
          description="Visa, Mastercard, American Express"
          name="payment"
          value="credit"
          checked={paymentMethod === 'credit'}
          onChange={() => setPaymentMethod('credit')}
        />
        
        <RadioButton
          label="PIX"
          description="Pagamento instantâneo"
          name="payment"
          value="pix"
          checked={paymentMethod === 'pix'}
          onChange={() => setPaymentMethod('pix')}
        />
        
        <RadioButton
          label="Boleto bancário"
          description="Prazo de 3 dias úteis"
          name="payment"
          value="boleto"
          checked={paymentMethod === 'boleto'}
          onChange={() => setPaymentMethod('boleto')}
        />
        
        <RadioButton
          label="PayPal"
          description="Pagamento seguro via PayPal"
          name="payment"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={() => setPaymentMethod('paypal')}
        />
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      gender: '',
      experience: '',
      notifications: '',
    });

    const [errors, setErrors] = React.useState({
      gender: '',
      experience: '',
      notifications: '',
    });

    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      
      // Clear error when user selects an option
      if (errors[field as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const validateForm = () => {
      const newErrors = {
        gender: '',
        experience: '',
        notifications: '',
      };

      if (!formData.gender) newErrors.gender = 'Selecione um gênero';
      if (!formData.experience) newErrors.experience = 'Selecione seu nível de experiência';
      if (!formData.notifications) newErrors.notifications = 'Selecione uma opção de notificação';

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
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Formulário de Perfil</h3>
        
        <div>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 500 }}>Gênero</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RadioButton
              label="Masculino"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={() => handleChange('gender', 'male')}
              error={!!errors.gender}
            />
            <RadioButton
              label="Feminino"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={() => handleChange('gender', 'female')}
              error={!!errors.gender}
            />
            <RadioButton
              label="Outro"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={() => handleChange('gender', 'other')}
              error={!!errors.gender}
            />
          </div>
          {errors.gender && (
            <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>
              {errors.gender}
            </div>
          )}
        </div>

        <div>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 500 }}>Nível de experiência</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RadioButton
              label="Iniciante"
              description="Menos de 1 ano de experiência"
              name="experience"
              value="beginner"
              checked={formData.experience === 'beginner'}
              onChange={() => handleChange('experience', 'beginner')}
              error={!!errors.experience}
            />
            <RadioButton
              label="Intermediário"
              description="1-3 anos de experiência"
              name="experience"
              value="intermediate"
              checked={formData.experience === 'intermediate'}
              onChange={() => handleChange('experience', 'intermediate')}
              error={!!errors.experience}
            />
            <RadioButton
              label="Avançado"
              description="Mais de 3 anos de experiência"
              name="experience"
              value="advanced"
              checked={formData.experience === 'advanced'}
              onChange={() => handleChange('experience', 'advanced')}
              error={!!errors.experience}
            />
          </div>
          {errors.experience && (
            <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>
              {errors.experience}
            </div>
          )}
        </div>

        <div>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 500 }}>Notificações</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RadioButton
              label="Todas as notificações"
              description="Receba todas as atualizações"
              name="notifications"
              value="all"
              checked={formData.notifications === 'all'}
              onChange={() => handleChange('notifications', 'all')}
              error={!!errors.notifications}
            />
            <RadioButton
              label="Apenas importantes"
              description="Receba apenas notificações importantes"
              name="notifications"
              value="important"
              checked={formData.notifications === 'important'}
              onChange={() => handleChange('notifications', 'important')}
              error={!!errors.notifications}
            />
            <RadioButton
              label="Nenhuma notificação"
              description="Não receba notificações"
              name="notifications"
              value="none"
              checked={formData.notifications === 'none'}
              onChange={() => handleChange('notifications', 'none')}
              error={!!errors.notifications}
            />
          </div>
          {errors.notifications && (
            <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>
              {errors.notifications}
            </div>
          )}
        </div>
        
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
          Enviar
        </button>
      </form>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');
    const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
    const [error, setError] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Controles</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <select value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            
            <label>
              <input
                type="checkbox"
                checked={error}
                onChange={(e) => setError(e.target.checked)}
              />
              Error
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <RadioButton
            label="Opção 1"
            description="Primeira opção do grupo"
            name="interactive"
            value="option1"
            checked={selectedValue === 'option1'}
            onChange={() => setSelectedValue('option1')}
            size={size}
            error={error}
            disabled={disabled}
          />
          
          <RadioButton
            label="Opção 2"
            description="Segunda opção do grupo"
            name="interactive"
            value="option2"
            checked={selectedValue === 'option2'}
            onChange={() => setSelectedValue('option2')}
            size={size}
            error={error}
            disabled={disabled}
          />
          
          <RadioButton
            label="Opção 3"
            description="Terceira opção do grupo"
            name="interactive"
            value="option3"
            checked={selectedValue === 'option3'}
            onChange={() => setSelectedValue('option3')}
            size={size}
            error={error}
            disabled={disabled}
          />
        </div>

        <div style={{ 
          padding: '12px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <strong>Opção selecionada:</strong> {selectedValue}
        </div>
      </div>
    );
  },
}; 