<template>
  <div>
    <div class="form-unit">
      <label for="design-inside">Дизайн с внутренней стороны</label>
      <el-select
        id="design-inside"
        :value="designInside"
        @change="setDesignInside"
        placeholder="Дизайн внутри"
        @focus="setDoorPosition('back') || $emit('focus')">
        <el-option
          v-for="item in $constants.designs"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>


    <div class="form-unit">
      <label for="design-outside">Дизайн с наружней стороны</label>
      <el-select
        id="design-outside"
        :value="designOutside"
        @change="setDesignOutside"
        placeholder="Дизайн снаружи"
        @focus="setDoorPosition('front') || $emit('focus')">
        <el-option
          v-for="item in $constants.designs"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

  </div>
</template>
<script src="./main.js"></script>

