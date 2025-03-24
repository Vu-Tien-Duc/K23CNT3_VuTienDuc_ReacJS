import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function VtdEditUser() {
    const vtduser = {
            id: 0,
            'vtd_name': '',
            'vtd_email': '',
            'vtd_phone': '',
            'vtd_active': true,
        }
    
        const [vtd_user, setVtd_user] = useState(vtduser)
    
        const vtdAPI = "https://67da684535c87309f52c47da.mockapi.io/vtd_users/vtd_user"
    
        const {id} = useParams()
        useEffect(() => {
            axios.get(vtdAPI+'/'+`${id}`)
                .then(vtd_response => {
                    console.log(vtd_response.data);
                    setVtd_user(vtd_response.data)
                })
                .catch(error => {
                    console.log(error);
    
                });
        }, [])
        const navigate = useNavigate()
        const vtdHandleSubmit = (ev) => {
            ev.preventDefault()
            axios
            .post(vtdAPI,vtd_user)
            .then(()=>{
                navigate('/vtd-list-user')
            })
        }
  return (
    <div>
        <h2>Sửa thông tin user</h2>
        <form >


                <div className="mb-3">
                    <label htmlFor="vtd_name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="vtd_name"
                        id="vtd_name"
                        placeholder="Vui lòng nhập tên của bạn"
                        className="form-control"
                        onChange={(ev) => setVtd_user({ ...vtd_user, vtd_name: ev.target.value })}
                        value={vtd_user.vtd_name}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vtd_email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="vtd_email"
                        id="vtd_email"
                        placeholder="Vui lòng nhập email của bạn"
                        className="form-control"
                        onChange={(ev) => setVtd_user({ ...vtd_user, vtd_email: ev.target.value })}
                        value={vtd_user.vtd_email}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vtd_phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        name="vtd_phone"
                        id="vtd_phone"
                        placeholder="Vui lòng nhập số điện thoại của bạn"
                        className="form-control"
                        onChange={(ev) => setVtd_user({ ...vtd_user, vtd_phone: ev.target.value })}
                        value={vtd_user.vtd_phone}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label mx-3">Active</label>

                    <div className="form-check d-inline-block me-3">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="vtd_active"
                            id="vtd_active_hd"
                            value="true"
                            checked={vtd_user.vtd_active === true}
                            onChange={(ev) => setVtd_user({ ...vtd_user, vtd_active: ev.target.value === 'true' })}
                        />
                        <label className="form-check-label" htmlFor="vtd_active_hd">Hoạt Động</label>
                    </div>

                    <div className="form-check d-inline-block">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="vtd_active"
                            id="vtd_active_kh"
                            value="false"
                            checked={vtd_user.vtd_active === false}
                            onChange={(ev) => setVtd_user({ ...vtd_user, vtd_active: ev.target.value === 'true' })}
                        />
                        <label className="form-check-label" htmlFor="vtd_active_kh">Khóa</label>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary mx-3" onClick={vtdHandleSubmit}>Create</button>
                <Link to={'/vtd-list-user'} >
                    <button type="submit" className="btn btn-info">Back</button>
                </Link>
            </form>
    </div>
  )
}
