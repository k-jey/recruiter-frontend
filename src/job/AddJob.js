import React, { useState } from 'react'
import Layout from '../core/Layout'
import { isAuthentcated } from '../api' 
import { createJob } from '../api'

const CreateJob = () => {
    const [values, setValues] = useState({
        title: '',
        location : '',
        description: '',
        loading: false,
        error: '',
        createdJob: ''
    })

    const { user, token } = isAuthentcated()
    const {
        title,
        location,
        description,
        loading,
        error,
        createdJob
    } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: '', loading: true })

        createJob(token, { title, location, description }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({
                    ...values,
                    title: '',
                    location: '',
                    description: '',
                    photo: '',
                    loading: false,
                    createdJob: data.title
                })
            }
        })
    }

    const newPostForm = () => (
        <form className="md-3" onSubmit={clickSubmit}>
            
            <div className="form-group">
                <label className="text-muted">Job Title</label>
                <input onChange={handleChange('title')} type="text" className="form-control" value={title} />  
            </div>
            <div className="form-group">
                <label className="text-muted">Location</label>
                <textarea onChange={handleChange('location')} className="form-control" value={location} />  
            </div>
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />  
            </div>
            <button className="btn btn-outline-primary">
                Create Job
            </button>
        </form>
    )

    const showSuccess = () => (
        <div className="alert alert-info"
        style={{ display: createdJob ? '' : 'none' }}>
        <h2>{`${createdJob} is created!`}</h2>
        </div>
    )

    const showError = () => (
        <div className="alert alert-danger"
        style={{ display: error ? '' : 'none' }}>
        {error}
        </div>
    )

    const showLoading = () => (
        loading && (<div className="alert alert-success"><h2>Loading...</h2></div>)
    )

    return (
        <Layout title="Create Job" description={`Hi ${user.name}!, Please add new Job`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    )
}

export default CreateJob