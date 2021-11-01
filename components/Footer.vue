<template>
        <footer class="site-footer">
    <div class="footer-container">
      <div class="row">
        <div class="col-xs-12 col-xs-12 col-md-4 col-lg-4">
          <h6 class="ma-2">Contact Info</h6>
          <ul class="footer-links">
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon size="" class="white--text"
                  >mdi-map-marker-outline</v-icon
                ></v-btn
              >
              <a href="http://scanfcode.com/category/c-language/"
                >CBD Nairobi</a
              >
            </li>
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon class="white--text">mdi-phone-outline</v-icon></v-btn
              ><a href="http://scanfcode.com/category/front-end-development/"
                >+25400000000</a
              >
            </li>
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon class="white--text">mdi-email</v-icon></v-btn
              ><a href="http://scanfcode.com/category/back-end-development/"
                >ku2021@gmail.com</a
              >
            </li>
          </ul>
        </div>

        <div class="col-xs-12 col-xs-12 col-md-4 col-lg-4">
          <h6 class="ma-2">Quick Links</h6>
          <ul class="footer-links">
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon size="" class="white--text"
                  >mdi-facebook</v-icon
                ></v-btn
              >
              <a href="http://facebook.com">Facebook</a>
            </li>
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon class="white--text">mdi-instagram</v-icon></v-btn
              ><a href="http://instagram.com">Instagram</a>
            </li>
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon class="white--text">mdi-twitter</v-icon></v-btn
              ><a href="http://twitter">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-xs-12 col-md-4 col-lg-4">
          <h6 class="ma-2">Quick Links</h6>
          <ul class="footer-links">
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon class="white--text">mdi-sprout</v-icon></v-btn
              ><a href="/">Home</a>
            </li>
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon class="white--text">mdi-stove</v-icon></v-btn
              ><a href="/about">About</a>
            </li>
            <li>
              <v-btn class="white--text ma-2" outlined x-small icon fab
                ><v-icon class="white--text">mdi-post</v-icon></v-btn
              ><a href="/blog">Services</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="footer-container">
      <div class="row ">
        <div class="col-md-12 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by
            <a href="#">Procquire</a>.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
#app {
  font-family: 'Poppins', sans-serif;
}
.footer-container {
  margin: 0 auto;
  width: 75%;
  
}
.site-footer {
  background-color: #6ebe3b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #fff;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #fff;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0 auto;
  color: #fff;
  text-align: center;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>