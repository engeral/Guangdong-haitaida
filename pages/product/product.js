const data = require('../../utils/data.js');

// 分类图标(emoji 兜底)
const CAT_ICONS = {
  '水体消毒': '🧪',
  '水质调控': '💧',
  '抗应激': '⚡',
  '解毒调水': '🌿',
  '抗菌治病': '💊',
  '营养促生长': '🌾',
  '其他': '📦'
};

Page({
  data: {
    categories: data.CATEGORIES,
    current: null,
    list: [],
    catIcons: CAT_ICONS
  },

  onLoad() {
    // 默认进入第一个分类
    const first = data.CATEGORIES[0];
    if (first) {
      this.setData({
        current: first.id,
        list: data.getProductsByCategory(first.id)
      });
    }
  },

  onCategory(e) {
    let id;
    if (typeof e === 'string') {
      id = e;
    } else {
      id = e.currentTarget.dataset.id;
    }
    if (!id) return;
    this.setData({
      current: id,
      list: data.getProductsByCategory(id)
    });
    // 滚到顶部
    wx.pageScrollTo({ scrollTop: 0, duration: 200 });
  },

  selectCategory(id) {
    this.onCategory(id);
  },

  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  }
});
