=======
# Guia GIT

## Sumário:

1. Introdução ao Git

## 1- Introdução ao Git

### **O que é o Git?**

Git é um sistema de controle de versão distribuído. Mas o que isso realmente significa? 🤔 Em termos simples, o Git é uma ferramenta que ajuda você a acompanhar as alterações no seu código ao longo do tempo. Com ele, você pode voltar no tempo e ver versões antigas do seu código, comparar mudanças e até colaborar com outras pessoas de maneira eficiente.    

### **História e Evolução do Git**

O Git foi criado em 2005 por Linus Torvalds, o mesmo cara que criou o Linux. Naquela época, os desenvolvedores do kernel Linux precisavam de uma ferramenta poderosa para gerenciar as versões do código. Daí nasceu o Git, uma ferramenta que rapidamente se tornou popular pela sua velocidade e eficiência.

### **Vantagens e Desvantagens do Uso do Git**

#### **Vantagens:**

1.	**Distribuído**: Diferente de outros sistemas, o Git permite que cada desenvolvedor tenha uma cópia completa do repositório, incluindo o histórico de todas as mudanças. Isso significa que você pode trabalhar offline e ainda ter acesso a todo o histórico de versões.

2.	**Velocidade**: As operações no Git são extremamente rápidas, o que facilita a vida quando você está lidando com grandes projetos.

3.	**Flexibilidade**: O Git oferece várias formas de trabalhar, adaptando-se ao seu fluxo de trabalho, seja ele mais simples ou mais complexo.

4.	**Integridade**: O Git utiliza SHA-1, um algoritmo de hashing, para garantir a integridade dos dados. Cada commit é identificado por um hash único, tornando qualquer tentativa de alteração muito fácil de ser detectada.

#### **Desvantagens:**

1.	**Curva de aprendizado**: Para quem está começando, o Git pode parecer um pouco complicado, especialmente por conta dos muitos comandos e conceitos novos.

2.	**Complexidade**: Em grandes equipes ou projetos complexos, gerenciar branches e merges pode se tornar um pouco desafiador.

## 2. Instalação e Configuração do Git

### Instalação do Git

#### Windows

Para instalar o Git no Windows, siga estes passos:

