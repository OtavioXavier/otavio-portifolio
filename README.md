# Portfólio - Otavio Xavier

> Portfólio pessoal desenvolvido com Angular 21, apresentando minhas habilidades como Desenvolvedor Full-Stack. Interface moderna com design responsivo e navegação suave

## 🚀 Sobre o Projeto

Este é um portfólio moderno e responsivo que apresenta minhas informações profissionais, experiência e projetos. O design foi criado com foco em uma experiência visual elegante e interativa, utilizando uma paleta de cores personalizada e animações suaves.

📐 **Design no Figma**: [Visualizar protótipo](https://www.figma.com/design/uMudqWjub68vquVoLNg9Eh/Portfolio?node-id=2003-634&t=IW1ENrCQw4hrp2v9-1)

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com background personalizado
- **Protótipo no Figma**: Design completo disponível para visualização
- **Navegação Suave**: Scroll suave entre seções com detecção automática da seção ativa
- **Scrollbar Personalizada**: Estilo Apple com cor personalizada (#5D1E1E)
- **Seleção de Texto Customizada**: Background personalizado para seleções de texto
- **Fontes Customizadas**: JetBrains Mono e Jaro para tipografia única
- **Responsivo**: Layout adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **Angular 21**: Framework principal
- **TypeScript**: Linguagem de programação
- **TailwindCSS 4**: Framework de estilização
- **SCSS**: Pré-processador CSS
- **Lucide Angular**: Ícones modernos
- **RxJS**: Programação reativa

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── contact-list/      # Lista de contatos (GitHub, LinkedIn, Gmail, WhatsApp)
│   │   └── section-list/      # Navegação entre seções
│   ├── sections/
│   │   └── sobre-section/     # Seção "Sobre"
│   ├── app.ts                 # Componente principal
│   ├── app.html               # Template principal
│   ├── app.scss               # Estilos do componente principal
│   └── app.routes.ts          # Configuração de rotas
├── assets/
│   └── fonts/                 # Fontes customizadas (JetBrains Mono, Jaro)
├── styles.scss                # Estilos globais
└── index.html                 # HTML principal
```

## 🎨 Seções

O portfólio está organizado nas seguintes seções:

- **Sobre**: Informações pessoais e profissionais
- **Experiência**: Histórico profissional e habilidades
- **Projetos**: Portfólio de projetos desenvolvidos

## 🚦 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 11.6.2 ou superior)

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd otavio-portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm start
# ou
ng serve
```

4. Abra seu navegador e acesse:
```
http://localhost:4200
```

## 📜 Scripts Disponíveis

- `npm start` ou `ng serve`: Inicia o servidor de desenvolvimento
- `npm run build` ou `ng build`: Compila o projeto para produção
- `npm run watch`: Compila o projeto em modo watch (desenvolvimento)
- `npm test` ou `ng test`: Executa os testes unitários

## 🎯 Funcionalidades Principais

### Navegação Inteligente
- Detecção automática da seção visível durante o scroll
- Atualização da URL com hash da seção ativa
- Scroll suave ao clicar nos links de navegação

### Componentes

#### SectionList
Componente responsável pela navegação entre seções, com:
- Detecção automática da seção ativa baseada no scroll
- Sincronização com a URL (hash)
- Scroll suave para as seções

#### ContactList
Lista de contatos com links para:
- GitHub
- LinkedIn
- Gmail
- WhatsApp

#### SobreSection
Seção dedicada a informações sobre o desenvolvedor.

## 🎨 Personalização

### Cores
A paleta de cores principal utiliza:
- **Cor primária**: #5D1E1E (com variações de opacidade)
- **Scrollbar**: rgba(93, 30, 30, 0.8)
- **Seleção de texto**: rgba(93, 30, 30, 0.8)

### Fontes
- **JetBrains Mono**: Fonte monoespaçada para o corpo do texto
- **Jaro**: Fonte variável para títulos e destaques

## 📝 Configuração

O projeto utiliza:
- **Prettier**: Formatação de código (printWidth: 100, singleQuote: true)
- **Angular CLI**: Ferramentas de desenvolvimento e build
- **TailwindCSS**: Sistema de design utility-first

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões e feedback são sempre bem-vindos!

## 📄 Licença

Este projeto é de uso pessoal.

## 📧 Contato

- **Email**: otavio.xavier.dev@gmail.com
- **LinkedIn**: [Otavio Xavier Marinho](https://www.linkedin.com/in/otavioxaviermarinho/)
- **GitHub**: [OtavioXavier](https://github.com/OtavioXavier)
- **WhatsApp**: +55 71 99974-3095

---

Desenvolvido por Otavio Xavier
