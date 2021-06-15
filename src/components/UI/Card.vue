<template>
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img :src="imgUrl" :alt="title" class="card-img">
    </div>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <div class="card-body__text">
        <slot name="body"></slot>
        <router-link class="link" v-if="link" :to="link">See more</router-link>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-body {
    position: relative;
    min-height: 300px;
    padding: 0;
    margin-bottom: 0;
    &__text {
      font-size: 16px;
      padding: 20px;
    }
  }
  .card-stats {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: 10px;
  }
  .link {
    display: block;
    margin-top: 16px;
  }
</style>
