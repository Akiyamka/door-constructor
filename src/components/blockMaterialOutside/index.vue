<template>
  <div>
     <div class="form-unit">
      <label for="material-outside-leaf">Полотно</label>
      <el-select
        id="material-outside-leaf"
        @focus="setDoorPosition('front') || $emit('focus')"
        :value="leaf"
        @change="setLeaf">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="material-outside-jamb">Наличник</label>
      <el-select
        id="material-outside-jamb"
        @focus="setDoorPosition('front') || $emit('focus')"
        :value="jamb"
        @change="setJamb">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="material-outside-onlay">Накладка</label>
      <el-select
        id="material-outside-onlay"
        @focus="setDoorPosition('front') || $emit('focus')"
        :value="onlay"
        @change="setOnlay">
        <el-option
          v-for="item in $constants.materialColor"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="form-unit">
      <label for="material-outside-glass">Стеклопакет</label>
      <el-select
        id="material-outside-glass"
        @focus="setDoorPosition('front') || $emit('focus')"
        :value="glass"
        @change="setGlass">
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