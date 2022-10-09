const express = require('express')
const app = express()
const port = 3000
const sqlFuncs = require("./sql")
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/admin_login', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Admin Not Found"
        })
        return
    }
    sqlFuncs.adminLogin(req.body.adminId, req.body.adminPassword).then((data)=>{
        res.status(200).send({
            status: "success",
            msg: "Login success"
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Admin Not Found"
        })
    })
})

app.post('/staff_login', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
        return
    }
    sqlFuncs.staffLogin(req.body.staffId, req.body.staffPassword).then((data)=>{
        res.status(200).send({
            status: "success",
            msg: "Login success"
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
    })
})

app.post('/get_staff', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
        return
    }
    sqlFuncs.getStaff(req.body.staffId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
    })
})

app.post('/del_staff', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
        return
    }
    sqlFuncs.delStaff(req.body.staffId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
    })
})

app.post('/add_modify_staff', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
        return
    }
    sqlFuncs.addModifyStaff(req.body).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
    })
})

app.post('/get_department', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Department Not Found"
        })
        return
    }
    sqlFuncs.getDepartment(req.body.staffId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Department Not Found"
        })
    })
})

app.post('/del_department', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
        return
    }
    sqlFuncs.delStaff(req.body.staffId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
    })
})

app.post('/add_modify_department', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Department Not Found"
        })
        return
    }
    sqlFuncs.addModifyDepartment(req.body).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Department Not Found"
        })
    })
})

app.post('/get_leaves', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Leave Not Found"
        })
        return
    }
    sqlFuncs.getLeaves(req.body.staffId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Leave Not Found"
        })
    })
})

app.post('/del_leaves', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Leave Not Found"
        })
        return
    }
    sqlFuncs.delLeaves(req.body.leavesId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Staff Not Found"
        })
    })
})

app.post('/add_modify_leaves', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "leave Not Found"
        })
        return
    }
    sqlFuncs.addModifyLeaves(req.body).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Leave Not Found"
        })
    })
})

app.post('/get_payroll', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Payroll Not Found"
        })
        return
    }
    sqlFuncs.getPayroll
    (req.body.payrollId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Leave Not Found"
        })
    })
})

app.post('/del_payroll', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Payroll Not Found"
        })
        return
    }
    sqlFuncs.delLeaves(req.body.payrollId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Payroll Not Found"
        })
    })
})

app.post('/add_modify_payroll', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "payroll Not Found"
        })
        return
    }
    sqlFuncs.addModifyPayroll(req.body).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Payroll Not Found"
        })
    })
})

app.post('/get_paygrade', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Paygrade Not Found"
        })
        return
    }
    sqlFuncs.getPaygrade(req.body.payrollId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Paygrade Not Found"
        })
    })
})

app.post('/del_paygrade', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "Paygrade Not Found"
        })
        return
    }
    sqlFuncs.delPaygrade(req.body.paygradeId).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Paygrade Not Found"
        })
    })
})

app.post('/add_modify_paygrade', (req, res)=>{
    if(!req.body){
        res.status(500).send({
            status: "Error",
            msg: "paygrade Not Found"
        })
        return
    }
    sqlFuncs.addModifyPaygrade(req.body).then((data)=>{
        res.status(200).send({
            status: "success",
            data
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({
            status: "Error",
            msg: "Paygrade Not Found"
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})