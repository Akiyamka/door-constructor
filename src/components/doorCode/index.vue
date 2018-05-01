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
<script src="./main.js"></script>
<style scoped src="./index.css"></style>
