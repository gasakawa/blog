---
title: 'Fundamentos de Javascript - Bind, Call e Apply'
date: '2022-07-29T00:00:00'
excerpt: 'O que são os métodos bind, call e apply em funções dentro do javascript'
category: 'backend'
tags: 'javascript'
authors: 'Gabriel Asakawa'
---

Toda função Javascript é de fato um objeto `Function` e entre os métodos disponíveis no objeto Function, temos o `bind`, `call` e `apply`. Talvez você já se deparou com eles em algúm código e neste post vou explicar como eles funcionam e quando podem ser utilizados.

### bind()

O método **bind()**, cria uma nova função, que quando chamada atribui à seu operador `this` ao valor entregue. Em outras palavras, ao utilizar bind, o _this_ fará referencia ao objeto enviado como parâmetro no bind. Parece ser um pouco confuso, mas vamos ver um exemplo.

```javascript
const person = {
  age: 18,
  getAge() {
    return this.age;
  },
};
console.log(person.getAge()); // 18
```

Agora, se atribuir a função `getAge` a uma variável e executar a função o que acontece?

```javascript
const retrieveAge = person.getAge;
console.log(retrieveAge()); // undefined
```

O resultado é `undefined` porque a função é invocada ou executada no nível do escopo `global` e não no escopo do objeto `person`. Neste escopo o _this_ não tem a propriedade _age_.

Ao utilizar o `bind()`, o _this_ será referente ao escopo do objeto `person`.

```javascript
const retrieveAge = person.getAge.bind(person);
console.log(retrieveAge()); // 18
```

Se a função que será invocada possuir argumentos ou parâmetros, é possível passar esses parâmetros usando o bind também.

```javascript
const person = {
  age: 18,
  getNameAndAge(name) {
    return `${name} is ${this.age} years old`;
  },
};
console.log(person.getNameAndAge('Gabriel')); // Gabriel is 18 years old

// Agora usando bind e passando parâmetros
console.log(person.getNameAndAge.bind(person, 'Maria')()); // Maria is 18 years old
```

Por último, podemos também usar um objeto como base e modificar o valor das suas propriedades ao usar o bind.

```javascript
const person = {
  age: 18,
  getNameAndAge(name) {
    return `${name} is ${this.age} years old`;
  },
};

console.log(person.getNameAndAge.bind({ age: 25 }, 'Maria')()); // Maria is 25 years old
```

### call()

O método **call()**, permite que uma função ou método que pertence a um objeto, seja invocada ou chamada por outro objeto. Com isto você pode escrever um método uma vez em um objeto e "utilizá-lo" em outro sem ter que reescrever o mesmo.

```javascript
const boy = {
  name: 'Martin',
  talk() {
    console.log(`My name is ${this.name}`);
  },
};

boy.talk(); // My name is Martin

const girl = {
  name: 'Olivia',
};

boy.talk.call(girl); // My name is Olivia
```

Veja que o objeto `boy` tem o método `talk()`. Quando essa função é invocada diretamente do objeto `boy.talk()`, o corpo da função é executado e imprime `My name is Martin`. Por outro lado o objeto `girl` não possui a função `talk`, mas usando `call()` é possível invocar a função do objeto boy passando como referência o objeto girl.

Assim como o `bind`é possível passar parâmetros à função que vai ser invocada via call. Estes parâmetros devem ser passados individualmente separados por vírgula.

```javascript
const boy = {
  talk(name) {
    console.log(`My name is ${name}`);
  },
};

boy.talk('Martin'); // My name is Martin

const girl = {
  name: 'Olivia',
  age: 2,
};

boy.talk.call(girl, girl.name); // My name is Olivia
```

### apply()

O método **apply()**, tem a mesma funcionalidade do `call()`, a única diferença é que se é necessário passar parâmetros à função, estes devem ser passados em um **array**.

```javascript
const boy = {
  talk(name, age) {
    console.log(`My name is ${name}, and I am ${age} years old`);
  },
};

boy.talk('Martin', 6); // My name is Martin and I am 6 years old

const girl = {
  name: 'Olivia',
  age: 2,
};

boy.talk.apply(girl, [girl.name, girl.age]); // My name is Olivia and I am 2 years old
```

Espero que tenha gostado. Deixe seu comentário se isso ajudou!
