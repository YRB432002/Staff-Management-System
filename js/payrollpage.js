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

document.getElementById('get_payroll')&&document.getElementById('get_payroll').addEventListener('click',()=>{
    const username = document.getElementById('get_payroll_id').value
    if(!username)return;
    window.location.href=`/addModifypayroll.html?txn_id=${username}&m=false`
})

document.getElementById('del_payroll')&&document.getElementById('del_payroll').addEventListener('click',()=>{
    const username = document.getElementById('del_payroll_id').value
    const body = {
        staffId: username,
    }
    const request = new Request('http://localhost:3000/del_payroll', {method: 'POST',headers:{
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

document.getElementById('modify_payroll')&&document.getElementById('modify_payroll').addEventListener('click',()=>{
    const username = document.getElementById('modify_payroll_id').value;
    if(!username)return;
    window.location.href=`/addModifypayroll.html?txn_id=${username}`
})