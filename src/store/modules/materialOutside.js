import constants from '@/data/';

export default {
  namespaced: true,
  state: {
    leaf: constants.materialColor[0].value,
    jamb: constants.materialColor[0].value,
    onlay: constants.materialColor[0].value,
    glass: constants.glass[0].value
  },
  mutations: {
    setLeaf(state, leaf) {
      state.leaf = leaf;
    },
    setJamb(state, jamb) {
      state.jamb = jamb;
    },
    setOnlay(state, onlay) {
      state.onlay = onlay;
    },
    setGlass(state, glass) {
      state.glass = glass;
    }
  }
};
