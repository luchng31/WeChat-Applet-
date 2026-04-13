// 测试用：模拟 AppSecret 硬编码（非真实密钥）
const cfg = {
  appId: "wx0000000000000000",
  appSecret: "0123456789abcdef0123456789abcdef",
};

function send() {
  const secret = "fedcba9876543210fedcba9876543210";
  uni.request({
    url: "https://example.com/api",
    data: { client_secret: secret },
  });
}
