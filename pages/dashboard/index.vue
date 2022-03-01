<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Dashboard"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Contact!!----- -->
    <section class="dashboard section">
      <div class="container">
        <div class="row">

          <!-- -----!!DashBoard SideBar!!----- -->
          <IncludesProfileSideBar />
          <!-- --x---!!DashBoard SideBar!!---x-- -->

          <div class="col-lg-9 col-md-8 col-12">
            <div class="main-content">
              <!-- -----!!Top Lists!!----- -->
              <div class="details-lists">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="single-list">
                      <div class="list-icon">
                        <i class="fas fa-check-square"></i>
                      </div>
                      <h3>
                        340
                        <span>Total Ad Posted</span>
                      </h3>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="single-list two">
                      <div class="list-icon">
                        <i class="fas fa-bolt"></i>
                      </div>
                      <h3>
                        23
                        <span>Featured Ads </span>
                      </h3>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="single-list three">
                      <div class="list-icon">
                        <i class="fas fa-frown"></i>
                      </div>
                      <h3>
                        45
                        <span>Expired Ads </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <!-- -----!!Activity!!----- -->
                <div class="col-lg-6 col-md-12 col-12">
                  <div class="activity-log dashboard-block">
                    <h3 class="block-title">My Activity Log</h3>

                    <ul>
                      <li>
                        <div class="log-icon">
                          <i class="fas fa-bell"></i>
                        </div>
                        <a href="javascript:void(0)" class="title">Your Profile Updated!</a>
                        <span class="time">12 Minutes Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>

                      <li>
                        <div class="log-icon">
                          <i class="fas fa-bell"></i>
                        </div>
                        <a href="javascript:void(0)" class="title">You change your password</a>
                        <span class="time">59 Minutes Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>

                      <li>
                        <div class="log-icon">
                          <i class="fas fa-bell"></i>
                        </div>
                        <a href="javascript:void(0)" class="title">Your ads approved!</a>
                        <span class="time">5 Hours Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>

                      <li>
                        <div class="log-icon">
                          <i class="fas fa-bell"></i>
                        </div>
                        <a href="javascript:void(0)" class="title">You submit a new ads</a>
                        <span class="time">8 hours Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>

                      <li>
                        <div class="log-icon">
                          <i class="fas fa-bell"></i>
                        </div>
                        <a href="javascript:void(0)" class="title">You subscribe as a pro user!</a>
                        <span class="time">1 day Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- ----x-!!Activity!!---x-- -->

                <!-- -----!!Recent Ads!!----- -->
                <div class="col-lg-6 col-md-12 col-12">
                  <div class="recent-items dashboard-block">
                    <h3 class="block-title">Recent Ads</h3>

                    <ul>
                      <li>
                        <div class="image">
                          <a href="javascript:void(0)"><img src="~assets/images/dashboard/recent-items/item1.jpg" alt="#"></a>
                        </div>
                        <a href="javascript:void(0)" class="title">iPhone 11 Pro Max</a>
                        <span class="time">12 Minutes Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>

                      <li>
                        <div class="image">
                          <a href="javascript:void(0)"><img src="~assets/images/dashboard/recent-items/item2.jpg" alt="#"></a>
                        </div>
                        <a href="javascript:void(0)" class="title">Polaris 600 Assault 144</a>
                        <span class="time">5 days Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>

                      <li>
                        <div class="image">
                          <a href="javascript:void(0)"><img src="~assets/images/dashboard/recent-items/item3.jpg" alt="#"></a>
                        </div>
                        <a href="javascript:void(0)" class="title">Brand New Bagpack</a>
                        <span class="time">1 week Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>

                      <li>
                        <div class="image">
                          <a href="javascript:void(0)"><img src="~assets/images/dashboard/recent-items/item4.jpg" alt="#"></a>
                        </div>
                        <a href="javascript:void(0)" class="title">Honda Civic VTi 2023</a>
                        <span class="time">3 week Ago</span>
                        <span class="remove"><a href="javascript:void(0)"><i class="fas fa-times"></i></a></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- ---x--!!Recent Ads!!--x--- -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- -----!!Contact!!----- -->

    <!-- -----!!Newsletter!!----- -->
    <IncludesNewsletter />
    <!-- --x---!!Newsletter!!---x-- -->
  </div>
</template>

<script>
  export default {
    middleware: 'auth', // Redirect To Login Page If Not Authenticated
    
    name: 'DashBoard',

    layout: 'main',

    head () {
      return {
        title: 'Dashboard | Troca LLC.'
      }
    }
  }
</script>

