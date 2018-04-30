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
  methods: mapMutations(['setLock', 'setOutsideKnob', 'setInsideKnob'])
};
</script>

<template>
  <div>
    <div class="form-unit">
      <label for="fittings-outside">Тип наружней ручки</label>
      <el-select
        id="fittings-outside"
        :value="outsideKnob"
        @change="setOutsideKnob"
        @focus="$emit('focus')">
          <el-option
            v-for="item in $constants.knobs"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>

    <div class="form-unit">
      <label for="fittings-inside">Тип внутренней ручки</label>
      <el-select
        id="fittings-inside"
        :value="insideKnob"
        @change="setInsideKnob"
        @focus="$emit('focus')">
        <el-option
          v-for="item in $constants.knobs"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-select>
    </div>

    <div class="form-unit">
      <label for="fittings-lock">Тип замка</label>
      <el-select
        id="fittings-lock"
        :value="lock"
        @change="setLock"
        @focus="$emit('focus')">
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
