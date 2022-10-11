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
    updateTimeAlreadyElapsed() {
      this.timeAlreadyElapsed = true
    },
    register() {
      this.timeAlreadyElapsed = true
    },
    amIWinner(){
      this.$parent.is_winner();
    }
    
    // get current time + 5 seconds with moment js
    // logout() {
    //   this.wallet.signOut()
    //   this.currentUser = null
    // },
  },
  components: {
    // Countdown,
  },
}
</script>

<template>
  <va-card color="background" style="padding: 0.75rem;">
    <div class="row">
      <div class="flex" style="width: 100%;">
        <div class="container">
          <div class="ctndwn">
            <h4 class="display-4">Time left to win:</h4>
            <vue3-flip-countdown @timeElapsed="updateTimeAlreadyElapsed" deadline="2022-10-11 00:24:35" countdownSize="1.5rem" labelSize=".8rem"  mainColor="white" secondFlipColor="#ffffff"/>
          </div>
          <div class="button" >
            <va-button v-if="!timeAlreadyElapsed" disabled> Did I win? </va-button>
            <va-button v-else @click="amIWinner()"> Did I win? </va-button>
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

h3 {
  font-size: 1.2rem;
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
.ctndwn {
  justify-self: center; 
  grid-area: ctndwn; 
}
.button {
  justify-self: center; 
  grid-area: button; 
  align-self: center; 
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
