<template>
  <section class="about-us section">
    <div class="container">
      <div class="row align-items-center justify-content-center">

        <div class="col-lg-6 col-md-12 col-12">
          <div class="content-left wow fadeInLeft" data-wow-delay=".3s">
            <img src="~assets/images/about/choose-left.jpg" alt="#">
            <a target="_blank"
                href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
              class="video"><i class="fas fa-play"></i>
            </a>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 col-12">
          <div class="content-right wow fadeInRight" data-wow-delay=".5s">
            <span class="sub-heading">About</span>
            <h2>About Our Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi aliquip ex ea commodo consequat.
            </p>

            <h3>What We Do</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'OurIdentity'
  }
</script>

<style scoped>
  .about-us .content-left {
    position: relative
  }

  .about-us .content-left img {
    width: 100%
  }

  .about-us .content-left .video {
    position: absolute;
    height: 80px;
    width: 80px;
    line-height: 80px;
    text-align: center;
    color: var(--deemGreen);
    background-color: var(--white);
    border-radius: 50%;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    font-size: 16px;
    padding-left: 3px;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out
  }

  .about-us .content-left .video:hover {
    color: var(--white);
    background-color: var(--deemGreen);
    -webkit-transform: scale(1.05);
    transform: scale(1.05)
  }

  .about-us .content-right {
    padding-right: 70px;
    padding-left: 40px
  }

  .about-us .content-right .sub-heading {
    display: inline-block;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 15px;
    color: var(--lightGreen);
    background-color: var(--primaryColor);
    padding: 5px 20px;
    border-radius: 4px
  }

  .about-us .content-right h2 {
    display: block;
    font-size: 32px;
    margin-bottom: 25px;
    line-height: 40px;
    text-transform: capitalize;
    position: relative;
    font-weight: 700
  }

  .about-us .content-right h3 {
    font-size: 22px;
    margin-top: 40px;
    margin-bottom: 8px;
    line-height: 45px;
    text-transform: capitalize;
    position: relative;
    font-weight: 600
  }

  .about-us .content-right p {
    font-size: 16px;
    line-height: 26px
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .about-us .content-right {
      margin-top: 30px;
      padding-right: 0;
      padding-left: 0
    }
  }

  @media only screen and (max-width:767px) {
    .about-us .content-right {
      margin-top: 30px;
      padding-right: 0;
      padding-left: 0
    }

    .about-us .content-right h2 {
      font-size: 25px;
      line-height: 35px
    }

    .about-us .content-right h3 {
      margin-top: 30px
    }
  }
</style>
