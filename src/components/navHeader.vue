<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="/">小米商城</a>
          <a href="https://www.miui.com/" target="blank">MIUI</a>
          <a href="https://i.mi.com/" target="blank">云服务</a>
          <a href="https://www.mi.com/aptitude/list" target="blank">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;" target="blank">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  .nav-topbar {
    height:39px;
    background:rgba(51,51,51,1);
    line-height: 39px;
    color: #B0B0B0;
    .container {
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }
      .my-cart {
        width:110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          background: url('../assets/images/icon-cart-checked.png') no-repeat center;
          background-size: contain;
          display: inline-block;
          width: 16px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>