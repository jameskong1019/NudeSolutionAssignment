import axios from "axios";

const baseUrl = "http://localhost:55046/api/";

export default {
    item(url = baseUrl + 'Items/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newItem => axios.post(url, newItem),
            delete: id => axios.delete(url + id)
        }
    },
    category(url = baseUrl + 'Categories/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newItem => axios.post(url, newItem),
            delete: id => axios.delete(url + id)
        }
    }
}