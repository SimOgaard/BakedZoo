<template>
  <q-page class="flex-center">
    <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center">BakedZoo</h4>
    <h5 class="text-italic q-mt-lg q-mb-none q-pb-md text-primary text-weight-regular text-center" style="white-space: nowrap;">Pending Orders</h5>

    <div class="row justify-center">
      <div class="col justify-center" style="max-width: 600px">
        <div v-for="(order, index) in allOrders" :key="index">
          <q-card-section class="q-pt-sm">
            <div class="bg-white" style="border-radius: 8px;">
              <ListItems
                v-bind:list="order"
              />
              <q-card-section class="row q-pt-none">
                <span class="text-primary text-weight-bolder q-ml-sm ">Total:</span>
                <span class="text-primary text-weight-medium q-ml-sm q-mb-none q-pb-none q-mt-none q-pt-none">{{CostSum(order)}}$</span>
              </q-card-section>
            </div>
          </q-card-section>
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <h6 class="fixed-center q-mt-none text-weight-regular text-primary" style="white-space: nowrap;" v-if="allOrders.length==0 && !IsLoggedIn">
        Sign in to se your pending orders
      </h6>
      <h6 class="fixed-center q-mt-none text-weight-regular text-primary" style="white-space: nowrap;" v-else-if="allOrders.length==0">
        You have no pending orders
      </h6>
    </div>

  </q-page>
</template>

<script>
import ListItems from 'components/ListItems.vue'

export default {
  name: 'Pending',
  props: ['allOrders', 'IsLoggedIn'],
  components: { ListItems },
  data () {
    return {
      
    }
  },
  methods:{
    CostSum: function (order) {
      var itemSum = 0;
      order.forEach(element => {
        itemSum+=element.amountInShoppingCart*element.price;
      });
      return itemSum;
    }
  }
}
</script>
