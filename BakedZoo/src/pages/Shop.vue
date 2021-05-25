<template>
  <q-page class="flex-center">
    <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center">BakedZoo</h4>
    <h5 class="text-italic q-mt-lg q-mb-none q-pb-md text-primary text-weight-regular text-center" style="white-space: nowrap;">Your Order</h5>

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
      <q-btn class="q-mt-md bg-dark q-mb-lg" style="border-radius: 12px;" size="md" @click="alert = true" no-caps v-if="cakes.length != 0">
        Place order
      </q-btn>
      <h6 class="fixed-center q-mt-none text-weight-regular text-primary" style="white-space: nowrap;" v-else>
        Your order is empty
      </h6>
    </div>

    <q-dialog v-model="alert">
      <q-card class="q-pa-sm">
        <q-card-section class="text-primary text-weight-bolder row q-pb-none">
          <span class="q-ml-none">You are about to place this order:</span>
        </q-card-section>

        <q-card-section class="column q-pt-sm">
          <ListItems
            v-bind:list="cakes"
          />
        </q-card-section>

        <q-card-section class="row q-pt-none">
          <span class="col text-primary text-weight-bolder q-ml-sm ">Total:</span>
          <span class="col text-primary text-weight-medium q-ml-sm">{{costSum}}$</span>
        </q-card-section>

        <q-card-actions class="flex-center q-pt-none justify-around">
          <q-btn flat label="Yes, place order" class="bg-primary" color="white" v-close-popup @click="PlaceOrder()"></q-btn>
          <q-btn flat label="Cancel" color="red" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import ShopItemCard from 'components/ShopItemCard.vue'
import ListItems from 'components/ListItems.vue'

export default {
  name: 'Shop',
  props: ['cakes'],
  components: { ShopItemCard, ListItems },
  data () {
    return {
      alert: false
    }
  },
  computed: {
    costSum: function () {
      var itemSum = 0;
      this.cakes.forEach(element => {
        itemSum+=element.amountInShoppingCart*element.price;
      });
      return itemSum;
    }
  },
  methods:{
    AddToAmount(amount, index)
    {
      this.$emit('AddToAmount', amount, index)
    },
    PopFromCart(index)
    {
      this.$emit('PopFromCart', index)
    },
    PlaceOrder()
    {
      this.$emit('PlaceOrder')
    }
  }
}
</script>
