<template>
  <div class="fieldset">
      <legend>{{ label }}</legend>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String
  }
};
</script>

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
