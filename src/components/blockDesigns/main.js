import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState({
    designOutside: state => state.designs.designOutside,
    designInside: state => state.designs.designInside
  }),
  methods: mapMutations([
    'setDesignOutside',
    'setDesignInside',
    'setDoorPosition'
  ])
};
