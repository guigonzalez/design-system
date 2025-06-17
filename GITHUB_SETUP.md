# 🚀 Configuração do GitHub Pages

Este guia te ajudará a configurar o deploy automático do Storybook para GitHub Pages.

## 📋 Passos para Configuração

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `design-system` (ou o nome que preferir)
4. Descrição: "Design System com React, TypeScript e Storybook"
5. **NÃO** inicialize com README (já temos um)
6. Clique em "Create repository"

### 2. Conectar Repositório Local

```bash
# Adicionar o remote (substitua pelo seu usuário e repositório)
git remote add origin https://github.com/SEU_USUARIO/design-system.git

# Fazer push do código
git branch -M main
git push -u origin main
```

### 3. Habilitar GitHub Pages

1. Vá para **Settings** do repositório
2. Role até **Pages** (na barra lateral esquerda)
3. Em **Source**, selecione "Deploy from a branch"
4. Em **Branch**, selecione `gh-pages` (será criada automaticamente)
5. Em **Folder**, deixe `/ (root)`
6. Clique em **Save**

### 4. Configurar GitHub Actions

O workflow já está configurado em `.github/workflows/deploy-storybook.yml` e será executado automaticamente.

**Permissões necessárias:**
1. Vá para **Settings** > **Actions** > **General**
2. Em **Workflow permissions**, selecione "Read and write permissions"
3. Marque "Allow GitHub Actions to create and approve pull requests"
4. Clique em **Save**

### 5. Verificar Deploy

Após o primeiro push, o GitHub Actions irá:
1. Buildar o Storybook
2. Criar a branch `gh-pages`
3. Fazer deploy dos arquivos

**URL do seu Storybook:**
```
https://SEU_USUARIO.github.io/design-system
```

## 🔄 Deploy Automático

A cada push na branch `main`, o Storybook será automaticamente:
- Buildado
- Deployado para GitHub Pages
- Disponível em `https://SEU_USUARIO.github.io/design-system`

## 🛠️ Comandos Úteis

```bash
# Build local do Storybook
npm run build-storybook:gh-pages

# Verificar se o build funciona
ls storybook-static/

# Fazer push de alterações
git add .
git commit -m "feat: nova funcionalidade"
git push
```

## 📱 Acesso Mobile

O Storybook é responsivo e funciona perfeitamente em dispositivos móveis através do GitHub Pages.

## 🔧 Troubleshooting

### Build falha
- Verifique se todas as dependências estão instaladas
- Execute `npm ci` para instalar dependências exatas
- Verifique os logs do GitHub Actions

### GitHub Pages não carrega
- Aguarde alguns minutos após o push
- Verifique se a branch `gh-pages` foi criada
- Confirme as configurações em Settings > Pages

### Permissões negadas
- Verifique se o workflow tem permissões de escrita
- Confirme se o repositório é público ou você tem GitHub Pro

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do GitHub Actions
2. Confirme as configurações de Pages
3. Teste o build localmente primeiro 