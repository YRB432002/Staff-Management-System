
document.getElementById('get_leaves')&&document.getElementById('get_leaves').addEventListener('click',()=>{
    const username = document.getElementById('get_leaves_id').value
    if(!username)return;
    window.location.href=`/addModifyLeaves.html?leave_id=${username}&m=false`
})

document.getElementById('del_leaves')&&document.getElementById('del_leaves').addEventListener('click',()=>{
    const username = document.getElementById('del_leaves_id').value
    const body = {
        staffId: username,
    }
    const request = new Request('http://localhost:3000/del_leaves', {method: 'POST',headers:{
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

document.getElementById('modify_leaves')&&document.getElementById('modify_leaves').addEventListener('click',()=>{
    const username = document.getElementById('modify_leaves_id').value;
    if(!username)return;
    window.location.href=`/addModifyLeaves.html?leave_id=${username}`
})