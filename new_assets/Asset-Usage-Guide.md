# 新图片素材使用指南 (Art Assets Usage Guide)

根据当前网站结构和之前设定的《Art-Assets-Prompt.md》提词规划，以下是各个图片的用途及位置对应说明，方便您在进行 Next.js / Tailwind CSS 网站重构时使用：

## 1. 首页 (Home Page)
* **`hero-home.jpg`**
  * **用途**: 首页首屏主背景图 (Hero Banner)。
  * **设计用意**: 展示多伦多专业商务氛围，右下方团队讨论，左侧大量的暗色留白十分适合放置首页大标题 (如 "Elevating Your Financial Future") 及 CTA 按钮。
* **`about-preview.jpg`**
  * **用途**: 首页偏下方的 "About Us" / "Why Choose Us" 简介区块配图。
  * **设计用意**: 高清的握手特写，体现建立合作信任感和我们提供的专业服务。

## 2. 独立页面顶部横幅 (Top Hero Banners)
* **`banner-about.jpg`**
  * **用途**: About Us 页面顶部的全宽 Banner。
  * **设计用意**: 极宽幅的多伦多摩天大楼仰视视角，上方净空留给居中的浅蓝或白色大标题，体现公司的宏观实力与稳健感。
* **`banner-contact.jpg`**
  * **用途**: Contact Us 页面顶部的全宽 Banner。
  * **设计用意**: 键盘打字与智能手机亮屏的特写，背景微微透出咖啡馆感，表达实时沟通、响应快速的服务理念。留给文字的空间在画面一侧。
* **`banner-blog.jpg`**
  * **用途**: Insights / Blog 博客列表页面顶部 Banner。
  * **设计用意**: 经典的案头静物特写（金融报表、计算器、黑咖啡），深沉高级的蓝灰调，契合阅读专业税务资讯的心境。

## 3. 服务详情页面横幅 (Service Detail Banners)
这组图片请用于各个子服务页面的首图（建议将图片放在标题和导读文字下方，或者作为宽版背景）。

* **`banner-service-incorporation.jpg`**
  * **用途**: 公司注册 (Incorporation) 服务详情页 Banner。
  * **设计用意**: 焦点处于文件上的签名与质感极佳的钢笔，远景是标志性的多伦多日落美景。
* **`banner-service-corporate-accounts.jpg`**
  * **用途**: 企业开户 (Open Business Accounts) 服务详情页 Banner。
  * **设计用意**: 金属拉丝质感信用卡与显示数据指标的平板电脑，呈现了高科技与安全感。
* **`banner-service-accounting.jpg`**
  * **用途**: 日常会计记账 (Accounting Services) 服务详情页 Banner。
  * **设计用意**: 从背后拍摄注册会计师在双屏显示器前聚精会神核对流水的场景，专注度极高。
* **`banner-service-tax.jpg`**
  * **用途**: 税务服务 (Tax Services) 详情页 Banner。
  * **设计用意**: 阳光斜洒在木桌上的个人税/企业税报表，极具温润和让人安心处理繁杂税务的氛围。

## 4. 内容配图与通用占位符 (Content & Miscs)
* **`blog-cover-teamwork.jpg`**
  * **用途**: 博客文章列表的卡片封面图（适合作为“团队协作”、“初创企业指南”相关的文章配图）。
  * **设计用意**: 展现年轻活力的团队脑力激荡和办公室场景。
* **`blog-cover-consultation.jpg`**
  * **用途**: 博客文章列表的卡片封面图（适合作为“个人财务规划”、“专案咨询”相关的文章配图）。
  * **设计用意**: 职业女性理财顾问在落地窗旁认真审核材料，展现专注和亲和力。
* **`testimonial-avatar.jpg`**
  * **用途**: 首页或“关于我们”页面中的“客户好评 (Testimonial)”卡片头像。
  * **设计用意**: 高清的正方形影棚大头照，前端在排版时可直接利用 CSS `rounded-full` 裁切成正圆。

> **前端开发排版提示**：绝大多数横幅类 (Banners) 图像都是经过特别设计的，为了避免图片抢夺文字的主体地位，请结合 `object-cover` 和对应方向的锚点（如 `object-right`），并使用带有渐变叠加的暗色蒙版，确保左侧的白色标题排版可读性达到最佳。
