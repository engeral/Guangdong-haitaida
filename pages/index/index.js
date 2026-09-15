const data = require('../../utils/data.js');

Page({
  data: {
    featured: data.PRODUCTS.filter(p => p.image).slice(0, 6),
    categories: data.CATEGORIES
  },

  goCategory(e) {
    const id = e.currentTarget.dataset.id;
    wx.switchTab({
      url: '/pages/product/product',
      success() {
        const pages = getCurrentPages();
        const tab = pages[pages.length - 1];
        if (tab && tab.selectCategory) tab.selectCategory(id);
      },
      fail() {
        wx.navigateTo({ url: '/pages/product/product' });
      }
    });
  },

  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  },

  goProductTab() {
    wx.switchTab({ url: '/pages/product/product' });
  }
});
