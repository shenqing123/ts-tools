<template>
  <el-card shadow="hover">
    <div class="title">{{ props.title }}</div>
    <div class="number">{{ props.number }}</div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <el-divider />
    <slot name="footer"></slot>
  </el-card>
</template>

<script setup lang="ts">
const props = defineProps({});
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #777;
  letter-spacing: 1px;
}

.number {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
}

:deep .el-divider--horizontal {
  margin: 18px 0 10px;
}

.content {
  height: 50px;
  margin-top: 10px;
  overflow: hidden;
}
</style>
