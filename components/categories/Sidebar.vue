<template>
  <div class="col-lg-3 col-md-4 col-12">
    <div class="category-sidebar">
      <!-- -----!!Search!!----- -->
      <div class="single-widget search">
        <h3>Search Ads</h3>
        <form action="#">
          <input type="text" placeholder="Search Here...">
          <button type="submit"><i class="fas fa-search"></i></button>
        </form>
      </div>

      <!-- -----!!All Categories!!----- -->
      <div class="single-widget">
        <h3>All Categories</h3>
        <ul class="list">
          <li><a href="javascript:void(0)"><i class="fas fa-utensils"></i> Hotel & Travels<span>15</span></a></li>
          <li><a href="javascript:void(0)"><i class="fas fa-briefcase"></i> Services <span>20</span></a></li>
          <li><a href="javascript:void(0)"><i class="fas fa-shopping-cart"></i> Marketing <span>55</span></a></li>
          <li><a href="javascript:void(0)"><i class="fas fa-home"></i> Real Estate<span>35</span></a></li>
          <li><a href="javascript:void(0)"><i class="fas fa-laptop"></i> Electronics <span>60</span></a></li>
          <li><a href="javascript:void(0)"><i class="fas fa-tshirt"></i> Dress & Clothing <span>55</span></a></li>
          <li><a href="javascript:void(0)"><i class="fas fa-gem"></i> Jewelry & Accessories<span>45</span></a></li>
        </ul>
      </div>

      <!-- -----!!Price Range!!----- -->
      <div class="single-widget range">
        <h3>Price Range</h3>
        <input type="range"
          class="form-range"
          name="range"
          step="1"
          min="100"
          max="10000"
          value="10"
          onchange="rangePrimary.value=value">
        <div class="range-inner">
          <label>$</label>
          <input type="text" id="rangePrimary" placeholder="100">
        </div>
      </div>

      <!-- -----!!Condition!!----- -->
      <div class="single-widget condition">
        <h3>Condition</h3>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1">
          <label class="form-check-label" for="flexCheckDefault1">All</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
          <label class="form-check-label" for="flexCheckDefault2">New</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
          <label class="form-check-label" for="flexCheckDefault3">Used</label>
        </div>
      </div>

      <!-- -----!!Advertisement!!----- -->
      <div class="single-widget banner">
        <h3>Advertisement</h3>
        <a href="javascript:void(0)">
        <img src="~assets/images/banner/banner.jpg" alt="#">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideBar'
  }
</script>

<style scoped>

  .category-sidebar .single-widget {
    background-color: var(--primaryColor);
    padding: 30px;
    margin-bottom: 30px
  }

  .category-sidebar .single-widget:last-child {
    margin-bottom: 0
  }

  .category-sidebar .single-widget h3 {
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin-bottom: 25px;
    color: var(--white)
  }

  .category-sidebar .single-widget.search form {
    position: relative
  }

  .category-sidebar .single-widget.search form input {
    height: 50px;
    width: 100%;
    color: var(--primaryColor);
    padding: 0 15px;
    padding-right: 50px
  }

  .category-sidebar .single-widget.search form button {
    height: 40px;
    width: 40px;
    text-align: center;
    display: block;
    border-radius: 6px;
    border: none;
    background-color: transparent;
    color: var(--primaryColor);
    position: absolute;
    right: 5px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .category-sidebar .single-widget.search form button:hover {
    color: var(--lightGreen)
  }

  .category-sidebar .single-widget.range input {
    color: var(--primaryColor);
    cursor: pointer
  }

  .category-sidebar .single-widget.range ::-webkit-input-placeholder {
    color: var(--primaryColor);
    opacity: 1
  }

  .category-sidebar .single-widget.range :-ms-input-placeholder {
    color: var(--primaryColor);
    opacity: 1
  }

  .category-sidebar .single-widget.range ::-ms-input-placeholder {
    color: var(--primaryColor);
    opacity: 1
  }

  .category-sidebar .single-widget.range ::placeholder {
    color: var(--primaryColor);
    opacity: 1
  }

  .category-sidebar .single-widget.range :-ms-input-placeholder {
    color: var(--primaryColor);
  }

  .category-sidebar .single-widget.range ::-ms-input-placeholder {
    color: var(--primaryColor);
  }

  .category-sidebar .single-widget.range .range-inner {
    position: relative;
    padding-left: 15px
  }

  .category-sidebar .single-widget.range label {
    color: var(--white);
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 15px
  }

  .category-sidebar .single-widget.range #rangePrimary {
    display: inline-block;
    border: none
  }

  .category-sidebar .single-widget.range input[type=range]::-webkit-slider-thumb {
    background: var(--lightGreen)!important
  }

  .category-sidebar .single-widget.range input[type=range]::-moz-range-thumb {
    background: var(--lightGreen)!important
  }

  .category-sidebar .single-widget.range input[type=range]::-ms-thumb {
    background: var(--lightGreen)!important
  }

  .category-sidebar .single-widget.condition .form-check {
    display: block;
    margin-bottom: 10px
  }

  .category-sidebar .single-widget.condition .form-check:last-child {
    margin: 0
  }

  .category-sidebar .single-widget.condition .form-check-label {
    cursor: pointer;
    color: var(--lightGray)
  }

  .category-sidebar .single-widget.condition .form-check-input {
    cursor: pointer
  }

  .category-sidebar .single-widget.condition .form-check-input:checked {
    background-color: var(--lightGreen);
    border-color: var(--lightGreen)
  }

  .category-sidebar .single-widget .list li {
    margin-bottom: 25px
  }

  .category-sidebar .single-widget .list li:last-child {
    margin: 0
  }

  .category-sidebar .single-widget .list li a {
    color: var(--deemGray);
    display: block;
    position: relative;
    padding-right: 35px
  }

  .category-sidebar .single-widget .list li a i {
    display: inline-block;
    color: var(--lightGreen);
    margin-right: 5px
  }

  .category-sidebar .single-widget .list li a span {
    height: 30px;
    width: 30px;
    line-height: 28px;
    text-align: center;
    display: block;
    border: 1px solid #eee;
    border-radius: 50%;
    font-size: 13px;
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .category-sidebar .single-widget .list li a:hover {
    color: var(--lightGreen)
  }

  .category-sidebar .single-widget .list li a:hover span {
    color: #fff;
    background-color: var(--lightGreen);
    border-color: transparent
  }

  .category-sidebar .single-widget.banner a img {
    width: 100%
  }
</style>