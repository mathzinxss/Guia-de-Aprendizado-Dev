# **Dia 27/01 - Docker**

<<<<<<< HEAD
1. [**O que é Docker?**](#o-que-é-docker?)
=======
1. [**O que é Docker?**](#O-que-é-Docker?-🐳)
>>>>>>> 0434950ca3c9fe6092979048be2d8b164f80d3da
    - Vantagens e desvantagens do uso do Docker
        - Vantagens
        - Desvantagens
    - Casos de uso do Docker
2. **Instalação e Configuração 🛠️**
    - Windows
    - macOS
    - Linuz
    - Configuração inicial e primeiros passos
        - Configuração inicial
        - Docker CLI (linha de comando)
3. **Fundamentos do Docker 🧠**
    - Conceitos básicos: `Containers`, `Imagens` e `Registries`
        - Containers
        - Imagens
        - Registries
    - Arquitetura do Docker
        - Docker Engine
        - Docker Desktop
    - Dockerfile: Estrutura e Sintaxe
        - Estrutura Básica
        - Exemplo do Dockerfile
    - Criando e construindo imagens Docker
        - Comando docker build
        - Otimizando Imagens
    - Gerenciamento de imagens (`pull`, `push`, `tag` e `remove`)
        - Baixando Imagens: docker pull
        - Enviando Imagens: docker push
        - Tagging de Imagens: docker tag
        - Removendo Imagens: docker tag
        - Exercícios Práticos
4. **Trabalhando com Container Docker 🚀**
    - Criando e gerenciando container
    - Criando Containers
    - Gerenciando Containers
        - Comandos essenciais (`run`, `stop`, `start` e `remove`)
        - Comando docker run
        - Comando docker stop
        - Comando docker start
        - Comando docker rm
        - Inspecionando e acessando containers
        - Comando docker inspect
        - Comando docker logs
        - Comando docker exec
        - Exercícios Práticos

## O que é Docker?

Docker é uma plataforma de código aberto que facilita a criação, o desenvolvimento, o envio e a execução de aplicações em containers. Containers são ambientes isolados que contêm tudo o que uma aplicação precisa para ser executada: bibliotecas, dependências, código, etc. Isso garante que a aplicação funcione de maneira consistente, independentemente do ambiente onde está sendo executada.

---

## Vantagens e desvantagens do uso do Docker ⚖️

### Vantagens 🌟

1. **Portabilidade**: Containers podem ser executados em qualquer ambiente que tenha o Docker instalado, garantindo que a aplicação funcione da mesma maneira em desenvolvimento, teste e produção.
2. **Isolamento**: Cada container opera de forma independente, permitindo a execução de várias aplicações em um mesmo host sem conflitos.
3. **Eficiência de Recursos**: Containers compartilham o kernel do sistema operacional, tornando-os mais leves que máquinas virtuais.
4. **Facilidade de Gerenciamento**: Com ferramentas como Docker Compose e Docker Swarm, gerenciar múltiplos containers e ambientes se torna mais fácil.
5. **Rápido Tempo de Inicialização**: Containers iniciam em segundos, comparado a minutos para máquinas virtuais.

### Desvantagens ⚠️

1. **Complexidade Inicial**: Para iniciantes, a curva de aprendizado pode ser íngreme.
2. **Segurança**: Containers compartilham o kernel do host, o que pode representar riscos de segurança se não gerenciados corretamente.
3. **Persistência de Dados**: O gerenciamento de dados persistentes pode ser mais complexo em containers.
4. **Limitações de Performance**: Em certos cenários, containers podem ter uma sobrecarga de performance em comparação com execução nativa.

---

## Casos de uso do Docker 📦

Docker pode ser utilizado em uma variedade de cenários, desde desenvolvimento até produção. Aqui estão alguns exemplos de como Docker pode ser útil:

1. **Desenvolvimento Local**: Desenvolvedores podem criar ambientes de desenvolvimento consistentes e replicáveis, evitando problemas de "funciona na minha máquina".
2. **Integração Contínua (CI) e Entrega Contínua (CD)**: Docker permite a automação de testes e deploys, garantindo que o código funcione conforme esperado em todos os estágios do pipeline.
3. **Microservices**: Docker facilita a adoção de arquiteturas de microservices, permitindo a implementação, escalonamento e gerenciamento de serviços independentes.
4. **Escalabilidade**: Em ambientes de produção, Docker pode ser utilizado junto com orquestradores como Kubernetes ou Docker Swarm para escalar aplicações conforme a demanda.
5. **Ambientes Temporários**: Docker pode ser usado para criar ambientes de teste ou demonstração que podem ser rapidamente configurados e destruídos sem impacto no sistema principal.

Docker revolucionou a maneira como desenvolvedores e operadores lidam com aplicações, proporcionando uma maneira mais eficiente e consistente de gerenciar software em diferentes ambientes. Compreender esses conceitos básicos é essencial para aproveitar todo o potencial que Docker oferece.

---

# Instalação e Configuração 🛠️

## Windows 🪟

1. **Requisitos**: Windows 10 Pro, Enterprise ou Education (Build 15063 ou superior) ou Windows 11.
2. **Passos de Instalação**:
    - Acesse [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop).
    - Baixe o instalador e execute-o.
    - Siga as instruções na tela para completar a instalação.
    - Após a instalação, reinicie o computador.
    - Abra o Docker Desktop e verifique se o Docker está em execução com o comando `docker --version` no PowerShell.

## macOS 🍏

1. **Requisitos**: macOS 10.14 ou superior.
2. **Passos de Instalação**:
    - Acesse [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop).
    - Baixe o instalador `.dmg` e execute-o.
    - Arraste o ícone do Docker para a pasta de Aplicativos.
    - Abra o Docker a partir da pasta de Aplicativos.
    - Verifique a instalação com o comando `docker --version` no Terminal.

## Linux 🐧

1. **Requisitos**: Distribuições suportadas incluem Ubuntu, Debian, Fedora, CentOS, etc.
2. **Passos de Instalação** (Exemplo para Ubuntu):
    - Atualize o índice de pacotes: `sudo apt-get update`.
    - Instale pacotes necessários: `sudo apt-get install apt-transport-https ca-certificates curl software-properties-common`.
    - Adicione a chave GPG oficial do Docker: `curl -fsSL <https://download.docker.com/linux/ubuntu/gpg> | sudo apt-key add -`.
    - Adicione o repositório Docker: `sudo add-apt-repository "deb [arch=amd64] <https://download.docker.com/linux/ubuntu> $(lsb_release -cs) stable"`.
    - Atualize o índice de pacotes novamente: `sudo apt-get update`.
    - Instale o Docker: `sudo apt-get install docker-ce`.
    - Verifique a instalação com `docker --version`.

## Configuração inicial e primeiros passos 🎯

Após instalar o Docker, algumas configurações iniciais são recomendadas para garantir que tudo funcione corretamente.

### Configuração Inicial 🔧

1. **Iniciar o Docker**: Certifique-se de que o Docker está em execução no seu sistema.
2. **Adicionar seu usuário ao grupo Docker** (Linux):
    - `sudo usermod -aG docker $USER`
    - Reinicie sua sessão para aplicar as mudanças.
3. **Testar a instalação**:
    - Execute o comando `docker run hello-world` para verificar se o Docker está funcionando corretamente. Você deve ver uma mensagem de confirmação.

### Docker CLI (linha de comando) 💻

A Docker CLI é a interface de linha de comando do Docker, utilizada para interagir com o Docker Engine. A seguir, alguns comandos básicos para começar:

- `docker --version`: Verifica a versão do Docker instalada.
- `docker info`: Exibe informações detalhadas sobre a instalação do Docker.
- `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`: Executa um container a partir de uma imagem especificada.
- `docker ps`: Lista os containers em execução.
- `docker stop [CONTAINER ID]`: Para um container em execução.
- `docker rm [CONTAINER ID]`: Remove um container.
- `docker rmi [IMAGE ID]`: Remove uma imagem.

Exemplo prático:

```bash
# Verifique a versão do Docker
docker --version

# Puxe uma imagem do Docker Hub
docker pull hello-world

# Execute um container a partir da imagem hello-world
docker run hello-world
```

Esse conjunto inicial de comandos ajuda a familiarizar-se com o funcionamento básico do Docker, preparando você para explorar conceitos mais avançados nos próximos tópicos.

---

# Fundamentos do Docker 🧠

## Conceitos básicos: Containers, Imagens e Registries 📦

### Containers 🚢

Containers são unidades leves e portáteis que contêm tudo o que uma aplicação precisa para ser executada, incluindo o código, bibliotecas, dependências e variáveis de ambiente. Eles compartilham o mesmo kernel do sistema operacional do host, mas são isolados entre si, garantindo que uma aplicação não interfira na outra.

- **Isolamento**: Cada container opera em um ambiente isolado, o que significa que os processos dentro de um container não afetam outros containers ou o host.
- **Portabilidade**: Containers podem ser executados em qualquer ambiente que suporte Docker, garantindo consistência entre desenvolvimento, teste e produção.
- **Eficiência**: Containers utilizam menos recursos que máquinas virtuais porque compartilham o kernel do sistema operacional do host.

### Imagens 📸

Imagens são snapshots imutáveis de um sistema de arquivos que incluem tudo o que uma aplicação precisa para ser executada. Elas servem como modelos para criar containers.

- **Construção**: Imagens são construídas a partir de arquivos chamados Dockerfiles, que contêm uma série de instruções para configurar o ambiente de um container.
- **Camadas**: Cada instrução no Dockerfile cria uma nova camada na imagem. Isso permite reutilização e eficiência no armazenamento e transferência de imagens.
- **Versionamento**: Imagens podem ser versionadas e compartilhadas através de registries, facilitando a colaboração e a consistência entre diferentes ambientes.

### Registries 🗂️

Registries são repositórios onde as imagens Docker são armazenadas e distribuídas. Existem registries públicos, como o Docker Hub, e registries privados que podem ser configurados para necessidades específicas de uma organização.

- **Docker Hub**: O registry público mais popular, onde desenvolvedores podem compartilhar e distribuir suas imagens publicamente ou de forma privada.
- **Registries Privados**: Empresas podem configurar registries privados para armazenar e distribuir imagens internamente, oferecendo maior controle e segurança.
- **Fluxo de Trabalho**: Imagens são construídas localmente e, em seguida, enviadas (push) para um registry. De lá, elas podem ser puxadas (pull) para qualquer ambiente Docker.

## Arquitetura do Docker 🏗️

A arquitetura do Docker é composta por vários componentes que trabalham juntos para facilitar a criação, distribuição e execução de containers.

### Docker Engine ⚙️

Docker Engine é o coração do Docker, responsável pela execução e gerenciamento de containers. Ele é composto por três partes principais:

1. **Docker Daemon**: O processo principal que gerencia containers, imagens, volumes e redes Docker. Ele é executado em segundo plano e responde a comandos da Docker CLI e API.
2. **Docker CLI**: A interface de linha de comando que permite aos usuários interagir com o Docker Daemon para executar comandos como `docker run`, `docker build`, `docker pull`, etc.
3. **REST API**: Uma API que permite que aplicações e serviços externos interajam com o Docker Daemon de maneira programática.

### Docker Desktop 🖥️

Docker Desktop é uma aplicação para Windows e macOS que fornece uma interface gráfica para interagir com o Docker. Ele inclui o Docker Engine, Docker CLI e ferramentas adicionais como Docker Compose e Kubernetes.

- **Integração com o Sistema Operacional**: Docker Desktop facilita a instalação e configuração do Docker, integrando-se de forma transparente com o sistema operacional.
- **Ferramentas Adicionais**: Inclui Docker Compose para gerenciar multi-containers e Kubernetes para orquestração de containers.

---

Trabalhando com Imagens Docker 📸

## Dockerfile: Estrutura e Sintaxe 📝

Um Dockerfile é um script de texto que contém uma série de instruções para construir uma imagem Docker. Cada instrução em um Dockerfile cria uma camada na imagem, permitindo a reutilização e a eficiência no armazenamento. Vamos explorar a estrutura e a sintaxe de um Dockerfile.

### Estrutura Básica 🏗️

Um Dockerfile típico pode ser dividido nas seguintes seções:

1. **Instrução FROM**: Especifica a imagem base a partir da qual a nova imagem será construída.
2. **Instrução MAINTAINER**: Define o mantenedor da imagem (embora esta prática esteja sendo substituída pelo uso de labels).
3. **Instrução RUN**: Executa comandos no container durante o processo de construção.
4. **Instrução COPY/ADD**: Copia arquivos e diretórios para a imagem.
5. **Instrução CMD/ENTRYPOINT**: Define o comando que será executado quando um container é iniciado a partir da imagem.
6. **Instrução EXPOSE**: Declara a porta na qual o container escutará durante a execução.
7. **Instrução ENV**: Define variáveis de ambiente.
8. **Instrução VOLUME**: Cria um ponto de montagem para volumes.

### Exemplo de Dockerfile 👇

Aqui está um exemplo de Dockerfile para uma aplicação Node.js:

```docker
# Use uma imagem base oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta em que a aplicação será executada
EXPOSE 3000

# Defina o comando para iniciar a aplicação
CMD ["node", "app.js"]
```

## Criando e construindo imagens Docker 🔨

Uma vez que você tenha um Dockerfile, você pode usar o comando `docker build` para criar uma imagem Docker a partir dele.

### Comando `docker build` 🛠️

O comando `docker build` cria uma imagem a partir de um Dockerfile e de um contexto de construção. O contexto é o conjunto de arquivos no diretório atual ou em um caminho especificado.

**Sintaxe**:

```
docker build [OPTIONS] PATH | URL | -
```

**Exemplo**:

```
# Crie uma imagem a partir do Dockerfile no diretório atual
docker build -t my-node-app .
```

- `t my-node-app`: Tag para a imagem criada.
- `.`: Diretório atual como contexto de construção.

### Otimizando Imagens 🔍

Para criar imagens eficientes e pequenas, siga estas práticas recomendadas:

1. **Minimize a quantidade de camadas**: Combine múltiplas instruções RUN em uma única instrução.
2. **Use imagens base menores**: Escolha imagens base menores como `alpine` sempre que possível.
3. **Aproveite o cache de construção**: Estruture seu Dockerfile para maximizar o uso do cache, colocando instruções que mudam menos frequentemente no topo.

## Gerenciamento de imagens (pull, push, tag, remove) 📂

### Baixando Imagens: `docker pull` ⬇️

O comando `docker pull` baixa uma imagem de um registry (como o Docker Hub) para o seu host local.

**Sintaxe**:

```
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

**Exemplo:**

```
# Baixe a imagem oficial do Node.js
docker pull node:14
```

### Enviando Imagens: `docker push` ⬆️

O comando `docker push` envia uma imagem do host local para um registry.

**Sintaxe**:

```
docker push [OPTIONS] NAME[:TAG]
```

**Exemplo:**

```
# Envie a imagem para o Docker Hub
docker push my-username/my-node-app:latest
```

### Tagging de Imagens: `docker tag` 🏷️

O comando `docker tag` cria uma nova tag para uma imagem existente.

**Sintaxe**:
```
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
```

**Exemplo:**

```
# Tag uma imagem com um novo nome e tag
docker tag my-node-app:latest my-username/my-node-app:v1.0
```

### Removendo Imagens: `docker rmi` 🗑️

O comando `docker rmi` remove uma ou mais imagens do host local.

**Sintaxe**:

```
docker rmi [OPTIONS] IMAGE [IMAGE...]
```

**Exemplo:**

```
# Remova uma imagem pelo nome e tag
docker rmi my-username/my-node-app:v1.0
```

---

### Exercícios Práticos 📝

1. **Crie um Dockerfile simples**:
    - Escreva um Dockerfile para uma aplicação Python simples que imprime "Hello, Docker!".
    - Construa a imagem e execute um container a partir dela.
2. **Otimize um Dockerfile**:
    - Pegue um Dockerfile existente e otimize-o para reduzir o número de camadas.
    - Use uma imagem base menor, como `alpine`.
3. **Gerencie Imagens**:
    - Baixe a imagem oficial do Nginx usando `docker pull`.
    - Crie uma tag personalizada para essa imagem e envie-a para um registry (Docker Hub ou registry privado).
4. **Remova Imagens Antigas**:
    - Liste todas as imagens no seu host local usando `docker images`.
    - Remova as imagens que você não está mais usando para liberar espaço.

---

# Trabalhando com Containers Docker 🚀

### Criando e gerenciando containers 🛠️

Containers são a unidade fundamental de execução no Docker. Eles encapsulam uma aplicação e suas dependências em um ambiente isolado. Vamos explorar como criar e gerenciar containers.

## Criando Containers 🐳

Para criar um container, utilizamos o comando `docker run`, que inicializa um novo container a partir de uma imagem Docker.

**Sintaxe**:

```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

**Exemplo**:

```
# Crie e execute um container a partir da imagem oficial do Nginx
docker run --name my-nginx -d -p 8080:80 nginx
```

- `-name my-nginx`: Nomeia o container como `my-nginx`.
- `d`: Executa o container em segundo plano (modo "detached").
- `p 8080:80`: Mapeia a porta 80 do container para a porta 8080 no host.
- `nginx`: Especifica a imagem a ser usada.

## Gerenciando Containers 📋

Após criar um container, você pode gerenciá-lo usando diversos comandos Docker.

- **Listar Containers**:

```
docker ps # Lista containers em execução
docker ps -a # Lista todos os containers, incluindo os parados
```
- **Parar e iniciar um Container**:

```
docker stop [CONTAINER ID/NAME] # Para um container em execução
docker start [CONTAINER ID/NAME] # Inicia um container parado
```

- **Remover um Container**:

```
docker rm [CONTAINER ID/NAME] # Remove um container parado
```

- **Acessar um Container**:

```
docker exec -it [CONTAINER ID/NAME] /bin/bash # Acessa um container em execução
```

### Comandos essenciais (run, stop, start, remove) 🔄

Vamos explorar alguns dos comandos mais utilizados no gerenciamento de containers.

### Comando `docker run` 🏃‍♂️

Cria e executa um novo container.

**Exemplo**:

```
docker run -it ubuntu /bin/bash
```

- `it`: Interativo + terminal, permite interagir com o container.
- `ubuntu`: A imagem a ser usada.
- `/bin/bash`: Comando a ser executado no container.

### Comando `docker stop` 🛑

Para um container em execução.

**Exemplo**:

```
docker stop my-nginx
```

### Comando `docker start` ▶️

Inicia um container parado.

**Exemplo**:

```
docker start my-nginx
```

### Comando `docker rm` 🗑️

Remove um container parado.

**Exemplo**:

```
docker rm my-nginx
```

### Inspecionando e acessando containers 🔍

Docker fornece comandos para inspecionar e acessar containers, permitindo verificar o status e a configuração de um container.

### Comando `docker inspect` 🕵️‍♂️

Exibe informações detalhadas sobre um container ou uma imagem.

**Exemplo:**

```
docker inspect my-nginx
```

### Comando `docker logs` 📜

Exibe os logs de um container.

**Exemplo**:

```
docker logs my-nginx
```

### Comando `docker exec` 👨‍💻

Executa um comando em um container em execução. Isso é útil para acessar o shell de um container.

**Exemplo**:

```
docker exec -it my-nginx /bin/bash
```

### Exercícios Práticos 📝

1. **Crie um container interativo**:
    - Use a imagem oficial do Ubuntu para criar um container interativo que execute `/bin/bash`.
    - Explore o sistema de arquivos do container.
2. **Mapeie portas**:
    - Crie um container do Nginx que mapeie a porta 80 do container para a porta 8080 no host.
    - Acesse o servidor Nginx através do navegador no endereço `http://localhost:8080`.
3. **Gerencie Containers**:
    - Crie um container e, em seguida, pare, inicie e remova-o utilizando os comandos `docker stop`, `docker start` e `docker rm`.
    - Inspecione o container utilizando `docker inspect` e verifique os logs com `docker logs`.
4. **Acesse um container em execução**:
    - Crie um container a partir da imagem do Ubuntu.
    - Use `docker exec` para acessar o shell do container e crie um arquivo de texto dentro dele.


<<<<<<< HEAD
=======
Docker é uma plataforma de código aberto que facilita a criação, o desenvolvimento, o envio e a execução de aplicações em containers. Containers são ambientes isolados que contêm tudo o que uma aplicação precisa para ser executada: bibliotecas, dependências, código, etc. Isso garante que a aplicação funcione de maneira consistente, independentemente do ambiente onde está sendo executada.
>>>>>>> 0434950ca3c9fe6092979048be2d8b164f80d3da
