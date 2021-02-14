<template>
  <div class="home">
    <div class="banner">
      <swiper class="banner-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide><img class="banner-img" src="../assets/images/test.jpg" alt=""></swiper-slide>
      </swiper>
    </div>

    <!--视差滚动-->
    <div class="home-content">
      <div class="content-item">内容1</div>
      <div
        class="activebg fisrtbg"
        id="pic1"
        v-bind:style="{
          'background-position-x': positionX,
          'background-position-y': positionY1 + 'px'
        }"
      ></div>
      <div class="content-item">内容2</div>
      <div
        class="activebg secondbg"
        id="pic2"
        v-bind:style="{
          'background-position-x': positionX,
          'background-position-y': positionY2 + 'px'
        }"
      ></div>
      <div class="content-item">内容3</div>
      <div
        class="activebg thirdbg"
        id="pic3"
        v-bind:style="{
          'background-position-x': positionX,
          'background-position-y': positionY3 + 'px'
        }"
      ></div>
      <div class="content-item">内容4</div>

    <!--底部-->
      <div class="foot">foot</div>
    </div>
  </div>
</template>

<script>
  // 引入插件
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      ratio: 0.05,
      positionX: "50%",
      positionY1: 30,
      positionY2: 100,
      positionY3: 150,
      Y1: 0,
      Y2: 0,
      Y3: 0,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.onload = () => {
      let pic1 = document.getElementById("pic1");
      let pic2 = document.getElementById("pic2");
      let pic3 = document.getElementById("pic3");
      this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio;
      this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio;
      this.positionY3 = this.Y3 = pic3.offsetTop * this.ratio;
    };
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.positionY1 = this.Y1 - scrollTop * this.ratio;
      this.positionY2 = this.Y2 - scrollTop * this.ratio;
      this.positionY3 = this.Y3 - scrollTop * this.ratio;

    }
  }
};
</script>

<style scoped>

.home {
  height: 100%;
}
.banner{
  width: 100%;
  height: 500px;
  background: #bfc;
}
.banner-container {
  width: 100%;
  height: 100%;
}
.banner img{
  width: 100%;
  height: 100%;
}
.home-content{
  width: 100%;
}
.content-item {
  background-color: #fff;
  width: 100%;
  line-height: 400px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.activebg {
  position: relative;
  width: 100%;
  height: 600px;
  background: #fff;
  background-attachment: fixed;
  background-position: center 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.fisrtbg {
  background-image: url(../assets/images/banner1.jpg);
}
.secondbg {
  background-image: url(../assets/images/banner2.jpg);
}
.thirdbg {
  background-image: url(../assets/images/banner3.jpg);
}
.foot {
  background-color: black;
  line-height: 500px;
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
}
</style>