<template>
  <div class="newsletter section">
    <div class="container">
      <div class="inner-content">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="title">
              <i class="fas fa-bell"></i>
              <h2>Newsletter</h2>
              <p>We don't send spam so don't worry.</p>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-12">
            <div class="form">
              <form method="POST" target="_blank" class="newsletter-form">
                <input name="email" placeholder="Your email address" type="email">
                <div class="button">
                  <button class="btn">Subscribe<span class="dir-part"></span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsLetter'
  }
</script>

<style scoped>
  .newsletter {
    padding: 80px;
    background-color: var(--deemGreen);
    background-color: #0D998B;
    background-image: url('~assets/images/newsletter/newsletter-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
  }

  .newsletter .inner-content {
    position: relative
  }

  .newsletter .title {
    padding-left: 80px
  }

  .newsletter .title i {
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    display: inline-block;
    background: var(--white);
    color: var(--lightGreen);
    border-radius: 50%;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .newsletter .title h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 50px;
    color: var(--white);
    line-height: 40px
  }

  .newsletter .title p {
    color: var(--white);
    display: block;
    margin-top: 0;
    font-size: 16px
  }

  .newsletter .newsletter-form {
    padding-left: 80px;
    position: relative
  }

  .newsletter .newsletter-form input {
    height: 55px;
    width: 100%;
    display: inline-block;
    background: 0 0;
    border: none;
    color: var(--white);
    border: 2px solid var(--white);
    border-radius: 6px;
    padding: 0 142px 0 20px;
    color: var(--white)!important;
    font-size: 16px;
    border-radius: 6px
  }

  .newsletter .newsletter-form ::-webkit-input-placeholder {
    color: var(--white);
    opacity: 1
  }

  .newsletter .newsletter-form :-ms-input-placeholder {
    color: var(--white);
    opacity: 1
  }

  .newsletter .newsletter-form ::-ms-input-placeholder {
    color: var(--white);
    opacity: 1
  }

  .newsletter .newsletter-form ::placeholder {
    color: var(--white);
    opacity: 1
  }

  .newsletter .newsletter-form :-ms-input-placeholder {
    color: var(--white)
  }

  .newsletter .newsletter-form ::-ms-input-placeholder {
    color: var(--white)
  }

  .newsletter .newsletter-form .button {
    display: inline-block;
    position: absolute;
    right: 0
  }

  .newsletter .newsletter-form .button .btn {
    display: inline-block;
    background: var(--white);
    color: var(--lightGreen);
    height: 55px;
    border-radius: 0 6px 6px 0
  }

  .newsletter .newsletter-form .button .btn:hover {
    color: #081828
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .newsletter .newsletter-form {
      padding-left: 0
    }

    .newsletter .newsletter-form input {
      padding-right: 135px
    }
  }

  @media only screen and (max-width:767px) {
    .section {
      padding: 50px 0
    }

    .newsletter .title {
      text-align: center;
      padding: 0
    }

    .newsletter .title i {
      position: relative;
      top: 0!important;
      display: inline-block;
      text-align: center;
      -webkit-transform: none;
      transform: none;
      margin-bottom: 15px
    }

    .newsletter .newsletter-form {
      margin-top: 20px
    }

    .newsletter .newsletter-form .button {
      position: relative;
      margin-top: 15px;
      width: 100%
    }

    .newsletter .newsletter-form .button .btn {
      width: 100%;
      border-radius: 6px
    }

    .newsletter .newsletter-form {
      padding-left: 0
    }

    .newsletter .newsletter-form input {
      padding-right: 135px
    }
  }
</style>
