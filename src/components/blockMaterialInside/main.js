import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState('materialInside', {
    leaf: state => state.leaf,
    jamb: state => state.jamb,
    onlay: state => state.onlay,
    glass: state => state.glass
  }),
  methods: {
    ...mapMutations('materialInside', [
      'setLeaf',
      'setJamb',
      'setOnlay',
      'setGlass'
    ]),
    ...mapMutations(['setDoorPosition'])
  }
};
