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
            axios.post('/prospectus', params.prospectus).then((resp) => {
                resolve(resp.result);
                commit(CREATE_PROSPECT,resp.result)
            }).catch((error) => {
                reject(error);
            });
        });
        return promise;
    },
};

const mutations = {
    [CREATE_PROSPECTUS]: (state, resp) => {
        state.prospect = resp;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
