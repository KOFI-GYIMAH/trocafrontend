<template>
  <div>
  <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Category"/>
  <!-- ---x--!!Breadcrumbs!!--x--- -->

  <!-- -----!!Categories!!----- -->
  <section class="category-page section">
    <div class="container">
      <div class="row">
        <!-- -----!!SideBar!!----- -->
        <CategoriesSidebar />
        <!-- --x---!!SideBar!!--x--- -->

        <!-- -----!!Ads Content!!----- -->
        <div class="col-lg-9 col-md-8 col-12">
          <div class="category-grid-list">
            <div class="row">
              <div class="col-12">
                <!-- -----!!Top Bar!!----- -->
                <div class="category-grid-topbar">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-12">
                      <h3 class="title">Showing 1-12 of 21 ads found</h3>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <button class="nav-link active"
                            id="nav-grid-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-grid"
                            type="button"
                            role="tab"
                            aria-controls="nav-grid"
                            aria-selected="true">
                            <i class="lni lni-grid-alt"></i>
                          </button>

                          <button class="nav-link"
                            id="nav-list-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-list"
                            type="button"
                            role="tab"
                            aria-controls="nav-list"
                            aria-selected="false">
                            <i class="lni lni-list"></i>
                          </button>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <!-- --x---!!Top Bar!!--x--- -->

                <div class="tab-content" id="nav-tabContent">
                  <!-- -----!!Grid View!!----- -->
                  <div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                    <div class="row">
                      <div v-for="item in products.slice(0, 9)" :key="item.id" class="col-lg-4 col-md-6 col-12">
                        <div class="single-item-grid">
                          <div class="image">
                            <a href=""><img :src="path + item.image" alt="#"></a>
                            <i class=" cross-badge fas fa-bolt"></i>
                            <span class="flat-badge sale">{{ item.option['option'] }}</span>
                          </div>
                          <div class="content">
                            <a href="javascript:void(0)" class="tag">{{ item.subcategory['name'] }}</a>
                            <h3 class="title">
                              <a href="item-details.html">{{ item.name }}</a>
                            </h3>
                            <p class="location"><a href="javascript:void(0)"><i class="fas fa-map-marker">
                              </i>{{ item.location['region'] }} region</a>
                            </p>
                            <ul class="info">
                              <li class="price">&#x20B5; {{ item.price }}</li>
                              <li class="like"><a href="javascript:void(0)"><i class="fas fa-heart"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <!-- 
                          Remove This div if sale and rent color
                          are resolve
                       -->
                      <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-item-grid">
                          <div class="image">
                            <a href="item-details.html"><img src="~assets/images/items-tab/item-3.jpg" alt="#"></a>
                            <i class=" cross-badge fas fa-bolt"></i>
                            <span class="flat-badge rent">Rent</span>
                          </div>
                          <div class="content">
                            <a href="javascript:void(0)" class="tag">Electronic</a>
                            <h3 class="title">
                              <a href="item-details.html">Nikon DSLR Camera</a>
                            </h3>
                            <p class="location"><a href="javascript:void(0)"><i class="fas fa-map-marker">
                              </i>Alaska, USA</a>
                            </p>
                            <ul class="info">
                              <li class="price">$560.00</li>
                              <li class="like"><a href="javascript:void(0)"><i class="fas fa-heart"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <div class="pagination left">
                          <ul class="pagination-list">
                            <li><a href="javascript:void(0)">1</a></li>
                            <li class="active"><a href="javascript:void(0)">2</a></li>
                            <li><a href="javascript:void(0)">3</a></li>
                            <li><a href="javascript:void(0)">4</a></li>
                            <li><a href="javascript:void(0)"><i class="lni lni-chevron-right"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ---x--!!Grid View!!--x--- -->

                  <!-- -----!!List View!!----- -->
                  <div class="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                    <div class="row">
                      <div v-for="item in products" :key="item.id" class="col-lg-12 col-md-12 col-12">
                        <div class="single-item-grid">
                          <div class="row align-items-center">
                            <div class="col-lg-5 col-md-7 col-12">
                              <div class="image">
                                <a href="item-details.html"><img :src="path + item.image" alt="#"></a>
                                <i class=" cross-badge fas fa-bolt"></i>
                                <span class="flat-badge sale">{{ item.option['option'] }}</span>
                              </div>
                            </div>
                            <div class="col-lg-7 col-md-5 col-12">
                              <div class="content">
                                <a href="javascript:void(0)" class="tag">{{ item.subcategory['name'] }}</a>
                                <h3 class="title">
                                  <a href="item-details.html">{{ item.name }}</a>
                                </h3>
                                <p class="location"><a href="javascript:void(0)"><i class="fas fa-map-marker">
                                  </i>{{ item.location['region'] }} region</a>
                                </p>
                                <ul class="info">
                                  <li class="price">&#x20B5; {{ item.price }}</li>
                                  <li class="like"><a href="javascript:void(0)"><i class="fas fa-heart"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12 col-12">
                        <div class="single-item-grid">
                          <div class="row align-items-center">
                            <div class="col-lg-5 col-md-7 col-12">
                              <div class="image">
                                <a href="item-details.html"><img src="~assets/images/items-tab/item-6.jpg" alt="#"></a>
                                <i class=" cross-badge fas fa-bolt"></i>
                                <span class="flat-badge rent">Rent</span>
                              </div>
                            </div>
                            <div class="col-lg-7 col-md-5 col-12">
                              <div class="content">
                                <a href="javascript:void(0)" class="tag">Books & Magazine</a>
                                <h3 class="title">
                                  <a href="item-details.html">Story Book</a>
                                </h3>
                                <p class="location"><a href="javascript:void(0)"><i class="fas fa-map-marker">
                                  </i>New York, USA</a>
                                </p>
                                <ul class="info">
                                  <li class="price">$120.00</li>
                                  <li class="like"><a href="javascript:void(0)"><i class="fas fa-heart"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <div class="pagination left">
                          <ul class="pagination-list">
                            <li><a href="javascript:void(0)">1</a></li>
                            <li class="active"><a href="javascript:void(0)">2</a></li>
                            <li><a href="javascript:void(0)">3</a></li>
                            <li><a href="javascript:void(0)">4</a></li>
                            <li><a href="javascript:void(0)"><i class="lni lni-chevron-right"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- ---x--!!List View!!--x--- -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- --x---!!Ads Content!!---x-- -->
      </div>
    </div>
  </section>
  <!-- ---x--!!Categories!!---x-- -->
  </div>
