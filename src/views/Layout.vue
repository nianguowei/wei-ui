<template>
  <div class="home">
    <div>
      <!-- 左侧菜单 -->
    </div>
    <div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
</script>
