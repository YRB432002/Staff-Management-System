const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'beeinatree2002',
  database: 'management'
})
connection.connect()

const adminLogin = (adminUserName, adminPassword) => {
    console.log(adminUserName, adminPassword)
    return new Promise((res, rej)=>{
        connection.query('SELECT * from admin where id = ? and password = ?',[adminUserName, adminPassword], (err, rows) => {
            if (err){
                rej(err)
            }
            if(rows.length && rows[0].id == adminUserName){
                res()
            }else{
                rej()
            }
        })    
    })
}

const staffLogin = (adminUserName, adminPassword) => {
    console.log(adminUserName, adminPassword)
    return new Promise((res, rej)=>{
        connection.query('SELECT * from staff_members where Member_id = ? and password = ?',[adminUserName, adminPassword], (err, rows) => {
            if (err){
                rej(err)
            }
            console.log(rows)
            if(rows.length && rows[0].Member_id == adminUserName){
                res()
            }else{
                rej()
            }
        })    
    })
}

const getStaff = (Member_id) => {
    return new Promise((res, rej)=>{
        connection.query('SELECT * from staff_members where Member_id = ?',[Member_id], (err, rows) => {
            if (err){
                rej(err)
            }
            if(!rows.length){
                rej('Not found')
            }
            res(rows[0])
        })    
    })
}

const delStaff = (Member_id) => {
    return new Promise((res, rej)=>{
        connection.query('DELETE from staff_members where Member_id = ?',[Member_id], (err, rows) => {
            if (err){
                rej(err)
            }
            res()
        })    
    })
}

const addModifyStaff = (body) => {
    const Member_id = body.Member_id
    const Fname = body.Fname
    const Lname = body.Lname
    const password = body.password
    const Dept_no = body.Dept_no
    const DOB = new Date(body.DOB).toISOString().slice(0, 19).replace('T', ' ');
    const Grade_id = body.Grade_id
    const DOJ = new Date(body.DOJ).toISOString().slice(0, 19).replace('T', ' ');
    let query = ''
    if(Member_id){
        query = `UPDATE staff_members SET Fname="${Fname}", Lname="${Lname}", password="${password}", Dept_no="${Dept_no}", DOB="${DOB}", Grade_id="${Grade_id}", DOJ="${DOJ}" where Member_id=${Member_id}`
    }else{
        query = `INSERT into staff_members (Fname, Lname, password, Dept_no, DOB, Grade_id, DOJ) values ("${Fname}", "${Lname}", "${password}", "${Dept_no}", "${DOB}", "${Grade_id}", "${DOJ}")`
    }
    console.log(query)
    return new Promise((res, rej)=>{
        connection.query(query, (err, rows) => {
            if (err){
                rej(err)
            }
            console.log(rows)
            res(rows)
        })    
    })
}

const getDepartment = (Dept_no) => {
    return new Promise((res, rej)=>{
        connection.query('SELECT * from department where Dept_no = ?',[Dept_no], (err, rows) => {
            if (err){
                rej(err)
            }
            if(!rows.length){
                rej('Not found')
            }
            res(rows[0])
        })    
    })
}

const delDepartment = (Dept_no) => {
    return new Promise((res, rej)=>{
        connection.query('DELETE from department where Dept_no = ?',[Dept_no], (err, rows) => {
            if (err){
                rej(err)
            }
            res()
        })    
    })
}

const addModifyDepartment = (body) => {
    
    const Dname = body.Dname
    const HOD = body.HOD
    const Dept_no = body.Dept_no
        let query = ''
    if(Dept_no){
        query = `UPDATE department SET Dept_no=${Dept_no}, HOD="${HOD}", Dname="${Dname}"  where Dept_no=${Dept_no}`
    }else{
        query = `INSERT into department (Dept_no, HOD, Dname) values (${Dept_no}, "${HOD}", "${Dname}")`
    }
    console.log(query)
    return new Promise((res, rej)=>{
        connection.query(query, (err, rows) => {
            if (err){
                rej(err)
            }
            console.log(rows)
            res(rows)
        })    
    })
}

const getLeaves = (leave_id) => {
    return new Promise((res, rej)=>{
        connection.query('SELECT * from leaves where Application_no = ?',[leave_id], (err, rows) => {
            if (err){
                rej(err)
            }
            if(!rows.length){
                rej('Not found')
            }
            res(rows[0])
        })    
    })
}

