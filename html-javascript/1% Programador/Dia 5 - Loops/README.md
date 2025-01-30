# **Dia 05/31 - Loops**

### **📌 Introdução**

Bem-vindo ao **quinto dia do desafio!** 🎉 Hoje vamos explorar os **Laços de Repetição**, ferramentas poderosas que nos permitem **executar o mesmo bloco de código várias vezes**.

Imagine que você precisa imprimir os números de 1 a 100. Você não quer escrever 100 linhas de código, certo? É aqui que os loops entram em cena, salvando tempo e esforço. Vamos aprender como usar os principais loops no JavaScript: `for`, `while` e `do...while`. 🚀

---

### **📚 O Que são Laços de Repetição?**

Laços de repetição, ou **loops**, são usados para executar um bloco de código várias vezes, com base em uma condição.

💡 **Exemplo no mundo real:**

- Enviar uma mensagem para todos os convidados de uma festa.
- Contar quantos itens existem em uma lista de compras.

### **🔍 Tipos de Loops no JavaScript**

### **1. `for`**

O loop `for` é usado quando você sabe exatamente quantas vezes deseja repetir o código.

```jsx
for (let i = 0; i < 5; i++) {
  console.log(`Número: ${i}`);
}
// Saída:
// Número: 0
// Número: 1
// Número: 2
// Número: 3
// Número: 4
```

📌 **Explicação:**

1. `let i = 0`: Inicializa o contador.
2. `i < 5`: Define a condição para continuar o loop.
3. `i++`: Incrementa o valor de `i` a cada iteração.

### **2. `while`**

O loop `while` repete o código enquanto uma condição for verdadeira.

```jsx
let contador = 0;
while (contador < 3) {
  console.log(`Contando: ${contador}`);
  contador++;
}
// Saída:
// Contando: 0
// Contando: 1
// Contando: 2
```

📌 **Quando usar:**

- Quando você não sabe quantas vezes o loop vai rodar.

### **3. `do...while`**

Semelhante ao `while`, mas garante que o código seja executado pelo menos uma vez antes de verificar a condição.

```jsx
let numero = 5;
do {
  console.log(`Executando...`);
  numero--;
} while (numero > 5);
// Saída:
// Executando...
```

📌 **Quando usar:**

- Quando você precisa executar o código pelo menos uma vez, independentemente da condição.

---

### **🔄 Controlando o Loop**

### **`break`**

Interrompe o loop antes de completar todas as iterações.

```jsx
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Saída: 0, 1, 2, 3, 4
```

### **`continue`**

Pula para a próxima iteração sem executar o restante do código na atual.

```jsx
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Saída: 0, 1, 3, 4
```


### **💻 Exemplos Práticos**

- **Iterando Sobre um Array:**

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Saída:
// Maçã
// Banana
// Laranja
```

- **Somando Números de 1 a 10:**

```jsx
let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log(`Soma total: ${soma}`); // Saída: Soma total: 55
```

- **Buscando um Valor em uma Lista:**

```jsx
let numeros = [3, 8, 12, 5, 10];
let busca = 12;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === busca) {
    console.log(`Número ${busca} encontrado na posição ${i}!`);
    break;
  }
}
// Saída: Número 12 encontrado na posição 2!
```

**Validando Dados com `while`:**

```jsx
let senha = "1234";
let tentativa;

do {
  tentativa = prompt("Digite a senha:");
} while (tentativa !== senha);

console.log("Senha correta! 🎉");
```

### **🛠️ Dicas Importantes**

- **Cuidado com loops infinitos!**
    
    Sempre garanta que a condição de saída do loop será atingida:
    
    ```jsx
    let i = 0;
    while (true) {
      console.log(i);
      i++;
      if (i === 5) break; // Evita loop infinito
    }
    ```
    
- **Escolha o loop certo:**
    - Use `for` quando souber o número exato de iterações.
    - Use `while` quando depender de uma condição variável.
    - Use `do...while` para garantir uma execução inicial.

### **🎯 Exercícios Práticos**

1. Use um loop `for` para imprimir os números de 1 a 10 no console.
2. Crie uma lista de nomes e use um `for` para exibir cada nome.
3. Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.
4. Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
5. Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).

---

### **🚀 Conclusão**

Parabéns por concluir o quinto dia do desafio! 🎉 Agora você sabe como usar os laços de repetição para automatizar tarefas no código.

Amanhã, vamos aprender sobre **Listas e Arrays**, uma estrutura de dados essencial para trabalhar com coleções de informações. Te vejo lá! 👋