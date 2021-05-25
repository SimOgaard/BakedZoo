<template>
  <q-card flat>
    <q-list class="column">
      <q-item class="row" v-for="item in list" :key="item.title">
        <div class="q-mb-none q-pa-none q-ma-none col-10 text-primary" style="white-space: nowrap;">
          <span class="text-weight-medium">
            {{item.amountInShoppingCart}}x             
          </span>
          <span>
            {{item.title}}
          </span>
        </div>
        <div class="q-mb-none col-2 float-right text-primary text-weight-medium" style="white-space: nowrap;">
          | {{item.amountInShoppingCart*item.price}}$
        </div>
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
export default {
  name: 'ListItems',
  props: ['list'],
  data () {
    return {
    }
  },
}
</script>
