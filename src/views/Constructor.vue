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
import doorCode from '@/components/doorCode';
import blocks from '@/data/blocks';
import copyToClipboard from '@/components/copyToClipboard';
import doorView from '@/components/doorView';

export default {
  name: 'home',
  components: {
    ctFieldset,
    doorCode,
    copyToClipboard,
    doorView
  },
  beforeCreate() {
    this.$constants = constants;
    this.$blocks = blocks;
  },
  data: () => ({
    selected: 1,
    blockSeries,
    blockDesigns,
    blockFittings,
    blockMaterialOutside,
    blockMaterialInside,
    blockBox,
    blockSizes
  }),
  computed: {
    artCode() {
      return this.selected;
    },
    form() {
      return [
        {
          label: 'Серия',
          type: this.$blocks && this.$blocks.BLOCK_SERIES,
          block: this.blockSeries,
          class: 'series'
        },
        {
          label: 'Дизайн',
          type: this.$blocks && this.$blocks.BLOCK_DESIGN,
          block: this.blockDesigns,
          class: 'design'
        },
        {
          label: 'Фурнитура',
          type: this.$blocks && this.$blocks.BLOCK_FITTINGS,
          block: this.blockFittings,
          class: 'fittings'
        },
        {
          label: 'Полотно снаружи',
          type: this.$blocks && this.$blocks.BLOCK_MATERIAL_OUTSIDE,
          block: this.blockMaterialOutside,
          class: 'material'
        },
        {
          label: 'Полотно внутри',
          type: this.$blocks && this.$blocks.BLOCK_MATERIAL_INSIDE,
          block: this.blockMaterialInside,
          class: 'material'
        },
        {
          label: 'Коробка',
          type: this.$blocks && this.$blocks.BLOCK_BOX,
          block: this.blockBox,
          class: 'box'
        },
        {
          label: 'Габариты',
          type: this.$blocks && this.$blocks.BLOCK_SIZES,
          block: this.blockSizes,
          class: 'size'
        }
      ];
    }
  }
};
</script>

<template>
  <section class="constructor-grid">
    <aside class="constructor-grid__side-menu">

      <ct-fieldset
        v-for="fildset in form"
        :label="fildset.label"
        :blockType="fildset.type"
        :block="fildset.block"
        :key="fildset.type"
        :block-class="fildset.class"
        >
      </ct-fieldset>

    </aside>

    <section class="constructor-grid__top-bar">
      <door-code />
      <copy-to-clipboard />
    </section>
    <section class="constructor-grid__main-field">
      <door-view />
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
