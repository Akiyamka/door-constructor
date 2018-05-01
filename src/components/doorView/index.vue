<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  props: {},
  components: {},
  computed: mapState({
    store: state => state
  }),
  methods: {
    ...mapMutations(['setActiveBlock']),
  }
};
</script>

<template>
  <div class="door-view">
    <div class="door-model">
      <div class="container">
        <div class="side back"></div>
        <div class="side left"></div>
        <div class="side right"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
        <div class="side front"></div>
      </div>
    </div>
    <div class="controls"></div>
  </div>
</template>

<style scoped lang='stylus' src="./index.styl"></style>
