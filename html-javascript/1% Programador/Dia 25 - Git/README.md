# **Dia 25/01 - Git**

## 🌟 **Bem-vindo ao mundo do Git!**

O Git é uma ferramenta fundamental para qualquer programador moderno. Ele ajuda a rastrear alterações no código, facilita o trabalho em equipe e garante que você nunca perca o controle do seu projeto.

---

### **📌 O que é Git?**

O **Git** é um sistema de controle de versão distribuído. Isso significa que ele rastreia as mudanças em arquivos ao longo do tempo, permitindo que você:

- **Colabore** com outros desenvolvedores.
- **Volte no tempo**, caso algo dê errado no projeto.
- **Organize** seu código em diferentes versões ou funcionalidades (branches).

💡 Criado por **Linus Torvalds** em 2005, o Git se tornou uma das ferramentas mais usadas no mundo da programação. Ele é a base de plataformas como **GitHub**, **GitLab** e **Bitbucket**.

---

### **⚙️ Como instalar o Git**

1.  **Windows:**
    - Acesse: [https://git-scm.com](https://git-scm.com/).
    - Baixe o instalador e siga as instruções na tela.
    - Durante a instalação, escolha um editor padrão (como o Vim ou outro de sua preferência).
2.  **Mac:**
    - Use o Homebrew:
      ```bash
      brew install git

      ```
3.  **Linux:** - Para distribuições baseadas no Debian:

            ```bash
            sudo apt update
            sudo apt install git
            ```

---

### **🔍 Como o Git funciona?**

O Git organiza o seu código em três áreas principais:

1. **Workspace:** Onde você edita seus arquivos no projeto.
2. **Staging Area:** Onde você prepara os arquivos para o próximo commit.
3. **Repository:** Onde o histórico de commits é armazenado.

💡 **Fluxo básico do Git:**

1. Modifique os arquivos no **workspace**.
2. Adicione os arquivos à **staging area** usando `git add`.
3. Salve as mudanças no **repositório** com `git commit`.

---

### **📚 Principais Comandos do Git**

### **1. Inicializando um Repositório**

**Comando:**

```bash
git init

```

**Para que serve?**

Cria um novo repositório Git no diretório atual.

---

### **2. Verificando o Status do Repositório**

**Comando:**

```bash
git status

```

**Para que serve?**

Mostra os arquivos modificados, novos arquivos e o que está no staging.

---

### **3. Adicionando Arquivos ao Staging**

**Comando:**

```bash
git add <arquivo>
git add .

```

**Para que serve?**

Adiciona arquivos ou mudanças ao staging para serem confirmadas no próximo commit.

---

### **4. Salvando Alterações no Repositório**

**Comando:**

```bash
git commit -m "Mensagem clara sobre o que foi feito"

```

**Para que serve?**

Registra as mudanças no histórico do repositório.

---

### **5. Visualizando o Histórico de Commits**

**Comando:**

```bash
git log

```

**Para que serve?**

Mostra uma lista dos commits feitos no repositório.

---

### **6. Criando uma Nova Branch**

**Comando:**

```bash
git branch <nome_da_branch>

```

**Para que serve?**

Cria uma nova ramificação do repositório, permitindo trabalhar em funcionalidades separadas.

---

### **7. Mudando para Outra Branch**

**Comando:**

```bash
git checkout <nome_da_branch>

```

**Para que serve?**

Troca para uma branch específica.

---

### **8. Unindo Branches**

**Comando:**

```bash
git merge <nome_da_branch>

```

**Para que serve?**

Combina as alterações de uma branch com a branch atual.

---

### **9. Subindo Alterações para o Repositório Remoto**

**Comando:**

```bash
git push origin <branch>

```

**Para que serve?**

Envia as mudanças para o repositório remoto (ex.: GitHub).

---

### **10. Baixando Alterações do Repositório Remoto**

**Comando:**

```bash
git pull origin <branch>

```

**Para que serve?**

Atualiza sua branch local com as mudanças do repositório remoto.

---

### **11. Clonando um Repositório**

**Comando:**

```bash
git clone <url_do_repositorio>

```

**Para que serve?**

Cria uma cópia de um repositório remoto na sua máquina.

---

### **12. Excluindo Arquivos do Repositório**

**Comando:**

```bash
git rm <arquivo>

```

**Para que serve?**

Remove arquivos do repositório e do sistema de arquivos.

---

### **💪 Exercícios Práticos**

1. **Inicie um novo repositório:**
    - Crie uma pasta chamada `meu_projeto` e inicialize o Git nela.
2. **Faça um commit inicial:**
    - Crie um arquivo `README.md`, adicione ao staging e faça o commit.
3. **Crie e mude para uma branch chamada `nova_funcionalidade`.**
4. **Faça alterações no `README.md`, adicione e faça um commit nessa branch.**
5. **Volte para a branch principal e veja que as alterações ainda não estão lá.**
6. **Faça o merge da branch `nova_funcionalidade` na branch principal.**

---

### **🛠️ Dicas Importantes**

- **Mensagens de Commit:** Sempre escreva mensagens claras e descritivas.
- **Cuidado com Conflitos:** Conflitos ao fazer `merge` são normais, resolva com paciência.
- **Documentação Oficial:** Consulte sempre a [documentação do Git](https://git-scm.com/doc).