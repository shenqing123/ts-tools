<template>
  <suspense>
    <List />
  </suspense>
</template>

<script setup lang="ts">
import List from "./list.vue";
defineOptions({
  // eslint-disable-next-line
  name: "MusicList",
  inheritAttrs: false,
});
</script>
