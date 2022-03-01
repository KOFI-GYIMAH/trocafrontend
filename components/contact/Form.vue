<template>
  <section id="contact-us" class="contact-us section">
    <div class="container">
      <div class="contact-head wow fadeInUp" data-wow-delay=".4s">
        <div class="row">
          <div class="col-lg-5 col-12">
            <div class="single-head">
              <div class="contant-inner-title">
                <h2>Our Contacts & Location</h2>
                <p>Business consulting excepteur sint occaecat cupidatat consulting non proident.</p>
              </div>

              <div class="single-info">
                <h3>Opening hours</h3>
                <ul>
                  <li>Daily: 9.30 AM–6.00 PM</li>
                  <li>Sunday & Holidays: Closed</li>
                </ul>
              </div>

              <div class="single-info">
                <h3>Contact info</h3>
                <ul>
                  <li>77408 Satterfield Motorway Suite</li>
                  <li>469 New Antonetta, BC K3L6P6</li>
                  <li><a href="/cdn-cgi/l/email-protection#ddb4b3bbb29da4b2a8afaab8bfaeb4a9b8f3beb2b0"><span class="__cf_email__" data-cfemail="791c01181409151c3910171f16571a1614">[email&#160;protected]</span></a></li>
                  <li><a href="tel:(617) 495-9400-326">(617) 495-9400-326</a></li>
                </ul>
              </div>

              <div class="single-info contact-social">
                <h3>Social contact</h3>
                <ul>
                  <li><a href="javascript:void(0)"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="javascript:void(0)"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="javascript:void(0)"><i class="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-7 col-12">
            <div class="form-main">
              <div class="form-title">
                <h2>Get in Touch</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form.
                </p>
              </div>

              <form class="form" method="post" @submit.prevent="contact">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <input name="name" type="text" v-model="name" placeholder="Name" required>
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <input name="subject" type="text" v-model="subject" placeholder="Subject" required>
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <input name="email" type="email" v-model="email" placeholder="Email" required>
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <div class="form-group">
                      <input name="phone" type="number" v-model="phone" placeholder="Phone" required>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group message">
                      <textarea name="message" v-model="message" placeholder="Message" required></textarea>
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <div class="form-group button">
                      <button type="submit" class="btn ">Submit Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContactForm',

    data () {
      return {
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
        error: ''
      }
    },

    methods: {
      async contact() {
        try {
          await this.$axios
            .$post('account/v1/contact/', {
              name: this.name,
              subject: this.subject,
              email: this.email,
              phone: this.phone,
              message: this.message
            })

          this.$toasted.global.defaultSuccess({
            msg: 'Message sent successfully!'
          })

          this.$router.push('/contact')
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

<style scoped>
  .contact-us {
    position: relative;
    background-color: var(--lightGray)
  }

  .contact-us .contact-head {
    overflow: hidden;
    position: relative;
    z-index: 5
  }

  .contact-us .contant-inner-title {
    margin-bottom: 45px
  }

  .contact-us .contant-inner-title h2 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--lightGreen);
    text-transform: capitalize
  }

  .contact-us .contant-inner-title p {
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    margin-top: 10px;
    color: var(--lightGray);
    display: block
  }

  .contact-us .single-head {
    padding: 50px;
    height: 100%;
    position: relative;
    z-index: 5;
    overflow: hidden;
    background-color: var(--primaryColor)
  }

  .contact-us .single-info {
    text-align: left;
    margin-bottom: 35px;
    position: relative
  }

  .contact-us .single-info:last-child {
    margin: 0
  }

  .contact-us .single-info h3 {
    font-size: 20px;
    color: var(--lightGreen);
    margin-bottom: 15px
  }

  .contact-us .single-info ul {
    display: inline-block
  }

  .contact-us .single-info ul li {
    font-weight: 400;
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: var(--lightGray)
  }

  .contact-us .single-info ul li:last-child {
    margin: 0
  }

  .contact-us .single-info ul li a {
    font-weight: 400;
    color: var(--lightGreen);
    display: inline-block;
    font-size: 15px
  }

  .contact-us .single-info ul li a:hover {
    color: var(--green)
  }

  .contact-us .contact-social {
    display: block;
    margin-top: 65px
  }

  .contact-us .contact-social ul li {
    display: inline-block;
    margin-right: 6px
  }

  .contact-us .contact-social ul li:last-child {
    margin-right: 0
  }

  .contact-us .contact-social ul li a {
    font-size: 14px;
    color: var(--primaryColor);
    height: 40px;
    width: 40px;
    text-align: center;
    display: block;
    line-height: 40px;
    background: #f9f9f9;
    border: 1px solid var(--lightGreen);
    border-radius: 50%;
    position: relative;
    z-index: 3
  }

  .contact-us .contact-social ul li a:hover {
    color: var(--white);
    background-color: var(--deemGreen);
    border-color: transparent
  }

  .contact-us .form-main {
    padding: 45px 50px 50px;
    background: var(--primaryColor);
    height: 100%
  }

  .contact-us .form-main .form-title {
    margin-bottom: 30px
  }

  .contact-us .form-main .form-title h2 {
    margin-bottom: 20px;
    color: var(--lightGreen);
    font-size: 30px
  }

  .contact-us .form-main .form-title p {
    font-size: 16px;
    color: var(--lightGray)
  }

  .contact-us .form .form-group {
    margin-bottom: 15px;
    display: block
  }

  .contact-us .form .form-group input {
    height: 55px;
    line-height: 55px;
    width: 100%;
    padding: 0 20px;
    color: var(--primaryColor);
    font-weight: 400
  }

  .contact-us .form .form-group textarea {
    height: 180px;
    width: 100%;
    padding: 15px 20px;
    color: var(--primaryColor);
    resize: none;
    font-weight: 400
  }

  .contact-us .form .button {
    margin: 0
  }

  .contact-us .form .button .btn {
    height: 50px;
    border: none
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .contact-us .form-main {
      margin-top: 30px
    }
  }

  @media only screen and (max-width:767px) {
    .contact-us .form-main {
      margin-top: 30px
    }

    .contact-us .single-head {
      padding: 30px!important
    }

    .contact-us .form-main {
      padding: 30px!important
    }

    .contact-us .contant-inner-title h2 {
      font-size: 22px
    }

    .contact-us .form-main .form-title h2 {
      font-size: 25px
    }
  }
</style>