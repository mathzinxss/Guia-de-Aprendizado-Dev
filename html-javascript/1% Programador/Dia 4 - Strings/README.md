# **Dia 04/31 - Strings**

### **📌 Introdução**

Bem-vindo ao **quarto dia do desafio!** 🎉 Hoje vamos mergulhar nas **strings**, um dos tipos de dados mais usados na programação.

As strings representam **sequências de caracteres** (letras, números, símbolos, etc.) e estão presentes em quase todo programa, desde mensagens de erro até nomes de usuários e textos de interface.

Você aprenderá como manipular strings, concatená-las, extrair partes, e aplicar métodos úteis do JavaScript. Vamos lá? 🚀

### **📚 O Que é uma String?**

Uma string é basicamente **um texto entre aspas**. No JavaScript, você pode usar três tipos de aspas:

- **Aspas simples** `'Texto'`
- **Aspas duplas** `"Texto"`
- **Template literals (crase)** ``Texto``

💡 **Exemplo:**

```jsx
let nome = "João";  // Aspas duplas
let sobrenome = 'Silva';  // Aspas simples
let saudacao = `Olá, ${nome}!`;  // Template literal
```

📌 **Dica:** Use `template literals` (crase) quando precisar incluir variáveis ou expressões diretamente no texto.

### **🔍 Principais Operações com Strings**

- **Concatenar Strings:**
Unir textos usando o operador `+` ou template literals:

```jsx
let nome = "Ana";
let saudacao = "Olá, " + nome + "!";  // Usando +
let saudacao2 = `Olá, ${nome}!`;  // Usando template literals
console.log(saudacao);  // Saída: Olá, Ana!
```

- **Acessar Caracteres:**
Cada caractere de uma string tem um índice, começando em `0`:

```jsx
let palavra = "Programação";
console.log(palavra[0]);  // Saída: P
console.log(palavra[4]);  // Saída: r
```

- **Obter o Tamanho da String:**

```jsx
let texto = "JavaScript";
console.log(texto.length);  // Saída: 10
```

### **🔄 Métodos Úteis para Manipular Strings**

| Método | Descrição | Exemplo | Saída |
| --- | --- | --- | --- |
| `toUpperCase()` | Transforma tudo em maiúsculas | `"abc".toUpperCase()` | `"ABC"` |
| `toLowerCase()` | Transforma tudo em minúsculas | `"ABC".toLowerCase()` | `"abc"` |
| `trim()` | Remove espaços do início e do fim | `"  texto  ".trim()` | `"texto"` |
| `includes()` | Verifica se contém um texto específico | `"JavaScript".includes("Script")` | `true` |
| `startsWith()` | Verifica se começa com um texto | `"JavaScript".startsWith("Java")` | `true` |
| `endsWith()` | Verifica se termina com um texto | `"JavaScript".endsWith("Script")` | `true` |
| `slice()` | Extrai uma parte da string | `"JavaScript".slice(0, 4)` | `"Java"` |
| `replace()` | Substitui parte do texto | `"Olá, João".replace("João", "Ana")` | `"Olá, Ana"` |

### **💻 Exemplos Práticos**

- **Formatando Texto:**

```jsx
let nome = "   ana silva   ";
console.log(nome.trim().toUpperCase());  // Saída: ANA SILVA
```

- **Validando Strings:**

```jsx
let email = "usuario@gmail.com";
if (email.includes("@")) {
  console.log("Email válido!");
} else {
  console.log("Email inválido!");
}
```

- **Cortando Partes de um Texto:**

```jsx
let frase = "Eu amo programação!";
let palavra = frase.slice(6, 16);
console.log(palavra);  // Saída: programação
```

- **Substituindo Palavras:**

```jsx
let mensagem = "Olá, João!";
let novaMensagem = mensagem.replace("João", "Maria");
console.log(novaMensagem);  // Saída: Olá, Maria!
```

- **Verificando Começo e Fim:**

```jsx
let site = "www.exemplo.com";
console.log(site.startsWith("www"));  // Saída: true
console.log(site.endsWith(".com"));  // Saída: true
```

### **🛠️ Dicas Importantes**

- **Strings são imutáveis:**
    
    Você não pode alterar diretamente um caractere de uma string.
    
    ```jsx
    let texto = "Olá";
    texto[0] = "A";  // Não funciona
    console.log(texto);  // Saída: Olá
    ```
    
- **Use métodos encadeados para manipulação eficiente:**
    
    ```jsx
    let texto = "  Olá, mundo!  ";
    console.log(texto.trim().toUpperCase());  // Saída: OLÁ, MUNDO!
    ```

    ### **🎯 Exercícios Práticos**

1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
6. Valide se um URL começa com `https://` e termina com `.com`.

---

### **🚀 Conclusão**

Parabéns por completar o quarto dia do desafio! 🎉 Agora você já sabe manipular strings no JavaScript e usar métodos úteis para trabalhar com textos.

Amanhã, vamos explorar um dos conceitos mais importantes: **Laços de Repetição**. Você vai aprender a automatizar tarefas repetitivas no seu código. Até lá! 👋



