<template>
  <section class="items-grid section custom-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2 class="wow fadeInUp" data-wow-delay=".4s">Latest Products</h2>
            <p class="wow fadeInUp" data-wow-delay=".6s">
              There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div class="single-head">
        <div class="row">
          <!-- One Edited -->
          <div v-for='product in products.slice(0, 6)' :key='product.id' class="col-lg-4 col-md-6 col-12">
            <div class="single-grid wow fadeInUp" data-wow-delay=".2s">
              <div class="image">
                <NuxtLink :to="{ name: 'ad-details' }" class="thumbnail"><img :src="path + product.image" alt="#"></NuxtLink>
                <div class="author">
                  <div class="author-image">
                    <a href="#"><img src="~assets/images/items-grid/author-1.jpg" alt="#">
                      <span>{{ product.seller }}</span>
                    </a>
                  </div>
                  <p class="sale">For {{ product.option['option'] }}</p>
                </div>
              </div>
              <div class="content">
                <div class="top-content">
                  <a href="#" class="tag">{{ product.subcategory['name'] }}</a>
                  <h3 class="title">
                    <a href="#">{{ product.name }}</a>
                  </h3>
                  <p class="update-time">Last Updated: 1 hours ago</p>
                  <ul class="rating">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><a href="#">(35)</a></li>
                  </ul>
                  <ul class="info-list">
                    <li><a href="#"><i class="fas fa-map-marker"></i> {{ product.location['region'] }} region</a></li>
                    <li><a href="#"><i class="fas fa-clock"></i> Feb 18, 2023</a></li>
                  </ul>
                </div>
                <div class="bottom-content">
                  <p class="price">Start From: <span>&#x20B5; {{ product.price }}</span></p>
                  <a href="#" class="like"><i class="fas fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- // ! TO REMOVE -->
          <div class="col-lg-4 col-md-6 col-12">
              <!-- Start Single Grid -->
              <div class="single-grid wow fadeInUp" data-wow-delay=".4s">
                  <div class="image">
                      <a href="#" class="thumbnail"><img src="~assets/images/items-grid/img5.jpg" alt="#"></a>
                      <div class="author">
                          <div class="author-image">
                              <a href="javascript:void(0)"><img src="~assets/images/items-grid/author-5.jpg" alt="#">
                                  <span>Thomas Deco</span></a>
                          </div>
                          <p class="sale">For Sale</p>
                      </div>
                      <p class="item-position"><i class="fas fa-bolt"></i> Featured</p>
                  </div>
                  <div class="content">
                      <div class="top-content">
                          <a href="javascript:void(0)" class="tag">Apple</a>
                          <h3 class="title">
                              <a href="#">Apple Macbook Pro 13 Inch</a>
                          </h3>
                          <p class="update-time">Last Updated: 5 hours ago</p>
                          <ul class="rating">
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star"></i></li>
                              <li><i class="fas fa-star"></i></li>
                              <li><a href="javascript:void(0)">(35)</a></li>
                          </ul>
                          <ul class="info-list">
                              <li><a href="javascript:void(0)"><i class="fas fa-map-marker"></i> Louis, Missouri, US</a></li>
                              <li><a href="javascript:void(0)"><i class="fas fa-clock"></i> May 25, 2023</a></li>
                          </ul>
                      </div>
                      <div class="bottom-content">
                          <p class="price">Start From: <span>$550.00</span></p>
                          <a href="javascript:void(0)" class="like"><i class="fas fa-heart"></i></a>
                      </div>
                  </div>
              </div>
              <!-- End Single Grid -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'LatestProducts',

    data () {
      return {
        path: 'http://127.0.0.1:8000' // * Products Image Base Path
      }
    },

    computed: {
      products() {
        return this.$store.getters.products
      }
    },

    created() {
      this.$store.dispatch("getProducts");
    }
  }
</script>

