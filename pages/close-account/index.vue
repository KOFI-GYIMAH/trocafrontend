<template>
  <div>
	<!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Close Account"/>
	<!-- ---x--!!Breadcrumbs!!--x--- -->

	<!-- -----!!Contact!!----- -->
	<section class="dashboard section">
		<div class="container">
			<div class="row">

				<!-- -----!!DashBoard SideBar!!----- -->
        <IncludesProfileSideBar />
				<!-- --x---!!DashBoard SideBar!!---x-- -->

				<div class="col-lg-9 col-md-8 col-12">
					<div class="main-content">
						<div class="dashboard-block close-content mt-0">
							<h2>Delete Your Account</h2>
							<h4>Are you sure, you want to delete your account?</h4>
              <form method="POST" @submit.prevent="close">
                <input type="email" v-model="email" name="email" placeholder="Enter your email address to confirm deletion" class="form-control my-3" required>
                <p>Hint: {{ loggedInUser.email }}</p>
                <div class="button">
                  <button type="submit" class="btn">Delete Account</button>
                </div>
              </form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- -----!!Contact!!----- -->

	<!-- -----!!Newsletter!!----- -->
  <IncludesNewsletter />
	<!-- --x---!!Newsletter!!---x-- -->

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CloseAccount',

    layout: 'main',

    head () {
      return {
        title: 'Close Account | Troca LLC.'
      }
    },

    data () {
      return {
        email: '',
        error: ''
      }
    },

    methods: {
      async close () {
        try {
          await this.$axios
            .$delete('account/v1/data/', {
              email: this.email
            })

            this.$auth.logout()

            this.$toasted.global.defaultSuccess({
              msg: 'Account closed successfully!'
            })

            this.$router.push('/')
        }
        catch (e) {
          console.log(e)
        }
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
  .close-content {
    padding: 80px 50px;
    text-align: center
  }

  .close-content h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--lightGreen)
  }

  .close-content h4 {
    font-size: 17px;
    font-weight: 400;
    color: var(--lightGray)
  }

   .close-content form p {
     color: var(--lightGreen);
     font-style: italic
   }

  .close-content .button {
    margin-top: 40px
  }

  .close-content .button .btn {
    padding: 12px 30px;
    margin-right: 6px;
    background-color: var(--lightRed)
  }

  .close-content .button .btn:hover {
    background-color: var(--deemRed)
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .close-content h2 {
      font-size: 26px
    }
  }

  @media only screen and (max-width:767px) {
    .close-content h2 {
      font-size: 22px
    }

    .close-content {
      padding: 50px 30px
    }

    .close-content .button .btn {
      width: 75%;
      margin: 0;
      margin-bottom: 10px
    }
  }
</style>