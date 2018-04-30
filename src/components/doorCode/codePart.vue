<template functional>
  <div
    :class="[{ active: props.activeBlock === props.blockName }, 'code-part', props.addClass]"
    @click="props.setAction(props.blockName)">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
