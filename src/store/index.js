import Vue from 'vue';
import Vuex from 'vuex';

import series from './modules/series';
import designs from './modules/designs';
import fittings from './modules/fittings';
import materialOutside from './modules/materialOutside';
import materialInside from './modules/materialInside';
import box from './modules/box';
import size from './modules/size';

import copy from 'clipboard-copy';

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
    activeBlock: undefined,
    doorPosition: 'front'
  },
  mutations: {
    setActiveBlock(state, block) {
      state.activeBlock = block;
    },
    setDoorPosition(state, position) {
      state.doorPosition = position;
    },
    copyToClipboard(state) {
      const currentCode = [
        state.series.series,
        state.designs.designOutside,
        state.designs.designInside,
        state.fittings.lock,
        state.fittings.outsideKnob,
        state.fittings.insideKnob,
        '(',
        [
          state.materialOutside.leaf,
          state.materialOutside.onlay,
          state.materialOutside.jamb,
          state.materialOutside.glass
        ]
          .map(i => i || '?')
          .join('.'),
        '/',
        [
          state.materialInside.leaf,
          state.materialInside.onlay,
          state.materialInside.jamb,
          state.materialInside.glass
        ]
          .map(i => i || '?')
          .join('.'),
        '-',
        state.box.material,
        state.box.install,
        state.size.width,
        state.size.height,
        ')'
      ]
        .map(i => i || '?')
        .join('');

      copy(currentCode);
    }
  },
  actions: {}
});
