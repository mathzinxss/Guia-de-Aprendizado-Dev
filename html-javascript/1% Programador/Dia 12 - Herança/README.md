# **Dia 12/01 - Herança**

### **📌 Introdução**

Bem-vindo ao **décimo segundo dia do desafio!** 🎉 Hoje vamos aprender sobre **Herança**, um dos pilares fundamentais da **Programação Orientada a Objetos (POO)**.

A herança permite que uma classe aproveite os atributos e métodos de outra classe, eliminando a necessidade de duplicar código. É como uma relação de pai e filho: o filho herda características do pai, mas também pode ter suas próprias.

Vamos explorar como a herança funciona no JavaScript, aprender a implementá-la e ver exemplos práticos. 🚀

---

### **📚 O Que é Herança?**

A **herança** é um mecanismo que permite que uma classe (subclasse) receba atributos e métodos de outra classe (superclasse).

💡 **Exemplo no mundo real:**

- **Classe Pai:** Veículo (atributos: rodas, motor; métodos: acelerar, frear).
- **Classe Filha:** Carro (herda atributos e métodos de Veículo, mas pode adicionar características próprias, como ar-condicionado).

📌 **Exemplo no código:**

```jsx
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  mover() {
    console.log(`${this.marca} ${this.modelo} está se movendo! 🚗`);
  }
}

class Carro extends Veiculo {
  abrirPorta() {
    console.log(`${this.marca} ${this.modelo} está abrindo as portas! 🚪`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.mover();        // Saída: Toyota Corolla está se movendo! 🚗
meuCarro.abrirPorta();   // Saída: Toyota Corolla está abrindo as portas! 🚪
```

---

### **🔍 Como Funciona a Herança no JavaScript**

1. **Criando a Superclasse:**
    
    A superclasse contém os atributos e métodos básicos que podem ser herdados por outras classes.

```jsx
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`${this.nome} está fazendo um som! 🐾`);
  }
}
```

2. **Criando a Subclasse:**
    
    Use a palavra-chave `extends` para criar uma subclasse que herda de uma superclasse.

```jsx
class Cachorro extends Animal {
  latir() {
    console.log(`${this.nome} está latindo! 🐶`);
  }
}
```

3. **Chamando o Construtor da Superclasse:**
    
    Use a palavra-chave `super` para chamar o construtor da superclasse.

```jsx
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da superclasse
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome}, da raça ${this.raca}, está latindo! 🐶`);
  }
}
```

---

### **🔄 Sobrescrita de Métodos (Override)**

Uma subclasse pode sobrescrever métodos da superclasse para personalizar seu comportamento.

📌 **Exemplo:**

```jsx
class Animal {
  fazerSom() {
    console.log("Algum som genérico!");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau! 🐱");
  }
}

const meuGato = new Gato();
meuGato.fazerSom(); // Saída: Miau! 🐱
```

---

### **💻 Exemplos Práticos**

**Classes para Veículos:**

```jsx
class Veiculo {
  constructor(marca) {
    this.marca = marca;
  }

  ligar() {
    console.log(`${this.marca} está ligado! 🔑`);
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log(`${this.marca} está empinando! 🏍️`);
  }
}

const minhaMoto = new Moto("Yamaha");
minhaMoto.ligar();   // Saída: Yamaha está ligado! 🔑
minhaMoto.empinar(); // Saída: Yamaha está empinando! 🏍️
```

**Sistema de Funcionários:**

```jsx
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  exibirInfo() {
    console.log(`${this.nome} tem um salário de R$${this.salario}.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, setor) {
    super(nome, salario);
    this.setor = setor;
  }

  exibirInfo() {
    console.log(`${this.nome} é gerente do setor ${this.setor}, com salário de R$${this.salario}.`);
  }
}

const gerente = new Gerente("Ana", 8000, "RH");
gerente.exibirInfo(); // Saída: Ana é gerente do setor RH, com salário de R$8000.
```

**Animais com Métodos Diferentes:**

```jsx
class Animal {
  mover() {
    console.log("O animal está se movendo.");
  }
}

class Passaro extends Animal {
  mover() {
    console.log("O pássaro está voando! 🦅");
  }
}

class Peixe extends Animal {
  mover() {
    console.log("O peixe está nadando! 🐟");
  }
}

const passaro = new Passaro();
const peixe = new Peixe();
passaro.mover(); // Saída: O pássaro está voando! 🦅
peixe.mover();   // Saída: O peixe está nadando! 🐟
```

---

### **🛠️ Dicas Importantes**

- **Use a Herança com Moderação:**
    
    Nem tudo precisa ser resolvido com herança. Às vezes, compor objetos é uma solução mais adequada.
    
- **Cuidado com Sobrescrita:**
    
    Certifique-se de que sobrescrever métodos não cause comportamento inesperado.
    
- **Aproveite a Reutilização de Código:**
    
    Herança é ótima para evitar duplicação, mas mantenha as classes coesas e com responsabilidades claras.
    

---

### **🎯 Exercícios Práticos**

1. Crie uma classe `Veiculo` e duas subclasses: `Carro` e `Moto`. Adicione métodos específicos para cada subclasse.
2. Implemente uma classe `Funcionario` e uma subclasse `Gerente` que adicione um atributo `setor`.
3. Crie uma superclasse `Forma` com um método para calcular área, e subclasses como `Quadrado` e `Círculo` que sobrescrevam esse método.
4. Escreva uma classe `Animal` e subclasses como `Cachorro` e `Gato`, cada uma com métodos específicos.
5. Crie uma classe `Conta` e uma subclasse `ContaPoupanca` que adicione juros ao saldo.

---

### **🚀 Conclusão**

Parabéns por concluir o décimo segundo dia do desafio! 🎉 Agora você sabe como usar a herança para criar hierarquias de classes e reaproveitar código no JavaScript.

Amanhã, vamos aprender sobre **Polimorfismo**, outro conceito fundamental da POO. Te vejo lá! 👋




