<script>
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
</script>

<template>
  <div class="door-code">

    <code-part
      addClass="series"
      :activeBlock="store.activeBlock"
      :blockName="$blocks.BLOCK_SERIES"
      :setAction="setActiveBlock">
      <span>{{ getSeriesName(store.series.series) }}</span>
    </code-part>

    <code-part
      addClass="design"
      :activeBlock="store.activeBlock"
      :blockName="$blocks.BLOCK_DESIGN"
      :setAction="setActiveBlock">
      <span>{{ store.designs.designOutside || '-' }}</span>
      <span>{{ store.designs.designInside || '-' }}</span>
    </code-part>

    <code-part
      addClass="fittings"
      :activeBlock="store.activeBlock"
      :blockName="$blocks.BLOCK_FITTINGS"
      :setAction="setActiveBlock">
      <span>{{ store.fittings.outsideKnob || '-' }}</span>
      <span>{{ store.fittings.insideKnob || '-' }}</span>
      <span>{{ store.fittings.lock || '-' }}</span>
    </code-part>

    <code-part
      addClass="materialOutside"
      :activeBlock="store.activeBlock"
      :blockName="$blocks.BLOCK_MATERIAL_OUTSIDE"
      :setAction="setActiveBlock">
      <span>{{ store.materialOutside.leaf || '-' }}</span>.
      <span>{{ store.materialOutside.onlay || '-' }}</span>.
      <span>{{ store.materialOutside.jamb || '-' }}</span>.
      <span>{{ store.materialOutside.glass || '-' }}</span>
    </code-part>

    <code-part
      addClass="materialInside"
      :activeBlock="store.activeBlock"
      :blockName="$blocks.BLOCK_MATERIAL_INSIDE"
      :setAction="setActiveBlock">
      <span>{{ store.materialInside.leaf || '-' }}</span>.
      <span>{{ store.materialInside.onlay || '-' }}</span>.
      <span>{{ store.materialInside.jamb || '-' }}</span>.
      <span>{{ store.materialInside.glass || '-' }}</span>
    </code-part>

    <code-part
      addClass="box"
      :activeBlock="store.activeBlock"
      :blockName="$blocks.BLOCK_BOX"
      :setAction="setActiveBlock">
      <span>{{ store.box.material || '-' }}</span>
      <span>{{ store.box.install || '-' }}</span>
    </code-part>

    <code-part
      addClass="size"
      :activeBlock="store.activeBlock"
      :blockName="$blocks.BLOCK_SIZES"
      :setAction="setActiveBlock">
      <span>{{ Math.round(store.size.height * 0.01) || '-' }}</span>
      <span>{{ Math.round(store.size.width * 0.01) || '-' }}</span>
    </code-part>

  </div>

</template>

<style scoped>
.door-code {
  width: 100%;
  /* padding: var(--gutter-size-x); */
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.door-code span {
  display: inline-block;
  padding: calc(var(--gutter-size-xs) / 2) calc(var(--gutter-size-xs) / 2);
}

.code-part {
  cursor: pointer;
  border-bottom: 2px solid;
  margin: 0 2px;
  border-radius: 2px;
}

.code-part.series {
  border-color: rgba(var(--color-series-block), 1);
}

.code-part.series:hover,
.code-part.series.active {
  background-color: rgba(var(--color-series-block), 0.3);
}

.code-part.design {
  border-color: rgba(var(--color-design-block), 0.4);
}

.code-part.design:hover,
.code-part.design.active {
  background-color: rgba(var(--color-design-block), 0.25);
}

.code-part.fittings {
  border-color: rgba(var(--color-fittings-block), 0.3);
}

.code-part.fittings:hover,
.code-part.fittings.active {
  background-color: rgba(var(--color-fittings-block), 0.15);
}

.code-part.materialInside,
.code-part.materialOutside {
  border-color: rgba(var(--color-material-block), 0.3);
}

.code-part.materialInside:hover,
.code-part.materialOutside:hover,
.code-part.materialInside.active,
.code-part.materialOutside.active {
  background-color: rgba(var(--color-material-block), 0.15);
}

.code-part.box {
  border-color: rgba(var(--color-box-block), 0.3);
}

.code-part.box:hover,
.code-part.box.active {
  background-color: rgba(var(--color-box-block), 0.15);
}

.code-part.size {
  border-color: rgba(var(--color-size-block), 0.3);
}

.code-part.size:hover,
.code-part.size.active {
  background-color: rgba(var(--color-size-block), 0.15);
}
</style>
