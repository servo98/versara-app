import axios from '../../utils/http';
import { FIND_QUESTIONS } from '../actions/question';

const state = {
    questionsProfile: [],
    questionsScore: [],
};

const getters = {
    questionsProfile: state => state.questionsProfile,
    questionsScore: state => state.questionsScore,
};

const actions = {
    [FIND_QUESTIONS]: ({ commit, state }, params) => {
        const promise = new Promise((resolve, reject) => {
            const questions = [];
            axios.get(`/questions`).then((resp) => {
                questions.push(resp.data);
                axios.get(`/questions/2`).then((resp) => {
                    questions.push(resp.data);
                    commit(FIND_QUESTIONS, questions);
                    resolve(questions);
                }).catch((error) => {
                    reject(error);
                });
            }).catch((error) => {
                reject(error);
            });
        });
        return promise;
    },
};

const mutations = {
    [FIND_QUESTIONS]: (state, resp) => {
        [state.questionsScore, state.questionsProfile] = resp;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
