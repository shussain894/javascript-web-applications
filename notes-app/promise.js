const promise = fetch('https://jsonplaceholder.typicode.com/todos');

promise.then((responseData) => {

  console.log(responseData)
});

promise.catch((error) => {

console.log(error);
});