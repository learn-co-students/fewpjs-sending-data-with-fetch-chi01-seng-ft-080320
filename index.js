// Add your code here





function submitData(name, email){
    return fetch("http://localhost:3000/users",    
    {
        method: "POST", 
        headers : {
            "Content-Type" : "application/json", 
            "Accept" : "application/json", 
        }, 
        body : JSON.stringify({
            name, email
        })
    })
    .then(response => response.json())
    .then(response =>{
        let newDiv = document.createElement("div")
        newDiv.textContent = response["id"]
        console.log(response["id"])
        document.getElementById('user-id').append(newDiv)
    })
    .catch(error => {
        let errorDiv = document.createElement("div")
        errorDiv.textContent = error
        document.getElementById('user-id').append(errorDiv)
    });

}
