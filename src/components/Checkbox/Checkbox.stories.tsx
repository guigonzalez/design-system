import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um componente de checkbox customizável com diferentes tamanhos, estados e funcionalidade de estado indeterminado.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do checkbox',
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
      description: 'Label do checkbox',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Estado indeterminado',
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
    label: 'Aceito os termos e condições',
  },
};

export const Checked: Story = {
  args: {
    label: 'Aceito os termos e condições',
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Checkbox pequeno',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Checkbox grande',
  },
};

export const Error: Story = {
  args: {
    label: 'Aceito os termos e condições',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Campo desabilitado e marcado',
    disabled: true,
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Selecionar todos',
    indeterminate: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Checkbox de largura completa',
    fullWidth: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="small" label="Checkbox pequeno" />
      <Checkbox size="medium" label="Checkbox médio" />
      <Checkbox size="large" label="Checkbox grande" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Normal" />
      <Checkbox label="Marcado" defaultChecked />
      <Checkbox label="Erro" error />
      <Checkbox label="Desabilitado" disabled />
      <Checkbox label="Desabilitado e marcado" disabled defaultChecked />
      <Checkbox label="Indeterminado" indeterminate />
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Aceito receber emails promocionais" />
      <Checkbox label="Aceito receber SMS" />
      <Checkbox label="Aceito receber notificações push" />
      <Checkbox label="Aceito compartilhar dados com parceiros" />
    </div>
  ),
};

export const WithIndeterminateParent: Story = {
  render: () => {
    const [parentChecked, setParentChecked] = React.useState(false);
    const [childChecked, setChildChecked] = React.useState(false);
    const [child2Checked, setChild2Checked] = React.useState(false);

    const parentIndeterminate = !parentChecked && (childChecked || child2Checked);
    const parentCheckedState = parentChecked || (childChecked && child2Checked);

    const handleParentChange = () => {
      const newState = !parentCheckedState;
      setParentChecked(newState);
      setChildChecked(newState);
      setChild2Checked(newState);
    };

    const handleChildChange = () => {
      setChildChecked(!childChecked);
    };

    const handleChild2Change = () => {
      setChild2Checked(!child2Checked);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox
          label="Selecionar todos"
          checked={parentCheckedState}
          indeterminate={parentIndeterminate}
          onChange={handleParentChange}
        />
        <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox
            label="Opção 1"
            checked={childChecked}
            onChange={handleChildChange}
          />
          <Checkbox
            label="Opção 2"
            checked={child2Checked}
            onChange={handleChild2Change}
          />
        </div>
      </div>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [checkboxes, setCheckboxes] = React.useState({
      terms: false,
      newsletter: false,
      marketing: false,
      analytics: false,
    });

    const handleChange = (key: string) => {
      setCheckboxes(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    const allChecked = Object.values(checkboxes).every(Boolean);
    const someChecked = Object.values(checkboxes).some(Boolean);
    const parentIndeterminate = someChecked && !allChecked;

    const handleSelectAll = () => {
      const newState = !allChecked;
      setCheckboxes({
        terms: newState,
        newsletter: newState,
        marketing: newState,
        analytics: newState,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Configurações de Privacidade</h3>
        
        <Checkbox
          label="Selecionar todas as opções"
          checked={allChecked}
          indeterminate={parentIndeterminate}
          onChange={handleSelectAll}
        />
        
        <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox
            label="Aceito os termos de uso"
            checked={checkboxes.terms}
            onChange={() => handleChange('terms')}
          />
          
          <Checkbox
            label="Quero receber newsletter"
            checked={checkboxes.newsletter}
            onChange={() => handleChange('newsletter')}
          />
          
          <Checkbox
            label="Aceito receber marketing"
            checked={checkboxes.marketing}
            onChange={() => handleChange('marketing')}
          />
          
          <Checkbox
            label="Permitir analytics"
            checked={checkboxes.analytics}
            onChange={() => handleChange('analytics')}
          />
        </div>
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <strong>Status:</strong> {allChecked ? 'Todas selecionadas' : someChecked ? 'Parcialmente selecionadas' : 'Nenhuma selecionada'}
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Demonstração de Acessibilidade</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox 
          label="Pressione Tab para navegar"
          defaultChecked 
        />
        
        <Checkbox 
          label="Use Enter ou Space para alternar"
        />
        
        <Checkbox 
          label="Suporte completo a leitores de tela"
          indeterminate
        />
        
        <Checkbox 
          label="Contraste adequado para baixa visão"
          error
        />
      </div>
      
      <div style={{ 
        padding: '12px', 
        backgroundColor: '#fef3c7', 
        borderRadius: '8px',
        fontSize: '14px',
        color: '#92400e'
      }}>
        <strong>💡 Dica:</strong> Use Tab para navegar entre os checkboxes e Enter/Space para alternar o estado.
      </div>
    </div>
  ),
}; 