1. Acesse o site oficial do Git e baixe o instalador: [git-scm.com](https://git-scm.com/)
2. Execute o instalador e siga as instruções. Durante a instalação, você pode optar por usar Git Bash ou a linha de comando padrão do Windows (recomendado: Git Bash).
3. Após a instalação, abra o Git Bash e digite `git --version` para verificar se o Git foi instalado corretamente.

#### macOS

No macOS, você pode instalar o Git de várias maneiras, mas a mais comum é usando o Homebrew:

1. Se ainda não tiver o Homebrew instalado, instale-o executando o seguinte comando no Terminal:
    
    ```bash
    /bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh>)"
    ```
    
2. Depois, instale o Git com o Homebrew:
    
    ```bash
    brew install git
    ```
    
3. Verifique a instalação com:
    
    ```bash
    git --version
    ```
    

#### Linux

A instalação do Git no Linux pode variar dependendo da distribuição que você está usando. Aqui estão os comandos para as distribuições mais populares:

- **Ubuntu/Debian**:
    
    ```bash
    sudo apt update
    sudo apt install git
    ```
    
- **Fedora**:
    
    ```bash
    sudo dnf install git
    ```
    
- **Arch Linux**:
    
    ```bash
    sudo pacman -S git
    ```
    

Verifique a instalação com:

```bash
git --version
```

### Configuração Inicial do Git

Depois de instalar o Git, você precisa configurá-lo com suas informações pessoais. Isso é importante para que os commits que você fizer sejam corretamente atribuídos a você.

### Configurando Nome de Usuário e Email

Execute os seguintes comandos no terminal (ou Git Bash, se estiver no Windows):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
```

Isso configura seu nome de usuário e email globalmente, ou seja, para todos os repositórios que você criar ou clonar.

### Configurando Editor Padrão

O Git usa um editor de texto para algumas operações, como editar mensagens de commit. Você pode configurar seu editor preferido com:

- **VS Code**:
    
    ```bash
    git config --global core.editor "code --wait"
    ```
    
- **Vim**:
    
    ```bash
    git config --global core.editor "vim"
    ```
    
- **Nano**:
    
    ```bash
    git config --global core.editor "nano"
    ```

Configurando Ferramentas de Diff
O Git também permite configurar ferramentas de diffs e merges personalizadas. Por exemplo, para usar o meld como ferramenta de diff, use:
git config --global diff.tool meld
git config --global difftool.prompt false
​
Verificando a Configuração
Para verificar todas as configurações atuais do Git, execute:
git config --list
​
Isso mostrará uma lista de todas as configurações que você definiu.
Pronto! Agora você deve estar com o Git instalado e configurado corretamente no seu sistema. No próximo tópico, vamos explorar os conceitos básicos do Git, para que você entenda como ele funciona por baixo dos panos. 💻🚀​
3. Conceitos Básicos do Git
Para dominar o Git, é crucial entender seus conceitos básicos. Vamos mergulhar nos principais componentes que fazem o Git funcionar de maneira eficiente e poderosa.
Repositório (Local e Remoto)
Um repositório Git é onde todo o histórico do seu projeto é armazenado. Existem dois tipos de repositórios:
Repositório Local: É o repositório que está no seu computador. Ele contém todo o histórico do projeto e permite que você faça operações como commits, branches e merges sem precisar de uma conexão com a internet. Em um repositório local, você pode criar branches, fazer commits e visualizar o histórico das alterações.
Repositório Remoto: É uma versão do seu repositório que está hospedada em um servidor (como GitHub, GitLab ou Bitbucket). Ele permite a colaboração entre diferentes desenvolvedores. Você pode sincronizar seu repositório local com o remoto através de operações como push, pull e fetch. O repositório remoto é essencial para o trabalho colaborativo, permitindo que várias pessoas trabalhem no mesmo projeto simultaneamente.

Branches (Ramificações)
Branches são uma das funcionalidades mais poderosas do Git. Elas permitem que você crie "linhas do tempo" alternativas no seu projeto. Cada branch é uma linha separada de desenvolvimento, e você pode alternar entre elas facilmente.
Branch Principal (main ou master): É a linha principal de desenvolvimento. Geralmente, contém a versão mais estável do seu projeto. Todas as outras branches geralmente derivam dessa branch principal.
Branches de Funcionalidade: São branches criadas para desenvolver novas funcionalidades ou corrigir bugs sem afetar a branch principal. Isso permite que você trabalhe em novas features ou fixes de maneira isolada, sem interromper o desenvolvimento principal.

Commits
Um commit é uma "fotografia" do seu projeto em um momento específico no tempo. Ele contém uma mensagem que descreve as alterações feitas e um identificador único (SHA-1 Hash). Os commits permitem que você acompanhe a evolução do seu projeto e reverta para versões anteriores, se necessário. Cada commit aponta para um ou mais commits anteriores, formando um histórico linear ou ramificado das alterações.
Histórico de Commits: O histórico de commits é uma lista sequencial de todos os commits feitos em um repositório. Ele permite que você veja a evolução do projeto e entenda quem fez quais mudanças e por quê.
SHA-1 Hash
Cada commit no Git é identificado por um hash SHA-1, um identificador único de 40 caracteres. Esse hash é gerado com base no conteúdo do commit, garantindo a integridade dos dados. Isso significa que, se o conteúdo de um commit for alterado, o hash também será alterado, tornando fácil detectar alterações não autorizadas.
Exemplo de SHA-1 Hash:
e83c5163316f89bfbde7d9ab23ca2e25604af290
>>>>>>> d495759ad6c54aed6e065418b12127b57ff1abd5
