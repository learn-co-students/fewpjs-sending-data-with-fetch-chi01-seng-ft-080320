let formData = {
    name: "Austin", 
    email: "austinoie@gmail.com"
};

let configObject = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body: JSON.stringify(formData)
};

fetch("http://localhost:3000/users", configObj)
    
    .then(function(response){
        return response.json();
    })

    .then(function(object){
        document.body.innerHTML = object["id"];
    })

    .catch(function(error){
        alert("You fucked up");
        document.body.innerHTML = error.message
    });