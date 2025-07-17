var u = (n, t) => () => (t || n((t = { exports: {} }).exports, t), t.exports);
var o = u((f, r) => {
  function c(n, t) {
    return n + t;
  }
  function e(n, t) {
    return n - t;
  }
  r.exports = { sum: c, subtract: e };
});
export default o();
