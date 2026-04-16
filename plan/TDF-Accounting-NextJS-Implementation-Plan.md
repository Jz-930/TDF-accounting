# TDF Accounting 网站重制 — Next.js 实施方案

## 一、项目概览

### 1.1 项目背景
TDF Accounting（天德丰特许专业会计师事务所）现有网站基于 WordPress + Elementor 构建，需使用 **Next.js (App Router)** 进行全面重制。新网站需保持专业会计师事务所的品牌调性，同时实现更现代化的设计和更优秀的用户体验。

### 1.2 技术栈
| 类别 | 技术选型 |
|------|---------|
| 框架 | Next.js 14+ (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| 动画 | Framer Motion |
| UI组件 | Shadcn/UI（按需引入） |
| 表单 | React Hook Form + Zod 校验 |
| 邮件 | Resend 或 Nodemailer（联系表单后端） |
| CMS（博客） | MDX 本地文件 或 Contentlayer / Sanity（可选） |
| 部署 | Vercel |
| 代码规范 | ESLint + Prettier |
| 包管理器 | pnpm |

### 1.3 品牌色彩体系（现代化升级）

#### 主色
| 名称 | 色值 | 用途 |
|------|------|------|
| Primary Blue | `#0073BC` | 主品牌色，CTA按钮、链接、重点标题 |
| Primary Dark | `#002136` | 深色背景、Footer、导航深色模式 |
| Accent Cyan | `#3FC8F5` | 辅助高亮、渐变终止色、装饰线 |

#### 中性色
| 名称 | 色值 | 用途 |
|------|------|------|
| White | `#FFFFFF` | 主背景 |
| Off-White | `#F9F9F5` / `#F5F5F5` | 交替区块背景 |
| Text Primary | `#1A1A1A` | 正文主色 |
| Text Secondary | `#444444` | 副标题、辅助文字 |
| Text Muted | `#6B7280` | 描述文本、placeholder |
| Border | `#E5E7EB` | 边框、分割线 |

#### 新增建议色（现代化提升）
| 名称 | 色值 | 用途 |
|------|------|------|
| Success Green | `#10B981` | 成功状态、数据正增长指示 |
| Gradient Start | `#0073BC` | 渐变按钮/背景起始 |
| Gradient End | `#3FC8F5` | 渐变按钮/背景终止 |

### 1.4 字体体系
| 用途 | 英文字体 | 中文字体 | 备选方案 |
|------|---------|---------|---------|
| 标题 (Display) | Inter (700/800) | Noto Sans SC (700) | — |
| 正文 (Body) | Inter (400/500) | Noto Sans SC (400) | Open Sans |
| 数字强调 | DM Sans (700) | — | — |

> **实施要求**：通过 `next/font` 加载 Google Fonts，确保字体优化和防止 FOUT。

### 1.5 AI 意向图对应表（`plan/` 目录）

| Prompt | 对应页面 / 模块 | 已重命名图片 | 备注 |
|------|------|------|------|
| 1A | 首页全览（桌面端） | `prompt-01a-homepage-full-view.jpg` | 对应首页整体布局、Hero、三张浮卡与后续区块的综合参考图 |
| 1B | 首页 Hero 区域特写 | `prompt-01b-homepage-hero-section.jpg` | 对应 `HeroSection` 的桌面端首屏视觉参考 |
| 5A | 服务网格区（扩展版） | `prompt-05a-services-grid-overview.jpg` | 以 `ServicesGrid` 为主体，同时可作为 `/services` 服务总览页的扩展视觉参考 |
| 10A | 关于我们页面全览 | `prompt-10a-about-page-full-view.jpg` | 对应 `/about` 页面整体结构参考 |
| 11A | 服务详情页（Tax Services） | `prompt-11a-tax-services-detail-page.jpg` | 对应 `/services/tax` 模板及通用服务详情页参考 |
| 12A | 联系我们页面 | `prompt-12a-contact-page.jpg` | 对应 `/contact` 页面表单、信息卡和地图布局 |
| 13A | 移动端首页 | `prompt-13a-mobile-homepage.jpg` | 对应首页移动端排版与卡片堆叠方式 |
| 14A | 博客列表页 | `prompt-14a-blog-listing-page.jpg` | 对应 `/blog` 列表页视觉参考 |

---

## 二、信息架构与路由

### 2.1 站点地图

```
/                          → 首页 (Home)
/about                     → 关于我们 (About Us)
/services                  → 服务总览（可选，或仅用作导航锚点）
/services/incorporation    → 公司注册 (Incorporation)
/services/business-accounts → 开设商业账户 (Open Business Accounts)
/services/accounting       → 会计服务 (Accounting Services)
/services/tax              → 税务服务 (Tax Services)
/blog                      → 博客列表 (Blog)
/blog/[slug]               → 博客详情 (Blog Post)
/contact                   → 联系我们 (Contact Us)
```

### 2.2 App Router 文件结构

```
src/
├── app/
│   ├── layout.tsx              # 根布局（全局导航 + Footer）
│   ├── page.tsx                # 首页
│   ├── about/
│   │   └── page.tsx            # 关于我们
│   ├── services/
│   │   ├── incorporation/
│   │   │   └── page.tsx        
│   │   ├── business-accounts/
│   │   │   └── page.tsx        
│   │   ├── accounting/
│   │   │   └── page.tsx        
│   │   └── tax/
│   │       └── page.tsx        
│   ├── blog/
│   │   ├── page.tsx            # 博客列表
│   │   └── [slug]/
│   │       └── page.tsx        # 博客详情
│   ├── contact/
│   │   └── page.tsx            
│   └── api/
│       └── contact/
│           └── route.ts        # 联系表单 API
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # 全局头部
│   │   ├── TopBar.tsx          # 顶部联系信息栏
│   │   ├── Navbar.tsx          # 导航栏
│   │   ├── MobileMenu.tsx      # 移动端菜单
│   │   └── Footer.tsx          # 全局底部
│   ├── home/
│   │   ├── HeroSection.tsx     # 首页英雄区
│   │   ├── HighlightCards.tsx  # 三张特色卡片
│   │   ├── AboutPreview.tsx    # 关于我们预览
│   │   ├── ServicesGrid.tsx    # 服务网格
│   │   ├── TeamSection.tsx     # 团队展示
│   │   ├── TestimonialsSlider.tsx # 客户评价轮播
│   │   └── PartnersCarousel.tsx   # 合作伙伴轮播
│   ├── about/
│   │   ├── CompanyHistory.tsx  # 公司历史
│   │   ├── VisionMission.tsx   # 愿景使命
│   │   ├── StatsCounter.tsx    # 数据计数器
│   │   └── LeadershipCard.tsx  # 领导团队卡片
│   ├── services/
│   │   ├── ServiceHero.tsx     # 服务页面英雄区（可复用）
│   │   ├── ServiceContent.tsx  # 服务详情内容
│   │   └── ServiceCTA.tsx      # 服务页面 CTA
│   ├── blog/
│   │   ├── BlogCard.tsx        # 博客卡片
│   │   └── BlogContent.tsx     # 博客正文
│   ├── contact/
│   │   ├── ContactForm.tsx     # 联系表单
│   │   ├── ContactInfo.tsx     # 联系信息
│   │   └── GoogleMap.tsx       # 地图组件
│   └── ui/
│       ├── Button.tsx          # 通用按钮
│       ├── SectionHeading.tsx  # 区块标题组件
│       ├── PageHero.tsx        # 子页面通用 Hero
│       ├── Card.tsx            # 通用卡片
│       ├── AnimatedCounter.tsx # 数字动画计数
│       └── ScrollReveal.tsx    # 滚动显现动画包装器
├── lib/
│   ├── constants.ts            # 常量（联系信息、导航数据等）
│   ├── types.ts                # TypeScript 类型定义
│   ├── utils.ts                # 工具函数
│   └── blog.ts                 # 博客数据获取工具
├── content/
│   └── blog/                   # MDX 博客文章
│       └── sample-post.mdx
├── public/
│   ├── images/
│   │   ├── logo.png            # TDF logo
│   │   ├── logo-white.png      # 白色版 logo（Footer用）
│   │   ├── hero/               # Hero 区域图片
│   │   ├── team/               # 团队照片
│   │   ├── services/           # 服务页面图片
│   │   ├── partners/           # 合作伙伴 Logo
│   │   ├── testimonials/       # 客户头像
│   │   └── blog/               # 博客配图
│   └── fonts/                  # 本地字体（如需要）
└── styles/
    └── globals.css             # Tailwind 全局样式
```

---

## 三、全局组件详细规格

### 3.1 TopBar（顶部联系信息栏）

**设计规格：**
- 背景：白色 或 极浅灰 `#F9FAFB`，底部加 1px `#E5E7EB` 分割线
- 高度：40px
- 内容居中在 `max-w-7xl` 容器中
- 左侧：地址图标 + 地址文本
- 中间：电话图标 + 电话号码（可点击 `tel:` 链接）
- 右侧：邮件图标 + 邮箱地址（可点击 `mailto:` 链接）
- 字体：12-13px，`text-gray-600`
- 图标：使用 Lucide React 图标库，16px，`text-primary`
- **移动端**：隐藏，或仅显示电话号码

**现代化改进：**
- 取消原版的纯文字排列，改用小图标+文字的紧凑排版
- 可以加一个极细的蓝色渐变线（1-2px）在 TopBar 最上方作为品牌标识条

### 3.2 Navbar（主导航栏）

**设计规格：**
- 背景：白色，`backdrop-blur` 半透明效果，向下滚动时出现 `shadow-sm`
- 高度：72px
- 定位：`sticky top-0 z-50`
- 左侧：TDF Logo（最大高度 48px）
- 中间：导航链接 — Home / About Us / Our Services(下拉) / Blog / Contact Us
- 右侧：CTA 按钮 "Book Today"

**Our Services 下拉菜单：**
- 悬停时展开，使用 Framer Motion `AnimatePresence` 做淡入+下滑动画
- 包含 4 项：Incorporation / Open Business Accounts / Accounting Services / Tax Services
- 每项前方可加一个小图标以增加辨识度
- 背景白色，圆角 `rounded-lg`，阴影 `shadow-xl`

**CTA 按钮 "Book Today"：**
- 背景：`bg-gradient-to-r from-[#0073BC] to-[#3FC8F5]`
- 文字：白色，字重 600
- 圆角：`rounded-full` 或 `rounded-lg`
- Hover：轻微放大 `scale-105` + 阴影加深
- 点击后导航至 /contact

**移动端导航：**
- 汉堡菜单按钮替代导航链接
- 全屏遮罩侧滑菜单（从右侧滑入）
- 使用 Framer Motion 实现滑入/滑出动画
- 菜单中 "Our Services" 手风琴展开子菜单

**滚动行为：**
- 页面顶部时：TopBar + Navbar 都可见
- 向下滚动 >100px 后：TopBar 隐藏，Navbar 变为 `sticky` 并获得 `shadow-md`
- 可选：向上滚动时 Navbar 重新出现（smart navbar）

### 3.3 Footer（页脚）

**设计规格：**
- 背景：`#002136`（深蓝近黑）
- 分为两部分：主内容区 + 底部版权栏

**主内容区（4 列网格 → 移动端堆叠）：**

| 列 | 内容 |
|----|------|
| 第1列 - About Us | TDF logo（白色版）+ 公司简介文字 + 社交媒体图标（LinkedIn, WeChat等） |
| 第2列 - Our Services | 4个服务链接（Incorporation / Open Business Accounts / Accounting Services / Tax Services） |
| 第3列 - Quick Links | Home / About Us / Blog / Contact Us |
| 第4列 - Contact Us | 地址（带图标）/ 电话（带图标，可点击）/ 邮箱（带图标，可点击） |

**底部版权栏：**
- 背景：更深一度或加上分割线
- 文字：Copyright 2025 TDF Chartered Professional Accountants, Professional Corporation © All rights reserved
- 字体：12px，`text-gray-400`

**现代化改进：**
- Footer 顶部可加一个 CTA 横幅：「Ready to optimize your finances? Book a free consultation today.」+ CTA 按钮
- 链接悬停时加 `text-cyan-400` 过渡效果
- 加入微妙的背景纹理或渐变

---

## 四、首页 (Home) 详细规格

### 4.1 HeroSection（英雄区）

**布局：** 全宽，最低高度 `min-h-[85vh]`

**设计方案（现代化升级）：**
- 左侧（60%）：文案内容
  - 小标签：「Welcome to TDF Accounting」用浅蓝底白字或带左蓝色短线的样式
  - 主标题：「We Help To Grow Your Business」— 超大字号（48-64px），Inter Bold，深色
  - 副标题/描述：1-2行业务描述
  - CTA 按钮组：主按钮 "Book Today"（渐变蓝色）+ 次按钮 "Our Services"（白底蓝边框）
- 右侧（40%）：高质量商务图片，使用圆角裁剪或不规则几何遮罩
- 背景：浅灰/白 + 微妙的几何装饰线条或圆点图案

**动画：**
- 文字从左侧淡入滑入（Framer Motion `initial={{ opacity:0, x:-30 }}`）
- 图片从右侧淡入（延迟 0.2s）
- 背景装饰元素缓慢浮动动画

**移动端：**
- 垂直堆叠：图片在上（或隐藏背景图，用纯色渐变背景），文案在下
- 标题缩小至 32-40px

### 4.2 HighlightCards（三张特色卡片区）

**当前内容：** Our Company / Our Services / Get a Free Quote

**布局：** 3列等宽网格，`max-w-7xl` 居中

**每张卡片设计：**
- 图标：顶部居中，64px，蓝色主题图标（使用 Lucide 图标）
  - Our Company → Building2
  - Our Services → Briefcase
  - Get a Free Quote → FileText
- 标题：卡片标题，`text-lg font-bold`
- 描述：2-3行简短描述
- 链接：「READ MORE →」文字链接
- 样式：白色背景，`rounded-xl`，轻微阴影，hover 时阴影加深 + 向上微移 `-translate-y-1`
- 顶部装饰：每张卡片顶部加 3px 蓝色渐变线

**现代化改进：**
- 原版使用蓝色实心底，现改为白色卡片+阴影浮起效果
- 卡片之间间距 `gap-8`
- 区块整体向上偏移（负margin），与 Hero 区域有 overlap 效果

### 4.3 AboutPreview（关于我们预览区）

**布局：** 左图右文（`grid grid-cols-2`）

**左侧：**
- 高质量办公环境/团队照片
- 可以用叠放的两张图片+蓝色装饰块的构图方式

**右侧：**
- 小标签：「About Us」（蓝色，带左侧短线装饰）
- 标题：「We help clients to get success」
- 描述段落：公司简介
- CTA 按钮：「READ MORE」→ 链接至 /about

**现代化改进：**
- 照片区域加入不规则形状遮罩或蓝色几何装饰元素
- 添加"Since 2015"的徽章/标记

### 4.4 ServicesGrid（服务网格区）

**布局：** 2×2 网格

**每个服务卡片：**
- 图标区域：左侧或顶部，大号图标
- 服务名称：粗体标题
- 描述：2-3行简短描述
- 链接：「READ MORE →」
- 4个服务：
  1. Incorporation — 图标：Building
  2. Open Business Accounts — 图标：CreditCard / FileSpreadsheet
  3. Accounting Services — 图标：Calculator
  4. Tax Services — 图标：Receipt

**区块头：**
- 小标签：「What we do」
- 主标题：「Our Services」

**现代化改进：**
- 卡片采用左侧图标+右侧内容的横向布局
- 或使用大号图标/插画在顶部的纵向卡片
- Hover 时左侧边缘出现蓝色竖线装饰

### 4.5 TeamSection（团队展示区）

**布局：** 当前只有一位成员（Jing Li），但组件需支持多人

**设计：**
- 对于单人展示：左照片右介绍的大版面布局
- 照片：专业头像，圆角矩形裁剪，带蓝色底框装饰
- 名字：Jing Li, CPA, MBA
- 职位：Partner, Founder
- 简介：详细的个人介绍文字
- 可选：加入 LinkedIn 图标链接

**区块头：**
- 小标签：「Our Team」
- 主标题：「Our Leadership」

**现代化改进：**
- 照片区域加入微妙的蓝色渐变背景块
- 如果未来有多人，切换为卡片网格布局

### 4.6 TestimonialsSlider（客户评价轮播）

**内容：** 3条客户评价（Benjamin, Rahina, Alexander）

**设计：**
- 区块头：小标签 "Testimonials" + 主标题 "Happy Clients"
- 轮播方式：使用 Embla Carousel 或 Swiper
- 每张卡片：
  - 大引号图标装饰（顶部）
  - 评价文字
  - 客户名字 + 头衔
  - 可选：星级评分（5颗星）
- 底部：分页圆点指示器

**现代化改进：**
- 卡片式轮播，一次可见多张（桌面端3张，移动端1张）
- 或采用左箭头 | 卡片 | 右箭头的经典布局
- 卡片背景为白色，外围浅蓝/灰背景

### 4.7 PartnersCarousel（合作伙伴 Logo 展示）

**设计：**
- 区块头：小标签 "Partners" + 主标题 "We're Working with"
- Logo 无限滚动轮播（自动播放）
- Logo 默认灰度显示，hover 变为彩色
- 使用 CSS `grayscale` 滤镜实现

---

## 五、关于我们 (About Us) 页面

### 5.1 PageHero（子页面通用 Hero）

**复用组件 PageHero：**
- 全宽横幅，高度约 300-400px
- 半透明深色遮罩覆盖在背景图片上
- 页面标题（大号白色文字）
- 可选面包屑导航：Home > About Us

### 5.2 CompanyHistory（公司历史区）

**布局：** 左图右文

**右侧内容：**
- 小标签：「About Us」
- 标题：「History Of Our Company」
- 段落：公司介绍文字
- 强调CPA Ontario, City of Markham, cloud-based等关键词

### 5.3 VisionMission（愿景使命区）

**布局：** 两列并排卡片

| 左卡片 - Our Vision | 右卡片 - Our Mission |
|---------------------|---------------------|
| 图标 + 标题 + 描述文字 | 图标 + 标题 + 描述文字 |

**设计：**
- 浅蓝色渐变背景区块
- 卡片白色，圆角，浮起阴影
- 顶部蓝色图标

### 5.4 StatsCounter（数据统计区）

**布局：** 3列数据展示

| 数据 | 标签 |
|------|------|
| 1500+ | Successful Projects |
| 50+ | Team Members |
| 250+ | Happy Clients |

**设计：**
- 使用 AnimatedCounter 组件，数字从0到目标值的计数动画
- 使用 IntersectionObserver 触发（进入视口时启动动画）
- 数字使用大号加粗字体 `text-4xl font-bold text-primary`
- 蓝色/深色背景 + 白色数字

### 5.5 LeadershipCard（团队领导展示）

同首页 TeamSection，但此处可以展示更详细的信息。

---

## 六、服务页面 (Services) 详细规格

### 6.1 通用结构

所有 4 个服务页面共享相同的模板结构：

```
1. PageHero（服务名称 + 背景图）
2. ServiceIntro（服务名称 + 标语 + 简短描述）
3. ServiceDetail（详细说明）
4. ServiceCTA（引导用户预约/联系）
```

### 6.2 ServiceIntro（服务简介区）

**设计：**
- 居中排版
- 小标签（带左右蓝线装饰）：服务类别名称
- 大标题：服务标语
- 描述文字：1-2段
- 底部可选插图

### 6.3 ServiceDetail（服务详情区）

**布局：** 左文右图 或 左图右文（交替排列）

**内容：**
- 子标题：「Service Detail」
- 详细描述段落
- 对于 Tax Services 页面，需显示服务列表：
  - Personal tax return (T1)
  - Corporate tax return (T2)
  - Trust return (T3)
  - Non-Resident tax return (ITN, NR6, NR4, Section 216)
  - Certificate of Compliance application
  - NRST Rebate application
  - GST/HST new housing rebate and rental rebate

### 6.4 ServiceCTA（行动号召区）

**设计：**
- 蓝色渐变背景的全宽条幅
- 标题：「Ready to get started?」
- 描述：「Contact us today for a free consultation」
- CTA 按钮：「Book Now」白底蓝字 → 链接至 /contact

**各服务页面参数：**

| 页面 | 路由 | 标题 | 标语 |
|------|------|------|------|
| Incorporation | /services/incorporation | Incorporation | Empower Your Business Beginnings |
| Open Business Accounts | /services/business-accounts | Open Business Account | Mastering Financial Efficiency |
| Accounting Services | /services/accounting | Accounting Services | Insight Into Our Accounting Expertise |
| Tax Services | /services/tax | Tax Services | Expertise In Tax Solutions |

---

## 七、博客页面 (Blog)

### 7.1 博客列表 (/blog)

**布局：**
- PageHero：标题 "Blog" / "Latest Posts"
- 文章卡片网格：3列（桌面）/ 2列（平板）/ 1列（手机）

**BlogCard 组件：**
- 配图（顶部，16:10 比例，圆角）
- 分类标签（蓝色小标签）
- 文章标题
- 发布日期
- 摘要（2-3行，溢出截断）
- 「Read More →」链接
- Hover：图片轻微放大（scale），卡片阴影加深

### 7.2 博客详情 (/blog/[slug])

**布局：**
- 顶部配图（全宽或居中宽度）
- 标题
- 元信息（日期 / 分类 / 预计阅读时间）
- MDX 内容渲染（支持代码块、图片、引用等）
- 底部：相关文章推荐 / 返回博客列表

---

## 八、联系我们 (Contact Us) 页面

### 8.1 PageHero
同其他子页面。

### 8.2 联系区块

**布局：** 左表单右信息（`grid grid-cols-[1.5fr_1fr]`）

**ContactForm 左侧：**
- 标题：「Get In Touch」
- 副标题：「We will be happy to assist you」
- 表单字段：
  - Name（text input）
  - Email（email input）
  - Phone（tel input）
  - Message（textarea，4行高）
- 提交按钮：「Submit」渐变蓝色
- 表单验证：使用 React Hook Form + Zod
- 提交后：显示成功/失败提示（Toast 通知）

**ContactInfo 右侧：**
- 蓝色背景卡片（`#0073BC`）
- 白色文字
- 标题：「Contact Info」
- 3项信息，每项带图标：
  - 📍 6F, 15 Allstate Parkway, Markham, ON L3R 5B4
  - 📞 647-877-5996
  - ✉️ info@tdfaccounting.com

### 8.3 Google Map 嵌入

- 全宽嵌入 Google Maps（iframe 或 @react-google-maps/api）
- 标记 TDF Accounting 办公地址
- 高度约 400px
- 移动端高度 300px

---

## 九、动画与交互规格

### 9.1 全局动画（Framer Motion）

| 动画类型 | 触发条件 | 参数 |
|---------|---------|------|
| ScrollReveal（淡入+上移） | 元素进入视口 | `initial={{ opacity:0, y:40 }}, animate={{ opacity:1, y:0 }}, transition={{ duration:0.6 }}` |
| StaggerChildren（子元素依次出现） | 父容器进入视口 | `staggerChildren: 0.1` |
| 按钮 Hover | 鼠标悬停 | `whileHover={{ scale: 1.05 }}, whileTap={{ scale: 0.98 }}` |
| 导航下拉 | 悬停触发 | `initial={{ opacity:0, y:-10 }}, animate={{ opacity:1, y:0 }}` |
| 数字计数器 | 进入视口 | 从 0 到目标值，1.5s 缓动 |
| 页面切换 | 路由跳转 | 可选：使用 `next/navigation` + Framer Motion `layoutId` |

### 9.2 微交互

- 链接悬停：颜色过渡 + 底部下划线滑入
- 卡片悬停：阴影加深 + 轻微上移
- CTA 按钮悬停：渐变移动 / 光泽扫过效果
- Logo 区域：合作伙伴 logo 灰度 → 彩色过渡
- 滚动指示器（Hero 区底部）：向下弹跳的箭头

---

## 十、SEO 与性能优化

### 10.1 SEO

**Metadata（每页独立配置）：**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://tdfaccounting.com'),
  title: {
    default: 'TDF Accounting | Chartered Professional Accountants',
    template: '%s | TDF Accounting'
  },
  description: 'TDF Accounting, CPA firm since 2015, serves Markham with expert tax and financial planning for small to medium-sized businesses.',
  openGraph: { ... },
  twitter: { ... },
}
```

**结构化数据（JSON-LD）：**
- 主页：`LocalBusiness` + `AccountingService` schema
- 博客：`Article` schema
- 联系页：`ContactPage` schema

### 10.2 性能

- 图片：全部使用 `next/image`，配置 WebP 格式，设置合理 sizes
- 字体：`next/font` 加载，避免 CLS
- 组件懒加载：非首屏组件使用 `dynamic` import
- 合作伙伴 Logo / 客户评价区域：`loading="lazy"`

---

## 十一、响应式断点

| 断点 | 宽度 | 网格列数 | 备注 |
|------|------|---------|------|
| Mobile | < 640px | 1列 | 汉堡菜单 |
| Tablet | 640-1024px | 2列 | 可展开导航 |
| Desktop | 1024-1280px | 3-4列 | 完整导航 |
| Large | > 1280px | 内容居中 max-w-7xl | — |

---

## 十二、API 端点

### /api/contact (POST)

**请求体：**
```json
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "message": "string"
}
```

**处理逻辑：**
1. Zod schema 验证
2. 可选：reCAPTCHA 验证
3. 发送邮件至 info@tdfaccounting.com（使用 Resend/Nodemailer）
4. 返回 200 / 400 / 500 响应

---

## 十三、开发优先级与里程碑

### Phase 1 — 基础框架（第1-2天）
- [x] 项目初始化：Next.js + TypeScript + Tailwind + pnpm
- [x] 配置 ESLint / Prettier
- [x] 设置全局样式、颜色变量、字体
- [x] 实现 TopBar + Navbar + Footer 全局组件
- [x] 实现移动端响应式导航

### Phase 2 — 首页（第3-5天）
- [x] HeroSection
- [x] HighlightCards
- [x] AboutPreview
- [x] ServicesGrid
- [x] TeamSection
- [x] TestimonialsSlider
- [x] PartnersCarousel

### Phase 3 — 子页面（第6-8天）
- [x] About Us 页面（全部区块）
- [x] 4个 Service 页面（使用模板复用）
- [x] Contact Us 页面（表单 + 地图 + API）

### Phase 4 — 博客（第9-10天）
- [x] 博客列表页
- [x] 博客详情页
- [x] MDX 配置与渲染

### Phase 5 — 优化与部署（第11-12天）
- [x] SEO 元数据与结构化数据
- [x] 全站动画调优
- [x] 性能优化（Lighthouse 评分 ≥ 90）
- [x] 浏览器兼容测试
- [x] Vercel 部署与域名配置

---

## 十四、关键注意事项

1. **中英双语支持**：当前网站为纯英文，Logo包含中文。如需后续支持中英切换，建议预留 i18n 架构（如 next-intl）。
2. **表单防垃圾**：建议在联系表单中集成 Google reCAPTCHA v3 或 Turnstile。
3. **无障碍访问**：所有图片加 alt 属性，表单字段关联 label，键盘导航支持，颜色对比度达到 WCAG AA 标准。
4. **分析追踪**：集成 Google Analytics 4 + Google Tag Manager。
5. **图片资产**：所有图片需提供 1x 和 2x 版本，或使用足够大的原图配合 next/image 自动适配。
