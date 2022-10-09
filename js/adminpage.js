document.getElementById('adminLogin').addEventListener('click',()=>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const body = {
        adminId: username,
        adminPassword: password
    }
    const request = new Request('http://localhost:3000/admin_login', {method: 'POST',headers:{
        'Content-Type':'application/json'        
    }, body: JSON.stringify(body)});
    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong on API server!');
            }
        })
        .then(response => {
            if(response.status === 'success'){
                window.location.href = '/admin.html'
            }
        }).catch(error => {
            console.error(error);
        });
})