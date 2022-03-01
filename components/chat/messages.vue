<template>
  <div class="col-lg-9 col-md-8 col-12">
    <div class="main-content">
      <div class="dashboard-block mt-0 pb-0">
        <h3 class="block-title mb-0">Messages</h3>

        <div class="messages-body">
          <div class="form-head">
            <div class="row align-items-center">
              <div class="col-lg-5 col-12">
                <form class="chat-search-form">
                  <input type="text" placeholder="Search username" name="search">
                  <button value="search" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
              </div>

              <div class="col-lg-7 col-12">
                <h3 class="username-title">Carlos Dobson</h3>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-5 col-12">
              <div class="user-list">
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <div class="image">
                        <img src="~assets/images/messages/image1.jpg" alt="#">
                      </div>
                      <span class="username">Laura Cormier</span>
                      <span class="short-message">Hi, how are ...</span>
                      <span class="unseen-message">02</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div class="image">
                        <img src="~assets/images/messages/image2.jpg" alt="#">
                      </div>
                      <span class="username">Paul Cox</span>
                      <span class="short-message">I love your design...</span>
                      <span class="time">NOW</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div class="image">
                        <img src="~assets/images/messages/image3.jpg" alt="#">
                      </div>
                      <span class="username">Carlos Dobson</span>
                      <span class="short-message">Hi, how are ...</span>
                      <span class="time">2 mins</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div class="image busy">
                        <img src="~assets/images/messages/image4.jpg" alt="#">
                      </div>
                      <span class="username">Dahia Divers</span>
                      <span class="short-message">Nice to meet u ...</span>
                      <span class="time">5 mins</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div class="image">
                        <img src="~assets/images/messages/image5.jpg" alt="#">
                      </div>
                      <span class="username">Jenifer Lofes</span>
                      <span class="short-message">Hello, I need so...</span>
                      <span class="time">NOW</span>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div class="image">
                        <img src="~assets/images/messages/image6.jpg" alt="#">
                      </div>
                      <span class="username">jebs Kristin</span>
                      <span class="short-message">Hi, I have...</span>
                      <span class="time">20 mins</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-7 col-12">
              <div class="chat-list">
                <ul class="single-chat-head">
                  <li class="left">
                    <img src="~assets/images/messages/image1.jpg" alt="#">
                    <p class="text">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      <span class="time">9:51 AM</span>
                    </p>
                  </li>

                  <li class="right">
                    <img src="~assets/images/messages/image2.jpg" alt="#">
                    <p class="text">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      <span class="time">11:00 AM</span>
                    </p>
                  </li>

                  <li class="left">
                    <img src="~assets/images/messages/image1.jpg" alt="#">
                    <p class="text">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      <span class="time">12:00 AM</span>
                    </p>
                  </li>

                  <li class="right">
                    <img src="~assets/images/messages/image2.jpg" alt="#">
                    <p class="text">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      <span class="time">12:25 AM</span>
                    </p>
                  </li>
                </ul>

                <div class="reply-block">
                  <ul class="add-media-list">
                    <li><a href="javascript:void(0)"><i class="lni lni-link"></i></a></li>
                    <li><a href="javascript:void(0)"><i class="lni lni-image"></i></a></li>
                  </ul>
                  <input name="reply" type="text" placeholder="Type your message here...">
                  <button class="reply-btn"><i class="fa-solid fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MessaGes'
  }
</script>

