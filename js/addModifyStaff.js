function getParamVal(paramKey) {
    const urlString = new URL(window.location.href)
    return urlString.searchParams.get(paramKey)
}
function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    console.log(day + '-' + month + '-' + year)
    return year + '-' + month + '-' + day;
}
if (getParamVal("member_id")) {
    const member_id = getParamVal("member_id")
    const body = {
        staffId: member_id,
    }
    const request = new Request('http://localhost:3000/get_staff', {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body)
    });
    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong on API server!');
            }
        })
        .then(response => {
            if (response.status === 'success') {
                document.getElementById('dob').value = getFormattedDate(new Date(response.data.DOB))
                document.getElementById('doj').value = getFormattedDate(new Date(response.data.DOJ))
                document.getElementById('dpt').value = response.data.Dept_no
                document.getElementById('fname').value = response.data.Fname
                document.getElementById('lname').value = response.data.Lname
                document.getElementById('grade').value = response.data.Grade_id
                document.getElementById('password').value = response.data.password
                document.getElementById('id').value = response.data.Member_id
                document.getElementById('id').disabled = true
            }
        }).catch(error => {
            console.error(error);
        });
}else{
    document.getElementById('id_sec').style.display = "none"
}

document.getElementById('save_data')&&document.getElementById('save_data').addEventListener('click',()=>{
    const DOB = document.getElementById('dob').value
    const DOJ = document.getElementById('doj').value
    const Dept_no = document.getElementById('dpt').value
    const Fname = document.getElementById('fname').value
    const Lname = document.getElementById('lname').value
    const Grade_id = document.getElementById('grade').value
    const password = document.getElementById('password').value
    const Member_id = document.getElementById('id').value
    const body = {
        Member_id,
        DOB,
        DOJ,
        Dept_no,
        Fname,
        Lname,
        Grade_id,
        password
    }
    const request = new Request('http://localhost:3000/add_modify_staff', {method: 'POST',headers:{
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
                document.getElementById('dob').innerText = response.data.DOB
                document.getElementById('doj').innerText = response.data.DOJ
                document.getElementById('dpt').innerText = response.data.Dept_no
                document.getElementById('fname').innerText = response.data.Fname
                document.getElementById('lname').innerText = response.data.Lname    
                document.getElementById('grade').innerText = response.data.Grade_id
                document.getElementById('id').innerText = response.data.Member_id
            }
        }).catch(error => {
            console.error(error);
        });
})


if(getParamVal('m') !== '' && getParamVal('m') === 'false'){
    document.querySelector('h1').innerText = "Staff Details"
    document.getElementById('save_data').remove()
    document.querySelectorAll('input').forEach((el)=>{
        console.log(el)
        el.disabled = true
    })
}