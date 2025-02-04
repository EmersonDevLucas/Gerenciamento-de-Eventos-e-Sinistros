# 📖 Documentação - Gerenciamento de Eventos e Sinistros

## 📌 Visão Geral
O projeto **Gerenciamento de Eventos e Sinistros** é uma plataforma web destinada ao setor de proteção veicular, focada na gestão eficiente de sinistros de veículos. O objetivo principal é permitir um controle detalhado dos eventos, fornecendo ferramentas para cadastro, acompanhamento e análise de dados relacionados.

---
## 🚀 Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP (com Laravel)
- **Banco de Dados:** MySQL
- **Serviços:** Apache/Nginx, XAMPP/WAMP (Ambiente Local)

---
## 🎯 Funcionalidades Principais
- 📌 **Cadastro e Gerenciamento de Sinistros**: Permite registrar sinistros com informações detalhadas.
- 🔔 **Notificações Automáticas**: Envio de alertas para segurados e administradores.
- 📊 **Dashboard e Relatórios**: Exibição de estatísticas e métricas sobre os eventos cadastrados.
- 📂 **Upload de Documentos**: Armazenamento seguro de arquivos relevantes aos sinistros.
- 🔗 **Integração com APIs Externas**: Conexão com sistemas de validação de informações.

---
## 🛠 Configuração e Instalação
### 1️⃣ **Pré-requisitos**
- PHP 8+
- Composer
- MySQL 5.7+
- Apache/Nginx
- Node.js (Opcional para futuras melhorias)

### 2️⃣ **Clonando o Repositório**
```bash
  git clone https://github.com/seu-usuario/gerenciamento-eventos-sinistros.git
  cd gerenciamento-eventos-sinistros
```

### 3️⃣ **Instalação das Dependências**
```bash
  composer install
```

### 4️⃣ **Configuração do Laravel**
```bash
  cp .env.example .env
  php artisan key:generate
```
Configurar as credenciais do banco de dados no arquivo `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=seu_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

### 5️⃣ **Executando Migrations**
```bash
  php artisan migrate
```

### 6️⃣ **Rodando o Servidor**
```bash
  php artisan serve
```
Acesse pelo navegador: `http://127.0.0.1:8000`

---
## 📂 Estrutura do Projeto
```
📦 gerenciamento-eventos-sinistros
 ┣ 📂 app  # Código principal do Laravel
 ┣ 📂 database  # Migrations e seeds
 ┣ 📂 public  # Arquivos estáticos
 ┣ 📂 resources  # Views e assets do frontend
 ┣ 📂 routes  # Definição de rotas da aplicação
 ┣ 📂 storage  # Armazenamento de arquivos
 ┣ 📜 .env.example  # Exemplo de configuração de ambiente
 ┗ 📜 composer.json  # Dependências do PHP
```

---
## 🔧 Endpoints da API
### 1️⃣ **Autenticação**
- **`POST /api/login`** - Realiza login do usuário.
- **`POST /api/register`** - Cadastro de novos usuários.

### 2️⃣ **Gerenciamento de Sinistros**
- **`GET /api/sinistros`** - Lista todos os sinistros cadastrados.
- **`POST /api/sinistros`** - Cria um novo sinistro.
- **`GET /api/sinistros/{id}`** - Obtém detalhes de um sinistro específico.
- **`PUT /api/sinistros/{id}`** - Atualiza um sinistro.
- **`DELETE /api/sinistros/{id}`** - Remove um sinistro.

📌 Páginas do Sistema
1️⃣ Login e Cadastro (/login, /register)
Formulários para autenticação e registro de usuários.
Recuperação de senha.
Redirecionamento para a dashboard após login.
2️⃣ Dashboard (/dashboard)
Resumo dos sinistros cadastrados.
Gráficos e estatísticas sobre os eventos registrados.
Acesso rápido às principais funcionalidades.
3️⃣ Gerenciamento de Sinistros (/sinistros)
Listagem de todos os sinistros cadastrados.
Opção para buscar e filtrar sinistros por status, data, veículo, etc.
Acesso ao cadastro, edição e exclusão de sinistros.
4️⃣ Cadastro/Edição de Sinistro (/sinistros/novo ou /sinistros/editar/{id})
Formulário para adicionar ou editar um sinistro.
Upload de documentos e imagens relacionados.
Campos para status, data, descrição do evento, informações do veículo e segurado.
5️⃣ Detalhes do Sinistro (/sinistros/{id})
Exibição completa das informações do sinistro.
Histórico de atualizações e ações tomadas.
Download de arquivos/documentos anexados.
6️⃣ Gerenciamento de Usuários (/usuarios) (Somente para administradores)
Listagem dos usuários cadastrados.
Opção para editar, ativar/desativar ou excluir usuários.
Definição de permissões e papéis (admin, operador, segurado).
7️⃣ Configurações do Sistema (/configuracoes)
Personalização de parâmetros do sistema.
Definição de notificações automáticas.
Gerenciamento de categorias e tipos de eventos.
8️⃣ Relatórios e Estatísticas (/relatorios)
Geração de relatórios detalhados por período.
Exportação de dados em PDF/CSV.
Gráficos dinâmicos sobre os eventos registrados.
9️⃣ Perfil do Usuário (/perfil)
Exibição e edição dos dados pessoais do usuário.
Alteração de senha e preferências de notificações.
🔟 Página de Erro (404, 500, etc.)
Página amigável para erros de navegação ou sistema.
Opção para retornar ao dashboard ou página inicial.

---
## 📌 Próximos Passos
- Implementar autenticação JWT para segurança.
- Criar painel administrativo com permissões.
- Melhorar a interface com frameworks CSS como Bootstrap.
- Implementar testes unitários para garantir qualidade do código.

---
## 🤝 Contribuição
Contribuições são bem-vindas! Para colaborar:
1. Faça um Fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Adicionando nova feature'`
4. Envie um Pull Request.

---
## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---
✍️ **Desenvolvido por [Seu Nome]** 🚀

