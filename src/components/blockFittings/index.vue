<script>
import { mapState, mapMutations } from 'vuex';
import constants from '@/data/';

export default {
  props: {},
  created() {
    this.$constants = constants;
  },
  computed: mapState({
    lock: state => state.fittings.lock,
    outsideKnob: state => state.fittings.outsideKnob,
    insideKnob: state => state.fittings.insideKnob
  }),
  methods: mapMutations([
    'setLock',
    'setOutsideKnob',
    'setInsideKnob'
  ])
};
</script>

<template>
  <div>
    <div class="form-unit">
      <label for="design-inside">Тип наружней ручки</label>
      <el-select
        :value="outsideKnob"
        @change="setOutsideKnob">
          <el-option
            v-for="item in $constants.knobs"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>

    <div class="form-unit">
      <label for="design-inside">Тип внутренней ручки</label>
      <el-select
        :value="insideKnob"
        @change="setInsideKnob">
        <el-option
          v-for="item in $constants.knobs"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-select>
    </div>

    <div class="form-unit">
      <label for="design-inside">Тип замка</label>
      <el-select
        :value="lock"
        @change="setLock">
          <el-option
            v-for="item in $constants.locks"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>

  </div>
</template>