</template>

<script>
  export default {
    name: 'AdCategories',

    auth: false,

    layout: 'main',

    head () {
      return {
        title: 'Categories | Troca LLC.'
      }
    },

    data () {
      return {
        path: 'http://127.0.0.1:8000'
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
  .category-page {
    background-color: var(--white)
  }

  /* .category-page .single-ad-grid {
    background-color: #fff
  } */

  .category-page .category-grid-topbar {
    padding: 15px 20px;
    background-color: var(--primaryColor);
    padding-right: 15px
  }

  .category-page .category-grid-topbar .title {
    font-size: 15px;
    font-weight: 500;
    color: var(--white);
    float: left
  }

  .category-page .category-grid-topbar .nav {
    border: none;
    float: right
  }

  .category-page .category-grid-topbar .nav button {
    border: none;
    padding: 5px 10px 3px;
    border: 1px solid var(--lightGray);
    margin-right: 6px;
    color: var(--white)
  }

  .category-page .category-grid-topbar .nav button.active {
    background-color: var(--lightGreen);
    border-color: transparent;
    color: var(--white)
  }

  .category-page .category-grid-topbar .nav button:last-child {
    margin: 0
  }

  .location {
    text-transform: capitalize
  }


  @media only screen and (max-width:767px) {
    .category-page .category-grid-topbar {
      margin-top: 30px
    }

    .category-page .category-grid-topbar .nav {
      float: none;
      margin-top: 15px
    }
  }
</style>