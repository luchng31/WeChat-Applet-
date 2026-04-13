Page({
  onLoad() {
    // 场景3：请求体内联硬编码
    wx.request({
      url: "https://example.com/inline",
      method: "POST",
      data: {
        appSecret: "cccccccccccccccccccccccccccccccc",
      },
    });
  },
});
