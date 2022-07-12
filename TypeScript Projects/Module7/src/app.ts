 console.log('=================Built-In Generics====================');
 const names: Array<string> = []; //    <string> is built in generic type
 // names[0].split(' ');

 const promise: Promise<number> = new Promise((resolve, reject) => {  //promise is built in generic type of number
  setTimeout(() => {
    resolve(10);
  }, 2000);
 });

 promise.then(data => {
   // data.split(' ');
 })

 console.log('==============creating Generic Function(user defined)============');
 function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
  console.log(mergedObj.name); //if we use generics then only it is possible. elese it will give error
  console.log(mergedObj);

  console.log('====================generic function(2nd example)================');
  
  interface Lengthy {
    length: number;
  }
  
  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
      descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
      descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
  }
  
  console.log(countAndDescribe(['Sports', 'Cooking']));
  
  console.log('====================key of constraint================');
  
  function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
  }
  
  extractAndConvert({ name: 'Max' }, 'name');

console.log('====================Generic Classes================');
  
 class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
  
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Manu');
  textStorage.removeItem('Max');
  console.log(textStorage.getItems());
  
  const numberStorage = new DataStorage<number>();
  
  // const objStorage = new DataStorage<object>();
  // const maxObj = {name: 'Max'};
  // objStorage.addItem(maxObj);
  // objStorage.addItem({name: 'Manu'});
  // // ...
  // objStorage.removeItem(maxObj);
  // console.log(objStorage.getItems());

console.log('====================Generic Utility Types================');

  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }
  
  function createCourseGoal(title: string,description: string,date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};    //partial generic utility
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
  }
  
  const name2: Readonly<string[]> = ['Max', 'Anna'];   // readOnly generic utility
  // name2.push('Manu');
  // name2.pop();