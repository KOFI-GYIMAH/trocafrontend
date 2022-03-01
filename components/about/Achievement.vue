<template>
  <section class="our-achievement section">
    <div class="container">
      <div class="row">

        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".2s">
            <h3 class="counter"><span cup-end="1250">1250</span>+</h3>
            <p>Regular Ads</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".4s">
            <h3 class="counter"><span>350</span>+</h3>
            <p>Locations</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 class="counter"><span>2500</span>+</h3>
            <p>Regular Members</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 class="counter"><span >250</span>+</h3>
            <p>Premium Ads</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AchieveMent'
  }
</script>

<style scoped>
  .our-achievement {
    background-color: var(--primaryColor);
    padding-top: 70px;
    padding: 90px 0 120px
  }

  .our-achievement .single-achievement {
    margin-top: 30px;
    text-align: center;
    padding: 0 50px
  }

  .our-achievement .single-achievement h3 {
    font-size: 40px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
    color: var(--white)
  }

  .our-achievement .single-achievement p {
    font-size: 18px;
    color: var(--lightGreen);
    font-weight: 500;
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .our-achievement {
      padding-top: 30px
    }

    .our-achievement .single-achievement {
      padding: 0
    }

    .our-achievement .single-achievement h3 {
      font-size: 30px
    }

    .our-achievement .single-achievement p {
      font-size: 16px
    }
  }

  @media only screen and (max-width:767px) {
    .our-achievement {
      padding-top: 20px
    }

    .our-achievement .single-achievement {
      padding: 0
    }

    .our-achievement .single-achievement h3 {
      font-size: 30px
    }

    .our-achievement .single-achievement p {
      font-size: 16px
    }
  }
</style>