<style scoped>
  .items-grid {
    background: var(--lightGray)
  }

  .items-grid.custom-padding {
    padding-top: 90px
  }

  .items-grid .section-title {
    margin-bottom: 50px
  }

  .items-grid .single-grid {
    -webkit-box-shadow: 0 10px 30px rgba(35, 38, 45, .14)!important;
    box-shadow: 0 10px 30px rgba(35, 38, 45, .14)!important;
    background: var(--primaryColor);
    overflow: hidden;
    margin-top: 30px
  }

  .items-grid .single-grid .image {
    position: relative
  }

  .items-grid .single-grid .image .author {
    background: 0 0;
    padding: 15px 20px;
    border-radius: 0;
    position: absolute;
    left: 0;
    bottom: 5px;
    overflow: visible;
    width: 100%;
    z-index: 2!important
  }

  .items-grid .single-grid .image .author::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 110px;
    width: 100%;
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(#000000e3));
    background: linear-gradient(transparent, #000000e3);
    z-index: -1;
    overflow: visible
  }

  .items-grid .single-grid .image .author .author-image {
    float: left
  }

  .items-grid .single-grid .image .author .author-image a {
    color: #081828
  }

  .items-grid .single-grid .image .author .author-image a:hover {
    color: var(--lightGreen)
  }

  .items-grid .single-grid .image .author .author-image a:hover span {
    color: var(--lightGreen)
  }

  .items-grid .single-grid .image .author .author-image a span {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    margin-left: 5px;
    color: var(--white)
  }

  .items-grid .single-grid .image .author .author-image img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: inline-block
  }

  .items-grid .single-grid .image .author .author-image p {
    display: inline-block;
    margin-left: 5px
  }

  .items-grid .single-grid .image .author .sale {
    /* display: inline-block; */
    background: var(--lightGreen);
    color: var(--white);
    font-size: 14px;
    float: right;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 6px;
  }

  .items-grid .single-grid .image .item-position {
    display: inline-block;
    background: var(--lightGreen);
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 8px 15px;
    position: absolute;
    right: 15px;
    top: 15px;
    -webkit-box-shadow: 0 5px 10px rgba(35, 38, 45, .14)!important;
    box-shadow: 0 5px 10px rgba(35, 38, 45, .14)!important
  }

  .items-grid .single-grid .image .item-position i {
    display: inline-block;
    margin-right: 3px
  }

  .items-grid .single-grid .image img {
    width: 100%;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .items-grid .single-grid .image .thumbnail {
    overflow: hidden
  }

  .items-grid .single-grid:hover .image .thumbnail img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1)
  }

  .items-grid .single-grid .content .top-content {
    padding: 30px 30px 25px
  }

  .items-grid .single-grid .content .top-content .tag {
    display: inline-block;
    margin-bottom: 5px;
    color: var(--white);
    font-size: 14px;
    font-weight: 500
  }

  .items-grid .single-grid .content .top-content .tag:hover {
    color: var(--lightGreen)
  }

  .items-grid .single-grid .content .top-content .title {
    display: block;
    margin-bottom: 10px;
    line-height: 30px
  }

  .items-grid .single-grid .content .top-content .title a {
    color: var(--lightGray);
    font-size: 20px;
    font-weight: 600
  }

  .items-grid .single-grid .content .top-content .title a:hover {
    color: var(--lightGreen)
  }

  .items-grid .single-grid .content .top-content .update-time {
    font-size: 14px;
    color: var(--lightGreen)
  }

  .items-grid .single-grid .content .top-content .rating {
    margin-top: 10px
  }

  .items-grid .single-grid .content .top-content .rating li {
    display: inline-block;
    color: #ffab02
  }

  .items-grid .single-grid .content .top-content .rating li a {
    color: var(--lightGray);
    font-weight: 400;
    font-size: 13px
  }

  .items-grid .single-grid .content .top-content .rating li a:hover {
    color: var(--lightGreen)
  }

  .items-grid .single-grid .content .top-content .info-list {
    margin-top: 10px;
    overflow: hidden
  }

  .items-grid .single-grid .content .top-content .info-list li {
    display: block;
    float: left;
    width: 50%;
    line-height: 30px;
    font-size: 14px;
    font-weight: 500
  }

  .items-grid .single-grid .content .top-content .info-list li a {
    color: var(--lightGray);
    font-weight: 500
  }

  .items-grid .single-grid .content .top-content .info-list li a:hover {
    color: var(--lightGreen)
  }

  .items-grid .single-grid .content .top-content .info-list li a i {
    color: var(--lightGreen);
    display: inline-block;
    margin-right: 3px
  }

  .items-grid .single-grid .content .top-content .info-list li:last-child {
    margin: 0
  }

  .items-grid .single-grid .content .bottom-content {
    padding: 15px 30px;
    border-top: 1px solid var(--lightGray);
    overflow: hidden
  }

  .items-grid .single-grid .content .bottom-content .price {
    float: left;
    font-size: 14px;
    position: relative;
    font-weight: 500;
    color: var(--white);
    top: 8px
  }

  .items-grid .single-grid .content .bottom-content .price span {
    color: var(--lightGreen);
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
    margin-left: 5px
  }

  .items-grid .single-grid .content .bottom-content .like {
    float: right;
    color: var(--lightGreen);
    font-size: 18px;
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    display: block;
    border-radius: 50%;
    border: 1px solid var(--white)
  }

  .items-grid .single-grid .content .bottom-content .like:hover {
    color: var(--white);
    background: var(--lightGreen);
    border-color: transparent
  }
</style>
