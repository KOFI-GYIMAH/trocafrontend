<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
    <IncludesBreadCrumbs title="Reset Password"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->
    
    <section class="login section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div class="form-head">
              <h4 class="title">Reset Your Password</h4>
              <p>
                Enter your user account's email address and we will send you a password reset link.
              </p>

              <form method="POST" @submit.prevent="resetPassword">
                <div class="form-group">
                  <label><i class="fa-solid fa-envelope"></i> Email</label>
                  <input type="email" v-model="email" name="email" placeholder="example@gmail.com" required>
                </div>

                <div class="button">
                  <button type="submit" class="btn"><i class="fa-solid fa-envelope"></i> Send password reset email</button>
                </div>

                <p class="outer-link">Already have an account? <NuxtLink :to="{ name: 'login' }">Login here</NuxtLink></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ForgotPassword',

    layout: 'main',

    auth : 'guest',

    head () {
      return {
        title: 'Forgot Your Password? | Troca LLC.'
      }
    },

    data () {
      return {
        email: ''
      }
    },

    methods: {
      async resetPassword () {
        try {
          await this.$axios
            .$post('password_reset/', {
              email: this.email
            })

            console.log('success')
        }
        catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>
  .form-head p {
    color: var(--lightGray);
    margin-bottom: 20px;
    text-align: center
  }
</style>