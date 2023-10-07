<template>
  <div class="bottom">
    <div class="map">
      <Suspense>
        <MapScatter />
        <template #fallback> 加载中。。。 </template>
      </Suspense>
    </div>
    <div class="right">
      <el-card>
        <template #header>
          <h2>订单同比增长</h2>
        </template>
        <LiquidFill />
      </el-card>
      <el-card>
        <template #header>
          <h2>热门搜索</h2>
        </template>
        <WordCloud />
      </el-card>
    </div>
  </div>
</template>

<script setup>
import MapScatter from "./mapScatter.vue";
import LiquidFill from "./LiquidFill.vue";
import WordCloud from "./WordCloud.vue";
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 20px;

  .map {
    position: relative;
    flex: 0 0 78%;
    height: 600px;
  }

  .right {
    display: flex;
    flex: 0 0 20%;
    flex-direction: column;
    justify-content: space-between;

    :deep .el-card {
      height: 280px;

      .el-card__body {
        height: 227px;
      }
    }

    h2 {
      font-weight: 600;
    }
  }
}
</style>
