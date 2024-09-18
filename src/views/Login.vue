<script setup>
import { ref } from "vue";

const data = ref({
  username: "",
  password: "",
});
</script>

<template>
  <div class="login-container">
    <div class="login-container-bg"></div>
    <div class="login-container-content">
      <div>手机登录</div>
      <el-form>
        <el-form-item>
          <el-input v-model="data.username" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="data.password" placeholder="请输入密码" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  .login-container-bg {
    width: 40%;
    height: 100%;
    background: url("../assets/img/bg.png") no-repeat center center;
    background-size: 100% 100%;
  }

  .login-container-content {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("../assets/img/bg-frame.png") no-repeat right bottom;
    background-size: auto 70%;
  }
}
</style>
