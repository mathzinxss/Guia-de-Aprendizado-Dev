# **Dia 27/01 - Docker**

1. [**O que é Docker?**](#O-que-é-Docker?-🐳)
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

## O que é Docker? 🐳

Docker é uma plataforma de código aberto que facilita a criação, o desenvolvimento, o envio e a execução de aplicações em containers. Containers são ambientes isolados que contêm tudo o que uma aplicação precisa para ser executada: bibliotecas, dependências, código, etc. Isso garante que a aplicação funcione de maneira consistente, independentemente do ambiente onde está sendo executada.
