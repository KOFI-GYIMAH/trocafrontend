<template>
  <section class="how-works section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2 class="wow fadeInUp" data-wow-delay=".4s">How it Works</h2>
            <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-4 col-12">
          <div class="single-work wow fadeInUp" data-wow-delay=".2s">
            <span class="serial">01</span>
            <h3>Create Account</h3>
            <p>Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-12">
          <div class="single-work wow fadeInUp" data-wow-delay=".4s">
            <span class="serial">02</span>
            <h3>Post Your Ads</h3>
            <p>Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-12">
          <div class="single-work wow fadeInUp" data-wow-delay=".6s">
            <span class="serial">03</span>
            <h3>Sell Your Item</h3>
            <p>Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HowItWorks'
  }
</script>

<style scoped>
  .how-works {
    background-color: var(--white)
  }

  .how-works .single-work {
    text-align: center;
    padding: 40px;
    background-color: var(--primaryColor);
  }

  .how-works .single-work .serial {
    height: 80px;
    width: 80px;
    line-height: 68px;
    background-color: var(--deemGreen);
    color: var(--white);
    text-align: center;
    border-radius: 50%;
    border: 6px solid var(--white);
    display: inline-block;
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 25px;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .how-works .single-work:hover .serial {
    color: var(--white);
    background-color: transparent;
    border-color: var(--lightGreen);
    cursor: pointer
  }

  .how-works .single-work h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--white);
  }

  .how-works .single-work p {
    font-size: 16px;
    line-height: 24px;
    color: var(--lightGray);
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .how-works .single-work {
      padding: 25px 15px;
      margin-top: 30px
    }

    .how-works .single-work .serial {
      height: 70px;
      width: 70px;
      line-height: 60px;
      margin-bottom: 25px;
      font-size: 22px
    }

    .how-works .single-work h3 {
      font-size: 20px;
      margin-bottom: 8px
    }

    .how-works .single-work p {
      font-size: 15px
    }
  }

  @media only screen and (max-width:767px) {
    .how-works .single-work {
      padding: 25px 15px;
      margin-top: 30px
    }

    .how-works .single-work .serial {
      height: 70px;
      width: 70px;
      line-height: 60px;
      margin-bottom: 25px;
      font-size: 22px
    }

    .how-works .single-work h3 {
      font-size: 20px;
      margin-bottom: 8px
    }

    .how-works .single-work p {
      font-size: 15px
    }
  }
</style>
