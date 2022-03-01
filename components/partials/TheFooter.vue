<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer">
              <h3>About <span>Troca</span>LLC.</h3>
              <div class="footer-about">
                <p>
                  At JJC/Oscar Inc, our goal is to find
                  buyers for sellers and sellers for buyers. We advertise, promote
                  and develop strategies for our clients in the United States, Europe,
                  Africa and Asia. We consult and manage small businesses human resources and payroll.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer f-link">
              <h3>Locations</h3>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                  <ul>
                    <li><a href="javascript:void(0)">Greater Accra</a></li>
                    <li><a href="javascript:void(0)">Central</a></li>
                    <li><a href="javascript:void(0)">Western</a></li>
                    <li><a href="javascript:void(0)">Eastern</a></li>
                    <li><a href="javascript:void(0)">Ashanti</a></li>
                  </ul>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <ul>
                    <li><NuxtLink :to="{ name: 'mail-success' }">Success Mail</NuxtLink></li>
                    <li><a href="javascript:void(0)">Chicago</a></li>
                    <li><a href="javascript:void(0)">New York City</a></li>
                    <li><a href="javascript:void(0)">San Francisco</a></li>
                    <li><a href="javascript:void(0)">Washington</a></li>
                    <li><a href="javascript:void(0)">Boston</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- -----!!Quick Links!!----- -->
          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer f-link">
              <h3>Quick Links</h3>
              <ul>
                <li><NuxtLink :to="{ name: 'post-ad' }">Post ad</NuxtLink></li>
                <li><NuxtLink :to="{ name: 'about' }">About us</NuxtLink></li>
                <li><NuxtLink :to="{ name: 'login' }">Login</NuxtLink></li>
                <li><NuxtLink :to="{ name: 'register' }">Register</NuxtLink></li>
                <li><NuxtLink :to="{ name: 'faq' }">FAQ</NuxtLink></li>
                <li><NuxtLink :to="{ name: 'faq' }">Help &amp; Support</NuxtLink></li>
              </ul>
            </div>
          </div>
          <!-- ---x--!!Quick Links!!---x-- -->

          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer f-contact">
              <h3>Contact</h3>
              <ul>
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  : Egg Fruit Street, Adenta Housing Down <br> 
                  Accra, Ghana
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i> : +(233) 553-510-672 <br> 
                  <i class="fa-solid fa-envelope"></i> : support@troca.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-12">
              <div class="content">
                <ul class="footer-bottom-links">
                  <li><NuxtLink :to="{ name: 'faq' }">Terms &amp; Conditions</NuxtLink></li>
                  <li><NuxtLink :to="{ name: 'faq' }">Privacy Policy</NuxtLink></li>
                  <li><NuxtLink :to="{ name: 'faq' }">FAQ</NuxtLink></li>
                  <li><NuxtLink :to="{ name: 'faq' }">Safety Tips</NuxtLink></li>
                  <li><NuxtLink :to="{ name: 'faq' }">Site Map</NuxtLink></li>
                </ul>

                <p class="copyright-text">
                  Copyright &copy; {{ new Date().getFullYear() }} Troca LLC.
                </p>

                <p class="copyright-text">
                  Developed by <a href="https://degeneral.cysn.org/" rel="nofollow" target="_blank">degenerals' Multimedia</a>
                </p>

                <ul class="footer-social">
                  <li><a href="javascript:void(0)" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="javascript:void(0)" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="javascript:void(0)" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="javascript:void(0)" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter'
  }
</script>

<style scoped>
  .footer {
    background: var(--primaryColor)
  }

  .footer .footer-top {
    padding: 100px 0;
    padding-top: 70px
  }

  .footer .single-footer {
    margin-top: 30px
  }

  .footer .single-footer.f-link li {
    display: block;
    margin-bottom: 10px
  }

  .footer .single-footer.f-link li:last-child {
    margin: 0
  }

  .footer .single-footer.f-link li a {
    font-size: 15px;
    font-weight: 400;
    color: var(--lightGray)
  }

  .footer .single-footer.f-link li a:hover {
    color: var(--lightGreen)
  }

  .footer .single-footer.f-contact ul li {
    display: block;
    margin-bottom: 25px;
    line-height: 25px;
    color: var(--lightGray)
  }

  .footer .single-footer.f-contact ul li:last-child {
    margin-bottom: 0
  }

  .footer .single-footer.f-contact ul li i {
    color: var(--lightGreen)
  }

  .footer .single-footer h3 {
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin-bottom: 35px;
    color: var(--lightGreen)
  }

  .footer .single-footer h3 span {
    color: var(--white)
  }

  .footer-about p {
    color: var(--deemGray)
  }

  .footer .footer-bottom {
    text-align: center;
    position: relative;
    z-index: 1
  }

  .footer .footer-bottom .inner {
    border-top: 1px solid var(--lightGray);
    padding: 50px 0
  }

  .footer .footer-bottom .footer-bottom-links li {
    display: inline-block;
    margin-right: 15px;
    position: relative;
    padding-right: 15px
  }

  .footer .footer-bottom .footer-bottom-links li::before {
    position: absolute;
    content: "";
    right: -3px;
    top: 50%;
    height: 1px;
    width: 5px;
    background: #888
  }

  .footer .footer-bottom .footer-bottom-links li:last-child {
    margin: 0;
    padding: 0
  }

  .footer .footer-bottom .footer-bottom-links li:last-child::before {
    display: none
  }

  .footer .footer-bottom .footer-bottom-links li a {
    color: var(--deemGray);
    font-weight: 400
  }

  .footer .footer-bottom .footer-bottom-links li a:hover {
    color: var(--lightGreen)
  }

  .footer .footer-bottom .copyright-text {
    margin-top: 15px;
    color: var(--deemGray)
  }

  .footer .footer-bottom .copyright-text a {
    color: var(--lightGreen)
  }

  .footer .footer-bottom .copyright-text a:hover {
    color: #13B497
  }

  .footer .footer-bottom .footer-social {
    margin-top: 40px
  }

  .footer .footer-bottom .footer-social li {
    display: inline-block;
    margin-right: 10px
  }

  .footer .footer-bottom .footer-social li:last-child {
    margin: 0
  }

  .footer .footer-bottom .footer-social li a {
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    display: block;
    border-radius: 50%;
    color: var(--white);
    background: 0 0;
    background: var(--deemGreen);
    border: 1px solid var(--deemGreen)
  }

  .footer .footer-bottom .footer-social li a:hover {
    color: var(--white);
    background: var(--primaryColor);
    border-color: transparent
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .footer .footer-top {
      padding: 50px 0!important;
      padding-top: 45px!important
    }

    .footer .single-footer h3 {
      margin-bottom: 25px!important
    }

    .footer .single-footer {
      margin-top: 40px
    }

    .footer .footer-bottom .footer-social {
      margin-top: 30px!important
    }
  }

  @media only screen and (max-width:767px) {
    .footer .footer-top {
      padding: 30px 0!important;
      padding-top: 25px!important
    }

    .footer .footer-bottom .inner {
      padding: 30px 0!important
    }

    .footer .single-footer h3 {
      margin-bottom: 25px!important
    }

    .footer .single-footer {
      margin-top: 40px;
      text-align: center
    }

    .footer .footer-bottom .footer-social {
      margin-top: 30px!important
    }
  }
</style>
