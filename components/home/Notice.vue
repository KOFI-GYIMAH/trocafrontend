<template>
  <section class="call-action overlay section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 col-12">
          <div class="inner">
            <div class="content">
              <h2 class="wow fadeInUp" data-wow-delay=".4s">
                Do you have something to sell?
              </h2>
              <p class="wow fadeInUp" data-wow-delay=".6s">Post your ad  on Troca LLC.</p>
              <div class="button wow fadeInUp" data-wow-delay=".8s">
                <NuxtLink :to="{ name: 'post-ad' }" class="btn">Post Ad</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NoTice'
  }
</script>

<style scoped>
  .call-action {
    background-image: url('~assets/images/call-action/sell.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 2;
    padding: 150px 0;
    background-attachment: fixed
  }

  .call-action.overlay::before {
    background-color: var(--primaryColor);
    opacity: .9;
    z-index: -1
  }

  .call-action .content {
    text-align: center
  }

  .call-action .content h2 {
    font-size: 35px;
    font-weight: 600;
    color: var(--white);
    display: block;
    margin-bottom: 15px
  }

  .call-action .content p {
    font-size: 16px;
    font-weight: 400;
    color: var(--white)
  }

  .call-action .content .button {
    margin-top: 30px
  }

  .call-action .content .button .btn:hover {
    color: var(--white);
    background: var(--deemGreen);
  }

  @media only screen and (max-width:767px) {
    .call-action .content h2 {
      font-size: 28px
    }
  }
</style>
