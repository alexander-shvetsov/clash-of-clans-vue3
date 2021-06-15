<template>
  <carousel :settings="settings" :breakpoints="breakpoints">

    <slide class="card-wrapper" v-for="item in items" :key="item.id">
      <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img" :link="`/${item.alias}`">
        <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:footer>
          <div v-if="item.info" class="card-stats">
            <CardStats :item="item.info" />
          </div>
        </template>
      </Card>
    </slide>

    <template #addons>
      <navigation />
    </template>

  </carousel>
</template>

<script>
import Card from '@/components/UI/Card'
import CardStats from '@/components/UI/CardStats'
import items from '@/seeders/items'

// slider
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  components: {
    Card,
    CardStats,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        }
      }
    }
  },
}
</script>

<style scoped>
  .carousel {
    margin: 0 auto;
    max-width: 900px;
  }
  .card-wrapper {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .card-stats {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
</style>
