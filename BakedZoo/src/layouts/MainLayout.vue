<template>
  <q-layout view="lHh Lpr lFf" class="bg-accent bg-image">
    <q-img
      src="~assets/BackgroundLeafCroppedWithAnimals.png"
      basic
      fit="cover"
      style="position: absolute; width: 375px; height: 765px"
    />

    <q-header class="bg-transparent">
      <q-toolbar class="justify-between">
        <div>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            color="black"
            size="lg"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>

        
        <div>
          <q-btn
            flat
            dense
            round
            icon="person_add"
            aria-label="Person_add"
            color="black"
            size="lg"
            @click="Route('createAccount')"
          />
          <q-btn
            flat
            dense
            round
            icon="logout"
            aria-label="Logout"
            color="black"
            size="lg"
            v-if="IsLoggedIn"
            @click="alert = true"
          />
          <q-btn
            flat
            dense
            round
            icon="login"
            aria-label="Login"
            color="black"
            size="lg"
            v-else
            @click="Route('login')"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <div v-if="IsLoggedIn">
            Du är inloggad som _ANVÄNDARE_
          </div>
          <div v-else>
            Du är inte inloggad
          </div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer class="row justify-around bg-white">
      <div @click="Route('home')">
        <q-btn
          v-model="tab"
          name="home"
          flat
          dense
          icon="home"
          aria-label="home"
          :color="colorHome"
          size="xl"
        />
      </div>
      <div @click="Route('shop')">
        <q-btn
          v-model="tab"
          name="shopping_bag"
          flat
          dense
          icon="shopping_bag"
          aria-label="shopping_bag"
          :color="colorShop"
          size="xl"
        />
      </div>
      <!-- <q-tabs v-model="tab" indicator-color="transparent" active-color="primary" class="text-grey-7">
        <q-route-tab name="home" icon="home" @click="Route('home')"></q-route-tab>
        <q-route-tab name="shop" icon="shopping_bag" @click="Route('shop')"></q-route-tab>
      </q-tabs> -->
    </q-footer>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Är du säker på att du vill logga ut?</span>
        </q-card-section>

        <q-card-actions>
          <q-btn flat label="Nej" color="primary" v-close-popup></q-btn>
          <q-btn flat label="Ja" color="primary" v-close-popup @click="IsLoggingIn(false)"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view @Route="Route" @IsLoggingIn="IsLoggingIn"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      tab: 'home',
      essentialLinks: linksData,
      IsLoggedIn: false,
      colorHome: 'grey-7',
      colorShop: 'grey-7',
      alert: false
    }
  },
  methods:{
    Route(newTab)
    {
      if (newTab != this.tab)
      {
        this.$router.push(newTab);
        this.tab = newTab;
        this.ChangeButtonColors();
      }
    },
    IsLoggingIn(isLoggingIn)
    {
      this.IsLoggedIn = isLoggingIn;
    },
    ChangeButtonColors() // EEEEEEEEW FUCK VARIABLER I QUASAR EEEEEEEEEW
    {
      if (this.tab == 'home')
      {
        this.colorHome = 'primary';
        this.colorShop = 'grey-7';
      }
      else if (this.tab == 'shop')
      {
        this.colorHome = 'grey-7';
        this.colorShop = 'primary';
      }
      else
      {
        this.colorHome = 'grey-7';
        this.colorShop = 'grey-7';
      }
    }
  },
  mounted ()
  {
    this.tab = this.$router.history.current.path.substring(1);
    this.ChangeButtonColors();
  }
}
</script>
