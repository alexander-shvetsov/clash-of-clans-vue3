<template>
  <div class="wrapper view-sm">
    <div v-if="item">
      <img :src="item.img" :alt="item.title" class="item-item">
      <h1 class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <div v-if="item.info" class="card-stats">
        <CardStats :item="item.info" />
      </div>
      <div>
        <router-link to="/" class="btn btnPrimary">back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items'
import CardStats from '@/components/UI/CardStats'

export default {
  components: {
    CardStats
  },
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)

    this.item = item
  }
}
</script>

<style scoped>
  .wrapper {
    text-align: center;
  }
  .item-item {
    margin-top: 30px;
    padding-bottom: 30px;
  }
  .title {
    color: #fff;
  }
  .card-stats {
    margin-top: 30px;
    background-color: transparent;
  }
  .btn {
    margin-top: 40px;
  }
  .btnPrimary {
    background-color: #333 !important;
    border: transparent !important;
  }
</style>
