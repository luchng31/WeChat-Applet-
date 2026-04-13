Page({
  onLoad() {
    // 场景1：云函数调用参数泄露
    const secret = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    wx.cloud.callFunction({
      name: "loginBridge",
      data: {
        client_secret: secret,
      },
    });
  },
});
