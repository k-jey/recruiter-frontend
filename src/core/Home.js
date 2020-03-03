import React, { useState,useEffect } from 'react'
import Layout from './Layout'
import { getAllJobs } from '../api'

const Home = () => {

    const [jobList, setJobList] = useState([])
    const [error, setError] = useState(false)

    const loadJobs = () => {
        getAllJobs().then((data) => {
            if (data.error) {
                setError(data.error)
            } else {
                setJobList(data)
            }
            console.log(data)
        })
    }

    useEffect(() => {
        loadJobs()
    }, [])

    return (
        <Layout title="Job Listing" description="All the Jobs" className="container-fluid">
            <h2 className="mb-4">ALL AVAILABLE JOBS</h2>
            <div className="card-deck">
                {jobList.map((job, index) => (
                    <div className="card" key={index}>
                        <img />
                        <div className="card-body">
                            <h5 className="card-title">{job.title}</h5>
                            <h6 >{job.location}</h6>
                            <p className="card-text">{job.description}</p>
                            <p className="card-text"><small className="text-muted">{job.createdAt}</small></p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Home