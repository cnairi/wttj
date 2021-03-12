import axios from 'axios'

import { API_CALL, FETCH_JOBS } from '../constants'

export const fetchJobsApiCall = () => axios.get(API_CALL)

export const fetchJobs = () => {
  return dispatch => {
    fetchJobsApiCall()
      .then(response => {
        dispatch({
          type: FETCH_JOBS,
          payload: {
            jobsList: response.data.jobs,
            jobsTypes: Array.from(new Set(response.data.jobs.map(job => job.contract_type.en))),
            jobsOffices: Array.from(new Set(response.data.jobs.map(job => job.office.name))),
            jobsDepartments: Array.from(
              new Set(response.data.jobs.map(job => job.department.name))
            ),
          },
        })
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log('error:: ', error))
  }
}
