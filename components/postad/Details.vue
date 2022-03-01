<template>
  <div class="col-lg-9 col-md-8 col-12">
    <div class="main-content">
      <div class="dashboard-block mt-0">
        <h3 class="block-title">Post An Ad</h3>

        <div class="inner-block">
          <div class="post-ad-tab">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-item-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item-info"
                  type="button"
                  role="tab"
                  aria-controls="nav-item-info"
                  aria-selected="true">
                  <span class="serial">01</span>Step
                  <span class="sub-title">Ad Information</span>
                </button>

                <button
                  class="nav-link"
                  id="nav-item-details-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-item-details"
                  type="button"
                  role="tab"
                  aria-controls="nav-item-details"
                  aria-selected="false">
                  <span class="serial">02</span>Step
                  <span class="sub-title">Ad Details</span>
                </button>

                <button
                  class="nav-link"
                  id="nav-user-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-user-info"
                  type="button"
                  role="tab"
                  aria-controls="nav-user-info"
                  aria-selected="false">
                  <span class="serial">03</span>Step
                  <span class="sub-title">User Information</span>
                </button>
              </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
              <!-- -----!!Ad Info!!----- -->
              <div class="tab-pane fade show active" id="nav-item-info" role="tabpanel" aria-labelledby="nav-item-info-tab">
                <div class="step-one-content">
                  <form class="default-form-style" method="POST">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label>Item Name*</label>
                          <input name="title" type="text" placeholder="Enter Title">
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label>Category*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select a Category</option>
                              <option value="none">Mobile Phones</option>
                              <option value="none">Electronics</option>
                              <option value="none">Computers</option>
                              <option value="none">Headphones</option>
                              <option value="none">Books</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group button mb-0">
                          <button type="submit" class="btn">Next Step</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- --x---!!Ad Info!!---x-- -->

              <!-- -----!!Ad Details!!----- -->
              <div class="tab-pane fade" id="nav-item-details" role="tabpanel" aria-labelledby="nav-item-details-tab">
                <div class="step-two-content">
                  <form class="default-form-style" method="POST">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label>Add Price*</label>
                          <input name="price" type="text" placeholder="Enter Price">
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label>Price Type*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select an option</option>
                              <option value="none">Fixed</option>
                              <option value="none">Price On Call</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label>Select Currency*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select an option</option>
                              <option value="none">Dollar</option>
                              <option value="none">Euro</option>
                              <option value="none">Rupee</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-12">
                        <div class="upload-input">
                          <input type="file" id="upload" name="upload">
                          <label for="upload" class="text-center content">
                          <span class="text">
                          <span class="d-block mb-15">Drop files anywhere
                          to Upload</span>
                          <span class="mb-15 plus-icon"><i class="fas fa-plus"></i></span>
                          <span class="main-btn d-block btn-hover">Select
                          File</span>
                          <span class="d-block">Maximum upload file size
                          10Mb</span>
                          </span>
                          </label>
                        </div>
                      </div>

                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label class="video-label">Video Link* <span>Input only
                          YouTube & Vimeo</span></label>
                          <input name="video" type="text" placeholder="Input link">
                          <a href="javascript:void(0)" class="add-video"><i class="fas fa-plus"></i> Add Video</a>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group mt-30">
                          <label>Ad Description*</label>
                          <textarea name="message" placeholder="Input ad description"></textarea>
                        </div>
                      </div>

                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Type of Ad*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select an option</option>
                              <option value="none">Option 1</option>
                              <option value="none">Option 2</option>
                              <option value="none">Option 3</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Item Condition*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select an option</option>
                              <option value="none">Used</option>
                              <option value="none">Brand New</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label class="tag-label">Tags* <span>Comma(,)
                          separated</span></label>
                          <input name="tag" type="text" placeholder="Type Product tag">
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group button mb-0">
                          <button type="submit" class="btn alt-btn">Previous</button>
                          <button type="submit" class="btn ">Next Step</button>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
              <!-- --x---!!Ad Details!!--x--- -->

              <!-- -----!!User Info!!----- -->
              <div class="tab-pane fade" id="nav-user-info" role="tabpanel" aria-labelledby="nav-user-info-tab">
                <div class="step-three-content">
                  <form class="default-form-style" method="POST">
                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Name*</label>
                          <input name="name" type="text" placeholder="Enter your name">
                        </div>
                      </div>

                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Mobile Number*</label>
                          <input name="number" type="text" placeholder="Enter mobile number">
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label>Country*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select a Country</option>
                              <option value="none">Afghanistan</option>
                              <option value="none">America</option>
                              <option value="none">Albania</option>
                              <option value="none">Bangladesh</option>
                              <option value="none">Brazil</option>
                              <option value="none">India</option>
                              <option value="none">South Africa</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Select City*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select City</option>
                              <option value="none">New York</option>
                              <option value="none">Los Angeles</option>
                              <option value="none">Chicago</option>
                              <option value="none">San Diego</option>
                              <option value="none">San Jose</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label>Select State*</label>
                          <div class="selector-head">
                            <span class="arrow"><i class="lni lni-chevron-down"></i></span>
                            <select class="user-chosen-select">
                              <option value="none">Select State</option>
                              <option value="none">New York</option>
                              <option value="none">Texas</option>
                              <option value="none">Arizona</option>
                              <option value="none">Florida</option>
                              <option value="none">Washington</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label>Address*</label>
                          <input name="address" type="text" placeholder="Enter a location">
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                          I agree to all Terms of Use & Posting Rules
                          </label>
                        </div>
                        <div class="form-group button mb-0">
                          <button type="submit" class="btn alt-btn">Previous</button>
                          <button type="submit" class="btn ">Submit Ad</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- ---x--!!User Info!!---x-- -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdDetails'
  }
