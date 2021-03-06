import axios from '../../utils/http';
import { PAY_CREDIT, FIND_ONE_CREDIT, CALCULATE_CREDIT } from '../actions/credit';

const state = {
    credit: [],
};

const getters = {
    credit: state => state.credit,
};

const actions = {
    [PAY_CREDIT]: ({ commit, state }, params) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('/credit/pay', params).then((resp) => {
                resolve(resp.data);
            }).catch((error) => {
                reject(error);
            });
        });
        return promise;
    },
    [CALCULATE_CREDIT]: ({ commit, state }, params) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('/credit/calculate', params).then((resp) => {
                resolve(resp.data);
            }).catch((error) => {
                reject(error);
            });
        });
        return promise;
    },
};

const mutations = {
    [PAY_CREDIT]: (state, resp) => {
        state.credit = resp.data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
