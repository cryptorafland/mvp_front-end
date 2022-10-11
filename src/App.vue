<script>
import HelloWorld from './components/HelloWorld.vue'
import WonnaPlay from './components/WonnaPlay.vue'
import DidIWin from './components/DidIWin.vue'
import Final from './components/Final.vue'

export default{
  data() {
    return {
      loggedin: 1,
      retarded: 0,
      showFinal: false

    }
  },
  mounted () {
    console.log(this.$near.user.accountId)
    this.loggedin = !this.$near.user.accountId
    this.retarded = 0 //this.is_retarded()

  },
  methods: {
    //function returns true
    is_retarded() {
      // this.$near.loginAccount()
      console.log(this.$near.user.accountId)
      this.retarded = true
      // return true
    },
    is_winner() {
      // this.$near.loginAccount()
      console.log(this.$near.user.accountId)
      this.showFinal = true
      // return true
    },
  },
  components:{ HelloWorld, WonnaPlay, DidIWin, Final},

}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/raffland_mvp_logo.webp" width="125" height="125" />

    <div class="wrapper" v-if="loggedin">
      <HelloWorld msg="Raffland" />
    </div>
    <div class="wrapper" v-if="!loggedin">
      <WonnaPlay v-if="!retarded" />
      <div v-if="retarded">
        <DidIWin v-if="!showFinal" />
        <Final v-if="showFinal" />
      </div>
    </div>
  </header>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-left;
    flex-wrap: wrap;
  }
}
</style>


