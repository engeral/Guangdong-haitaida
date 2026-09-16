const data = require('../../utils/data.js');

Page({
  data: {
    product: null,
    hasImage: false,
    heroDots: false,
    viewerUrl: ''
  },

  onLoad(options) {
    const product = data.getProductById(options.id);
    if (!product) {
      wx.showToast({ title: '产品不存在', icon: 'none' });
      return;
    }
    wx.setNavigationBarTitle({ title: product.name });

    // 拼接图集:images 数组 > 单 image
    const list = [];
    if (Array.isArray(product.images) && product.images.length) {
      product.images.forEach(u => u && list.push(u));
    }
    if (product.image) list.unshift(product.image);

    const seen = new Set();
    const uniqueList = list.filter(u => {
      if (seen.has(u)) return false;
      seen.add(u); return true;
    });

    this.setData({
      product,
      hasImage: uniqueList.length > 0,
      heroDots: uniqueList.length > 1
    });
  },

  onSwiperChange(e) {
    // 预留:切换时如果以后要展示指示器文字可以扩展
  },

  onTapImage(e) {
    const url = e.currentTarget.dataset.url;
    if (!url) return;
    this.setData({ viewerUrl: url });
  },

  closeViewer() {
    this.setData({ viewerUrl: '' });
  }
});
