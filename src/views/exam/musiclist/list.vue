<template>
  <div class="app-container">
    <h3>
      全选/反选<input type="checkbox" v-model="allState" />
      <button @click="handleDelete" class="del">
        删除 <span>{{ total }}封</span>
      </button>
    </h3>
    <div
      @mouseover="handleOver(item.id)"
      @mouseleave="handleLeave"
      :class="['item', item.state ? 'hover-state' : '']"
      v-for="item of musics"
      :key="item.id"
    >
      <div>
        <input type="checkbox" v-model="item.state" />
        <img :src="item.coverImgUrl" alt="" />
        <p>{{ item.name }}</p>
      </div>
      <button class="label" v-show="currentId != item.id">
        {{ item.tags.join("/") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getList } from "@/api/map/index.ts";
const list = await getList();

const musics = ref([]);
const currentId = ref(null);
list.playlists.forEach((item) => {
  item.state = false;
});
musics.value = list.playlists;
const allState = computed({
  get() {
    return musics.value.every((item) => item.state);
  },
  set(val) {
    musics.value.forEach((item) => {
      item.state = val;
    });
  },
});
const total = computed(() => {
  let result = musics.value.filter((item) => item.state);
  console.log(result);
  return result.length;
});

function handleDelete() {
  let result = musics.value.filter((item) => !item.state);
  musics.value = result;
}
function handleOver(id) {
  currentId.value = id;
}
function handleLeave() {
  currentId.value = null;
}
</script>
<style scoped type="scss">
.item {
  display: flex;
  padding: 10px;
  margin: 3px;
  border: 1px solid #333;
}

.item img {
  width: 60px;
}

.item button {
  height: 50px;
}

.del {
  background-color: #ff2d51;
}

.item:hover {
  background-color: #eee;
}

.hover-state {
  background-color: #c7c6c6;
}

.label {
  color: #fff;
  background-color: #652e80;
  border-radius: 15px;
}
</style>
