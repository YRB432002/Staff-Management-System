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
if (getParamVal("dept_id")) {
    const dept_id = getParamVal("dept_id")
    const body = {
        staffId: dept_id,
    }
    const request = new Request('http://localhost:3000/get_department', {
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
                document.getElementById('dno').value = response.data.Dept_no
                document.getElementById('hod').value = response.data.HOD
                document.getElementById('dname').value = response.data.Dname
                // document.getElementById('fname').value = response.data.Fname
                // document.getElementById('lname').value = response.data.Lname
                // document.getElementById('grade').value = response.data.Grade_id
                // document.getElementById('password').value = response.data.password
                // document.getElementById('id').value = response.data.dept_id
                document.getElementById('dno').disabled = true
            }
        }).catch(error => {
            console.error(error);
        });
}else{
    document.getElementById('id_sec').style.display = "none"
}

document.getElementById('save_data')&&document.getElementById('save_data').addEventListener('click',()=>{
    const Dept_no = document.getElementById('dno').value
    const HOD = document.getElementById('hod').value
    const Dname = document.getElementById('dname').value
    // const Fname = document.getElementById('fname').value
    // const Lname = document.getElementById('lname').value
    // const Grade_id = document.getElementById('grade').value
    // const password = document.getElementById('password').value
    // const dept_id = document.getElementById('id').value
    const body = {
        Dept_no,
        Dname,
        HOD
            }
    const request = new Request('http://localhost:3000/add_modify_department', {method: 'POST',headers:{
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
                document.getElementById('dno').innerText = response.data.Dept_no
                document.getElementById('hod').innerText = response.data.HOD
                document.getElementById('dname').innerText = response.data.Dname
                // document.getElementById('fname').innerText = response.data.Fname
                // document.getElementById('lname').innerText = response.data.Lname    
                // document.getElementById('grade').innerText = response.data.Grade_id
                // document.getElementById('').innerText = response.data.dept_id
            }
        }).catch(error => {
            console.error(error);
        });
})

if(getParamVal('m') !== '' && getParamVal('m') === 'false'){
    document.querySelector('h1').innerText = "Department Details"
    document.getElementById('save_data').remove()
    document.querySelectorAll('input').forEach((el)=>{
        console.log(el)
        el.disabled = true
    })
}