<style scoped>
  .messages-body .form-head {
    border-bottom: 1px solid var(--lightGray)
  }

  .messages-body .form-head .username-title {
    font-size: 15px;
    font-weight: 500;
    padding-right: 30px;
    color: var(--lightGreen);
    text-align: right
  }

  .messages-body .chat-search-form {
    position: relative;
    border-right: 1px solid var(--lightGray);
    height: 100%;
    padding: 30px
  }

  .messages-body .chat-search-form input {
    height: 100%;
    width: 100%;
    border: none;
    color: #081828;
    font-size: 15px;
    font-weight: 400;
    background: #fff;
    padding-right: 80px
  }

  .messages-body .chat-search-form button {
    font-size: 14px;
    color: #081828;
    background: 0 0;
    border: none;
    position: absolute;
    right: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 50%;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .messages-body .chat-search-form button:hover {
    color: #fff;
    background: #5830E0;
    border-color: transparent
  }

  .messages-body .user-list {
    border-right: 1px solid #eee;
    height: 100%;
    padding-bottom: 30px;
    overflow-y: auto;
    height: 480px
  }

  .messages-body .user-list ul li {
    display: block
  }

  .messages-body .user-list ul li a {
    position: relative;
    padding-left: 70px;
    width: 100%;
    padding: 30px 65px 30px 100px
  }

  .messages-body .user-list ul li a:hover {
    background: #f9f9f9
  }

  .messages-body .user-list ul li a .image {
    position: absolute;
    left: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .messages-body .user-list ul li a .image::before {
    position: absolute;
    content: "";
    right: 0;
    bottom: 2px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #00d13f;
    border: 2px solid #fff
  }

  .messages-body .user-list ul li a .image.busy::before {
    background: #f73d64
  }

  .messages-body .user-list ul li a .image img {
    height: 50px;
    width: 50px;
    display: block;
    border-radius: 50%
  }

  .messages-body .user-list ul li a .username {
    font-size: 14px;
    font-weight: 400;
    display: block;
    color: #081828
  }

  .messages-body .user-list ul li a .short-message {
    font-size: 14px;
    font-weight: 400;
    display: block;
    color: #888;
    margin-top: 3px
  }

  .messages-body .user-list ul li a .unseen-message {
    position: absolute;
    right: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #f73c67;
    padding: 5px 12px;
    font-size: 12px;
    font-weight: 400;
    border-radius: 30px;
    color: #fff;
    font-weight: 500
  }

  .messages-body .user-list ul li a .time {
    position: absolute;
    right: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 12px;
    font-weight: 400;
    color: #888;
    font-weight: 500
  }

  .messages-body .chat-list {
    padding-right: 30px;
    padding-top: 30px
  }

  .messages-body .chat-list .single-chat-head {
    height: 309px;
    overflow-y: auto
  }

  .messages-body .chat-list .single-chat-head li {
    position: relative;
    padding-left: 75px;
    margin-bottom: 20px
  }

  .messages-body .chat-list .single-chat-head li:last-child {
    margin: 0
  }

  .messages-body .chat-list .single-chat-head li.left img {
    height: 50px;
    width: 50px;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 50%
  }

  .messages-body .chat-list .single-chat-head li.left .text {
    background: #f9f9f9;
    padding: 30px;
    font-size: 16px;
    line-height: 25px;
    color: #666;
    border-radius: 6px;
    position: relative;
    font-weight: 400
  }

  .messages-body .chat-list .single-chat-head li.left .text::before {
    position: absolute;
    left: -16px;
    bottom: 16px;
    content: "";
    border: 8px solid #f9f9f9;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent
  }

  .messages-body .chat-list .single-chat-head li.left .text .time {
    display: block;
    color: #5830E0;
    margin-top: 10px;
    font-size: 14px
  }

  .messages-body .chat-list .single-chat-head li.right {
    padding: 0;
    padding-right: 75px
  }

  .messages-body .chat-list .single-chat-head li.right img {
    height: 50px;
    width: 50px;
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 50%
  }

  .messages-body .chat-list .single-chat-head li.right .text {
    background: #f9f9f9;
    padding: 30px;
    font-size: 16px;
    line-height: 25px;
    color: #666;
    border-radius: 6px;
    position: relative;
    font-weight: 400
  }

  .messages-body .chat-list .single-chat-head li.right .text::before {
    position: absolute;
    right: -16px;
    bottom: 16px;
    content: "";
    border: 8px solid #f9f9f9;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent
  }

  .messages-body .chat-list .single-chat-head li.right .text .time {
    display: block;
    color: #5830E0;
    margin-top: 10px;
    font-size: 14px
  }

  .messages-body .chat-list .reply-block {
    padding: 30px 0;
    margin-top: 40px;
    border-top: 1px solid #eee
  }

  .messages-body .chat-list .reply-block .add-media-list {
    display: inline-block
  }

  .messages-body .chat-list .reply-block .add-media-list li {
    display: inline-block;
    margin-right: 5px
  }

  .messages-body .chat-list .reply-block .add-media-list li:last-child {
    margin: 0
  }

  .messages-body .chat-list .reply-block .add-media-list li a {
    height: 40px;
    width: 40px;
    text-align: center;
    color: #888;
    font-size: 14px;
    display: block;
    border: 1px solid #eee;
    border-radius: 50%;
    line-height: 40px
  }

  .messages-body .chat-list .reply-block .add-media-list li a:hover {
    color: #fff;
    background: #5830E0;
    border-color: transparent
  }

  .messages-body .chat-list .reply-block input {
    height: 100%;
    width: 280px;
    color: #081828;
    border: none;
    padding: 0 20px;
    font-size: 15px
  }

  .messages-body .chat-list .reply-block button {
    display: inline-block;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 48px;
    color: #fff;
    background: #5830E0;
    border-radius: 50%;
    float: right;
    border: none;
    font-size: 18px;
    position: relative;
    top: -4px;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    padding-left: 3px;
    padding-bottom: 3px
  }

  .messages-body .chat-list .reply-block button img {
    width: 17px
  }

  .messages-body .chat-list .reply-block button:hover {
    background: #081828;
    color: #fff
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .messages-body .chat-search-form {
      border-right: none
    }
    .messages-body .form-head .username-title {
      text-align: left;
      padding-left: 30px;
      padding-bottom: 30px;
      border-top: 1px solid #eee;
      padding-top: 30px
    }
    .messages-body .user-list {
      border-right: none
    }
    .messages-body .chat-list {
      padding-left: 30px;
      border-top: 1px solid #eee
    }
    .messages-body .chat-list .reply-block input {
      width: 240px
    }
  }

  @media only screen and (max-width:767px) {
      .messages-body .chat-search-form {
      border-right: none
    }
    .messages-body .form-head .username-title {
      text-align: left;
      padding-left: 30px;
      padding-bottom: 30px;
      border-top: 1px solid #eee;
      padding-top: 30px
    }
    .messages-body .user-list {
      border-right: none
    }
    .messages-body .chat-list {
      padding-left: 30px;
      border-top: 1px solid #eee
    }
    .messages-body .chat-list .single-chat-head li.left img {
      height: 35px;
      width: 35px;
      bottom: 6px
    }
    .messages-body .chat-list .single-chat-head li.right img {
      height: 35px;
      width: 35px;
      bottom: 6px
    }
    .messages-body .chat-list .single-chat-head li.left {
      padding: 0;
      padding-left: 50px
    }
    .messages-body .chat-list .single-chat-head li.right {
      padding: 0;
      padding-right: 50px
    }
    .messages-body .chat-list .single-chat-head li.left .text {
      padding: 17px;
      font-size: 15px;
      line-height: 21px
    }
    .messages-body .chat-list .single-chat-head li.left .text .time {
      font-size: 13px
    }
    .messages-body .chat-list .single-chat-head li.right .text {
      padding: 17px;
      font-size: 15px;
      line-height: 21px
    }
    .messages-body .chat-list .single-chat-head li.right .text .time {
      font-size: 13px
    }
    .messages-body .chat-list .reply-block input {
      width: 100%;
      padding: 20px;
      border: 1px solid #eee;
      margin-top: 10px;
      padding-right: 75px;
      border-radius: 6px
    }
    .messages-body .chat-list .reply-block {
      position: relative
    }
    .messages-body .chat-list .reply-block button {
      display: inline-block;
      height: 50px;
      width: 50px;
      text-align: center;
      line-height: 48px;
      color: #fff;
      background: #5830E0;
      border-radius: 6px;
      border: none;
      font-size: 18px;
      position: absolute;
      top: -4px;
      -webkit-transition: all .4s ease;
      transition: all .4s ease;
      padding-left: 3px;
      padding-bottom: 3px;
      right: 8px;
      top: 87px
    }
    .messages-body .chat-list .single-chat-head li.right .text {
      padding: 20px;
      font-size: 15px
    }
    .messages-body .chat-list .single-chat-head li.left .text {
      padding: 20px;
      font-size: 15px
    }
  }
</style>