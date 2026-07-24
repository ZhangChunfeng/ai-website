# 🧠 探索人工智能 — AI 知识指南

一站式 AI 知识介绍网站，涵盖从基础概念到前沿应用的完整内容。

**在线访问：** https://zhangchunfeng.github.io/ai-website/

## 📋 内容概览

| 区块 | 内容 |
|---|---|
| 🦸 **Hero 首屏** | 渐变动画标题、科技感背景 |
| 📖 **AI 基础与发展史** | 12 个核心概念 + 16 个历史节点（1950-2025） |
| 🛠️ **主流模型与工具** | 12 款 AI 工具对比（ChatGPT / Claude / Gemini / Llama / DeepSeek / Midjourney / DALL·E / Stable Diffusion / Sora / Suno / Copilot / Cursor） |
| 💡 **AI 应用场景** | 8 大领域详介（编程、写作、设计、医疗、金融、教育、自动驾驶、科学研究） |
| ✨ **提示词工程** | 12 条技巧 + 3 组好坏对比示例 + 黄金法则 |

## 🛠️ 技术栈

- **React 18** + **Vite 5**
- CSS Modules（组件级样式隔离）
- 零第三方 UI 依赖
- 原生 IntersectionObserver 动画
- 暗色主题 + 完整响应式

## 🚀 本地运行

```bash
npm install
npm run dev        # 开发 → http://localhost:5173
npm run build      # 构建 → dist/
npm run preview    # 预览构建产物
```

## 📦 部署

```bash
npm run deploy     # 构建并推送到 gh-pages 分支
```

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── Navbar/          # 粘性导航 + 移动端菜单
│   ├── Hero/            # 全屏首屏
│   ├── SectionWrapper/  # 通用区块容器 + 滚动渐显
│   ├── AIHistory/       # 概念卡片 + 时间线
│   ├── AIModels/        # 模型对比卡片
│   ├── AIApplications/  # 应用场景
│   ├── PromptEngineering/# 提示词技巧
│   ├── Footer/          # 页脚
│   └── BackToTop/       # 回到顶部
├── data/                # 内容数据（独立于组件）
├── hooks/               # 自定义 Hooks
│   ├── useScrollSpy     # 滚动位置监听
│   ├── useSmoothScroll  # 平滑滚动
│   └── useScrollReveal  # 渐显动画
└── index.css            # 全局样式 + CSS 变量
```
