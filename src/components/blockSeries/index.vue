<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex'
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState({
    series: state => state.series.series
  }),
  methods: mapMutations([
    'setSeries'
  ])
};
</script>

<template>
  <div>
    <div class="form-unit">
      <el-select
        :value="series"
        @change="setSeries">
        <el-option
          v-for="item in $constants.doorSeries"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>