<template>
  <div>
    <div class="form-unit">
    <label for="box-material">Материал</label>
      <el-select
        id="box-material"
        :value="material"
        @change="setBoxMaterial"
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
      <label for="box-install">Способ установки</label>
      <el-select
        id="box-install"
        :value="install"
        @change="setBoxInstall"
        @focus="$emit('focus')">
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
<script src="./main.js"></script>