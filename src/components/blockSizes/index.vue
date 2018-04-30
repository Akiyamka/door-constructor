<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  props: {},
  computed: {
    ...mapState({
      width: state => Number(state.size.width),
      height: state => Number(state.size.height)
    }),
  },
  methods: {
    ...mapMutations(['setWidth', 'setHeight'])
  }
};

</script>

<template>
  <div>
    <div class="form-unit">
      <label for="sizes-width">Ширина</label>
       <el-input-number
         id="sizes-width"
         @focus="$emit('focus')"
         @input="setWidth"
         :value="width"
         :min="100"
         :max="10000"
         controls-position="right">
       </el-input-number>
    </div>

    <div class="form-unit">
      <label for="sizes-height">Высота</label>
       <el-input-number
         id="sizes-height"
         @focus="$emit('focus')"
         @input="setHeight"
         :value="height"
         :min="100"
         :max="10000"
         controls-position="right">
       </el-input-number>
    </div>

  </div>
</template>

<style scoped>
 .el-input-number {
   width: 100%
 }
</style>

<style>
.el-input-number .el-input .el-input__inner {
  text-align: left;
}
</style>
