<script>
import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState('materialInside', {
    leaf: state => state.leaf,
    jamb: state => state.jamb,
    onlay: state => state.onlay,
    glass: state => state.glass
  }),
  methods: mapMutations('materialInside', [
    'setLeaf',
    'setJamb',
    'setOnlay',
    'setGlass'
  ])
};
</script>

<template>
  <div>
     <div class="form-unit">
      <label for="design-inside">Полотно</label>
      <el-select
        :value="leaf"
        @change="setLeaf"
        @focus="$emit('focus')">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="design-inside">Наличник</label>
      <el-select
        :value="jamb"
        @change="setJamb"
        @focus="$emit('focus')">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="design-inside">Накладка</label>
      <el-select
        :value="onlay"
        @change="setOnlay"
        @focus="$emit('focus')">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="design-inside">Стеклопакет</label>
      <el-select
        :value="glass"
        @change="setGlass"
        @focus="$emit('focus')">
        <el-option
          v-for="item in $constants.glass"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>
