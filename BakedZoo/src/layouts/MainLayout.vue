<template>
  <q-layout view="lHh Lpr lFf" class="bg-accent bg-image">
    <q-resize-observer @resize="onResize" />
    <q-img
      src="~assets/BackgroundLeafCroppedWithAnimals.png"
      basic
      fit="fill"
      :style="style"
    /> 

    <q-header class="bg-transparent" style="white-space: nowrap;">
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
            icon="manage_accounts"
            aria-label="Manage_accounts"
            color="black"
            size="lg"
            v-if="IsLoggedIn"
            @click="Route('manageAccount')"
          />
          <q-btn
            flat
            dense
            round
            icon="person_add"
            aria-label="Person_add"
            color="black"
            size="lg"
            v-else
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
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer class="row justify-around bg-white">
      <div class="col" @click="Route('home')">
        <div class="row justify-center">
          <q-btn
            :ripple="false"
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
      </div>
      <div class="col" @click="Route('shop')">
        <div class="row justify-center">
          <q-btn
            :ripple="false"
            v-model="tab"
            name="shopping_bag"
            flat
            dense
            icon="shopping_bag"
            aria-label="shopping_bag"
            :color="colorShop"
            size="xl"
          >
            <q-badge v-if="allCakesAmount != 0" color="orange" class="q-mt-sm" floating>{{allCakesAmount}}</q-badge>
          </q-btn>
        </div>
      </div>
      <!-- <q-tabs v-model="tab" indicator-color="transparent" active-color="primary" class="text-grey-7">
        <q-route-tab name="home" icon="home" @click="Route('home')"></q-route-tab>
        <q-route-tab name="shop" icon="shopping_bag" @click="Route('shop')"></q-route-tab>
      </q-tabs> -->
    </q-footer>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you shure you want to logout?</span>
        </q-card-section>

        <q-card-actions class="flex-center q-pt-none justify-around">
          <q-btn flat label="Yes, log out" class="bg-primary" color="white" v-close-popup @click="IsLoggingIn(false)"></q-btn>
          <q-btn flat label="Cancel" color="primary" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view @Route="Route" @IsLoggingIn="IsLoggingIn" @SelectedCake="SelectedCake" @AddToCart="AddToCart" @AddToAmount="AddToAmount(...arguments)" @PopFromCart="PopFromCart" v-bind:cake="selectedCake" v-bind:cakes="allCakes" v-bind:cakesFromWeb="cakesFromWeb"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import axios from 'axios';

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
      style: {position: 'fixed', width: '100%', height: '94%' },
      leftDrawerOpen: false,
      tab: 'home',
      essentialLinks: linksData,
      IsLoggedIn: false,
      colorHome: 'grey-7',
      colorShop: 'grey-7',
      alert: false,
      selectedCake: null,
      cakesFromWeb: null,
      allCakes: [],
      allCakesAmount: 0
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
    },
    SelectedCake(Cake)
    {
      this.selectedCake = Cake;
    },
    AddToCart()
    {
      this.allCakesAmount++;
      var isInList = false;

      this.allCakes.forEach(element => {
        isInList = element.id == this.selectedCake.id && !isInList;
        if (isInList){
          element.amountInShoppingCart++;
        }
      });

      var selectedCakeWithAmountInShoppingCart = {
        id: this.selectedCake.id,
        title: this.selectedCake.title,
        previewDescription: this.selectedCake.previewDescription,
        detailDescription: this.selectedCake.detailDescription,
        image: this.selectedCake.image,
        price: this.selectedCake.price,
        amountInShoppingCart: 1
      };

      if (!isInList)
      {
        this.allCakes.push(selectedCakeWithAmountInShoppingCart);
      }
    },
    AddToAmount(amount, index)
    {
      this.allCakesAmount += amount;
      this.allCakes[index].amountInShoppingCart += amount;
    },
    PopFromCart(index)
    {
      this.allCakesAmount -= this.allCakes[index].amountInShoppingCart;

      var currentIndex = 0;
      var newAllCakes = [];
      this.allCakes.forEach(element => {
        if (currentIndex != index){
          newAllCakes.push(element);
        }
        currentIndex++;
      });
      this.allCakes = newAllCakes;
    },
    onResize (size) {
      console.log(size);
      this.style= {
        position: 'fixed', 
        width: size.width+ 'px', 
        height: size.height -58 +'px'
      }
    }
  },
  mounted ()
  {
    axios.get('http://localhost:3000/cakes')
    .then(response => {
      this.cakesFromWeb = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    this.tab = this.$router.history.current.path.substring(1);
    this.ChangeButtonColors();
  }
}
</script>
