<template>
  <q-item :class="$q.screen.lt.sm ? 'col-6' : ($q.screen.lt.md ? 'col-4' : 'col-3')" class="q-pa-sm">
    <q-card class="bg-white" style="border-radius: 15px; height: 100%; width:100%">
      <q-card-section horizontal class="q-pt-xs q-pl-sm q-pb-sm">
        <q-img class ="row" v-bind:src="avatar" style="width: 100px; height: 120px; border-radius: 25px"/>
        <div class="col q-pl-sm">
            <p class="text-primary text-h5 text-weight-bold q-mb-none">{{name}}</p>
            <div class="col q-pl-sm">
              <p class="text-primary text-weight-bold text-caption q-mr-sm">{{role}}</p>
              <p class="text-primary text-italic text-caption text-weight-light q-mr-sm">{{phone}}</p>
              <p style="white-space: wrap; word-wrap: break-word;" class="text-primary text-italic text-caption text-weight-light q-mr-sm q-mb-none" >{{email}}</p>
            </div>
        </div>
      </q-card-section>
    </q-card>
  </q-item>
</template>

<script>
import { Screen } from 'quasar'
Screen.setSizes({ sm: 500, md: 800, lg: 1600, xl: 2000 })

export default {
  name: 'EmployeeCard',
  props: {
    id: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      default: ''
    },

    role: {
        type: String,
        default: ''
    },

    email: {
      type: String,
      default: ''
    },

    phone: {
      type: String,
      default: ''
    },

    avatar: {
      type: String,
      default: ''
    },
  }
}
</script>
