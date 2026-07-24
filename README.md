# 🧠 探索人工智能 — AI 知识指南

一站式 AI 知识网站，涵盖从基础概念、主流模型、应用场景到开发实战的完整内容体系。

**🌐 在线访问：https://zhangchunfeng.github.io/ai-website/**

---

## 📋 内容概览

| 区块 | 内容 |
|---|---|
| 🦸 **Hero 首屏** | 渐变动画标题、科技感光晕背景、滚动指示器 |
| 📖 **AI 基础与发展史** | 12 个核心概念（AI/ML/DL/NLP/LLM/CV/RL/GAN/Transformer/AGI/扩散模型）+ 16 个历史节点（1950-2025） |
| 🛠️ **主流模型与工具** | 12 款 AI 工具对比，5 大分类（大语言模型/图像生成/视频生成/音乐生成/代码工具） |
| 💡 **AI 应用场景** | 8 大领域详介（编程/写作/设计/医疗/金融/教育/自动驾驶/科学研究），各含 5 个亮点 |
| 🏢 **顶尖 AI 公司** | 全球 6 家（OpenAI/Anthropic/DeepMind/Meta/Microsoft/NVIDIA）+ 中国 8 家（DeepSeek/百度/阿里/华为/字节/腾讯/智谱/商汤） |
| ⚖️ **AI 伦理与安全** | 6 大伦理原则 + 8 个核心议题（偏见/隐私/对齐/透明度/Deepfake/就业/武器/监管），含严重级别标注 |
| 📚 **AI 开发教程** | 3 条学习路径（零基础/有基础/进阶）+ 4 个 API 代码教程（含复制按钮）+ 4 个实战项目 + 16 个学习资源 + FAQ |
| ✨ **提示词工程** | 12 条技巧 + 3 组好坏对比示例（文章/代码/旅行规划）+ 黄金法则 |
| 📋 **术语速查表** | 35 个核心 AI 术语，字母索引 + 实时搜索过滤 |

---

## 🔧 功能特性

| 功能 | 说明 |
|---|---|
| 🔍 **全站搜索** | `Ctrl+K` 唤起搜索弹窗，实时搜索 8 个区块共 100+ 条数据，点击结果跳转 |
| 📑 **侧边目录导航** | 桌面端右侧固定目录，滚动高亮当前区块，一键跳转（≤1024px 自动隐藏） |
| 🌓 **主题切换** | 亮色/暗色双模式，自动记忆偏好到 localStorage，适配系统主题 |
| 📊 **阅读进度条** | 顶部渐变色进度条，实时反映页面阅读进度 |
| 🎭 **滚动渐显动画** | IntersectionObserver 驱动，区块进入视口时渐显，卡片交错弹出 |
| 📱 **完整响应式** | 桌面 / 平板（紧凑导航） / 手机（汉堡菜单+遮罩），三段适配 |
| 🔝 **回到顶部** | 浮动按钮，滚动超过 600px 出现，平滑回到顶部 |

---

## 🛠️ 技术栈

| 技术 | 用途 |
|---|---|
| React 18 | UI 框架 |
| Vite 5 | 构建工具 |
| CSS Modules | 组件级样式隔离 |
| IntersectionObserver | 滚动动画 |
| gh-pages | 一键部署 |

**零第三方 UI 依赖，纯原生实现。**

---

## 🚀 本地运行

```bash
git clone git@github.com:ZhangChunfeng/ai-website.git
cd ai-website
npm install
npm run dev        # 开发服务器 → http://localhost:5173
npm run build      # 生产构建 → dist/
npm run preview    # 预览构建产物
```

---

## 📦 部署

```bash
npm run deploy     # 构建 + 推送 dist 到 gh-pages 分支
```

GitHub Pages 将自动从 `gh-pages` 分支部署。

---

## 📁 项目结构

```
ai-website/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                    # React 入口
    ├── App.jsx                     # 根组件（主题/搜索/进度条/布局）
    ├── index.css                   # 全局样式 + CSS 变量 + 亮/暗主题
    ├── App.module.css
    ├── components/
    │   ├── Navbar/                 # 粘性导航 + 搜索按钮 + 主题切换 + 移动端菜单
    │   ├── Hero/                   # 全屏首屏 + 光晕动画 + 逐字渐显标题
    │   ├── SearchBar/              # Ctrl+K 全站搜索（模态弹窗 + 实时过滤）
    │   ├── SideToc/                # 桌面端侧边目录导航（滚动高亮）
    │   ├── SectionWrapper/         # 通用区块容器 + IntersectionObserver 渐显
    │   ├── AIHistory/              # AI 概念卡片网格 + 垂直时间线
    │   ├── AIModels/               # 模型对比卡片（分类标签/简介/优势/场景）
    │   ├── AIApplications/         # 应用领域卡片（图标/亮点/工具推荐）
    │   ├── AICompanies/            # 全球+中国 AI 公司卡片（产品/影响力）
    │   ├── AIEthics/               # AI 伦理原则 + 议题（严重级别标注）
    │   ├── AITutorials/            # 学习路径Tab + API代码教程 + 项目 + 资源 + FAQ
    │   ├── PromptEngineering/      # 提示词技巧卡片 + 好坏对比成对展示
    │   ├── Glossary/               # 术语速查（字母索引 + 搜索过滤）
    │   ├── Footer/                 # 页脚导航 + 免责声明
    │   └── BackToTop/              # 浮动回到顶部按钮
    ├── data/                       # 内容数据文件（组件独立）
    │   ├── aiHistory.js            # AI 概念定义 + 时间线事件
    │   ├── aiModels.js             # AI 模型/工具详情
    │   ├── aiApplications.js       # AI 应用场景
    │   ├── aiCompanies.js          # 全球 + 中国 AI 公司
    │   ├── aiEthics.js             # AI 伦理议题 + 原则
    │   ├── aiTutorials.js          # 教程数据（路径/API/项目/资源/FAQ）
    │   ├── promptEngineering.js    # 提示词技巧 + 对比示例
    │   ├── glossary.js             # AI 术语定义
    │   └── navigation.js           # 导航栏配置
    └── hooks/                      # 自定义 Hooks
        ├── useScrollSpy.js         # 滚动位置监听 → 导航高亮
        ├── useSmoothScroll.js      # 平滑滚动到指定区块
        └── useScrollReveal.js      # IntersectionObserver → 渐显动画
```

---

## ⌨️ 快捷键

| 快捷键 | 功能 |
|---|---|
| `Ctrl+K` | 打开全站搜索 |
| `Esc` | 关闭搜索 |
| `↑` `↓` | 搜索结果导航 |
