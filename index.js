function submitData(name, email) {
    const submitData = {
        name,
        email
    };
    
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(submitData)
    };
    
    return fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(function (object) {
            document.body.innerHTML = object['id']
        })
        .catch(function(error){
            document.body.innerHTML = error.message
        });
}    
