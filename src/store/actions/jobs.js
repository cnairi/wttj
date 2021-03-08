import axios from 'axios'

export const FETCH_JOBS = 'FETCH_JOBS'

export const fetchJobs = () => {
  return dispatch => {
    axios
      .get('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k')
      .then(response => {
        dispatch({
          type: FETCH_JOBS,
          payload: {
            jobsList: response.data.jobs,
            jobsTypes: Array.from(new Set(response.data.jobs.map(job => job.contract_type.en))),
          },
        })
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log('error:: ', error))
  }
}
