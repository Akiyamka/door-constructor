export default {
  state: {
    material: '0',
    install: '0'
  },
  mutations: {
    setBoxMaterial(state, material) {
      state.material = material;
    },
    setBoxInstall(state, install) {
      state.install = install;
    }
  }
};
