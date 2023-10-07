<template>
  <div class="app-container">
    <div>music</div>
  </div>
</template>

<script setup lang="ts">
import { getList } from "@/api/map/index.ts";
const a = await getList();
console.log(a);
</script>
