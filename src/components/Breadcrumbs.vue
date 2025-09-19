<template>
  <nav aria-label="Breadcrumb" class="breadcrumbs">
    <ol>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li v-if="$route.name !== 'Home'">
        <span aria-hidden="true">›</span>
        <span>{{ currentPageName }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentPageName = computed(() => {
  switch (route.name) {
    case 'Info':
      return 'Information';
    case 'Source':
      return 'Source';
    default:
      return '';
  }
});
</script>

<style scoped>
.breadcrumbs {
  margin: 20px 0;
  font-size: 14px;
  color: #666;
}

.breadcrumbs ol {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumbs li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumbs a {
  color: #666;
  text-decoration: none;
}

.breadcrumbs a:hover {
  color: #333;
  text-decoration: underline;
}

.breadcrumbs span[aria-hidden="true"] {
  color: #999;
}

@media (prefers-color-scheme: light) {
  .breadcrumbs {
    color: #999;
  }
  
  .breadcrumbs a {
    color: #999;
  }
  
  .breadcrumbs a:hover {
    color: #333;
  }
}
</style>
