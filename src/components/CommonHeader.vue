<template>
  <div>
    <header>
      <el-row class="content-box">
        <el-col :span="24" class="content-col-box">
          <div class="l-content">
            <img src="../assets/image/logo.jpg" alt="" />
          </div>
          <!-- <div class="r-content" v-if="phone">
            <span class="r-phone">{{ phone }}</span>
            <div class="r-toLogin" @click="toLogin"><img src="../assets/image/tui-icon.png" alt="" /> 退出</div>
          </div> -->
        </el-col>
      </el-row>
    </header>
  </div>

</template>

<style scoped>

.r-phone{
  color: #333333;
}
.r-toLogin{
  width: 80px;
  height: 30px;
  background: #EFEFEF;
  opacity: 1;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7B7B7B;
  font-size: 15px;
  cursor: pointer;
}
.r-toLogin>img{
  width: 14px;
  height: 14px;
  margin-right: 4px;
}
header{
  width:100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-box{
  width: 100%;
  padding: 0 100px;
}
.content-col-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.l-content{
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.l-content>img{
  width: auto;
  height: 44px;
}
.l-content-title{
  font-size:34px;
  padding-left:10px;
  color:#00C792;
  font-weight:600;
  font-family: '宋体';
  cursor: pointer;
}

.r-content{
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 10px;
}
.r-content span{
  margin: 0 10px;
}

/* 媒体查询 */
@media only screen and (max-width: 1366px){
  .content-box{
    padding: 0 10px;
  }
  
  .l-content-title{
    font-size: 24px;
  }

}
</style>
<script>
export default {
  data() {
    return {
      phone:'',
    }
  },
  created(){

  },
  mounted(){
    let phone = window.localStorage.getItem('setUser');
    this.phone = phone;
  },
  methods:{
    toLogin(){
      this.$router.push({name: 'Login'});
    },

    // 点击LOGO
    // clickLogo(){
    //   let newUrl = this.$router.resolve({
    //     path: '/FrontPage',
    //     query:{}
    //   });
    //   window.open(newUrl.href, "_blank");
    // }
  }
}
</script>
