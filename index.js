// // Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   // method: "POST" is missing from the object below
//   let configObj = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

// In `submitData`, write a valid POST request to `http://localhost:3000/users`
// using `fetch()`. This request should include:

// - The destination URL
// - Headers for 'Content-Type' and 'Accept' set to 'application/json'
// - A body with the name and email passed in as arguments to `submitData`. These
//   should be assigned to `name` and `email` keys within an object. This object
//   should then be stringified.

let configObj = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        email
    })
}

function submitData(name,email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            document.body.innerHTML = object[ "id" ]
        })
        .catch(function(error){
            document.body.innerHTML = error.message
        })

}


//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });
