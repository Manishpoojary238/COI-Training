console.log('=============Class Decorator==============');
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
  }
  
  @Logger
  class Person {
    name = 'Max';
  
    constructor() {
      console.log('Creating person object...');
    }
  }
  
  const pers = new Person();
  
  console.log(pers);

console.log('================DECORATOR FACTORY===================');

function Logger2(logString: string) {
    return function(constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }
  
  @Logger2('LOGGING - PERSON')
  class Person2 {
    name = 'Max';
  
    constructor() {
      console.log('Creating person object...');
    }
  }
  
  const pers2 = new Person();
  console.log(pers);
  
  console.log('============More Example of Decorators=============');

  
  function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name;
      }
    }
  }
  

  @WithTemplate('<h1>My Person Object</h1>', 'app')
  class Person3 {
    name = 'Manish';
  
    constructor() {
      console.log('Creating person object...');
    }
  }
  
  const pers3 = new Person();
  
  console.log(pers);
  

  console.log('===============property decorator,accessor decorator,method decorator, parameter decorator============');
  
  function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target ,propertyName);
  }
  
 function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }
  
  function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }
  
  function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
  }
  
  class Product {
    @Log                  //property decorator
    title: string;
    private _price: number;
  
    @Log2
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('Invalid price - should be positive!');
      }
    }
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
  
    @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
    }
  }

  console.log('============auto bind Decorator==========')

  function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    };
    return adjDescriptor;
  }
  
  class Printer {
    message = 'This works!';
  
    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }
  
  const p = new Printer();
  p.showMessage();
  
  const button = document.querySelector('button')!;
  button.addEventListener('click', p.showMessage);