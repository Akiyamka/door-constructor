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
<script src="./main.js"></script>
