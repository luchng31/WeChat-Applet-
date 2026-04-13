<template><view></view></template>
<script>
export default {
  data() {
    return { appSecret: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
  },
  methods: {
    go() {
      uni.request({ url: "/x", data: { s: this.appSecret } });
    },
  },
};
</script>
