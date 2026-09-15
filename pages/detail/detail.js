const data = require('../../utils/data.js');

Page({
  data: {
    product: null
  },

  onLoad(options) {
    const product = data.getProductById(options.id);
    if (product) {
      wx.setNavigationBarTitle({ title: product.name });
      this.setData({ product });
    }
  }
});
