# 广东海泰达水产小程序

微信内产品分类展示小程序。原生页面,无需备案域名。

## 内容

32 款产品,7 个分类,产品图 + 成分 + 适用场景 + 包装规格。

## 页面

- `pages/index` 首页(分类入口 + 推荐产品)
- `pages/product` 产品(分类切换 + 产品列表)
- `pages/about` 企业资质
- `pages/detail` 产品详情

## 目录

```
广东海泰达小程序/
├── app.js / app.json / app.wxss
├── project.config.json
├── utils/data.js          # 产品 + 分类数据
├── pages/index/           # 首页
├── pages/product/         # 产品
├── pages/about/           # 企业资质
├── pages/detail/          # 详情
├── images/products/       # 产品图
└── images/icons/          # tabBar 图标
```

## 上线

1. 注册小程序账号 → 拿 AppID
2. 修改 `project.config.json` 里的 `appid`
3. 微信开发者工具导入本目录
4. 上传 → 审核 → 发布
