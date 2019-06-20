import axios from 'axios'


const state = {
    users: [],
    userImages: [],
    userStat: [],
    params: {
        limit: 10
    },
    pagination: {
        perPage: 10,
        total: 0,
        pages: 1,
        currPage: 1,
    }
}

const getters = {
    allUsers: state => state.users,
    pages: state => state.pagination.pages,
    limit: state => state.params.limit,
    allImages: state => state.userImages,
    imageURI: (state, getters) => (id) => {
        const image = state.userImages.find(e => e.avatar.id == id)
        if (image != undefined) return image.avatar.image 
    },
    userStat: (state, getters) => (id) => {
        const stat = state.userStat.find(e => e.stat.id == id)
        if (stat != undefined) return stat.stat.stat
    }
}

const actions = {
    async fetchUsers({ commit }){
        const queryString = Object.keys(state.params).map(key => key + '=' + state.params[key]).join('&');
        const response = await axios.get('http://localhost:5000/api/v1/users?' + queryString)
        commit('setUsers', response.data)
    },
    async setImage({ commit }, id){
        const response = await axios.get(`http://localhost:5000/api/v1/${id}/avatar`)
        commit('setImage', response.data)
    },
    async addParam({ commit }, param){
        commit('addParam', param)
    },
    async setStat({ commit }, id){
        const response = await axios.get(`http://localhost:5000/api/v1/${id}/stat`)
        commit('setStat', response.data)
    }
}

const mutations = {
    setUsers(state, data){
        state.users = data.users
        state.pagination.total = data.length
        state.pagination.pages = data.chunks
    },
    setStat: (state, stat) => state.userStat.puth(stat),
    addParam: (state, param) => Object.assign(state.params, param),
    setImage: (state, image) => state.userImages.push(image),
    setStat: (state, stat) => state.userStat.push(stat)
}

export default {
    state,
    getters,
    actions,
    mutations
}