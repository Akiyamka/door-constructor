import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState('materialOutside', {
    leaf: state => state.leaf,
    jamb: state => state.jamb,
    onlay: state => state.onlay,
    glass: state => state.glass
  }),
  methods: mapMutations('materialOutside', [
    'setLeaf',
    'setJamb',
    'setOnlay',
    'setGlass'
  ])
};