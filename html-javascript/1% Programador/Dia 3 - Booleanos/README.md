# **Dia 03/31 - Booleanos**

### **📌 Introdução**

Seja bem-vindo ao **terceiro dia do desafio!** 🎉 Hoje vamos falar sobre os **tipos de dados booleanos**, um conceito simples, mas extremamente poderoso na programação.

Os valores booleanos são como interruptores: **ligado (true)** ou **desligado (false)**. Eles estão em todos os lugares, ajudando o código a tomar decisões, controlar loops, validar entradas e muito mais. Vamos entender como eles funcionam e como usá-los no JavaScript. 🚀

### **📚 O Que São Valores Booleanos?**

Um valor booleano só pode ter dois estados:

- **`true`**: Representa verdadeiro.
- **`false`**: Representa falso.

Eles são usados principalmente em **condições** para determinar o que o código deve fazer.

💡 **Exemplo no mundo real:**

- **Está chovendo?** *true*
- **Você está logado?** *false*
- **A luz está acesa?** *true*

### **🔍 Comparações e Operadores Relacionais**

Os valores booleanos muitas vezes são gerados a partir de **comparações**. Aqui estão os operadores mais comuns:

| Operador | Descrição | Exemplo | Resultado |
| --- | --- | --- | --- |
| `===` | Igualdade estrita | `5 === 5` | `true` |
| `!==` | Diferença estrita | `5 !== 3` | `true` |
| `<` | Menor que | `3 < 5` | `true` |
| `>` | Maior que | `5 > 3` | `true` |
| `<=` | Menor ou igual | `3 <= 3` | `true` |
| `>=` | Maior ou igual | `5 >= 5` | `true` |

### **🔄 Operadores Lógicos**

Os operadores lógicos permitem combinar ou inverter valores booleanos:

| Operador | Descrição | Exemplo | Resultado |
| --- | --- | --- | --- |
| `&&` | "E" lógico | `true && false` | `false` |
| `||` | "OU" lógico | `true || false` | `true` |
| `!` | "NÃO" lógico | `!true` | `false` |

💡 **Exemplo:**

```jsx
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir 🚗");
} else {
  console.log("Não pode dirigir ❌");
}
```

📌 **Explicação:**

- O código verifica duas condições ao mesmo tempo: se a idade é maior ou igual a 18 **e** se a pessoa tem carteira.

### **💻 Exemplos Práticos**

- **Verificando Login:**

```jsx
let estaLogado = true;

if (estaLogado) {
  console.log("Bem-vindo de volta! 👋");
} else {
  console.log("Por favor, faça login. 🔒");
}
```

- **Classificando Notas:**

```jsx
let nota = 85;

if (nota >= 90) {
  console.log("Nota A 🏆");
} else if (nota >= 70 && nota < 90) {
  console.log("Nota B 👍");
} else {
  console.log("Reprovado 😢");
}
```

- **Negação com !:**

```jsx
let luzAcesa = false;

if (!luzAcesa) {
  console.log("A luz está apagada. 💡");
}
```

- **Combinação de Condições:**

```jsx
let saldo = 100;
let temCartao = true;

if (saldo > 0 || temCartao) {
  console.log("Compra aprovada 🛒");
} else {
  console.log("Compra negada ❌");
}
```

### **🛠️ Dicas Importantes**

- **Cuidado com conversões automáticas (truthy e falsy):**
No JavaScript, alguns valores são interpretados como `true` ou `false`, mesmo que não sejam booleanos.

| Valor | Interpretação |
| --- | --- |
| `0`, `""`, `null`, `undefined`, `NaN` | `false` |
| Qualquer outro valor | `true` |

### 💡 **Exemplo:**

```jsx
if (0) {
  console.log("Isso nunca será executado!");
}
if ("Texto") {
  console.log("Isso será executado!");
}
```

- **Use parênteses para clareza:**

Sempre agrupe condições com `&&` e `||` usando parênteses para evitar confusão.

```jsx
if ((idade >= 18 && temCarteira) || temAcompanhante) {
  console.log("Pode entrar!");
}
```

### **🎯 Exercícios Práticos**

Agora é a sua vez! Resolva os exercícios abaixo:

1. Verifique se um número é maior que 10 e menor que 20.
2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
3. Implemente um sistema de notas onde:
    - Notas >= 90: "Aprovado com A"
    - Notas >= 70 e < 90: "Aprovado com B"
    - Notas < 70: "Reprovado".
4. Crie uma variável `saldo` e verifique:
    - Se `saldo > 0`: Mostre "Saldo positivo".
    - Se `saldo === 0`: Mostre "Sem saldo".
    - Caso contrário, mostre "Saldo negativo".
5. Use o operador `!` para verificar se uma luz está apagada e ligue-a.

### **🚀 Conclusão**

Parabéns por completar o terceiro dia do desafio! 🎉 Agora você já sabe o que são valores booleanos, como usá-los, e como combiná-los com operadores lógicos para tomar decisões no seu código.

Amanhã, vamos aprender sobre **Tipos de Dados - Strings**. Te vejo lá! 👋

Ficou perfeito, mantenha esse mesmo padrão de qualidade, agora para o próximo tópico, não esqueça de abordar tudo que é necessário para o aluno ter uma absorção completa de todo o conteúdo