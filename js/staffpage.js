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

document.getElementById('get_staff')&&document.getElementById('get_staff').addEventListener('click',()=>{
    const username = document.getElementById('get_staff_id').value;
    if(!username)return;
    window.location.href=`/addModifyStaff.html?member_id=${username}&m=false`
})

document.getElementById('del_staff')&&document.getElementById('del_staff').addEventListener('click',()=>{
    const username = document.getElementById('del_staff_id').value
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

document.getElementById('modify_staff')&&document.getElementById('modify_staff').addEventListener('click',()=>{
    const username = document.getElementById('modify_staff_id').value;
    if(!username)return;
    window.location.href=`/addModifyStaff.html?member_id=${username}`
})