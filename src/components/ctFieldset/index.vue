<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  props: {
    label: String,
    blockType: String,
  },
  computed: mapState({
    activeBlock: state => state.activeBlock
  }),
  methods: {
    ...mapMutations(['setActiveBlock']),
    catchFocus() {
      console.log('Focus event')
    }
  }
};
</script>

<template>
  <div
      :class="['fieldset', { active: activeBlock === blockType }]"
      @focus="(e) => console.log(e)">
      <legend>{{ label }}</legend>
      <slot :catchFocus="catchFocus"></slot>
  </div>
</template>

<style scoped lang="stylus">
.fieldset
  padding: var(--gutter-size-x) calc(var(--gutter-size-xl) * 0.75)
  border-left: 10px solid

  legend
    display: block
    max-width: 100%
    padding-left: 0
    padding-bottom: var(--gutter-size-xs)
    padding-top: var(--gutter-size-xs)
    white-space: normal
    font-size: var(--font-size-xl)

</style>
