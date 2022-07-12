const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);        //asynchronous code(which does not execute or finish immidiately. it will take some time here it is 2000 mili seconds[2sec])
  
  console.log('Hello!');
  console.log('Hi!');
