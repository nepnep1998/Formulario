# Formulário de Contato

Formulário de contato responsivo com envio de email automático.

## 🚀 Como usar

1. **Configurar Formspree** (para receber os emails):
   - Acesse [formspree.io](https://formspree.io)
   - Crie uma conta gratuita
   - Crie um novo formulário
   - Copie o Form ID fornecido

2. **Configurar o formulário**:
   - No arquivo `index.html`, substitua `SEU_FORM_ID_AQUI` pelo seu Form ID do Formspree
   - Linha 87: `action="https://formspree.io/f/SEU_FORM_ID_AQUI"`

3. **Hospedar no GitHub Pages**:
   - Faça push deste código para seu repositório
   - Vá em Settings → Pages
   - Selecione "Deploy from branch" → branch `main` → pasta `/ (root)`
   - Salve

4. **Seu formulário estará disponível em**: https://seu-usuario.github.io/nome-do-repositorio

5. 
## 📧 O que será enviado por email

Cada submissão do formulário enviará um email com:
- Nome completo
- Telefone/WhatsApp
- E-mail
- Mensagem de ajuda
- Resposta "Sim/Não" sobre a descrição

## 🛠 Tecnologias

- HTML5
- CSS3 (com Gradients e Animações)
- JavaScript (Validação e Máscaras)
- Formspree (Backend de emails)
- GitHub Pages (Hospedagem)
