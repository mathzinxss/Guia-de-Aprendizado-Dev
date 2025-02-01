# **Dia 19/01 - JSON**

### **📌 Introdução**

Bem-vindo ao **décimo nono dia do desafio!** 🎉 Hoje vamos explorar o **JSON (JavaScript Object Notation)**, um formato de texto leve e amplamente usado para armazenar e transferir dados.

Seja na troca de informações entre sistemas, APIs ou armazenamento de configurações, o JSON está em todos os lugares. Vamos aprender como manipulá-lo no JavaScript e entender por que ele é tão importante no desenvolvimento moderno. 🚀

---

### **📚 O Que é JSON?**

**JSON (JavaScript Object Notation)** é um formato de dados baseado em texto que segue a sintaxe de objetos JavaScript. Ele é simples, legível e ideal para troca de dados entre sistemas diferentes.

💡 **Características do JSON:**

- **Baseado em texto:** Pode ser facilmente lido por humanos e máquinas.
- **Estruturado:** Usa pares de chave-valor e arrays.
- **Independente de linguagem:** Embora tenha raízes no JavaScript, pode ser usado em qualquer linguagem.

📌 **Exemplo de JSON:**

```json
{
  "nome": "João",
  "idade": 25,
  "habilidades": ["JavaScript", "Python", "SQL"],
  "endereco": {
    "cidade": "São Paulo",
    "estado": "SP"
  }
}
```

### **🔄 Manipulando JSON no JavaScript**

**Convertendo Objetos para JSON:**
Use `JSON.stringify()` para converter um objeto JavaScript em uma string JSON.

```jsx
const objeto = {
  nome: "João",
  idade: 25
};

const json = JSON.stringify(objeto);
console.log(json); // Saída: '{"nome":"João","idade":25}'
```

**Convertendo JSON para Objetos:**
Use `JSON.parse()` para converter uma string JSON em um objeto JavaScript.

```jsx
const json = '{"nome":"João","idade":25}';

const objeto = JSON.parse(json);
console.log(objeto.nome); // Saída: João
```

---

### **📚 Estrutura do JSON**

**Pares de Chave-Valor:**
Cada entrada é formada por uma chave (string) e um valor.

```json
{
  "chave": "valor"
}
```

**Tipos de Dados Permitidos:**

- **Strings:** `"texto"`
- **Números:** `123` ou `12.34`
- **Booleanos:** `true` ou `false`
- **Null:** `null`
- **Arrays:** `["item1", "item2"]`
- **Objetos:** `{ "chave": "valor" }`

---

### **💻 Exemplos Práticos**

**Lendo e Exibindo Dados de um JSON:**

```jsx
const dados = `{
  "nome": "Maria",
  "idade": 30,
  "habilidades": ["HTML", "CSS", "JavaScript"]
}`;

const usuario = JSON.parse(dados);
console.log(`Nome: ${usuario.nome}`); // Saída: Nome: Maria
console.log(`Habilidades: ${usuario.habilidades.join(", ")}`); // Saída: Habilidades: HTML, CSS, JavaScript
```

**Criando uma String JSON:**

```jsx
const produto = {
  nome: "Celular",
  preco: 1500,
  disponivel: true
};

const json = JSON.stringify(produto);
console.log(json); // Saída: '{"nome":"Celular","preco":1500,"disponivel":true}'
```

**Consumindo Dados de uma API:**

```jsx
async function buscarDados() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const dados = await resposta.json();
  console.log(dados);
}

buscarDados();
// Saída: Dados do post com ID 1
```

**Trabalhando com Arrays de Objetos:**

```jsx
const produtos = [
  { nome: "Celular", preco: 1500 },
  { nome: "Notebook", preco: 3000 }
];

const json = JSON.stringify(produtos);
console.log(json);
// Saída: '[{"nome":"Celular","preco":1500},{"nome":"Notebook","preco":3000}]'
```

### **🛠️ Dicas Importantes**

- **Valide o JSON:**
    
    Use ferramentas online para validar seu JSON e evitar erros.
    
- **Atenção ao JSON.parse():**
    
    Certifique-se de que a string JSON é válida antes de convertê-la para um objeto.
    
- **Use JSON para Configurações:**
    
    JSON é ideal para armazenar configurações, dados de APIs e estruturações simples de dados.
    

---

### **🎯 Exercícios Práticos**

1. Converta um objeto JavaScript para JSON e exiba a string resultante.
2. Crie um JSON representando uma lista de tarefas com campos como `nome`, `prioridade` e `completo`.
3. Simule uma API que retorna um JSON de informações de produtos e leia esses dados.
4. Use `JSON.parse()` para converter uma string JSON em um objeto e acessar suas propriedades.
5. Crie um objeto complexo em JavaScript, transforme-o em JSON e, em seguida, converta de volta para um objeto.

---

### **🚀 Conclusão**

Parabéns por concluir o décimo nono dia do desafio! 🎉 Agora você entende o que é JSON, como manipulá-lo no JavaScript e por que ele é tão usado no desenvolvimento web.

Amanhã, vamos explorar **Bancos de Dados**, a base para armazenamento de dados em aplicativos modernos. Te vejo lá! 👋

---

Esse conteúdo detalhado oferece explicações claras, exemplos práticos e exercícios desafiadores para ensinar JSON de forma eficaz no JavaScript. 🚀✨