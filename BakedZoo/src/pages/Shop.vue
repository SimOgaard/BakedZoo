<template>
  <q-page class="flex-center">
    <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center">BakedZoo</h4>
    <h5 class="text-italic q-mt-lg q-mb-lg q-pb-xl text-primary text-weight-regular text-center">Your Order</h5>

    <!-- add to amount +1 for add, -1 for remove 1  -->
    <q-card square class="q-pa-none shadow-0 transparent row">
      <ShopItemCard
        @AddToAmount="AddToAmount"
        @PopFromCart="PopFromCart"
        v-for="(cake, index) in cakes"
        :key="cake.title"
        v-bind="cake"
        v-bind:index="index"
      />
    </q-card>

    <div class="row justify-center">
      <q-btn class="q-mb-lg bg-dark" no-caps>
        Place order
      </q-btn>
    </div>

  </q-page>
</template>

<script>
import ShopItemCard from 'components/ShopItemCard.vue'

export default {
  name: 'Shop',
  props: ['cakes'],
  components: { ShopItemCard },
  methods:{
    AddToAmount(amount, index)
    {
      this.$emit('AddToAmount', amount, index)
    },
    PopFromCart(index)
    {
      this.$emit('PopFromCart', index)
    }
  }
}
</script>
