<template>
  <div>
    <q-page class="flex-center q-pb-lg" style="padding-left: 21px; padding-right: 21px;">
      <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center" @click="Route('Home')">BakedZoo</h4>
      <h5 class="text-italic q-mt-lg q-mb-sm q-pb-none text-primary text-weight-regular text-center" style="white-space: nowrap;">{{cake.title}}</h5>

      <div class="row justify-center">
        <q-card class="bg-white" style="border-radius: 15px; height:100%; max-width: 500px">
          <img :src="cake.image" style="object-fit: cover;">
          <q-card-section class="q-pt-sm q-pl-sm q-pb-sm">
            <p class="text-primary text-weight-bold q-mb-none">{{cake.previewDescription}}</p>
            <p class="q-mb-none text-italic text-caption text-weight-light">{{cake.detailDescription}}</p>
            <h6 class="text-primary q-mb-none q-mt-sm q-pl-sm q-pb-sm text-weight-bold text-center">{{cake.price}}$</h6>
          </q-card-section>
          <div class="absolute-right">
            <div class="bg-orange" style="border-radius: 100%; position: absolute; top: -20px; right: -20px;">
              <q-btn
                flat
                dense
                round
                icon="add_shopping_cart"
                aria-label="add_shopping_cart"
                color="white"
                size="xl"
                @click="AddToCart()"
              />
            </div>
          </div>
        </q-card>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'CakeInfo',
  props: ['cake'],
  methods:{
    AddToCart()
    {
      this.$emit('AddToCart')
    },
    Route(newTab)
    {
      this.$emit('Route', newTab)      
    }
  }
}
</script>
