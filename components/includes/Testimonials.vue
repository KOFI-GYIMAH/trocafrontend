<template>
  <section class="testimonials section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title align-center gray-bg">
            <h2 class="wow fadeInUp" data-wow-delay=".4s">What People Say</h2>
            <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div class="row testimonial-slider">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="single-testimonial">
            <div class="quote-icon">
              <i class="fas fa-quote-right"></i>
            </div>
            <div class="author">
              <img src="~assets/images/testimonial/testi1.jpg" alt="#">
              <h4 class="name">
                Jane Anderson
                <span class="deg">Founder & CEO</span>
              </h4>
            </div>
            <div class="text">
              <p>"It’s amazing how much easier it has been to meet new people and create instant
                connections. I have the exact same personality, the only thing that has changed is my
                mindset and a few behaviors."
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="single-testimonial">
            <div class="quote-icon">
              <i class="fas fa-quote-right"></i>
            </div>
            <div class="author">
              <img src="~assets/images/testimonial/testi2.jpg" alt="#">
              <h4 class="name">
                Devid Samuyel
                <span class="deg">Web Developer</span>
              </h4>
            </div>
            <div class="text">
              <p>"It’s amazing how much easier it has been to meet new people and create instant
                connections. I have the exact same personality, the only thing that has changed is my
                mindset and a few behaviors."
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="single-testimonial">
            <div class="quote-icon">
              <i class="fas fa-quote-right"></i>
            </div>
            <div class="author">
              <img src="~assets/images/testimonial/testi3.jpg" alt="#">
              <h4 class="name">
                Jully Sulli
                <span class="deg">Ui/Ux Designer</span>
              </h4>
            </div>
            <div class="text">
              <p>"It’s amazing how much easier it has been to meet new people and create instant
                connections. I have the exact same personality, the only thing that has changed is my
                mindset and a few behaviors."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TestiMonials'
  }
</script>

<style scoped>
  .testimonials {
    background-color: var(--primaryColor);
    padding-bottom: 180px
  }

  .testimonials .section-title h2 {
    color: var(--white)
  }

  .testimonials .section-title p {
    color: var(--white)
  }

  .testimonials .testimonial-slider {
    margin: 0
  }

  .testimonials .single-testimonial {
    background: var(--white);
    padding: 50px 40px;
    margin: 20px 0;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    position: relative
  }

  .testimonials .single-testimonial .quote-icon {
    position: absolute;
    right: 30px;
    top: 10px
  }

  .testimonials .single-testimonial .quote-icon i {
    font-size: 70px;
    color: #cccccc3b
  }

  .testimonials .single-testimonial:hover .author img {
    border-color: var(--lightGreen)
  }

  .testimonials .single-testimonial .author {
    position: relative;
    padding-left: 90px;
    min-height: 70px;
    margin-bottom: 25px;
    padding-top: 10px
  }

  .testimonials .single-testimonial .author img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 5px solid #ececec;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .testimonials .single-testimonial .author .name {
    font-size: 18px;
    font-weight: 600;
    color: #081828
  }

  .testimonials .single-testimonial .author .name .deg {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #888
  }

  .testimonials .single-testimonial .text p {
    font-size: 16px
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .testimonials {
     padding-bottom: 100px!important
    }
  }

  @media only screen and (max-width:767px) {
    .testimonials {
      padding-bottom: 80px!important
    }
    
    .testimonials .single-testimonial {
      padding: 35px 30px
    }

    .testimonials .single-testimonial .quote-icon i {
      font-size: 35px
    }
  }
</style>
