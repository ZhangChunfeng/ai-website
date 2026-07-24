export const topics = [
  {
    title: '算法偏见与公平性',
    icon: '⚖️',
    description: 'AI 系统从训练数据中学习，如果训练数据本身包含社会偏见（种族、性别、年龄等），AI 模型会放大这些偏见。例如：招聘 AI 因历史数据偏向男性而歧视女性候选人；面部识别对深色皮肤的准确率显著低于浅色皮肤。解决方向包括：数据集平衡、公平性指标（Demographic Parity、Equal Opportunity）、对抗性去偏（Adversarial Debiasing）。',
    severity: 'high',
  },
  {
    title: '数据隐私与安全',
    icon: '🔐',
    description: '大语言模型在训练过程中可能记忆并泄露训练数据中的个人信息（如姓名、地址、电话号码）。即使用户的对话数据也可能被用于模型训练。GDPR（欧盟）、《个人信息保护法》（中国）等法规正在加强对 AI 数据使用的监管。联邦学习、差分隐私（Differential Privacy）等技术旨在保护用户隐私。',
    severity: 'high',
  },
  {
    title: 'AI 对齐 (Alignment)',
    icon: '🎯',
    description: 'AI 对齐问题：如何确保 AI 系统的目标和行为与人类的价值观和意图一致？当前方法包括 RLHF（人类反馈强化学习）、宪法 AI（Constitutional AI）和 RLAIF（AI 反馈强化学习）。即使技术上对齐，不同文化背景的人对"正确"的理解可能不同——谁来决定 AI 的价值观？',
    severity: 'critical',
  },
  {
    title: '可解释性与透明度',
    icon: '🔍',
    description: '现代大模型是"黑箱"——即使是训练它们的工程师也无法完全解释模型为何做出某个决策。在医疗诊断、信贷审批、司法判决等高风险场景中，AI 的不可解释性可能带来严重后果。可解释 AI（XAI）研究试图通过注意力可视化、概念归因（Concept Attribution）等技术打开黑箱。',
    severity: 'high',
  },
  {
    title: 'Deepfake 与虚假信息',
    icon: '🎭',
    description: 'AI 生成的逼真假视频、假音频和假新闻正在侵蚀公众对信息的信任。2024 年全球多场选举中出现 AI 生成的虚假政治广告。Sora 等视频生成工具让"眼见为实"不再可靠。技术对策包括：数字水印（C2PA 标准）、AI 生成内容检测工具、平台内容标注政策。',
    severity: 'critical',
  },
  {
    title: '就业与劳动力冲击',
    icon: '👷',
    description: '高盛研究预测 AI 可能影响全球 3 亿个工作岗位。翻译、客服、数据录入、初级编程等重复性脑力工作受影响最大。但同时 AI 也在创造新岗位：Prompt 工程师、AI 训练师、AI 安全研究员。关键挑战是：技能转型的速度能否跟上 AI 普及的速度？全民基本收入（UBI）等社会政策正在被广泛讨论。',
    severity: 'critical',
  },
  {
    title: '自主武器与军事 AI',
    icon: '⚠️',
    description: 'AI 在军事领域的应用引发了深刻的伦理争议。自主武器系统（"杀手机器人"）能在无人类干预的情况下选择并攻击目标，这触碰了国际人道法的底线。联合国《特定常规武器公约》正在讨论对自主武器的国际管制。全球已有 30+ 国家呼吁禁止完全自主的致命武器。',
    severity: 'critical',
  },
  {
    title: '全球 AI 治理与监管',
    icon: '🌐',
    description: '各国正在加速 AI 立法。欧盟《AI 法案》率先将 AI 应用按风险分级（不可接受风险/高风险/有限风险/最小风险）。中国出台了《生成式人工智能服务管理暂行办法》。美国通过行政令推动 AI 安全。2023 年首届全球 AI 安全峰会在英国布莱切利园召开，28 国签署《布莱切利宣言》。',
    severity: 'high',
  },
];

export const principles = [
  {
    icon: '🛡️',
    title: '有益性 (Beneficence)',
    desc: 'AI 应当为人类福祉服务，其发展应当让尽可能多的人受益。',
  },
  {
    icon: '⚖️',
    title: '公平性 (Fairness)',
    desc: 'AI 系统不应因种族、性别、年龄等因素对任何群体产生歧视。',
  },
  {
    icon: '🔍',
    title: '透明性 (Transparency)',
    desc: 'AI 的决策过程应当尽可能可解释，用户有权知道自己在与 AI 交互。',
  },
  {
    icon: '👤',
    title: '隐私保护 (Privacy)',
    desc: 'AI 的数据收集和使用应当尊重用户隐私并符合法律法规。',
  },
  {
    icon: '👨‍⚖️',
    title: '人类控制 (Human Control)',
    desc: '关键决策（生命、自由、重大财产）必须保留人类最终决定权。',
  },
  {
    icon: '🌍',
    title: '可持续性 (Sustainability)',
    desc: 'AI 的发展应当考虑环境成本，推动绿色 AI 和高效计算。',
  },
];
