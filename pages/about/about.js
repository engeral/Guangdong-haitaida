Page({
  data: {
    licenseImages: [
      '/images/license/license.png'
    ]
  },

  previewImage(e) {
    const url = e.currentTarget.dataset.url;
    wx.previewImage({
      current: url,
      urls: this.data.licenseImages
    });
  },

  callPhone(e) {
    const phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone,
      fail() {
        wx.showToast({ title: '请直接拨打页面电话', icon: 'none' });
      }
    });
  },

  copyText(e) {
    const text = e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: text,
      success() { wx.showToast({ title: '已复制', icon: 'success' }); }
    });
  }
});
