<template>
  <section class="item-details section">
    <div class="container">
      <!-- -----!!Item Info!!----- -->
      <div class="top-area">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-images">
              <main id="gallery">
                <div class="main-img">
                  <img :src="path + productInfo.image" id="current" alt="#">
                </div>
                <div class="images">
                  <img src="~assets/images/item-details/image1.jpg" class="img" alt="#">
                  <img src="~assets/images/item-details/image2.jpg" class="img" alt="#">
                  <img src="~assets/images/item-details/image3.jpg" class="img" alt="#">
                  <img src="~assets/images/item-details/image4.jpg" class="img" alt="#">
                  <img src="~assets/images/item-details/image5.jpg" class="img" alt="#">
                </div>
              </main>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-info">
              <h2 class="title">{{ productInfo.name }}</h2>
              <p class="location"><i class="fa-solid fa-location-dot"></i><a href="javascript:void(0)">{{ productInfo.location }} region</a></p>
              <h3 class="price">&#x20B5; {{ productInfo.price }}</h3>
              <div class="list-info">
                <h4>Information</h4>
                <ul>
                  <li><span>Condition:</span> {{ productInfo.condition }}</li>
                  <li><span>Brand:</span> {{ productInfo.brand }}</li>
                  <li><span>Model:</span> {{ productInfo.model }}</li>
                </ul>
              </div>
              <div class="contact-info">
                <ul>
                  <li>
                    <a href="tel:+002562352589" class="call">
                    <i class="lni lni-phone-set"></i>
                    +00 256 235 2589
                    <span>Call & Get more info</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="mail">
                    <i class="lni lni-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="social-share">
                <h4>Share Ad</h4>
                <ul>
                  <li><a href="javascript:void(0)" class="facebook"><i class="lni lni-facebook-filled"></i></a></li>
                  <li><a href="javascript:void(0)" class="twitter"><i class="lni lni-twitter-original"></i></a></li>
                  <li><a href="javascript:void(0)" class="google"><i class="lni lni-google"></i></a></li>
                  <li><a href="javascript:void(0)" class="linkedin"><i class="lni lni-linkedin-original"></i></a></li>
                  <li><a href="javascript:void(0)" class="pinterest"><i class="lni lni-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ---x--!!Item Info!!-x---- -->

      <!-- -----!!Item Owner!!----- -->
      <div class="item-details-blocks">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-12">
            <div class="single-block description">
              <h3>Description</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look even slightly believable.
              </p>
              <ul>
                <li>Model: Apple MacBook Pro 13.3-Inch MYDA2</li>
                <li>Apple M1 chip with 8-core CPU and 8-core GPU</li>
                <li>8GB RAM</li>
                <li>256GB SSD</li>
                <li>13.3-inch 2560x1600 LED-backlit Retina Display</li>
              </ul>
              <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>

            <div class="single-block tags">
              <h3>Tags</h3>
              <ul>
                <li><a href="javascript:void(0)">Bike</a></li>
                <li><a href="javascript:void(0)">Services</a></li>
                <li><a href="javascript:void(0)">Brand</a></li>
                <li><a href="javascript:void(0)">Popular</a></li>
              </ul>
            </div>

            <div class="single-block comments">
              <h3>Comments</h3>
              <div class="single-comment">
                <img src="~assets/images/testimonial/testi2.jpg" alt="#">
                <div class="content">
                  <h4>Luis Havens</h4>
                  <span>25 Feb, 2023</span>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable.
                  </p>
                  <a href="javascript:void(0)" class="reply"><i class="lni lni-reply"></i> Reply</a>
                </div>
              </div>
            </div>

            <div class="single-block comment-form">
              <h3>Post a comment</h3>
              <form action="#" method="POST">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="form-box form-group">
                      <input type="text" name="name" class="form-control form-control-custom" placeholder="Your Name" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="form-box form-group">
                      <input type="email" name="email" class="form-control form-control-custom" placeholder="Your Email" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-box form-group">
                      <textarea name="#" class="form-control form-control-custom" placeholder="Your Comments"></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="button">
                      <button type="submit" class="btn">Post Comment</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-4 col-md-5 col-12">
            <div class="item-details-sidebar">
              <div class="single-block author">
                <h3>Author</h3>
                <div class="content">
                  <img src="~assets/images/testimonial/testi3.jpg" alt="#">
                  <h4>Miliya Jessy</h4>
                  <span>Member Since May 15,2023</span>
                  <h4>Location</h4>
                  <p>Takoradi</p>
                  <a href="javascript:void(0)" class="see-all">See All Ads</a>
                </div>
              </div>

              <div class="single-block contant-seller comment-form ">
                <h3>Contact Seller</h3>
                <form method="POST">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-box form-group">
                        <input type="text" name="name" class="form-control form-control-custom" placeholder="Name">
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-box form-group">
                        <input type="email" name="email" class="form-control form-control-custom" placeholder="Email">
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-box form-group">
                        <textarea name="#" class="form-control form-control-custom" placeholder="Message"></textarea>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="button">
                        <button type="submit" class="btn">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- ---x--!!Item Owner!!--x--- -->
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ItemDetails',

    data () {
      return {
        productInfo: [],
        path: 'http://127.0.0.1:8000' // * Products Image Base Path
      }
    },

    methods: {
      async productDetails () {
        let response = await this.$axios
          .$get('http://127.0.0.1:8000/products/v1/4/')
          this.productInfo = response 
          console.log(this.productInfo.condition)
      }
    },

    beforeMount () {
      this.productDetails()
    }
  }
