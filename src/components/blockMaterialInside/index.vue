<template>
  <div>
     <div class="form-unit">
      <label for="material-inside-leaf">Полотно</label>
      <el-select
        id="material-inside-leaf"
        :value="leaf"
        @change="setLeaf"
        @focus="setDoorPosition('back') || $emit('focus')">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="material-inside-jamb">Наличник</label>
      <el-select
        id="material-inside-jamb"
        :value="jamb"
        @change="setJamb"
        @focus="setDoorPosition('back') || $emit('focus')">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="material-inside-onlay">Накладка</label>
      <el-select
        id="material-inside-onlay"
        :value="onlay"
        @change="setOnlay"
        @focus="setDoorPosition('back') || $emit('focus')">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="material-inside-glass">Стеклопакет</label>
      <el-select
        id="material-inside-glass"
        :value="glass"
        @change="setGlass"
        @focus="setDoorPosition('back') || $emit('focus')">
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
<script src="./main.js"></script>
