Page({
  data: {
    title: "Native Vulnerable Fixture",
  },

  onLoad() {
    // 测试用：故意硬编码并传入请求体
    const secret = "fedcba9876543210fedcba9876543210";
    wx.request({
      url: "https://example.com/leak",
      method: "POST",
      data: {
        client_secret: secret,
      },
    });
  },
});
