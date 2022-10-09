document.getElementById('staffLogin')&&document.getElementById('staffLogin').addEventListener('click',()=>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const body = {
        staffId: username,
        staffPassword: password
    }
    const request = new Request('http://localhost:3000/staff_login', {method: 'POST',headers:{
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
                window.location.href = '/staff.html'
            }
        }).catch(error => {
            console.error(error);
        });
})

document.getElementById('get_paygrade')&&document.getElementById('get_paygrade').addEventListener('click',()=>{
    const username = document.getElementById('get_paygrade_id').value
    if(!username)return;
    window.location.href=`/addModifyPaygrade.html?grade_id=${username}&m=false`
})

document.getElementById('del_paygrade')&&document.getElementById('del_paygrade').addEventListener('click',()=>{
    const username = document.getElementById('del_paygrade_id').value
    const body = {
        staffId: username,
    }
    const request = new Request('http://localhost:3000/del_staff', {method: 'POST',headers:{
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
               console.log('deleted')
            }
        }).catch(error => {
            console.error(error);
        });
})

document.getElementById('modify_paygrade')&&document.getElementById('modify_paygrade').addEventListener('click',()=>{
    const username = document.getElementById('modify_paygrade_id').value;
    if(!username)return;
    window.location.href=`/addModifyPaygrade.html?grade_id=${username}`
})