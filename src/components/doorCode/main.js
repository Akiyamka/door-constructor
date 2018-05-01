import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import constants from '@/data/';
import blocks from '@/data/blocks';
import codePart from './codePart';

export default {
  props: {},
  components: {
    codePart
  },
  created() {
    this.$constants = constants;
    this.$blocks = blocks;
  },
  computed: mapState({
    store: state => state
  }),
  methods: {
    ...mapMutations(['setActiveBlock']),
    getSeriesName(id) {
      const seriesName = this.$constants.doorSeries.find(s => s.value === id);
      return seriesName ? seriesName.label : '-';
    }
  }
};
