<script>
// @ is an alias to /src
import constants from '@/data/';
import ctFieldset from '@/components/ctFieldset';
import blockSeries from '@/components/blockSeries';
import blockDesigns from '@/components/blockDesigns';
import blockFittings from '@/components/blockFittings';
import blockMaterialOutside from '@/components/blockMaterialOutside';
import blockMaterialInside from '@/components/blockMaterialInside';
import blockBox from '@/components/blockBox';
import blockSizes from '@/components/blockSizes';

export default {
  name: 'home',
  components: {
    ctFieldset,
    blockSeries,
    blockDesigns,
    blockFittings,
    blockMaterialOutside,
    blockMaterialInside,
    blockBox,
    blockSizes
  },
  created() {
    this.$constants = constants;
  },
  data: () => ({
    selected: 1
  }),
  computed: {
    artCode() {
      return this.selected;
    }
  }
};
</script>

<template>
  <section class="constructor-grid">

    <aside class="constructor-grid__side-menu">
      <ct-fieldset label="Серия">
        <block-series />
      </ct-fieldset>
      <ct-fieldset label="Дизайн">
        <block-designs />
      </ct-fieldset>
      <ct-fieldset label="Фарнитура">
        <block-fittings />
      </ct-fieldset>
      <ct-fieldset label="Полотно снаружи">
        <block-material-outside />
      </ct-fieldset>
      <ct-fieldset label="Полотно внутри">
        <block-material-inside />
      </ct-fieldset>
      <ct-fieldset label="Коробка">
        <block-box />
      </ct-fieldset>
      <ct-fieldset label="Габариты">
        <block-sizes />
      </ct-fieldset>
    </aside>

    <section class="constructor-grid__top-bar">
      <!-- <DoorCodeContainer />
      <CopyToClipboardBtn /> -->
    </section>
    <section class="constructor-grid__main-field">
      <!-- <MainView /> -->
    </section>

  </section>
</template>

<style lang="stylus">
.constructor-grid
  display: grid
  height: 100%
  grid-template-columns: minmax(320px, 0.7fr) 3fr
  grid-template-rows: 62px 1fr
  grid-template-areas: 'aside topbar' 'aside main'

  &__side-menu
    display: flex
    flex-flow: column nowrap
    border-right: var(--main-border-style)
    height: 100%
    overflow: auto
    grid-area: aside


  &__top-bar
    grid-area: topbar
    display: flex
    border-bottom: var(--main-border-style)
    align-items: center
    padding: 0 var(--gutter-size-x)

  .main-field
    grid-area: main

  .form-unit
    display: flex
    flex-flow: column nowrap
    padding: var(--gutter-size-xs) 0

    label
      font-size: var(--font-size-xs)
      font-weight: 600
      margin-bottom: var(--gutter-size-xs)
      opacity: 0.8

    .el-select
      width: 100%

</style>
