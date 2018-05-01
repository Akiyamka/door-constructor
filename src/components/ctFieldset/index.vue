<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  props: {
    label: String,
    blockType: String,
    block: Object,
    blockClass: String
  },
  computed: mapState({
    activeBlock: state => state.activeBlock
  }),
  methods: mapMutations(['setActiveBlock'])
};
</script>

<template>
  <div :class="['fieldset', blockClass, { active: activeBlock === blockType }]">
      <legend>{{ label }}</legend>
      <component :is="block" @focus="setActiveBlock(blockType)"></component>
  </div>
</template>

<style scoped src="./index.css">
</style>
