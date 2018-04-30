<script>
import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState({
    material: state => state.box.material,
    install: state => state.box.install
  }),
  methods: mapMutations(['setBoxMaterial', 'setBoxInstall'])
};
</script>

<template>
  <div>
    <div class="form-unit">
    <label for="design-inside">Материал</label>
      <el-select
        :value="material"
        @change="setBoxMaterial">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="design-inside">Способ установки</label>
      <el-select
        :value="install"
        @change="setBoxInstall">
        <el-option
          v-for="item in $constants.installing"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>

</template>
