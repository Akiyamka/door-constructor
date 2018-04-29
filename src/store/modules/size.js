export default {
  state: {
    height: '0',
    width: '0'
  },
  mutations: {
    setHeight(state, height) {
      state.height = height;
    },
    setWidth(state, width) {
      state.width = width;
    }
  }
};
