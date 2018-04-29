import constants from '@/data/';

export default {
  state: {
    lock: constants.locks[0].value,
    outsideKnob: constants.knobs[0].value,
    insideKnob: constants.knobs[0].value
  },
  mutations: {
    setLock(state, lock) {
      state.lock = lock;
    },
    setOutsideKnob(state, knob) {
      state.outsideKnob = knob;
    },
    setInsideKnob(state, knob) {
      state.insideKnob = knob;
    }
  }
};
