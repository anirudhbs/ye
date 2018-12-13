function debounce(fxn, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => fxn.apply(context, args), wait);
  };
}

function sayHello(number) {
  console.log(`${this.name} ${number}`);
}

const person = {
  name: "Schoolboy Q",
  saySomething: debounce(sayHello, 10)
};

person.saySomething(1);
person.saySomething(2);
person.saySomething(3);
person.saySomething(4);

setTimeout(() => {
  person.saySomething(5);
}, 20);

setTimeout(() => {
  person.saySomething(6);
}, 0);

setTimeout(() => {
  person.saySomething(7);
}, 60);
