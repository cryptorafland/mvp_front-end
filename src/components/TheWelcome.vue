<template>

  <!-- <h1 class="heading">Hello NEAR dApp</h1> -->
  <div v-if="currentUser">
    <h3>Hello, {{ currentUser }}</h3>
    <h4>You balance is: {{ walletBalance }}NEAR</h4>
    <button type="button" class="btn" @click="logout()">
      Disconnect NEAR wallet
    </button>
  </div>
  <va-button v-else @click="login()"> Connect NEAR wallet </va-button>
  <!-- <button v-else type="button" class="btn" @click="login()">
    Connect NEAR wallet
  </button> -->

</template>

<script>
// import * as nearAPI from 'near-api-js'

export default {
  data() {
    return {
      near: null,
      wallet: null,
      currentUser: null,
      walletBalance: null,
    }
  },
  methods: {
    login() {
      console.log(this.$near.user.accountId)
      this.$near.loginAccount()
      // this.wallet.requestSignIn()
    },
    // logout() {
    //   this.wallet.signOut()
    //   this.currentUser = null
    // },
  },
}
</script>