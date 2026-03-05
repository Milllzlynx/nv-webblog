import axios from 'axios'
import { useAuthenStore } from '../stores/authen'

export default () => {
    const authenStore = useAuthenStore()

    return axios.create({
        baseURL: 'http://43.208.3.0:8081/',
        headers: {
            Authorization: `Bearer ${authenStore.token}`
        }
    })
}