</script>

<style scoped>
  .item-details {
    background-color: var(--lightGray)
  }

  .item-details .top-area {
    background-color: var(--primaryColor);
    padding: 30px
  }

  .item-details .product-images img {
    width: 100%;
    cursor: pointer
  }

  .item-details .product-images .images {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1em 1em;
    margin-top: 1em
  }

  @-webkit-keyframes fadeIn {
    to {
      opacity: 1
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1
    }
  }

  .item-details .product-images .fade-in {
    -webkit-animation: fadeIn .5s ease-in 1 forwards;
    animation: fadeIn .5s ease-in 1 forwards
  }

  .item-details .product-info {
    padding-left: 40px
  }

  .item-details .product-info .title {
    font-size: 30px;
    margin-bottom: 10px;
    color: var(--white)
  }

  .item-details .product-info .location {
    display: block;
    margin-bottom: 20px
  }

  .item-details .product-info .location i {
    display: inline-block;
    margin-right: 5px;
    color: var(--lightGreen)
  }

  .item-details .product-info .location a {
    color: var(--white)
  }

  .item-details .product-info .location a:hover {
    color: #5830E0
  }

  .item-details .product-info .price {
    color: #5830E0;
    display: block
  }

  .item-details .product-info .list-info {
    border-top: 1px solid #eee;
    margin-top: 30px;
    padding-top: 30px
  }

  .item-details .product-info .list-info h4 {
    font-size: 20px;
    font-weight: 500;
    display: block;
    margin-bottom: 15px
  }

  .item-details .product-info .list-info ul li {
    display: block;
    margin-bottom: 6px
  }

  .item-details .product-info .list-info ul li:last-child {
    margin: 0
  }

  .item-details .product-info .list-info ul li span {
    display: inline-block;
    font-weight: 500;
    min-width: 100px
  }

  .item-details .product-info .contact-info {
    margin-top: 30px
  }

  .item-details .product-info .contact-info ul li {
    display: inline-block;
    margin-right: 10px
  }

  .item-details .product-info .contact-info ul li:last-child {
    margin: 0
  }

  .item-details .product-info .contact-info ul li .call {
    position: relative;
    padding: 15px 40px;
    padding-left: 80px;
    color: #fff;
    background-color: #5830E0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    float: left
  }

  .item-details .product-info .contact-info ul li .call:hover {
    color: #fff;
    background-color: #081828
  }

  .item-details .product-info .contact-info ul li .call span {
    font-size: 14px;
    display: block;
    margin-top: 2px;
    font-weight: 400
  }

  .item-details .product-info .contact-info ul li .call i {
    color: #fff;
    position: absolute;
    left: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 30px
  }

  .item-details .product-info .contact-info ul li .mail {
    padding: 14px 30px;
    color: #5830E0;
    background-color: #fff;
    border: 2px solid #eee;
    border-radius: 4px;
    font-size: 30px;
    float: left
  }

  .item-details .product-info .contact-info ul li .mail:hover {
    background-color: #5830E0;
    color: #fff;
    border-color: transparent
  }

  .item-details .product-info .social-share {
    display: block;
    margin-top: 35px
  }

  .item-details .product-info .social-share h4 {
    font-size: 16px;
    font-weight: 500;
    color: #888;
    display: inline-block;
    margin-right: 15px
  }

  .item-details .product-info .social-share ul {
    display: inline-block
  }

  .item-details .product-info .social-share ul li {
    display: inline-block;
    margin-right: 5px
  }

  .item-details .product-info .social-share ul li:last-child {
    margin-right: 0
  }

  .item-details .product-info .social-share ul li a {
    height: 40px;
    width: 40px;
    text-align: center;
    display: block;
    border-radius: 50%;
    border: 1px solid #eee;
    background-color: #fff;
    color: #5830E0;
    line-height: 40px;
    font-size: 14px
  }

  .item-details .product-info .social-share ul li a.facebook {
    color: #3b5999
  }

  .item-details .product-info .social-share ul li a.facebook:hover {
    border-color: transparent;
    background-color: #3b5999;
    color: #fff
  }

  .item-details .product-info .social-share ul li a.twitter {
    color: #55acee
  }

  .item-details .product-info .social-share ul li a.twitter:hover {
    border-color: transparent;
    background-color: #55acee;
    color: #fff
  }

  .item-details .product-info .social-share ul li a.google {
    color: #dd4b39
  }

  .item-details .product-info .social-share ul li a.google:hover {
    border-color: transparent;
    background-color: #dd4b39;
    color: #fff
  }

  .item-details .product-info .social-share ul li a.linkedin {
    color: #0077b5
  }

  .item-details .product-info .social-share ul li a.linkedin:hover {
    border-color: transparent;
    background-color: #0077b5;
    color: #fff
  }

  .item-details .product-info .social-share ul li a.pinterest {
    color: #bd081c
  }

  .item-details .product-info .social-share ul li a.pinterest:hover {
    border-color: transparent;
    background-color: #bd081c;
    color: #fff
  }

  .item-details-blocks .single-block {
    background-color: #fff;
    padding: 30px;
    border: 1px solid #eee;
    border-radius: 6px;
    margin-top: 30px
  }

  .item-details-blocks .single-block h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 25px
  }

  .item-details-blocks .single-block.description p {
    margin: 15px 0;
    font-size: 16px
  }

  .item-details-blocks .single-block.description ul {
    display: block;
    margin: 30px 0
  }

  .item-details-blocks .single-block.description ul li {
    display: block;
    margin-bottom: 5px;
    font-size: 15px
  }

  .item-details-blocks .single-block.description ul li:last-child {
    margin-bottom: 0
  }

  .item-details-blocks .single-block.tags ul li {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 8px
  }

  .item-details-blocks .single-block.tags ul li a {
    padding: 8px 15px;
    border: 1px solid #eee;
    color: #888;
    border-radius: 4px
  }

  .item-details-blocks .single-block.tags ul li a:hover {
    color: #5830E0;
    border-color: #5830E0
  }

  .item-details-blocks .single-block.comments .single-comment {
    position: relative;
    padding-left: 110px;
    margin-top: 40px
  }

  .item-details-blocks .single-block.comments .single-comment img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0
  }

  .item-details-blocks .single-block.comments .single-comment h4 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2px
  }

  .item-details-blocks .single-block.comments .single-comment span {
    display: block;
    margin-bottom: 25px
  }

  .item-details-blocks .single-block.comments .single-comment p {
    font-size: 16px
  }

  .item-details-blocks .single-block.comments .single-comment .reply {
    padding: 8px 15px;
    border: 1px solid #eee;
    color: #888;
    border-radius: 4px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500
  }

  .item-details-blocks .single-block.comments .single-comment .reply i {
    display: inline-block;
    margin-right: 2px
  }

  .item-details-blocks .single-block.comments .single-comment .reply:hover {
    color: #5830E0;
    border-color: #5830E0
  }

  .item-details-sidebar .single-block.author {
    position: relative
  }

  .item-details-sidebar .single-block.author img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0
  }

  .item-details-sidebar .single-block.author .content {
    position: relative;
    padding-left: 70px
  }

  .item-details-sidebar .single-block.author .content h4 {
    font-size: 16px;
    font-weight: 500
  }

  .item-details-sidebar .single-block.author .content span {
    font-size: 14px;
    color: #888;
    margin-top: 4px;
    display: block
  }

  .item-details-sidebar .single-block.author .content .see-all {
    font-size: 15px;
    margin-top: 20px;
    color: #5830E0
  }

  .item-details-sidebar .single-block.author .content .see-all:hover {
    color: #081828
  }

  .item-details-sidebar .single-block.contant-seller .form-control-custom {
    margin-bottom: 15px;
    height: 50px
  }

  .item-details-sidebar .single-block.contant-seller .form-control-custom::-webkit-input-placeholder {
    color: #081828;
    padding: 0!important
  }

  .item-details-sidebar .single-block.contant-seller .form-control-custom:-ms-input-placeholder {
    color: #081828;
    padding: 0!important
  }

  .item-details-sidebar .single-block.contant-seller .form-control-custom::-ms-input-placeholder {
    color: #081828;
    padding: 0!important
  }

  .item-details-sidebar .single-block.contant-seller .form-control-custom::placeholder {
    color: #081828;
    padding: 0!important
  }

  .item-details-sidebar .single-block.contant-seller .form-box textarea.form-control-custom {
    height: 150px
  }

  .item-details-sidebar .single-block.contant-seller .form-box textarea.form-control-custom::-webkit-input-placeholder {
    color: #081828;
    padding: 0!important
  }

  .item-details-sidebar .single-block.contant-seller .form-box textarea.form-control-custom:-ms-input-placeholder {
    color: #081828;
    padding: 0!important
  }

  .item-details-sidebar .single-block.contant-seller .form-box textarea.form-control-custom::-ms-input-placeholder {
    color: #081828;
    padding: 0!important
  }

  .item-details-sidebar .single-block.contant-seller .form-box textarea.form-control-custom::placeholder {
    color: #081828;
    padding: 0!important
  }
</style>