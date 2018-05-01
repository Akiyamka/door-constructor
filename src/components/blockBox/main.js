import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState({
    material: state => state.box.material,
    install: state => state.box.install
  }),
  methods: mapMutations(['setBoxMaterial', 'setBoxInstall'])
};
