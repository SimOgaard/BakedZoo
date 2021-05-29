<template>
  <q-page class="flex-center">
    <h4 class="q-mt-sm q-mb-none text-primary text-weight-bold text-center" @click="Route('Home')">BakedZoo</h4>
    <h5 class="text-italic q-mt-lg q-mb-xl q-pb-xl text-primary text-weight-regular text-center">Login</h5>

    <!-- Login stuff -->
    <div class="row justify-center">
      <q-card square class="col q-pa-lg q-pt-xl shadow-0 transparent" style="max-width: 600px">
        <q-card-section class="q-pt-lg">
          <q-form class="q-gutter-md">
            <q-input style="font-style: italic;" input-style="font-style: normal;" class="bg-white" square filled clearable v-model="email" type="email" label="E-mail"/>

            <q-input style="font-style: italic;" input-style="font-style: normal;" class="bg-white" square filled v-model="password" :type="isPwd ? 'password' : 'text'" label="Password">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                ></q-icon>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md q-pt-none q-pb-none">
          <q-space></q-space>
          <q-btn padding="none" unelevated style="border-radius: 12px; font-size: 1.15rem;" class="q-pr-xl q-pl-xl text-weight-bold bg-dark" no-caps label="Enter" @click="Login()"/>
        </q-card-actions>
        <q-card-section class="text-center q-pa-none q-pt-md">
          <q-btn padding="sm" unelevated no-caps class="text-italic text-h5 text-secondary bg-transparent" @click="$emit('Route', 'createAccount')">Create new account</q-btn>
        </q-card-section>
      </q-card>
    </div>
    <!-- Login stuff -->

  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isPwd: true
    }
  },
  methods:{
    Login()
    {
      if (this.email != '' && this.password != '')
      {
        this.$emit('TryLoggingIn', {email:this.email, password:this.password})
      }
    },
    Route(newTab)
    {
      this.$emit('Route', newTab)      
    }
  }
}
</script>
