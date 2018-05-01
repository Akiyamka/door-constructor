import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState({
    lock: state => state.fittings.lock,
    outsideKnob: state => state.fittings.outsideKnob,
    insideKnob: state => state.fittings.insideKnob
  }),
  methods: mapMutations(['setLock', 'setOutsideKnob', 'setInsideKnob'])
};
