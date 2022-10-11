<script>
// import * as nearAPI from 'near-api-js'

// import Countdown from './Countdown.vue';
// import Countdown from 'vue3-flip-countdown'

export default {
  data() {
    return {
      timeAlreadyElapsed: false
    }
  },
  methods: {
    // getImagePath (width, height = width) {
    //   return `https://paras.id/551dd798-48a5-493c-b2b2-fd88d830689f`
    // },
    
    // get current time + 5 seconds with moment js
    // logout() {
    //   this.wallet.signOut()
    //   this.currentUser = null
    // },
  },
  computed: {
    isLuckyBastard() {
      return true
    },
  },
  components: {
    // Countdown,
  },
}
</script>

<template>
  <va-card v-if="isLuckyBastard" color="background" style="padding: 0.75rem;">
    <div class="row">
      <div class="flex" style="width: 100%;">
        <div class="container">
          <div class="ctndwn">
            <h5 class="display-5">You won!*</h5>
            <img src="./../assets/NFT.jpg" style="width: 10em;"/>
          </div>
          <div class="button" >
            *The NFT was transfered to your wallet.
          </div>
        </div>
      </div>
    </div>
  </va-card>
  <va-card v-else color="background" style="padding: 0.75rem;">
    <div class="row">
      <div class="flex" style="width: 100%;">
        <div class="container1">
          <div class="ctndwn">
            <img src="./../assets/loser.jpg" style="width: 15em;"/>
          </div>
          
        </div>
      </div>
    </div>
  </va-card>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h5 {
  font-size: 1.2rem;
  text-align: center;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.container {
  display: grid; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "ctndwn"
    "button"; 
  justify-items: stretch; 
}

.container1 {
  display: grid; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "ctndwn";
  justify-items: stretch; 
}

.ctndwn {
  justify-self: center; 
  grid-area: ctndwn; 
  align-self: center; 
}
.button {
  justify-self: center; 
  grid-area: button; 
  align-self: start; 
  text-align: left;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
