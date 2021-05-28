<template>
  <q-item :class="$q.screen.lt.sm ? 'col-6' : ($q.screen.lt.md ? 'col-4' : 'col-3')" class="q-pa-sm self-stretch">
    <q-card class="bg-white" style="border-radius: 15px; height:100%; width: 100%">
      <img :src="image" style="object-fit: cover;" height="150px">

      <q-card-section class="q-pt-sm q-pl-sm q-pb-sm">
        <p class="text-primary text-weight-bold q-mb-none">{{title}}</p>
        <p class="q-mb-none text-italic text-caption text-weight-light">{{previewDescription}}</p>

        <q-card-section class="row q-pt-md q-pb-none">
          <q-btn class="col bg-transparent" size="md" flat/>
          <h6 class="col text-white text-weight-bold text-center q-mt-none q-mb-none">{{amountInShoppingCart}}st</h6>
          <q-btn class="col bg-transparent" size="md" flat/>
        </q-card-section>

      </q-card-section>
      
      <q-card-section class="row absolute-bottom">
        <q-btn class="col bg-transparent" @click="AddToAmount(1)"
          flat
          dense
          icon="add"
          aria-label="add"
          color="black"
          size="md"
        />
        <h6 class="bg-grey-4 col text-black text-weight-medium text-center q-mt-none q-mb-none" style="border-radius: 10px">{{amountInShoppingCart}}</h6>
        <q-btn
          class="col bg-transparent"
          @click="AddToAmount(-1)"
          flat
          dense
          icon="remove"
          aria-label="remove"
          color="black"
          size="md"
        />
      </q-card-section>
      <div class="absolute-right">
        <div class="bg-red" style="border-radius: 100%; position: absolute; top: -8px; right: -8px;">
          <q-btn
            flat
            dense
            round
            icon="clear"
            aria-label="clear"
            color="white"
            size="md"
            @click="PopFromCart()"
          />
        </div>
      </div>
    </q-card>
  </q-item>
</template>

<script>
export default {
  name: 'ShopItemCard',
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
    },

    amountInShoppingCart:{
      type: Number,
      default: ''
    },

    index:{
      type: Number,
      default: ''
    }
  },
  methods:{
    AddToAmount(amount)
    {
      if (this.amountInShoppingCart + amount == 0)
      {
        console.log(this.index);
        this.PopFromCart();
        return;
      }

      this.$emit('AddToAmount', amount, this.index)
    },
    PopFromCart()
    {
      console.log(this.index);
      this.$emit('PopFromCart', this.index)
    }
  }
}
</script>
