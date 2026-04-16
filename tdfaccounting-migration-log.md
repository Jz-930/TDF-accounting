# tdfaccounting.com 域名迁移操作日志

**日期：** 2026年4月16日
**操作人：** Claude Sonnet 4.6 (Anthropic)
**文件版本：** v2（最终完整版）

---

## 一、目标

将 tdfaccounting.com 指向 Vercel 新网站，迁移 DNS 托管，保留 Google Workspace 邮件，停止 SiteGround 托管。

| 项目 | 值 |
|------|----|
| 域名 | tdfaccounting.com |
| Vercel 临时域名 | tdf-accounting.vercel.app |
| Vercel Deployment | tdf-accounting-ffp8h4wbs-dmestudio-jiackeys-projects.vercel.app |
| Vercel 项目 | tdf-accounting (dmestudio-jiackeys-projects) |
| 域名注册商 | GoDaddy |
| 原 DNS 托管 | SiteGround |

---

## 二、迁移前状态

### Nameservers（迁移前）

  ns1.siteground.net
  ns2.siteground.net

### 原有 DNS 记录备份

| 类型 | 名称 | 值 | 备注 |
|------|------|----|------|
| A | @ | 35.208.95.18 | 旧 SiteGround 主机 IP |
| MX | @ | aspmx.l.google.com | priority: 1 |
| MX | @ | alt1.aspmx.l.google.com | priority: 5 |
| MX | @ | alt2.aspmx.l.google.com | priority: 5 |
| MX | @ | alt3.aspmx.l.google.com | priority: 10 |
| MX | @ | alt4.aspmx.l.google.com | priority: 10 |
| TXT | @ | v=spf1 +a +mx include:tdfaccounting.com.spf.auto.dnssmarthost.net ~all | 旧 SPF |

---

## 三、操作步骤

### 步骤 1：切换 Nameservers 到 GoDaddy

  PATCH https://api.godaddy.com/v1/domains/tdfaccounting.com
  Body: { "nameServers": ["ns41.domaincontrol.com", "ns42.domaincontrol.com"] }
  Response: HTTP 204 No Content ✅
  实际分配：ns75.domaincontrol.com / ns76.domaincontrol.com

### 步骤 2：在 GoDaddy 设置 DNS 记录

  PUT /records/A/@       → 76.76.21.21                    HTTP 200 ✅
  PUT /records/CNAME/www → cname.vercel-dns.com            HTTP 200 ✅
  PUT /records/MX/@      → 5条 Google MX 记录              HTTP 200 ✅
  PUT /records/TXT/@     → v=spf1 include:_spf.google.com ~all  HTTP 200 ✅

### 步骤 3：在 Vercel 添加自定义域名

  tdfaccounting.com     → Production ✅
  www.tdfaccounting.com → Production ✅

### 步骤 4：更新 A 记录为 Vercel 推荐新 IP

  PUT /records/A/@ → 216.198.79.1    HTTP 200 ✅

### 步骤 5：更新 www CNAME 为 Vercel 专属新值

  PUT /records/CNAME/www → 1f36e2484c40e5c9.vercel-dns-017.com    HTTP 200 ✅
  Vercel 立即显示 Valid Configuration ✅

---

## 四、最终 DNS 配置（GoDaddy）

| 类型 | 名称 | 值 | TTL |
|------|------|----|-----|
| A | @ | 216.198.79.1 | 600 |
| CNAME | www | 1f36e2484c40e5c9.vercel-dns-017.com | 600 |
| MX | @ | aspmx.l.google.com (priority:1) | 3600 |
| MX | @ | alt1.aspmx.l.google.com (priority:5) | 3600 |
| MX | @ | alt2.aspmx.l.google.com (priority:5) | 3600 |
| MX | @ | alt3.aspmx.l.google.com (priority:10) | 3600 |
| MX | @ | alt4.aspmx.l.google.com (priority:10) | 3600 |
| TXT | @ | v=spf1 include:_spf.google.com ~all | 3600 |

Nameservers: ns75.domaincontrol.com / ns76.domaincontrol.com

---

## 五、Vercel 最终状态

| 域名 | 状态 |
|------|------|
| www.tdfaccounting.com | Valid Configuration ✅ |
| tdfaccounting.com | Valid Configuration ✅ |
| tdf-accounting.vercel.app | Valid Configuration ✅ |

---

## 六、Gmail / Google Workspace

✅ 邮件服务正常，全程未中断
- 5条 MX 记录完整迁移至 GoDaddy
- SPF 更新为标准 Google 格式
- dns.google 公开查询确认 MX 全部生效

---

## 七、后续建议

1. 可立即取消 SiteGround 订阅
2. Vercel SSL 证书自动管理，无需手动操作
3. tdf-accounting.vercel.app 仍可作为备用访问入口

---
操作工具：Claude Sonnet 4.6 — 浏览器自动化
操作平台：GoDaddy API + SiteGround Portal + Vercel Dashboard
