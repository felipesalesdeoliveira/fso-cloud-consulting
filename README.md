<p align="center">
  <img src="./public/logo-fso-cloud-consulting.png" alt="FSO Cloud Consulting" width="520" />
</p>

<h1 align="center">FSO Cloud Consulting</h1>

<p align="center">
  Site institucional da FSO Cloud Consulting, com foco em DevOps, SRE, Cloud,
  Observabilidade, Kubernetes, automação e confiabilidade operacional.
</p>

<p align="center">
  <a href="https://felipesalesdeoliveira.github.io/fso-cloud-consulting/">Acessar o site</a>
  ·
  <a href="https://github.com/felipesalesdeoliveira/fso-cloud-consulting/issues">Reportar um problema</a>
</p>

<p align="center">
  <a href="https://github.com/felipesalesdeoliveira/fso-cloud-consulting/actions/workflows/ci.yml"><img src="https://github.com/felipesalesdeoliveira/fso-cloud-consulting/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="https://github.com/felipesalesdeoliveira/fso-cloud-consulting/actions/workflows/deploy.yml"><img src="https://github.com/felipesalesdeoliveira/fso-cloud-consulting/actions/workflows/deploy.yml/badge.svg" alt="Deploy to GitHub Pages" /></a>
</p>

## Sobre o projeto

Este repositório contém o código-fonte do site público da FSO Cloud Consulting.
O projeto foi desenvolvido como uma landing page responsiva para apresentar os
serviços, o processo de trabalho, as competências técnicas, projetos, artigos e
canais de contato da marca.

O site é exportado como conteúdo estático. Isso permite hospedá-lo sem um
servidor de aplicação, atualmente no GitHub Pages e, futuramente, em uma
arquitetura AWS com Amazon S3, CloudFront e Route 53.

## Tecnologias

- [Next.js](https://nextjs.org/) com App Router e exportação estática;
- [React](https://react.dev/) para os componentes da interface;
- [TypeScript](https://www.typescriptlang.org/) em modo estrito;
- [Tailwind CSS](https://tailwindcss.com/) para estilos responsivos;
- [React Icons](https://react-icons.github.io/react-icons/) para ícones técnicos;
- GitHub Actions para integração e entrega contínuas;
- Dependabot para atualizações de dependências.

## Arquitetura atual

```text
Código-fonte Next.js
        ↓
npm run build:pages
        ↓
Exportação estática em out/
        ↓
GitHub Pages
        ↓
Navegador do usuário
```

Todo o conteúdo do site é disponibilizado em uma única página. Os itens do menu
navegam para as respectivas seções por meio de âncoras.

## Executar localmente

### Pré-requisitos

- Node.js 22;
- npm.

### Instalação

```bash
git clone https://github.com/felipesalesdeoliveira/fso-cloud-consulting.git
cd fso-cloud-consulting
npm ci
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente local de desenvolvimento |
| `npm run lint` | Executa as verificações de qualidade do código |
| `npm run build` | Gera a exportação estática para hospedagem na raiz de um domínio |
| `npm run build:pages` | Gera a exportação com o prefixo necessário para o GitHub Pages |

O resultado do build é criado no diretório `out/`.

## Estrutura do repositório

```text
.
├── .github/
│   ├── dependabot.yml
│   └── workflows/
├── app/                 # Layout, página principal, estilos e favicon
├── components/          # Componentes e seções da interface
├── data/                # Conteúdo e catálogo de tecnologias
├── lib/                 # Funções auxiliares
├── public/              # Imagens e documentos públicos
├── next.config.ts       # Exportação estática e configuração de caminhos
└── package.json         # Dependências e scripts
```

## CI/CD

O workflow de CI é executado automaticamente em pull requests para a branch
`main`. Ele instala as dependências, executa o lint e valida o build estático.

Após o merge na `main`, o workflow de deploy gera o site e publica o artefato no
GitHub Pages. A branch principal possui proteção contra exclusão, force-push e
merge com o check obrigatório reprovado.

```text
Branch → Pull request → CI → Merge na main → Deploy
```

## Dependências e segurança

O Dependabot verifica semanalmente:

- Dependências npm;
- GitHub Actions;
- Atualizações de segurança conhecidas.

As atualizações são propostas por pull requests e passam pelo mesmo CI antes do
merge.

## Roadmap

- [x] Landing page responsiva;
- [x] Contato integrado ao WhatsApp;
- [x] Currículo para download;
- [x] CI e deploy no GitHub Pages;
- [x] Proteção da branch principal;
- [x] Atualizações automáticas com Dependabot;
- [ ] SEO, sitemap, robots e metadados sociais;
- [ ] Hospedagem privada no Amazon S3;
- [ ] Distribuição global com Amazon CloudFront;
- [ ] Domínio `fsocloudconsulting.com` no Route 53.

## Contato

- Site atual: [felipesalesdeoliveira.github.io/fso-cloud-consulting](https://felipesalesdeoliveira.github.io/fso-cloud-consulting/)
- WhatsApp: [iniciar conversa](https://wa.me/5548996297388)

## Direitos de uso

Este é um projeto proprietário. Textos, identidade visual, marca, imagens e
composição são de uso da FSO Cloud Consulting. Nenhuma licença de reutilização é
concedida pelo conteúdo deste repositório.
