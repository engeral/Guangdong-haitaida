// utils/data.js

const CATEGORIES = [
  { id: 'disinfect', name: '水体消毒' },
  { id: 'water', name: '水质调控' },
  { id: 'antistress', name: '抗应激' },
  { id: 'detox', name: '解毒调水' },
  { id: 'antibiotic', name: '抗菌治病' },
  { id: 'nutrition', name: '营养促生长' },
  { id: 'other', name: '其他' }
];

const PRODUCTS = [
  { id: 'p001', name: '蛋氨酸碘溶液', category: 'disinfect', ingredient: '蛋氨酸碘 4.5-6.0%', scene: '水体消毒、疫病期消毒、清塘消毒', spec: '500g/瓶 × 20瓶/箱', image: '/images/products/p001_蛋氨酸碘溶液.jpg', images: null},
  { id: 'p002', name: '复合碘溶液（水产用）', category: 'disinfect', ingredient: '碘 1.8-2.0%、磷酸 16-18%', scene: '细菌性、病毒性疾病防治', spec: '500g/瓶 × 20瓶/箱', image: '/images/products/p002_复合碘溶液.jpg', images: null},
  { id: 'p003', name: '胜典', category: 'other', ingredient: '碘、磷酸', scene: '辅助消毒', spec: '1000g/瓶 × 15瓶/箱', image: null },
  { id: 'p004', name: '超典', category: 'other', ingredient: '碘、磷酸', scene: '辅助消毒', spec: '1000g/瓶 × 15瓶/箱', image: null },
  { id: 'p005', name: '聚维酮碘溶液（水产用）', category: 'disinfect', ingredient: '聚维酮碘 10%', scene: '弧菌、嗜水气单胞菌等细菌病', spec: '500g/瓶 × 20瓶/箱', image: '/images/products/p005_聚维酮碘溶液.jpg', images: null},
  { id: 'p006', name: '苯扎溴铵溶液（水产用）', category: 'disinfect', ingredient: '苯扎溴铵 20%', scene: '出血、烂鳃、肠炎等细菌病', spec: '500g/瓶 × 20瓶/箱', image: '/images/products/p006_苯扎溴铵溶液.jpg', images: null},
  { id: 'p007', name: '戊二醛溶液', category: 'disinfect', ingredient: '戊二醛 20%（浓戊二醛溶液 · 商品名：醛安定）', scene: '出血、烂鳃、肠炎等细菌病', spec: '500g/瓶 × 20瓶/箱', image: '/images/products/p007_戊二醛溶液.jpg', images: null},
  { id: 'p008', name: '甲醛溶液', category: 'disinfect', ingredient: '甲醛', scene: '水体杀虫、杀灭细菌真菌', spec: '25kg/桶', image: null },
  { id: 'p009', name: '恩诺沙星粉（水产用）', category: 'antibiotic', ingredient: '恩诺沙星 10%', scene: '出血性败血症、烂鳃、肠炎', spec: '100g/包 × 50包/箱', image: '/images/products/p009_恩诺沙星粉.jpg', images: null},
  { id: 'p010', name: '硫酸新霉素粉（水产用）', category: 'antibiotic', ingredient: '硫酸新霉素', scene: '肠道疾病、气单胞菌感染', spec: '200g/包 × 50包/箱', image: '/images/products/p010_硫酸新霉素粉.jpg', images: null},
  { id: 'p011', name: '亚硫酸氢钠钾萘醌粉', category: 'antibiotic', ingredient: '亚硫酸氢钠甲萘醌（K3）', scene: '鱼类出血、败血症', spec: '200g/包 × 50包/箱', image: '/images/products/p011_亚硫酸氢钠钾萘醌粉.jpg', images: null},
  { id: 'p012', name: '阿莫西林可溶性粉', category: 'antibiotic', ingredient: '阿莫西林', scene: '细菌性病、链球菌感染', spec: '100g/包 × 100包/箱', image: '/images/products/p012_阿莫西林可溶性粉.jpg', images: null},
  { id: 'p013', name: '超能多维', category: 'antistress', ingredient: '复合维生素、芽孢杆菌', scene: '转塘、高温低温、水质恶化应激', spec: '1000g/包 × 10包/桶', image: '/images/products/p013_超能多维.jpg', images: null},
  { id: 'p014', name: '金维他', category: 'antistress', ingredient: '复合维生素、酶制剂、乳酸菌', scene: '日常抗应激、补充营养', spec: '500g/包 × 20包/桶', image: '/images/products/p014_金维他.jpg', images: null},
  { id: 'p015', name: '肝泰乐', category: 'detox', ingredient: '胆汁酸 30%、牛磺酸 10%', scene: '保肝利胆、排毒', spec: '100g/包 × 30包/桶', image: '/images/products/gantaile.jpg', images: null},
  { id: 'p016', name: '矿源速补', category: 'nutrition', ingredient: 'L-赖氨酸、蛋氨酸、维生素D、磷酸二氢钙、氨基酸螯合微量元素', scene: '日常营养补充、促生长', spec: '1000g/包 × 10包/箱', image: '/images/products/p016_矿源速补.jpg', images: null},
  { id: 'p017', name: '多肽EM菌', category: 'water', ingredient: 'EM菌复合菌种（沼泽红假单胞菌、芽孢杆菌、酵母菌等）', scene: '肥水、调水、降亚硝酸盐', spec: '5kg/瓶 × 4瓶/箱', image: '/images/products/p017_多肽EM菌.jpg', images: null},
  { id: 'p018', name: '爽水王', category: 'other', ingredient: 'EM菌复合菌种', scene: '辅助调水', spec: '5kg/瓶 × 4瓶/箱', image: null },
  { id: 'p019', name: '解毒碧水爽', category: 'detox', ingredient: '有机酸', scene: '水体解毒、络合重金属', spec: '5kg × 4瓶/箱', image: null },
  { id: 'p020', name: '解毒应激VC', category: 'antistress', ingredient: 'L-抗坏血酸（维生素C）、牛磺酸、固壳素、分子肽', scene: '气温骤变、暴雨、台风、拉网、转池等应激', spec: '500g/包 × 20包/桶', image: '/images/products/p020_解毒应激VC.jpg', images: null},
  { id: 'p021', name: '高稳C', category: 'antistress', ingredient: '高稳维生素C', scene: '抗应激、解毒、池塘过塘', spec: '500g/包 × 20包/桶', image: '/images/products/p021_高稳C.jpg', images: null},
  { id: 'p022', name: '水蛛福星', category: 'nutrition', ingredient: '育蛛蛋白多肽、菌酶、氨基酸', scene: '营养补充、促生长', spec: '5kg/瓶 × 4瓶/箱', image: '/images/products/p022_水蛛福星.png', images: null},
  { id: 'p023', name: '全能肥水膏', category: 'water', ingredient: '氨基酸、育蛛蛋白、黄腐酸、藻种', scene: '肥水、培藻、调水色', spec: '10kg/桶', image: null },
  { id: 'p024', name: '全能肥蛛膏', category: 'water', ingredient: '培蛛蛋白多肽、黄腐酸、藻种、钙镁磷', scene: '肥水、培蛛、稳水', spec: '10kg/桶', image: '/images/products/p024_全能肥蛛膏.jpg', images: null},
  { id: 'p025', name: '粒粒高氧片', category: 'detox', ingredient: '过碳酸钠', scene: '水体快速增氧、氧化底质', spec: '1kg × 10包/箱', image: '/images/products/p025_粒粒高氧片.jpg', images: null},
  { id: 'p026', name: '强力浊水清', category: 'detox', ingredient: '聚丙烯酰胺、聚合氯化铝铁、增效剂', scene: '快速净水、抗应激', spec: '1000g/包 × 10包/箱', image: '/images/products/p026_强力浊水清.jpg', images: null},
  { id: 'p027', name: '解毒诱食净水王', category: 'detox', ingredient: '解毒剂、诱食剂、净水剂', scene: '解毒、开胃、诱食、净水', spec: '1000g/包 × 10包/箱', image: '/images/products/p027_解毒诱食净水王.jpg', images: null},
  { id: 'p028', name: '活水宝', category: 'water', ingredient: '碳源、氮源、促生长因子、有益菌激活剂', scene: '促进藻类生长、净化水质', spec: '10kg/桶', image: '/images/products/p028_活水宝.jpg', images: null},
  { id: 'p029', name: '蓝裸甲藻净', category: 'water', ingredient: '杀藻剂', scene: '杀灭蓝藻、裸藻、甲藻等', spec: '500g/瓶 × 20瓶/箱', image: '/images/products/p029_蓝裸甲藻净.jpg', images: null},
  { id: 'p030', name: '红菌亚硝净', category: 'water', ingredient: '亚硝酸盐转化菌', scene: '转化亚硝酸盐、分解残饵', spec: '500g/瓶 × 20瓶/箱', image: '/images/products/p030_红菌亚硝净.jpg', images: null},
  { id: 'p031', name: '超强底净', category: 'disinfect', ingredient: '底质改良剂（超强底改）', scene: '清除黑臭底、改善底质', spec: '1000g × 10包/桶', image: '/images/products/p031_超强底净.jpg', images: null},
  { id: 'p032', name: '铁牛', category: 'disinfect', ingredient: '氧化剂', scene: '氧化氨氮、亚盐、硫化氢', spec: '1000g × 10包/桶', image: null }
];

function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === categoryId);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

module.exports = {
  CATEGORIES,
  PRODUCTS,
  getProductsByCategory,
  getProductById
};
