import React, { useState } from 'react'



export default function VtdFormUser({onVtdAddNew}) {
    const [id, setVtdId] = useState('')
    const [vtdFullName, setVtdFullName] = useState('')
    const [vtdUserName, setVtdUserName] = useState('')
    const [vtdPass, setVtdPass] = useState('')


     const vtdHandleSubmit = (ev) =>{
        ev.preventDefault()
        console.log(id,vtdFullName,vtdUserName,vtdPass);
        
        onVtdAddNew({id,vtdFullName,vtdUserName,vtdPass})
    }
  return (
    <div>
        <form>
            <p>Mã Sinh Viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setVtdId(ev.target.value)}/>
            </p>
            <p>Họ Và Tên:
                <input type='text'  name='vtdFullName' value={vtdFullName} onChange={(ev)=>setVtdFullName(ev.target.value)}  />
            </p>
            <p>Tài Khoản:
                <input type='text'  name='vtdUserName' value={vtdUserName} onChange={(ev)=>setVtdUserName(ev.target.value)} />
            </p>
            <p>Mật Khẩu:
                <input type='password'   name='vtdPass' value={vtdPass}  onChange={(ev)=>setVtdPass(ev.target.value)} />
            </p>

            <p>
                <button name='vtdSave' onClick={vtdHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
