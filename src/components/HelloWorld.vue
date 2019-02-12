<template>
  <div class="hello">
    <el-row>
      <el-button type="primary" icon="fas fa-edit" @click="handleClickLogin" :disabled="!isInit">get authCode</el-button>
      <el-button type="primary" icon="fas fa-edit" @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">sign in</el-button>
      <el-button type="primary" icon="fas fa-edit" @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">sign out</el-button>
      <i class="fas fa-edit"></i>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      isInit: false,
      isSignIn: false
    }
  },
   methods: {
    handleClickLogin(){
      this.$gAuth.getAuthCode()
      .then(authCode => {
        //on success
        console.log('authCode', authCode)
      })
      .catch(error => {
        //on fail do something
      })
    },

    handleClickSignIn(){
      this.$gAuth.signIn()
      .then(GoogleUser => {
        //on success do something
        console.log('GoogleUser', GoogleUser)
        this.isSignIn = this.$gAuth.isAuthorized
      })
      .catch(error  => {
        //on fail do something
      })
    },

    handleClickSignOut(){
      this.$gAuth.signOut()
      .then(() => {
        //on success do something
        this.isSignIn = this.$gAuth.isAuthorized
      })
      .catch(error  => {
        //on fail do something
      })
    }

  },

  created(){
    let that = this
    let checkGauthLoad = setInterval(function(){
      that.isInit = that.$gAuth.isInit
      that.isSignIn = that.$gAuth.isAuthorized
      if(that.isInit) clearInterval(checkGauthLoad)
    }, 1000);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