</script>

<style scoped>
  .post-ad-tab {
    padding: 0 30px
  }

  .post-ad-tab nav .nav-tabs {
    border-bottom: 1px solid var(--lightGray)
  }

  .post-ad-tab nav button {
    padding: 20px 40px;
    border: none!important;
    text-align: left;
    position: relative;
    padding-left: 100px;
    border-radius: 0!important;
    border-radius: 6px 6px 0 0!important;
    margin: 0!important;
    width: 33.33333333333333%;
    position: relative;
    bottom: -1px;
    font-size: 17px;
    font-weight: 600;
    color: var(--white)
  }

  .post-ad-tab nav button .serial {
    height: 50px;
    width: 50px;
    line-height: 50px;
    border: 1px solid var(--white);
    border-radius: 50%;
    text-align: center;
    color: var(--white);
    font-size: 19px;
    font-weight: 600;
    display: block;
    position: absolute;
    left: 30px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .post-ad-tab nav button.active {
    color: var(--white)!important
  }

  .post-ad-tab nav button.active .serial {
    border-color: transparent;
    background: var(--white);
    color: var(--lightGreen)
  }

  .post-ad-tab nav button.active .sub-title {
    color: var(--white)
  }

  .post-ad-tab nav button .sub-title {
    display: block;
    color: var(--lightGray);
    font-size: 14px;
    font-weight: 400
  }

  .post-ad-tab nav button:hover {
    border: none!important
  }

  .post-ad-tab nav button.active {
    background: var(--lightGreen)!important;
    border: none!important
  }

  .post-ad-tab .step-two-content .upload-input {
    position: relative;
    height: 240px
  }

  .post-ad-tab .step-two-content .upload-input input {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px dashed var(--lightGray);
    text-indent: -9999px;
    z-index: 2;
    border-radius: 6px
  }

  .post-ad-tab .step-two-content .upload-input .plus-icon {
    height: 80px;
    width: 80px;
    color: var(--white);
    background: #88888859;
    display: inline-block;
    line-height: 80px;
    font-size: 18px;
    border-radius: 5px;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .post-ad-tab .step-two-content .upload-input:hover .plus-icon {
    background-color: var(--lightGreen);
    cursor: pointer
  }

  .post-ad-tab .step-two-content .upload-input .content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 30px;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 2
  }

  .post-ad-tab .step-two-content .video-label {
    display: inline-block
  }

  .post-ad-tab .step-two-content .video-label span {
    color: var(--lightGray);
    display: inline-block;
    margin-left: 12px;
    font-weight: 400;
    font-size: 14px
  }

  .post-ad-tab .step-two-content .add-video {
    text-transform: capitalize;
    font-weight: 600;
    color: var(--lightGray);
    font-size: 14px;
    margin-top: 20px
  }

  .post-ad-tab .step-two-content .add-video:hover {
    color: var(--lightGreen)
  }

  .post-ad-tab .step-two-content .add-video i {
    display: inline-block;
    margin-right: 5px
  }

  .post-ad-tab .step-two-content .tag-label {
    display: inline-block
  }

  .post-ad-tab .step-two-content .tag-label span {
    color: #888;
    display: inline-block;
    margin-left: 12px;
    font-weight: 400;
    font-size: 14px
  }

  .post-ad-tab .step-three-content .form-check {
    display: block;
    margin-bottom: 20px
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .post-ad-tab nav .nav-tabs {
      border: none;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 6px
    }

    .post-ad-tab .step-two-content .upload-input {
      margin-bottom: 20px
    }
    
    .post-ad-tab nav button {
      border-radius: 6px!important;
      width: 100%
    }
  }

  @media only screen and (max-width:767px) {
    .post-ad-tab nav .nav-tabs {
      border: none;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 6px
    }

    .post-ad-tab .step-two-content .upload-input {
      margin-bottom: 20px
    }
    
    .post-ad-tab nav button {
      border-radius: 6px!important;
      width: 100%
    }
  }
</style>