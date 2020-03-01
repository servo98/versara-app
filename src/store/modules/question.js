import axios from '../../utils/http';
import { FIND_QUESTIONS } from '../actions/question';

const state = {
    questions: [],
};

const getters = {
    questions: state => state.questions,
};

const actions = {
    [FIND_QUESTIONS]: ({ commit, state }, params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('/questions').then((resp) => {
                resolve(resp.data);
                commit(FIND_QUESTIONS, resp.data)
            }).catch((error) => {
                reject(error);
            });
        });
        return promise;
    },
};

const mutations = {
    [FIND_QUESTIONS]: (state, resp) => {
        state.questions = resp;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
