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
    yes() {
      // this.$near.loginAccount()
      this.$parent.is_retarded();
      console.log(this.$near.user.accountId)
    },
  },
}
</script>

<template>

<va-card color="background" style="padding: 0.75rem;">
    <div class="row">
      <div class="flex" style="width: 100%;">
        <div class="container">
          <div class="text"><h4 class="display-4">Participate in the NFT draw?*</h4></div>
          <div class="btn" ><va-button @click="yes()" size="large"> Yes </va-button></div>
          <div class="text2">*Cost of participation is 0.1Ⓝ. You can win <a href="https://paras.id/token/x.paras.near::377219/377219%3A1">this NFT.</a></div>
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
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "text"
    "btn"
    "text2"; 
  justify-items: stretch; 
}
.text {
  justify-self: start; 
  grid-area: text; 
}
.btn {
  justify-self: center; 
  grid-area: btn; 
}
.text2 {
  justify-self: center; 
  align-self: center; 
  grid-area: text2; 
}


</style>
