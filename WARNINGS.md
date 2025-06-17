# ⚠️ Warnings do Projeto

Este documento descreve os warnings encontrados no projeto e suas soluções.

## 🔍 Warnings Identificados

### 1. ExperimentalWarning: Type Stripping

**Mensagem:**
```
(node:74561) ExperimentalWarning: Type Stripping is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```

**Localização:** `node:internal/modules/typescript:182:5`

**Causa:** O Node.js está usando uma funcionalidade experimental para remover tipos TypeScript durante a execução.

**Impacto:** Baixo - é apenas informativo sobre uma funcionalidade experimental.

**Solução:** Pode ser ignorado ou suprimido com `--no-warnings`.

### 2. DeprecationWarning: Passing args to a child process

**Mensagem:**
```
(node:74561) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not escaped, only concatenated.
```

**Localização:** `node_modules/storybook/dist/common/index.cjs:27375:22`

**Causa:** O Storybook está usando uma API deprecated do Node.js para executar processos filhos.

**Impacto:** Médio - pode ser um problema de segurança no futuro.

**Solução:** Será corrigido em versões futuras do Storybook.

## 🛠️ Soluções Implementadas

### Scripts Disponíveis

#### 1. Storybook sem Warnings (Padrão)
```bash
npm run storybook
```
- Suprime todos os warnings usando `NODE_OPTIONS="--no-warnings"`
- Experiência limpa para desenvolvimento

#### 2. Storybook com Warnings (Para Debug)
```bash
npm run storybook:verbose
```
- Mostra todos os warnings para debugging
- Útil para identificar problemas

### Como Verificar Warnings Detalhados

Para ver exatamente onde os warnings estão sendo gerados:

```bash
NODE_OPTIONS="--trace-warnings" npm run storybook:verbose
```

## 📋 Comandos Úteis

### Verificar Warnings em Tempo Real
```bash
# Com warnings suprimidos (padrão)
npm run storybook

# Com warnings visíveis
npm run storybook:verbose

# Com trace detalhado
NODE_OPTIONS="--trace-warnings" npm run storybook:verbose
```

### Verificar Warnings em Testes
```bash
# Testes sem warnings
npm test

# Testes com warnings visíveis
NODE_OPTIONS="" npm test
```

## 🔮 Status dos Warnings

| Warning | Status | Ação Necessária |
|---------|--------|-----------------|
| Type Stripping | ✅ Suprimido | Nenhuma |
| Child Process | ✅ Suprimido | Aguardar atualização do Storybook |

## 📝 Notas Importantes

1. **Os warnings não afetam a funcionalidade** do projeto
2. **São warnings do Node.js e Storybook**, não do nosso código
3. **Serão resolvidos automaticamente** com atualizações das dependências
4. **O script padrão suprime os warnings** para uma experiência limpa

## 🚀 Recomendações

- Use `npm run storybook` para desenvolvimento normal
- Use `npm run storybook:verbose` apenas para debugging
- Monitore atualizações do Storybook para correções dos warnings
- Considere atualizar o Node.js para versões mais recentes

---

**Última atualização:** $(date)
**Versão do Node.js:** $(node --version)
**Versão do Storybook:** 9.0.10 