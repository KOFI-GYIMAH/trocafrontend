<template>
  <section class="hero-area overlay">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
          <div class="hero-text text-center">
            <!-- -----!!Jumbotron Text!!----- -->
            <div class="section-heading">
              <h2 class="wow fadeInUp" data-wow-delay=".3s">Welcome to <span>Troca</span>LLC</h2>
              <p class="wow fadeInUp" data-wow-delay=".5s">
                Buy &amp; Sell Everything From Used Cars To Mobile Phones &amp; <br>Computers,
                Or Search For Property, Jobs &amp; More.
              </p>
              
            </div>
            <!-- -----!!Search Form!!----- -->
            <div class="search-form wow fadeInUp" data-wow-delay=".7s">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12 p-0">
                  <div class="search-input">
                    <label for="keyword"><i class="fas fa-search"></i></label>
                    <input type="text" name="keyword" id="keyword" placeholder="Product keyword">
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12 p-0">
                  <div class="search-input">
                    <label for="category"><i class="fas fa-th-large"></i></label>
                    <select name="category" id="category">
                      <option value="categories" selected disabled>Categories</option>
                      <option v-for="item in categories" :key="item.id" value="none">{{ item.name }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12 p-0">
                  <div class="search-input">
                    <label for="location"><i class="fas fa-map-marker"></i></label>
                    <select name="location" id="location">
                      <option value="none" selected disabled>Locations</option>
                      <option v-for="item in regions" :key="item.id" value="none">{{ item.region }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-2 col-md-2 col-12 p-0">
                  <div class="search-btn button">
                    <button class="btn"><i class="fas fa-search"></i> Search</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- ---x--!!Search Form!!--x--- -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeJumbotron',

    data () {
      return {
        categories: [],
        regions: []
      }
    },

    methods: {
      // * Get Categories & Location On Page Load
      async category () {
        let response = await this.$axios
          .$get('products/v1/categories/')
          this.categories = response
      },

      async location () {
        let response = await this.$axios
          .$get('products/v1/location/')
          this.regions = response
      }
    },

    beforeMount () {
      this.category()
      this.location()
    },

    computed: {}
  }
</script>

<style scoped>
  .hero-area {
    background-image: url('~assets/images/hero/hero-bg.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 250px;
    padding-bottom: 300px;
    z-index: 2
  }

  .hero-area.overlay::before {
    z-index: -1;
    background: #081828;
    opacity: .9
  }

  .section-heading h2 {
    color: var(--white);
    font-size: 45px;
    line-height: 60px;
    font-weight: 600;
    margin-bottom: 25px;
    padding-bottom: 15px;
    position: relative
  }

  .section-heading h2::before {
    position: absolute;
    content: "";
    left: 50%;
    bottom: -2px;
    height: 4px;
    width: 80px;
    margin-left: -30px;
    background: var(--lightGreen);
    border-radius: 10px
  }

  .section-heading h2 span {
    color: var(--lightGreen);
  }

  .section-heading p {
    color: var(--lightGray);
    font-size: 16px;
    font-weight: 400;
    display: block
  }

  .search-form {
    margin-top: 60px;
    background: var(--lightGray);
    padding: 30px;
    padding-right: 45px
  }

  .search-form .search-input {
    position: relative;
    padding: 0 8px
  }

  .search-form .search-input input {
    width: 100%;
    background: var(--white);
    border: none;
    padding: 0 25px;
    padding-right: 45px;
    height: 55px;
    font-size: 15px
  }

  .search-form .search-input input:focus {
    outline: none!important
  }

  .search-form .search-input label {
    position: absolute;
    right: 25px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .search-form .search-input label i {
    color: var(--lightGreen)
  }

  .search-form .search-input select {
    width: 100%;
    background: var(--white);
    border: none;
    padding: 0 25px;
    height: 55px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 15px
  }

  .search-form .search-input select:focus {
    outline: none!important
  }

  .search-form button {
    width: 100%;
    border: none;
    padding: 0 25px;
    height: 55px;
    margin-left: 5px;
    background-color: var(--primaryColor)
  }

  .search-form button.btn:hover {
    background: #0F1724;
    color: var(--white)
  }

  .search-form button i {
    display: inline-block;
    margin-right: 5px
  }

  @media only screen and (min-width:991px) and (max-width:1200px) {
    .hero-area {
      padding-top: 170px;
      padding-bottom: 200px
    }

    .hero-area .hero-text h2 {
      font-size: 38px
    }

    .hero-area .hero-text .button .btn {
      padding: 12px 10px
    }

    .hero-area.style2 .hero-text h2 {
      font-size: 42px
    }
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .hero-area {
      padding-top: 135px;
      padding-bottom: 185px
    }

    .hero-area .hero-text h2 {
      font-size: 38px
    }

    .hero-area .hero-text .button .btn {
      padding: 12px 10px
    }
  }

  @media only screen and (max-width:767px) {
    .hero-area .hero-text h2 {
      font-size: 32px;
      line-height: 38px
    }

    .hero-area .hero-text .button .btn {
      padding: 12px 10px
    }

    .hero-area .search-form {
      margin-top: 30px;
      background: #fff3;
      border-radius: 6px;
      padding: 40px
    }

    .hero-area .search-form .search-input {
      margin: 0;
      padding: 0;
      margin-bottom: 10px
    }

    .hero-area .search-form .btn {
      margin: 0
    }

    .hero-area {
      padding-top: 135px;
      padding-bottom: 185px
    }
  }
</style>
