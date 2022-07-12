// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;   //interface as function
  }
  
  let add: AddFn;
  
  add = (n1: number, n2: number) => {
    return n1 + n2;
  };

interface named{
    readonly name?: string;  // here ? specifies it is a optional property
    output?:string;  // here ? specifies it is a optional property
}
interface Greetable extends named {  //extending an interface
    //readonly name: string; //in intewrfaces we can use use read only but not public, private, protected
  
    greet(phrase: string): void;
  }
  
  class Person implements Greetable {
    name?: string;
    age = 30;
  
    constructor(n?: string) {   // here ? specifies it is a optional parameter
        if(n){
            this.name = n;
        }
    }
  
    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }
        else{
            console.log('Hi');
        }
    }
  }
  
  let user1: Greetable;
  user1 = new Person('Max');
  let user2=new Person();
  
  user1.greet('Hi there - I am');
  user2.greet('Hi there - I am');
  //user1.name='Manish';  // not possible because name is readonly
  console.log(user1);
  console.log(user2);