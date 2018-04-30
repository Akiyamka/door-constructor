<template>
  <div>
    <div class="form-unit">
      <label for="design-inside">Ширина</label>
      <el-select
        @focus="$emit('focus')"
        v-model="value"
        placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="design-inside">Высота</label>
      <el-select
        @focus="$emit('focus')"
        v-model="value"
        placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import constants from '@/data/';
export default {
  props: {},
  data: () => ({
    options: constants.doorSeries,
    value: '0'
  })
};
</script>
