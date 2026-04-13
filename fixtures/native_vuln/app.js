// 测试用：故意包含泄露模式（非真实密钥）
App({
  globalData: {
    appSecret: "0123456789abcdef0123456789abcdef",
  },
});
