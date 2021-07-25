<template>
  <div class="my-carousel">
    <el-carousel
      height="150px"
      ref="slideCarousel"
      :autoplay="true"
      arrow="never"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  mounted() {
    // this.slideBanner();
  },
  methods: {
    // 滑动切换
    slideBanner() {
      //选中的轮播图
      var box = document.querySelector(".el-carousel__container");
      var startPoint = 0;
      var stopPoint = 0;
      //重置坐标
      var resetPoint = function () {
        startPoint = 0;
        stopPoint = 0;
      };
      //手指按下
      box.addEventListener("touchstart", function (e) {
        //手指点击位置的X坐标
        startPoint = e.changedTouches[0].pageX;
      });
      //手指滑动
      box.addEventListener("touchmove", function (e) {
        //手指滑动后终点位置X的坐标
        stopPoint = e.changedTouches[0].pageX;
      });
      //当手指抬起的时候，判断图片滚动离左右的距离
      let that = this;
      box.addEventListener("touchend", function () {
        console.log("1：" + startPoint);
        console.log("2：" + stopPoint);
        if (stopPoint == 0 || startPoint - stopPoint == 0) {
          resetPoint();
          return;
        }
        if (startPoint - stopPoint > 0) {
          resetPoint();
          that.$refs.slideCarousel.next();
          return;
        }
        if (startPoint - stopPoint < 0) {
          resetPoint();
          that.$refs.slideCarousel.prev();
          return;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
// scoped的作用是 使得这个页面的样式具有作用域 这样即便和其他页面有相同的类名 也不会互相影响了
// 但是加了scoped后 ui组件库的样式改起来就不起作用了 解决方案就是给ui组件外层添加一个div并定义一个class类名 让后.className{ /deep/ .ui组件类型{}}
.my-carousel {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  // deep是透穿的意思  如果想改ui组件的样式不起作用可以试试/deep/ 注意中间需要有空格
  /deep/ .el-carousel__indicators {
    .el-carousel__button {
      width: 6px;
    }
    .is-active {
      .el-carousel__button {
        width: 10px;
        background: red;
      }
    }
  }
}
</style>