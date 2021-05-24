<template>
  <div class="col-6 q-pa-sm" @click="GoToCake()">
    <q-card class="bg-white" style="border-radius: 15px; height:100%">
      <img :src="image" style="object-fit: cover;" height="150px">

      <q-card-section class="q-pt-sm q-pl-sm q-pb-sm">
        <p class="text-primary text-weight-bold q-mb-none">{{title}}</p>
        <p class="q-mb-none text-italic text-caption text-weight-light">{{previewDescription}}</p>
        <h6 class="text-white q-mb-none q-mt-none q-pl-sm q-pb-sm text-weight-bold text-center">{{price}}$</h6>
      </q-card-section>
      <h6 class="text-primary absolute-bottom q-mb-none q-mt-sm q-pb-sm text-weight-bold text-center">{{price}}$</h6>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CakeCard',
  props: {
    id: {
      type: Number,
      required: true
    },

    title: {
      type: String,
      default: ''
    },

    previewDescription: {
      type: String,
      default: ''
    },

    detailDescription: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      default: ''
    }
  },
  methods:{
    GoToCake()
    {
      var Cake = {
        id: this.id,
        title: this.title,
        previewDescription: this.previewDescription,
        detailDescription: this.detailDescription,
        image: this.image,
        price: this.price
      }
      this.$emit('SelectedCake', Cake)
      this.$emit('Route', 'CakeInfo')
    }
  }
}
</script>
