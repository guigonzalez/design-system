# 🎨 Design System

Um design system completo construído com React, TypeScript e Storybook, utilizando design tokens para consistência visual.

## ✨ Características

- **Componentes Reutilizáveis**: Button, Input, Checkbox e RadioButton
- **Design Tokens**: Sistema de tokens para cores, espaçamentos, tipografia e bordas
- **Storybook**: Documentação interativa e playground para componentes
- **TypeScript**: Tipagem completa para melhor DX
- **Testes**: Cobertura de testes com Vitest e Testing Library
- **Build Otimizado**: Configuração para publicação como pacote npm

## 🚀 Componentes Disponíveis

### Button
Componente de botão com múltiplas variantes e estados.

```tsx
import { Button } from '@your-org/design-system';

<Button variant="primary" size="medium" onClick={handleClick}>
  Clique aqui
</Button>
```

**Variantes**: `primary`, `secondary`, `success`, `warning`, `error`, `ghost`, `outline`
**Tamanhos**: `small`, `medium`, `large`
**Estados**: `disabled`, `loading`, `fullWidth`

### Input
Componente de entrada de texto com suporte a ícones e estados.

```tsx
import { Input } from '@your-org/design-system';

<Input 
  label="Email"
  placeholder="Digite seu email"
  helperText="Será usado apenas para notificações"
  startIcon="🔍"
  fullWidth
/>
```

**Variantes**: `default`, `outlined`, `filled`
**Tamanhos**: `small`, `medium`, `large`
**Estados**: `error`, `success`, `disabled`
**Recursos**: `label`, `helperText`, `startIcon`, `endIcon`, `fullWidth`

### Checkbox
Componente de checkbox com suporte a estado indeterminado.

```tsx
import { Checkbox } from '@your-org/design-system';

<Checkbox 
  label="Aceito os termos e condições"
  indeterminate={false}
  onChange={handleChange}
/>
```

**Tamanhos**: `small`, `medium`, `large`
**Estados**: `error`, `disabled`, `indeterminate`
**Recursos**: `label`, `fullWidth`

### RadioButton
Componente de radio button para seleção única.

```tsx
import { RadioButton } from '@your-org/design-system';

<RadioButton 
  label="Opção 1"
  name="group"
  value="option1"
  onChange={handleChange}
/>
```

**Tamanhos**: `small`, `medium`, `large`
**Estados**: `error`, `disabled`
**Recursos**: `label`, `fullWidth`

## 🎨 Design Tokens

O sistema utiliza tokens de design para garantir consistência:

```tsx
import { getColor, getSpacing, getFontSize, getBorderRadius } from '@your-org/design-system';

// Cores
getColor('primary')     // #007bff
getColor('secondary')   // #6c757d
getColor('success')     // #28a745
getColor('error')       // #dc3545

// Espaçamentos
getSpacing(1)           // 4px
getSpacing(2)           // 8px
getSpacing(3)           // 12px

// Tipografia
getFontSize('small')    // 12px
getFontSize('medium')   // 16px
getFontSize('large')    // 20px

// Bordas
getBorderRadius('small')  // 4px
getBorderRadius('medium') // 8px
getBorderRadius('large')  // 16px
```

## 📦 Instalação

```bash
npm install @your-org/design-system
```

## 🔧 Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação das dependências
```bash
npm install
```

### Executar o projeto
```bash
npm run dev
```

### Executar Storybook
```bash
npm run storybook
```

### Executar testes
```bash
npm test
```

### Build para produção
```bash
npm run build
```

## 📚 Storybook

O Storybook está disponível em `http://localhost:6006` e inclui:

- **Documentação**: Descrições detalhadas de cada componente
- **Controles Interativos**: Teste diferentes props em tempo real
- **Exemplos de Uso**: Casos de uso comuns e variações
- **Estados**: Demonstração de todos os estados possíveis

### Estrutura das Stories
- **Components/Button**: Todas as variantes e estados do botão
- **Components/Input**: Diferentes tipos de input com ícones
- **Components/Checkbox**: Checkboxes com estado indeterminado
- **Components/RadioButton**: Grupos de radio buttons

## 🌐 GitHub Pages

O Storybook é automaticamente deployado para GitHub Pages a cada push na branch `main`.

### Configuração

1. **Criar repositório no GitHub**:
   ```bash
   git remote add origin https://github.com/guigonzalez/design-system.git
   git branch -M main
   git push -u origin main
   ```

2. **Habilitar GitHub Pages**:
   - Vá para Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (será criada automaticamente)
   - Folder: `/ (root)`

3. **Deploy automático**:
   - O workflow `.github/workflows/deploy-storybook.yml` fará o deploy automaticamente
   - Acesse: `https://guigonzalez.github.io/design-system`

### Build manual
```bash
npm run build-storybook:gh-pages
```

## ⚠️ Warnings

O projeto pode exibir alguns warnings do Node.js e Storybook que são normais e não afetam a funcionalidade:

- **ExperimentalWarning**: Funcionalidade experimental do TypeScript
- **DeprecationWarning**: API deprecated do Storybook

**Soluções implementadas:**
- `npm run storybook` - Suprime warnings (padrão)
- `npm run storybook:verbose` - Mostra warnings para debug

Para mais detalhes, consulte [WARNINGS.md](./WARNINGS.md).

## 🧪 Testes

O projeto utiliza Vitest e Testing Library para testes:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## 📦 Publicação

### Build da biblioteca
```bash
npm run build:lib
```

### Publicação no npm
```bash
npm run release
```

O projeto está configurado com semantic-release para versionamento automático baseado em commits.

## 🎯 Exemplos de Uso

### Formulário Completo
```tsx
import React, { useState } from 'react';
import { Input, Checkbox, RadioButton, Button } from '@your-org/design-system';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    terms: false,
    paymentMethod: 'credit'
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nome"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        fullWidth
      />
      
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        fullWidth
      />
      
      <Checkbox
        label="Aceito os termos"
        checked={formData.terms}
        onChange={(e) => setFormData({...formData, terms: e.target.checked})}
      />
      
      <RadioButton
        label="Cartão de Crédito"
        name="payment"
        value="credit"
        checked={formData.paymentMethod === 'credit'}
        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
      />
      
      <Button type="submit" variant="primary">
        Enviar
      </Button>
    </form>
  );
}
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

Para suporte e dúvidas:
- Abra uma issue no GitHub
- Consulte a documentação no Storybook
- Verifique os exemplos de uso
- Consulte [WARNINGS.md](./WARNINGS.md) para informações sobre warnings

---

Desenvolvido com ❤️ usando React, TypeScript e Storybook
