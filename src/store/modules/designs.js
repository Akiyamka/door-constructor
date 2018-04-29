export default {
  state: {
    designOutside: 'A1',
    designInside: 'A1'
  },
  mutations: {
    setDesignOutside(state, design) {
      state.designOutside = design;
    },
    setDesignInside(state, design) {
      state.designInside = design;
    }
  }
};
