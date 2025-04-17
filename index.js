const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
          const success = true;
      
          if (success) {
            resolve("Task done!");
          } else {
            reject("Something went wrong");
          }
        }, 1000);
      }
);

  myPromise
.then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        //console.log(response);
        console.log(response.json());
    }).then(
        data => {
            console.log("This is data: ".concat(JSON.stringify(data)))
        }
    )
    .catch(error => console.error(error));

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(
        data => {
            console.log("This is data: ".concat(JSON.stringify(data)))
        }
    )
    .catch(error => console.error(error));

