import React from 'react'
import Layout from '../core/Layout'
import { isAuthentcated } from '../api'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {

    const {user: { _id, name, email, role }} = isAuthentcated()

    const adminLinks = () => {
        return (
            <div className="card">
                <h3 className="card-header">Admin Links</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/addJob">Create Job</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{ name }</li>
                    <li className="list-group-item">{ email }</li>
                    <li className="list-group-item">{ role === 1 ? "Admin" : "Registed User" }</li>
                </ul>
            </div>
        )
    }

    return (
        <Layout title="Dashboad" description={`Hi ${name}!`} className="container-fluid">
            <div className="row">
                <div className="col-3">
                    {adminLinks()}
                </div>
                <div className="col-9">
                    {adminInfo()}
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard