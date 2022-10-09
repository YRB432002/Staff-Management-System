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
if (getParamVal("txn_id")) {
    const T_id = getParamVal("txn_id")
    const body = {
        payrollId: T_id,
    }
    const request = new Request('http://localhost:3000/get_payroll', {
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
                document.getElementById('tid').value = response.data.T_id
                document.getElementById('mem_id').value = response.data.Member_id
                document.getElementById('tdate').value = getFormattedDate(new Date(response.data.T_date))
                document.getElementById('netsalary').value = response.data.Net_salary
                // document.getElementById('lname').value = response.data.Lname
                // document.getElementById('grade').value = response.data.Grade_id
                // document.getElementById('password').value = response.data.password
                // document.getElementById('id').value = response.data.Member_id
                document.getElementById('tid').disabled = true
            }
        }).catch(error => {
            console.error(error);
        });
}else{
    document.getElementById('id_sec').style.display = "none"
}

document.getElementById('save_data')&&document.getElementById('save_data').addEventListener('click',()=>{
    const T_id = document.getElementById('tid').value
    const Member_id = document.getElementById('mem_id').value
    const T_date = document.getElementById('tdate').value
    const Net_salary = document.getElementById('netsalary').value
    // const Lname = document.getElementById('lname').value
    // const Grade_id = document.getElementById('grade').value
    // const password = document.getElementById('password').value
    // const Member_id = document.getElementById('id').value
    const body = {
        Member_id,
        T_id,
        T_date,
        Net_salary
    }
    const request = new Request('http://localhost:3000/add_modify_payroll', {method: 'POST',headers:{
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
                document.getElementById('tid').innerText = response.data.T_id
                document.getElementById('tdate').innerText = response.data.T_date
                document.getElementById('mem_id').innerText = response.data.Member_id
                document.getElementById('netsalary').innerText = response.data.Net_salary
                // document.getElementById('lname').innerText = response.data.Lname    
                // document.getElementById('grade').innerText = response.data.Grade_id
                // document.getElementById('id').innerText = response.data.Member_id
            }
        }).catch(error => {
            console.error(error);
        });
})

if(getParamVal('m') !== '' && getParamVal('m') === 'false'){
    document.querySelector('h1').innerText = "Payroll Details"
    document.getElementById('save_data').remove()
    document.querySelectorAll('input').forEach((el)=>{
        console.log(el)
        el.disabled = true
    })
}