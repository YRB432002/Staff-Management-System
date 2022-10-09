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
if (getParamVal("leave_id")) {
    const leave_id = getParamVal("leave_id")
    const body = {
        staffId: leave_id,
    }
    const request = new Request('http://localhost:3000/get_leaves', {
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
                document.getElementById('appno').value = response.data.Application_no
                document.getElementById('mem_id').value = response.data.Member_id
                // document.getElementById('dname').value = response.data.Dname
                document.getElementById('startdate').value = getFormattedDate(new Date(response.data.Start_date))
                document.getElementById('enddate').value = getFormattedDate(new Date(response.data.End_date))
                document.getElementById('granted').value = response.data.Granted
                // document.getElementById('password').value = response.data.password
                // document.getElementById('id').value = response.data.leave_id
                document.getElementById('appno').disabled = true
            }
        }).catch(error => {
            console.error(error);
        });
}else{
    document.getElementById('id_sec').style.display = "none"
}

document.getElementById('save_data')&&document.getElementById('save_data').addEventListener('click',()=>{
    const Application_no = document.getElementById('appno').value
    const Member_id = document.getElementById('mem_id').value
    const Start_date = document.getElementById('startdate').value
    const End_date = document.getElementById('enddate').value
    const Granted = document.getElementById('granted').value
    // const Grade_id = document.getElementById('grade').value
    // const password = document.getElementById('password').value
    // const leave_id = document.getElementById('id').value
    const body = {
        Application_no,
        Member_id,
        Start_date,
        End_date,
        Granted
            }
    const request = new Request('http://localhost:3000/add_modify_leaves', {method: 'POST',headers:{
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
                document.getElementById('appno').innerText = response.data.Application_no
                document.getElementById('mem_id').innerText = response.data.Member_id
                document.getElementById('start_date').innerText = response.data.Start_date
                document.getElementById('end_date').innerText = response.data.End_date
                document.getElementById('granted').innerText = response.data.Lname    
                // document.getElementById('grade').innerText = response.data.Grade_id
                // document.getElementById('dno').innerText = response.data.leave_id
            }
        }).catch(error => {
            console.error(error);
        });
})

if(getParamVal('m') !== '' && getParamVal('m') === 'false'){
    document.querySelector('h1').innerText = "Leave Details"
    document.getElementById('save_data').remove()
    document.querySelectorAll('input').forEach((el)=>{
        console.log(el)
        el.disabled = true
    })
}