const delLeaves = (leave_id) => {
    return new Promise((res, rej)=>{
        connection.query('DELETE from leaves where Application_no = ?',[leave_id], (err, rows) => {
            if (err){
                rej(err)
            }
            res()
        })    
    })
}

const addModifyLeaves = (body) => {
    const Member_id = body.Member_id
    const leave_id = body.Application_no
    const Start_date = body.Start_date
    const End_date = body.End_date
    const Granted = body.Granted
        let query = ''
    if(leave_id){
        query = `UPDATE leaves SET Application_no=${leave_id}, Member_id=${Member_id}, Start_date="${Start_date}", End_date="${End_date}", Granted="${Granted}" where Application_no=${leave_id}`
    }else{
        query = `INSERT into leaves (Application_no , Member_id , Start_date , End_date , Granted) values (${leave_id}, ${Member_id}, "${Start_date}", "${End_date}", "${Granted}")`
    }
    console.log(query)
    return new Promise((res, rej)=>{
        connection.query(query, (err, rows) => {
            if (err){
                rej(err)
            }
            console.log(rows)
            res(rows)
        })    
    })
}

const getPaygrade = (Grade_id) => {
    return new Promise((res, rej)=>{
        connection.query('SELECT * from pay_grade where Grade_id = ?',[Grade_id], (err, rows) => {
            if (err){
                rej(err)
            }
            if(!rows.length){
                rej('Not found')
            }
            res(rows[0])
        })    
    })
}

const delPaygrade = (Grade_id) => {
    return new Promise((res, rej)=>{
        connection.query('DELETE from pay_grade where Grade_id = ?',[Grade_id], (err, rows) => {
            if (err){
                rej(err)
            }
            res()
        })    
    })
}

const addModifyPaygrade = (body) => {
    const Grade_id = body.Grade_id
    const Grade = body.Grade
    const Gbase = body.Grade_base
    const Gpf = body.Grade_pf
    const Gbonus = body.Grade_bonus
    
    let query = ''
    if(Grade_id){
        query = `UPDATE pay_grade SET Grade_id=${Grade_id}, Grade="${Grade}", Grade_base="${Gbase}", Grade_pf="${Gpf}", Grade_bonus="${Gbonus}" where Grade_id=${Grade_id}`
    }else{
        query = `INSERT into pay_grade (Grade_id, Grade, Grade_base, Grade_pf , Grade_bonus ) values (${Grade_id}, "${Grade}", "${Gbase}", "${Gpf}", "${Gbonus}")`
    }
    console.log(query)
    return new Promise((res, rej)=>{
        connection.query(query, (err, rows) => {
            if (err){
                rej(err)
            }
            console.log(rows)
            res(rows)
        })    
    })
}

const getPayroll = (T_id) => {
    return new Promise((res, rej)=>{
        connection.query('SELECT * from payroll where T_id = ?',[T_id], (err, rows) => {
            if (err){
                rej(err)
            }
            if(!rows.length){
                rej('Not found')
            }
            res(rows[0])
        })    
    })
}

const delPayroll = (T_id) => {
    return new Promise((res, rej)=>{
        connection.query('DELETE from payroll where T_id = ?',[T_id], (err, rows) => {
            if (err){
                rej(err)
            }
            res()
        })    
    })
}

const addModifyPayroll = (body) => {
    const Member_id = body.Member_id
    const T_id = body.T_id
    const T_date = body.T_date
    const Net_salary = body.Net_salary
    
    let query = ''
    if(T_id){
        query = `UPDATE payroll SET Member_id=${Member_id}, T_date="${T_date}", Net_salary="${Net_salary}" where T_id=${T_id}`
    }else{
        query = `INSERT into payroll (T_id, Member_id, T_date, Net_salary) values ("${T_id}", ${Member_id}, "${T_date}", "${Net_salary}")`
    }
    console.log(query)
    return new Promise((res, rej)=>{
        connection.query(query, (err, rows) => {
            if (err){
                rej(err)
            }
            console.log(rows)
            res(rows)
        })    
    })
}

// connection.query('SELECT * from staff_members', (err, rows, fields) => {
//     if (err) throw err
    
//     console.log('The solution is: ', rows[0])
// })

module.exports = {
    adminLogin,
    staffLogin,
    getStaff,
    delStaff,
    addModifyStaff,
    getDepartment,
    delDepartment,
    addModifyDepartment,
    getLeaves,
    delLeaves,
    addModifyLeaves,
    getPaygrade,
    delPaygrade,
    addModifyPaygrade,
    getPayroll,
    delPayroll,
    addModifyPayroll
}
