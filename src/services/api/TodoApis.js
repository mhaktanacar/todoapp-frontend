import axios from 'axios'

export default {

    getAllLists() {
        axios.get('/api/todolists/')
            .then(response => { return response.data });
    },


    getList(id) {
        axios.get('/api/todolists/' + id)
            .then(response => { return response.data });
    },

    getListElement(id) {
        axios.get('/api/todoelement/' + id)
            .then(response => { return response.data });
    }


}