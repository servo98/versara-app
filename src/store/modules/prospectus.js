import axios from '../../utils/http';
import { CREATE_PROSPECTUS } from '../actions/prospectus';

const state = {
    prospectus: [],
};

const getters = {
    prospectus: state => state.prospectus,
};

const actions = {
    [CREATE_PROSPECTUS]: ({ commit, state }, params) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('/prospectus', params).then((resp) => {
                console.log(resp);
                resolve(resp);
                commit(CREATE_PROSPECTUS, resp)
            }).catch((error) => {
                reject(error);
            });
        });
        return promise;
    },
};

const mutations = {
    [CREATE_PROSPECTUS]: (state, resp) => {
        state.prospectus = resp;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
