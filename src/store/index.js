import Vue from 'vue'
import Vuex from 'vuex'

import credit from './modules/credit';
import prospectus from './modules/prospectus';
import question from './modules/question';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        credit,
        prospectus,
        question
    }
})
