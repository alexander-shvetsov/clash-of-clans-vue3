<template>
  <div v-for="(stat, index) in item" :key="index" class="one-third">
    <div class="stat-value">{{ stat.value}}</div>
    <div class="stat">{{ stat.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      required: true
    }
  }
}
</script>