<style scoped>
  .dashboard .main-content .details-lists .single-list {
    position: relative;
    background: var(--primaryColor);
    padding: 50px 30px;
    padding-left: 115px
  }

  .dashboard .main-content .details-lists .single-list .list-icon {
    height: 65px;
    width: 65px;
    line-height: 69px;
    border: 2px solid #15c0b03d;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center
  }

  .dashboard .main-content .details-lists .single-list .list-icon i {
    font-size: 25px;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #15c0b0, #3fdd90)
  }

  .dashboard .main-content .details-lists .single-list.two .list-icon {
    border-color: #ddd7fb
  }

  .dashboard .main-content .details-lists .single-list.two .list-icon i {
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #5d45fd, #6197ff)
  }

  .dashboard .main-content .details-lists .single-list.three .list-icon {
    border-color: #f5e3f3
  }

  .dashboard .main-content .details-lists .single-list.three .list-icon i {
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #de6dd5, #ff5eb3)
  }

  .dashboard .main-content .details-lists .single-list h3 {
    font-size: 23px;
    font-weight: 600;
    position: relative;
    top: -2px;
    color: var(--white);
  }

  .dashboard .main-content .details-lists .single-list h3 span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px
  }
  
  .dashboard .main-content .activity-log,
  .dashboard .main-content .recent-items {
    margin-top: 30px;
    background: var(--primaryColor)
  }

  .dashboard-block .block-title {
    padding: 25px 30px;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid var(--lightGreen);
    margin-bottom: 30px;
    color: var(--white);
    margin-bottom: 20px
  }

  .dashboard .main-content .activity-log ul li,
  .dashboard .main-content .recent-items ul li {
    display: block;
    position: relative;
    padding-right: 50px;
    padding-left: 65px;
    padding-top: 20px;
    padding-bottom: 20px;
    background: var(--primaryColor);
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .dashboard .main-content .activity-log ul li:hover,
  .dashboard .main-content .recent-items ul li:hover {
    background: var(--lightGray)
  }

  .dashboard .main-content .activity-log ul li .log-icon {
    position: absolute;
    left: 30px;
    top: 25px
  }

  .dashboard .main-content .activity-log ul li .log-icon i {
    color: var(--lightGreen);
    font-size: 16px
  }

  .dashboard .main-content .activity-log ul li .title,
  .dashboard .main-content .recent-items ul li .title {
    font-size: 14px;
    color: var(--white);
    font-weight: 500
  }

  .dashboard .main-content .activity-log ul li:hover,
  .dashboard .main-content .recent-items ul li:hover {
    cursor: pointer
  }

  .dashboard .main-content .activity-log ul li:hover .title,
  .dashboard .main-content .recent-items ul li:hover .title {
    color: var(--primaryColor);
    font-weight: 600
  }

  .dashboard .main-content .activity-log ul li .time,
  .dashboard .main-content .recent-items ul li .time {
    display: block;
    font-size: 14px;
    color: var(--lightGreen);
    margin-top: 2px
  }

  .dashboard .main-content .activity-log ul li .remove,
  .dashboard .main-content .recent-items ul li .remove {
    display: block
  }

  .dashboard .main-content .activity-log ul li .remove a,
  .dashboard .main-content .recent-items ul li .remove a {
    position: absolute;
    right: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 15px;
    width: 15px;
    line-height: 15px;
    background: #f4193f;
    color: #fff;
    font-size: 10px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    border-radius: 3px
  }

  .dashboard .main-content .activity-log ul li .remove a:hover,
  .dashboard .main-content .recent-items ul li .remove a:hover {
    color: #fff;
    background: #081828
  }

  .dashboard .main-content .activity-log ul li:hover .remove a,
  .dashboard .main-content .recent-items ul li:hover .remove a {
    opacity: 1;
    visibility: visible
  } 

  .dashboard .main-content .recent-items ul li {
    padding-left: 110px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .dashboard .main-content .recent-items ul li .image a {
    position: absolute;
    left: 30px;
    top: 15px
  }

  .dashboard .main-content .recent-items ul li .image img {
    height: 60px;
    width: 60px
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .dashboard .main-content .details-lists .single-list {
      padding: 0;
      padding: 20px;
      text-align: center
    }

    .dashboard .main-content .details-lists .single-list .list-icon {
      height: 55px;
      width: 55px;
      line-height: 55px;
      -webkit-transform: translateY(-50%);
      transform: translateY(0%);
      text-align: center;
      position: relative;
      text-align: center;
      left: 0;
      top: 0;
      display: inline-block;
      margin-bottom: 15px
    }

    .dashboard .main-content .details-lists .single-list .list-icon i {
      font-size: 20px
    }
    
    .dashboard-sidebar {
      margin-bottom: 30px
    }
  }

  @media only screen and (max-width:767px) {
    .dashboard .main-content .details-lists .single-list {
      margin-top: 30px
    }

    .dashboard-sidebar {
      margin-bottom: 30px
    }
  }
</style>