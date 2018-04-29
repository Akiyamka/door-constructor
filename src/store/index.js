import Vue from 'vue';
import Vuex from 'vuex';

import series from './modules/series';
import designs from './modules/designs';
import fittings from './modules/fittings';
import materialOutside from './modules/materialOutside';
import materialInside from './modules/materialInside';
import box from './modules/box';
import size from './modules/size';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    series,
    designs,
    fittings,
    materialOutside,
    materialInside,
    box,
    size
  },
  state: {
    activeBlock: undefined
  },
  mutations: {
    setActiveBlock(state, block) {
      state.activeBlock = block;
    }
  },
  actions: {}
});
