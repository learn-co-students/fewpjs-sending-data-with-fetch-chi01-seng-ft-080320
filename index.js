// Add your code here
function submitData(userName, userEmail){
    let newData = {
        name: userName,
        email: userEmail
    }
    let postRequest = {
    method: "Post",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(newData)
    }

    fetch ("http://localhost:3000/users", postRequest)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        newId = object.id
        let newP = document.createElement('p')
        newP.innerHTML = newId
        document.body.appendChild(newP)
    })
    .catch(function(error) {
        document.body.innerHTML = error.mesage
    })
}