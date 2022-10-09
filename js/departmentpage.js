
document.getElementById('get_department')&&document.getElementById('get_department').addEventListener('click',()=>{
    const username = document.getElementById('get_department_id').value
    if(!username)return;
    window.location.href=`/addModifyDepartment.html?dept_id=${username}&m=false`
})

document.getElementById('del_department')&&document.getElementById('del_department').addEventListener('click',()=>{
    const username = document.getElementById('del_department_id').value
    const body = {
        staffId: username,
    }
    const request = new Request('http://localhost:3000/del_department', {method: 'POST',headers:{
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

document.getElementById('modify_department')&&document.getElementById('modify_department').addEventListener('click',()=>{
    const username = document.getElementById('modify_department_id').value;
    if(!username)return;
    window.location.href=`/addModifyDepartment.html?dept_id=${username}`
})