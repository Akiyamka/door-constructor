<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import blocks from '@/data/blocks';
import constants from '@/data';

export default {
  props: {},
  components: {},
  created() {
    this.$constants = constants;
    this.$blocks = blocks;
  },
  data:() => ({}),
  computed: {
    ...mapState({
        store: state => state
      }),
      currentInsideSkin() {
        const skin = this.$constants.designs.find(s => s.value === this.store.designs.designInside);
        return skin && skin.path ? require('@/assets' + skin.path) : '';
      },
      currentOutsideSkin() {
        const skin = this.$constants.designs.find(s => s.value === this.store.designs.designOutside);
        return skin && skin.path ? require('@/assets' + skin.path) : '';
      },
      currentInsideColor() {
        const material = this.$constants.materialColor.find(m => m.value === this.store.materialInside.leaf);
        return material && material.color ? material.color : 'gray';
      },
      currentOutsideColor() {
        const material = this.$constants.materialColor.find(m => m.value === this.store.materialOutside.leaf);
        return material && material.color ? material.color : 'gray';
      },
      getOutsideStyle() {
        /* https://stackoverflow.com/questions/27812161/how-do-i-define-or-reference-a-variable-in-svg */
        const qSOptions = {
          glass: '#008000'
        };

        return `${
            this.currentOutsideSkin
          }?${
            // Create query string foo=bar&baz=bug
            Object.keys(qSOptions).map(key => `${ key }=${ qSOptions[key] }`).join('&')
          }`;
      },
      rotation() {
         return {
          front: 0,
          back: 180,
        }[this.store.doorPosition]
      },
  },
  methods: {
    ...mapMutations(['setActiveBlock', 'setDoorPosition']),
    changeDoorSide() {
      this.setDoorPosition(this.rotation >= 180 ? 'front' : 'back')
    }
  }
};
</script>

<template>
  <div class="door-view">
    <div class="door-model">
      <div class="container"
           :style="{
             'transform': 'rotateY(' + rotation + 'deg)',
           }"
        >
        <div class="side back" :style="{
          'background': currentInsideColor,
          }">
          <object type="image/svg+xml" :data="currentInsideSkin">Your browser does not support SVGs</object>
          </div>
        <div class="side left"></div>
        <div class="side right"></div>
        <div class="side top"></div>
        <div class="side bottom"></div>
        <div class="side front" :style="{
          'background': currentOutsideColor,
          }">
            <object type="image/svg+xml" :data="getOutsideStyle">Your browser does not support SVGs</object>
          </div>
          <div class="shadow"></div>
      </div>

    </div>
    <div class="controls">
       <img class="rotate" src="../../assets/rotating-circular-arrow.svg" alt="rotate" @click.capture="changeDoorSide">
    </div>
  </div>
</template>

<style scoped lang='stylus' src="./index.styl"></style>
