# **Dia 13/01 - Polimorfismo**

### **📌 Introdução**

Bem-vindo ao **décimo terceiro dia do desafio!** 🎉 Hoje vamos explorar o conceito de **Polimorfismo**, uma das bases mais poderosas da **Programação Orientada a Objetos (POO)**.

O polimorfismo permite que **métodos com o mesmo nome** se comportem de maneiras diferentes, dependendo do contexto ou da classe que os implementa. Isso ajuda a escrever códigos mais flexíveis, reutilizáveis e extensíveis.

Vamos entender como o polimorfismo funciona no JavaScript com exemplos práticos e fáceis de entender! 🚀

---

### **📚 O Que é Polimorfismo?**

**Polimorfismo** significa literalmente "muitas formas". Na POO, é a habilidade de diferentes classes derivadas **implementarem métodos com o mesmo nome**, mas comportamentos diferentes.

💡 **Exemplo no mundo real:**

- Imagine que você tem **diferentes tipos de sapatos**: tênis, chinelo e sapato social.
    - Todos têm a função "usar", mas cada um é usado de forma diferente:
        - Tênis para correr.
        - Chinelo para casa.
        - Sapato social para eventos formais.

📌 **Exemplo no código:**

```jsx
class Sapato {
  usar() {
    console.log("Usando um sapato genérico.");
  }
}

class Tenis extends Sapato {
  usar() {
    console.log("Usando tênis para correr. 🏃‍♂️");
  }
}

class Chinelo extends Sapato {
  usar() {
    console.log("Usando chinelo em casa. 🏠");
  }
}

const meuTenis = new Tenis();
const meuChinelo = new Chinelo();

meuTenis.usar();  // Saída: Usando tênis para correr. 🏃‍♂️
meuChinelo.usar(); // Saída: Usando chinelo em casa. 🏠
```

---

### **🔍 Como Funciona o Polimorfismo no JavaScript?**

### **1. Sobrescrita de Métodos:**

O polimorfismo acontece quando uma subclasse **sobrescreve** um método da superclasse para fornecer um comportamento específico.

```jsx
class Animal {
  emitirSom() {
    console.log("O animal emite um som.");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("O cachorro late. 🐶");
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("O gato mia. 🐱");
  }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.emitirSom(); // Saída: O cachorro late. 🐶
gato.emitirSom();     // Saída: O gato mia. 🐱
```

---

### **🔄 Usando Polimorfismo com Métodos Genéricos**

Você pode aproveitar o polimorfismo para tratar diferentes tipos de objetos de forma genérica:

```jsx
class Forma {
  calcularArea() {
    console.log("Área da forma genérica.");
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    console.log(`Área do quadrado: ${this.lado * this.lado}`);
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    console.log(`Área do círculo: ${Math.PI * this.raio ** 2}`);
  }
}

const formas = [new Quadrado(4), new Circulo(3)];

formas.forEach(forma => forma.calcularArea());
// Saída:
// Área do quadrado: 16
// Área do círculo: 28.274333882308138
```

---

### **💻 Exemplos Práticos**

**Sistema de Pagamentos:**

```jsx
class Pagamento {
  processar() {
    console.log("Processando pagamento genérico.");
  }
}

class PagamentoCartao extends Pagamento {
  processar() {
    console.log("Pagamento realizado com cartão de crédito. 💳");
  }
}

class PagamentoPix extends Pagamento {
  processar() {
    console.log("Pagamento realizado via Pix. 📲");
  }
}

const pagamentos = [new PagamentoCartao(), new PagamentoPix()];
pagamentos.forEach(pagamento => pagamento.processar());
// Saída:
// Pagamento realizado com cartão de crédito. 💳
// Pagamento realizado via Pix. 📲
```

---

**Veículos com Métodos Diferentes:**

```jsx
class Veiculo {
  mover() {
    console.log("O veículo está se movendo.");
  }
}

class Carro extends Veiculo {
  mover() {
    console.log("O carro está dirigindo. 🚗");
  }
}

class Bicicleta extends Veiculo {
  mover() {
    console.log("A bicicleta está pedalando. 🚴‍♂️");
  }
}

const veiculos = [new Carro(), new Bicicleta()];
veiculos.forEach(veiculo => veiculo.mover());
// Saída:
// O carro está dirigindo. 🚗
// A bicicleta está pedalando. 🚴‍♂️
```

---

### **🛠️ Dicas Importantes**

- **Use a Sobrescrita com Propósito:**
    
    Certifique-se de que a implementação específica de um método em uma subclasse faz sentido no contexto.
    
- **Mantenha o Código Flexível:**
    
    O polimorfismo ajuda a reduzir o acoplamento entre partes do sistema, facilitando futuras alterações ou extensões.
    
- **Evite Repetição de Código:**
    
    Reutilize ao máximo os métodos da superclasse antes de sobrescrevê-los.
    

---

### **🎯 Exercícios Práticos**

1. Crie uma classe `Funcionario` com um método `calcularSalario`. Implemente subclasses como `Desenvolvedor` e `Gerente` que sobrescrevem esse método.
2. Implemente uma classe `Transporte` e subclasses como `Carro`, `Avião` e `Barco`, cada uma com seu método `mover`.
3. Crie uma superclasse `Documento` com um método `exibirConteudo`, e subclasses como `PDF` e `Word` que personalizem esse método.
4. Implemente um sistema de animais com uma superclasse `Animal` e métodos específicos em subclasses como `Passaro` e `Peixe`.
5. Use o polimorfismo para criar uma lista de diferentes formas geométricas (`Quadrado`, `Círculo`, etc.) e calcule suas áreas.

---

### **🚀 Conclusão**

Parabéns por completar o décimo terceiro dia do desafio! 🎉 Agora você entende o conceito de polimorfismo, como ele permite escrever códigos mais flexíveis e como aplicá-lo no JavaScript.

Amanhã, vamos explorar as **Pilhas**, uma estrutura de dados fundamental na programação. Te vejo lá! 👋


