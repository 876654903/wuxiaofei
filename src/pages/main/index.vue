<template>
  <div id="page">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="footer-main">
        <div class="home">
          <router-link to="/home" tag="li">
            <div class="icon"><i class="el-icon-s-home"></i></div>
            <div class="text">首页</div>
          </router-link>
        </div>
        <div class="find">
          <router-link to="/find" tag="li">
            <div class="icon"><i class="el-icon-position"></i></div>
            <div class="text">发现</div>
          </router-link>
        </div>
        <!-- 跳转到我的路由的时候需要判断是否登陆，做登陆验证，改验证是通过路由做判断（app.js create生命周期里） -->
        <div class="user">
          <router-link to="/user" tag="li">
            <div class="icon"><i class="el-icon-delete"></i></div>
            <div class="text">我的</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#page {
  width: 100%;
  height: 100%;
  display: flex; //使用flex布局
  flex-direction: column; //让page下的两个盒子垂直排列
  .main {
    background: yellow;
    flex-grow: 1;
    // 溢出隐藏
    overflow: hidden;
    // 垂直方向 多出来就滚动条 没多出来就算了
    overflow-y: auto;
  }
  .footer {
    height: 60px;
    flex-shrink: 0;
    .footer-main {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .home,
      .find,
      .user {
        height: 60px;
        flex-grow: 1; //让每个li都一样宽
        text-align: center;
        .icon {
          margin-top: 5px;
          i {
            font-size: 18px;
          }
        }
        .text {
          margin-top: 5px;
        }
        // &代表当前元素 也就是.home或.find或 .user  >代表当前元素下的最近的子元素只能是子元素  不加>代表可以选到子孙元素
        &:hover > li .icon {
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>