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
if (getParamVal("grade_id")) {
    const grade_id = getParamVal("grade_id")
    const body = {
        payrollId: grade_id,
    }
    const request = new Request('http://localhost:3000/get_paygrade', {
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
                document.getElementById('grade_id').value = response.data.Grade_id
                document.getElementById('grade').value = response.data.Grade
                document.getElementById('gradepf').value = response.data.Grade_pf
                document.getElementById('gradebonus').value = response.data.Grade_bonus
                document.getElementById('gradebase').value = response.data.Grade_base
                // document.getElementById('grade').value = response.data.Grade_id
                // document.getElementById('password').value = response.data.password
                // document.getElementById('id').value = response.data.Member_id
                document.getElementById('grade_id').disabled = true
            }
        }).catch(error => {
            console.error(error);
        });
}else{
    document.getElementById('id_sec').style.display = "none"
}

document.getElementById('save_data')&&document.getElementById('save_data').addEventListener('click',()=>{
    const Grade_id = document.getElementById('grade_id').value
    const Grade = document.getElementById('grade').value
    const Grade_pf = document.getElementById('gradepf').value
    const Grade_bonus = document.getElementById('gradebonus').value
    const Grade_base = document.getElementById('gradebase').value
    // const Grade_id = document.getElementById('grade').value
    // const password = document.getElementById('password').value
    // const Member_id = document.getElementById('id').value
    const body = {
        Grade,
        Grade_pf,
        Grade_base,
        Grade_bonus,
        // Fname,
        // Lname,
        Grade_id
        // password
    }
    const request = new Request('http://localhost:3000/add_modify_paygrade', {method: 'POST',headers:{
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
                document.getElementById('grade_id').innerText = response.data.DOB
                document.getElementById('grade').innerText = response.data.DOJ
                document.getElementById('gradebase').innerText = response.data.Dept_no
                document.getElementById('gradepf').innerText = response.data.Fname
                document.getElementById('gradebonus').innerText = response.data.Lname    
                // document.getElementById('grade').innerText = response.data.Grade_id
                // document.getElementById('id').innerText = response.data.Member_id
            }
        }).catch(error => {
            console.error(error);
        });
})

if(getParamVal('m') !== '' && getParamVal('m') === 'false'){
    document.querySelector('h1').innerText = "Paygrade Details"
    document.getElementById('save_data').remove()
    document.querySelectorAll('input').forEach((el)=>{
        console.log(el)
        el.disabled = true
    })
}