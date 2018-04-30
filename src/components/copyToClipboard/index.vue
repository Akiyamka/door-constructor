<script>
import { mapMutations, mapState } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState({
    store: state => state
  }),
  methods: mapMutations(['copyToClipboard'])
};
</script>

<template>
    <el-button
      type="primary"
      icon="el-icon-download"
      size="small"
      @click="copyToClipboard"
      ></el-button>
</template>

<style scoped>
</style>
