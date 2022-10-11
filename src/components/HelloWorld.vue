<script>
// import * as nearAPI from 'near-api-js'

export default {
  data() {
    return {
      msg: 'Raffland',
      near: null,
      wallet: null,
      currentUser: null,
      walletBalance: null
    }
  },
  methods: {
    login() {
      this.$near.loginAccount()
      console.log(this.$near.user.accountId)
    },
    // logout() {
    //   this.wallet.signOut()
    //   this.currentUser = null
    // },
  },
}
</script>

<template>
  <va-card color="background" style="padding: 0.75rem;">
    <div class="row">
      <div class="flex" style="width: 100%;">
        <div class="container">
          <div class="text"><h2 class="display-2">Raffland</h2></div>
          <div class="btn" ><va-button @click="login()"> Connect NEAR wallet </va-button></div>
          
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

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}



.container {
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "text"
    "btn";
  justify-items: stretch; 
}
.text {
  justify-self: center; 
  grid-area: text; 
}
.btn {
  justify-self: center; 
  grid-area: btn; 
}


</style>
