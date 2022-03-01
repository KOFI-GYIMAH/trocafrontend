<template>
  <section class="login section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
          <div class="form-head">
            <h4 class="title">Register</h4>

            <form method="POST" @submit.prevent="register">
              <div class="form-group">
                <label><i class="fa-solid fa-envelope"></i> Email</label>
                <input type="email" v-model="email" name="email" placeholder="example@gmail.com" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-id-badge"></i> Last Name</label>
                <input type="text" v-model="last_name" name="last_name" placeholder="Smith" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-id-badge"></i> First Name</label>
                <input type="text" v-model="first_name" name="first_name" placeholder="John" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-phone-flip"></i> Phone Number</label>
                <input type="number" v-model="phone" name="phone" placeholder="0123456789" pattern=".{8,}" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-key"></i> Password</label>
                <input type="password" v-model="password" name="password" placeholder="**********" pattern=".{8,}" required>
              </div>

              <div class="check-and-pass">
                <div class="row align-items-center">
                  <div class="col-lg-12 col-md-12 col-12">
                    <div class="form-check">
                      <input type="checkbox" checked="checked" class="form-check-input width-auto" id="exampleCheck1">
                      <label class="form-check-label">
                        Agree to our <a href="">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="button">
                <button type="submit" class="btn"><i class="fa-solid fa-user-plus"></i> Register</button>
              </div>

              <div class="alt-option">
                <span>or</span>
              </div>

              <div class="socila-login">
                <ul>
                  <li>
                    <a href="javascript:void(0)" class="google"><i class="fab fa-google"></i>Register With Google</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="facebook"><i class="fab fa-facebook-square"></i>Register With Facebook</a>
                  </li>
                </ul>
              </div>

              <p class="outer-link">Already have an account? <NuxtLink :to="{ name: 'login' }">Login Now</NuxtLink></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'RegisterForm',

    data () {
      return {
        email: '',
        last_name: '',
        first_name: '',
        phone: '',
        password: '',
        error: ''
      }
    },

    methods: {
      async register() {
        try {
          await this.$axios
            .$post('account/v1/register/', {
              email: this.email,
              last_name: this.last_name,
              first_name: this.first_name,
              phone: this.phone,
              password: this.password
            })

          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })

          this.$toasted.global.defaultSuccess({
            msg: 'Account created successfully!'
          })

          this.$router.push('/dashboard')
        }
        catch(e) {
          this.error = e.response.data
          this.error = this.error.errors[0]

          this.$toasted.global.defaultError({
            msg: this.error
          })
        }
      },
    },
  }
</script>