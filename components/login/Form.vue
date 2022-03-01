<template>
  <section class="login section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
          <div class="form-head">
            <h4 class="title">Login</h4>
            
            <form method="POST" @submit.prevent="login">
              <div class="form-group">
                <label><i class="fa-solid fa-envelope"></i> Email</label>
                <input type="email" v-model="email" name="email" placeholder="example@gmail.com" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-key"></i> Password</label>
                <input type="password" v-model="password" placeholder="**********" pattern=".{8,}" title="Incorrect Password" required>
              </div>

              <div class="check-and-pass">
                <div class="row align-items-center">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-check">
                      <input type="checkbox" checked="checked" class="form-check-input width-auto" id="exampleCheck1">
                      <label class="form-check-label">Remember me</label>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-12">
                    <NuxtLink :to="{name: 'reset-password'}" class="lost-pass">Forgot Password?</NuxtLink>
                  </div>
                </div>
              </div>

              <div class="button">
                <button type="submit" class="btn"><i class="fa-solid fa-unlock"></i> Login</button>
              </div>

              <div class="alt-option">
                <span>or</span>
              </div>

              <div class="socila-login">
                <ul>
                  <li>
                    <a href="javascript:void(0)" class="google"><i class="fab fa-google"></i>Login With Google</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="facebook"><i class="fab fa-facebook-square"></i>Login With Facebook</a>
                  </li>
                </ul>
              </div>

              <p class="outer-link">Don't have an account? <NuxtLink :to="{ name: 'register' }">Register here</NuxtLink></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'LoginForm',

    data () {
      return {
        email: '',
        password: '',
      }
    },

    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            } 
          })
          
          this.$toasted.global.defaultSuccess({
            msg: 'Logged In successful!'
          })

          this.$router.push('/') // Redirect To Home Page If Successful
        } 
        catch (e) {
          this.$toasted.global.defaultError({
            msg: 'Incorrect log in credentials.'
          })
        }
      }
    }
  }
</script>