<template>
  <div class="col-lg-9 col-md-8 col-12">
    <div class="main-content">
      <!-- -----!!Update Profile!!----- -->
      <div class="dashboard-block mt-0 profile-settings-block">
        <h3 class="block-title">Profile Settings</h3>

        <div class="inner-block">
          <div class="image">
            <img src="~assets/images/dashboard/user-image.jpg" alt="#">
          </div>

          <form class="profile-setting-form" method="POST" @submit.prevent="update">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" :value="loggedInUser.first_name" @change="changeFirstName" name="first_name">
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" :value="loggedInUser.last_name" @change="changeLastName" name="last_name">
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label>Phone</label>
                  <input type="number" :value="loggedInUser.phone" @change="changePhone" name="phone">
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" :value="loggedInUser.email" name="email" @change="changeEmail">
                </div>
              </div>

              <div class="col-12">
                <div class="form-group upload-image">
                  <label>Profile Image</label>
                  <input name="profile-image" type="file" placeholder="Upload Image">
                </div>
              </div>

              <div class="col-12">
                <div class="form-group button mb-0">
                  <button type="submit" class="btn ">Update Profile</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- ---x--!!Update Profile!!--x--- -->

      <!-- -----!!Change Password!! ----- -->
      <div class="dashboard-block password-change-block">
        <h3 class="block-title">Change Password</h3>

        <div class="inner-block">
          <form class="default-form-style" method="post" action="#">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label>Current Password</label>
                  <input name="current-password" type="password" placeholder="Enter old password">
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <label>New Password</label>
                  <input name="new-password" type="password" placeholder="Enter new password">
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <label>Retype Password</label>
                  <input name="retype-password" type="password" placeholder="Retype password">
                </div>
              </div>

              <div class="col-12">
                <div class="form-group button mb-0">
                  <button type="submit" class="btn ">Update Password</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- ---x--!!Change Password!! --x--- -->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'EditProfileForms',

    data () {
      return {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        error: ''
      }
    },

    methods: {
      async update() {
        try {
          await this.$axios
            .$put('account/v1/data/', {
              first_name: this.first_name || this.loggedInUser.first_name,
              last_name: this.last_name || this.loggedInUser.last_name,
              phone: this.phone || this.loggedInUser.phone,
              email: this.email || this.loggedInUser.email
            })

            this.$toasted.global.defaultSuccess({
              msg: 'Profile updated successfully!'
            })

            this.$router.push('/dashboard')
        }
        catch(e) {
          this.error = e.response.data
          this.error = this.error.errors

          this.$toasted.global.defaultError({
            msg: this.error
          })
        }
      },

      // Update Data Values With New Entered Values
      changeFirstName (e) {
        this.first_name = e.target.value
      },

      changeLastName (e) {
        this.last_name = e.target.value
      },

      changePhone (e) {
        this.phone = e.target.value
      },

      changeEmail (e) {
        this.email = e.target.value
      }
    },

    computed: {
      ...mapGetters(
        [
          'loggedInUser'
        ]
      )
    }
  }
</script>

<style scoped>
  .profile-settings-block .inner-block,
  .password-change-block .inner-block {
    padding: 0 30px
  }

  .profile-settings-block .image img {
    height: 150px;
    width: 150px;
    border-radius: 6px
  }

  .profile-settings-block .profile-setting-form {
    margin-top: 45px
  }

  .profile-settings-block .profile-setting-form .form-group {
    margin-bottom: 30px
  }

  .profile-settings-block .profile-setting-form .form-group label {
    font-size: 14px;
    font-weight: 500;
    display: block;
    margin-bottom: 10px;
    color: var(--lightGray)
  }

  .profile-settings-block .profile-setting-form .form-group input {
    height: 50px;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 6px;
    color: #081828;
    background: #fff;
    padding: 0 20px
  }

  .profile-settings-block .profile-setting-form .form-group.upload-image input {
    padding: 10px;
    font-size: 14px;
    color: #888
  }

  @media only screen and (max-width:767px) {
    .profile-settings-block .profile-setting-form .form-group {
      margin-bottom: 20px!important
    }
  }
</style>