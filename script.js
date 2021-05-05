const requestUrl = "https://jsonplaceholder.typicode.com/users";
function senRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      console.log(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}

// senRequest("GET", requestUrl)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
const body = {
  name: "Toly",
  age: 41
};
senRequest("POST", requestUrl, body)
  .then(data => console.log(data))
  .catch(err => console.log(err));
