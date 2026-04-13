const cfg = require("../../utils/config");

Page({
  onLoad() {
    wx.request({
      url: "https://example.com/api/config",
      data: {
        client_secret: cfg.client_secret,
      },
    });
  },
});
