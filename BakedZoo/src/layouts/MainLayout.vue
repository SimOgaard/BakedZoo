<template>
  <q-layout view="lHh Lpr lFf" class="bg-accent bg-image">
    <q-resize-observer @resize="ChangeButtonColors" />
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
            <q-badge color="orange" class="q-mt-sm" floating>{{allCakesAmount}}</q-badge>
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
          <span class="q-ml-sm text-primary text-weight-bold">Are you shure you want to logout?</span>
          <span class="q-ml-sm text-italic text-caption text-weight-light">Current order will not be saved</span>
        </q-card-section>

        <q-card-actions class="flex-center q-mb-sm q-pt-none justify-around">
          <q-btn flat label="Yes, log out" class="bg-primary" color="white" v-close-popup @click="IsLoggingIn(false)"></q-btn>
          <q-btn flat label="Cancel" color="red" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view v-bind:IsLoggedIn="IsLoggedIn" @TryLoggingIn="TryLoggingIn" v-bind:allOrders="allOrders" v-bind:account="account" @AccountDetails="AccountDetails(...arguments)" @Route="Route" @IsLoggingIn="IsLoggingIn" @SelectedCake="SelectedCake" @AddToCart="AddToCart" @AddToAmount="AddToAmount(...arguments)" @PopFromCart="PopFromCart" @PlaceOrder="PlaceOrder" v-bind:cake="selectedCake" v-bind:cakes="allCakes" v-bind:cakesFromWeb="cakesFromWeb" v-bind:staffFromWeb="staffFromWeb"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import axios from 'axios';
import { QSpinnerFacebook } from 'quasar';

const linksData = [
  {
    title: 'Pending orders',
    caption: 'Your orders',
    icon: 'trending_up',
    link: '/#/Pending'
  },
  {
    title: 'About us',
    caption: 'Learn more about us',
    icon: 'info',
    link: '/#/About'
  },
  {
    title: 'Donations',
    caption: 'help the developers in thier cause',
    icon: 'paid',
    link: '/#/Donations'
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
      staffFromWeb: null,
      allCakes: [],
      allCakesAmount: 0,
      allOrders: [],
      account: null
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
    TryLoggingIn(account){
      axios.get('http://localhost:3000/customers')
      .then(response => {
        var customers = response.data

        customers.forEach(customer => {
          if (customer.email == account.email && customer.password == account.password){
            this.account = { id: customer.id, name : customer.name, email : customer.email, password : customer.password, timestamp: customer.timestamp, avatar: '' }
            this.IsLoggingIn(true)
          }
        });
      })
      .catch(e => {
        console.log(e)
      })
    },
    IsLoggingIn(isLoggingIn)
    {
      this.IsLoggedIn = isLoggingIn;
      if (isLoggingIn){
        axios.get('http://localhost:3000/orders')
        .then(response => {
          response.data.forEach(order => {
            if (order.customerId == this.account.id){
              this.allOrders.push(order.cakes);
            }
          });
        })
        .catch(e => {
          console.log(e)
        })
      }
      else
      {
        this.selectedCake = null
        this.allOrders = []
        this.account = null
      }
      this.Route('home')
    },
    AccountDetails(email, name, password){
      axios.get('http://localhost:3000/customers')
      .then(response => {
        var customers = response.data

        var isNew = true
        customers.forEach(customer => {
          if (customer.email == email){
            isNew = false
          }
        });

        if (isNew){
          axios.post('http://localhost:3000/customers', { id: customers.length + 1, name : name, email : email, password : password, timestamp: Date.now(), avatar: '' })
          .then(response => {
            customers = response.data
            this.account = { id: customers.length + 1, name : name, email : email, password : password, timestamp: Date.now(), avatar: '' }
            this.IsLoggingIn(isNew)
          })
          .catch(e => {
            console.log(e)
          })
        }
      })
      .catch(e => {
        console.log(e)
      })
    },
    ChangeButtonColors() // EEEEEEEEW FUCK VARIABLER I QUASAR EEEEEEEEEW
    {
      this.tab = this.$router.history.current.path.substring(1);
      this.style.height=window.screen.height-50+'px';
      this.style.width= window.screen.width +'px';
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
      var isInList = 0;

      this.allCakes.forEach(element => {
        isInList += element.title == this.selectedCake.title;

        if (element.title == this.selectedCake.title){
          element.amountInShoppingCart++;
        }
      });

      if (isInList == 0)
      {
        var selectedCakeWithAmountInShoppingCart = {
          id: this.selectedCake.id,
          title: this.selectedCake.title,
          previewDescription: this.selectedCake.previewDescription,
          detailDescription: this.selectedCake.detailDescription,
          image: this.selectedCake.image,
          price: this.selectedCake.price,
          amountInShoppingCart: 1
        };
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
    PlaceOrder()
    {
      axios.get('http://localhost:3000/orders')
      .then(response => {
        var orders = response.data
        axios.post('http://localhost:3000/orders', { id: orders.length + 1, customerId: this.account.id, cakes : this.allCakes })
        .then(response => {
          this.allOrders.push(this.allCakes);
          this.allCakes = [];
          this.allCakesAmount = 0;
        })
        .catch(e => {
          console.log(e)
        })
      })
      .catch(e => {
        console.log(e)
      })
    },
    onResize (size) {
      console.log(size);
      this.Rezise();
    },
    Rezise () {
      this.style.height=window.screen.height-50+'px';
      this.style.width= window.screen.width +'px';
    }
  },
  mounted ()
  {
    axios.get('http://localhost:3000/cakes')
    .then(response => {
      this.cakesFromWeb = response.data
    })
    .catch(e => {
      console.log(e)
    })
    axios.get('http://localhost:3000/staff')
    .then(response => {
      this.staffFromWeb = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    this.ChangeButtonColors();

  }
}
</script>
