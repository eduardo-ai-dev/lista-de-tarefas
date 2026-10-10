# 📋 TaskFlow PRO — Lista de Tarefas Moderna & Escalável

> Aplicativo web de Lista de Tarefas (To-Do List) moderno, responsivo, performático e intuitivo, desenvolvido com **React**, **TypeScript** e **Tailwind CSS**.

---

## ✨ Funcionalidades Principais

- 📝 **CRUD Completo de Tarefas**:
  - Criação rápida com modal acessível (Título, Categoria, Prioridade e Data de Vencimento).
  - Edição de tarefas existentes com preenchimento automático.
  - Alternância de conclusão instantânea com feedback visual (efeito riscado e opacidade atenuada).
  - Exclusão individual com botão de lixeira ou limpeza em lote das concluídas.
- 🎨 **Categorização Visual**:
  - Badges com cores dedicadas e alto contraste para *Trabalho*, *Pessoal*, *Estudos*, *Saúde* e *Outros*.
- 🎯 **Priorização**:
  - Classificação por nível de importância (*Alta*, *Média*, *Baixa*) com marcadores coloridos.
- 📅 **Controle de Prazos & Datas**:
  - Exibição amigável em português (*Hoje*, *Amanhã*, *Ontem*, *15 de Out*).
  - Identificação visual imediata de tarefas em atraso ou vencendo hoje.
- 🔍 **Filtros e Busca Instantânea**:
  - Abas de status com contadores dinâmicos (*Todas*, *Pendentes*, *Concluídas*).
  - Filtro por categoria via chips interativos.
  - Busca textual em tempo real por título ou descrição.
  - Ordenação múltipla (por prazo, prioridade, ordem alfabética ou data de criação).
- 📊 **Painel de Análises & Métricas (Aba Análises)**:
  - Gráfico de anel com taxa de conclusão em tempo real.
  - Métricas de tarefas totais, concluídas, pendentes e atrasadas.
  - Barras proporcionais de distribuição por Categoria e por Prioridade.
  - Dicas dinâmicas de produtividade.
- 🗓️ **Cronograma Inteligente (Aba Calendário)**:
  - Agrupamento cronológico inteligente (*Atrasadas*, *Para Hoje*, *Amanhã*, *Esta Semana*, *Próximos Dias*, *Concluídas Recentemente*).
- 🚪 **Gerenciamento de Sessão & Logout**:
  - Modal de saída com opção de restaurar os dados de exemplo (*Seed Data*).
- 💾 **Integração Supabase Ativa**:
  - Persistência desacoplada em camada de serviço (`ITaskService`) integrada diretamente ao **Supabase Database (PostgreSQL)** no projeto `Lista-tarefas` com Row Level Security (RLS) e fallback seguro.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend Core:** [React 18](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Manipulação de Datas:** [date-fns](https://date-fns.org/) (com suporte completo a `pt-BR`)
- **Design Tokens & Acessibilidade:** Google Fonts (*Inter* e *Plus Jakarta Sans*), WCAG AA contrast.

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── analytics/
│   │   └── AnalyticsView.tsx       # Métricas, taxas e gráficos de produtividade
│   ├── calendar/
│   │   └── CalendarView.tsx        # Visualização cronológica por data
│   ├── layout/
│   │   ├── Navbar.tsx              # Cabeçalho com logo, abas e ações
│   │   ├── Footer.tsx              # Rodapé informativo
│   │   └── LogoutModal.tsx         # Modal de confirmação e reset
│   ├── tasks/
│   │   ├── TaskCard.tsx            # Card individual com checkbox, badges e ações
│   │   ├── TaskList.tsx            # Listagem com estados vazios
│   │   ├── TaskFormModal.tsx       # Modal de criação e edição
│   │   ├── FilterBar.tsx           # Filtros, pesquisa e ordenação
│   │   └── EmptyState.tsx          # Mensagens acolhedoras
│   └── ui/
│       ├── Badge.tsx               # Badges de categorias e prioridades
│       └── Toast.tsx               # Notificações visuais flutuantes
├── context/
│   └── TaskContext.tsx             # Gerenciamento de estado global e operações
├── hooks/
│   └── useTasks.ts                 # Hook customizado de acesso ao contexto
├── services/
│   ├── taskService.ts              # Interface abstrata ITaskService
│   ├── localStorageService.ts      # Implementação concreta com LocalStorage
│   ├── supabaseService.ts          # Stub estrutural para futura migração
│   └── index.ts                    # Instância exportada do serviço
├── types/
│   └── task.ts                     # Interfaces e tipos de domínio
├── utils/
│   ├── cn.ts                       # Helper para merge de classes Tailwind
│   ├── dateUtils.ts                # Formatação e validação de prazos
│   └── themeUtils.ts               # Paleta de cores e configurações visuais
├── App.tsx                         # Componente raiz com roteador de abas
├── index.css                       # Estilos globais Tailwind
└── main.tsx                        # Ponto de entrada React
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm**, **pnpm** ou **yarn**

### 1. Clonar o repositório ou abrir a pasta do projeto:
```bash
git clone https://github.com/seu-usuario/lista-de-tarefas.git
cd "08 Lista de tarefas"
```

### 2. Instalar as dependências:
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse no seu navegador: `http://localhost:3000` (ou a porta indicada no terminal).

### 4. Gerar o build de produção:
```bash
npm run build
```

---

## 🔒 Arquitetura e Preparação para o Supabase (Fase 2)

O projeto foi construído seguindo o padrão **Repository / Service Pattern**:
1. Toda a manipulação de dados é realizada pela interface [`ITaskService`](file:///c:/Users/FIC/Documents/ATG%202619/08%20Lista%20de%20tarefas/src/services/taskService.ts).
2. Nenhum componente React acessa o `localStorage` diretamente.
3. Para conectar o **Supabase**, basta implementar as chamadas na classe [`SupabaseTaskService`](file:///c:/Users/FIC/Documents/ATG%202619/08%20Lista%20de%20tarefas/src/services/supabaseService.ts) e alterar a instância exportada em [`src/services/index.ts`](file:///c:/Users/FIC/Documents/ATG%202619/08%20Lista%20de%20tarefas/src/services/index.ts). Os componentes visuais e o estado global permanecerão 100% inalterados.

---

## 📄 Licença
Este projeto é de uso livre para fins educacionais e profissionais.
