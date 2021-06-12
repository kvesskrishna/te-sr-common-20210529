// make an http asynchronously

console.log(window);

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  let state = 1;
  if (this.readyState == state) {
    console.log("XMLHttpRequest ready state ", state);
  }
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(xhttp.responseText));
  }
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();

// request - header (method, auth, keys), body (information, json data)

//get - make request to retrive data - body is absent // limitation on data
// post - to post request body - data object in body // no limitations on size
// http 404 - not found // no
// http 200 - success // no
// http 500 -
//     http 501
// http 301
