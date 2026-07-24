export const quickStarts = [
  {
    title: '零基础入门',
    icon: '🚀',
    target: '没有任何编程经验',
    steps: [
      '学习 Python 基础（变量、循环、函数、类）—— 推荐《Python编程：从入门到实践》',
      '了解 AI 基本概念：什么是机器学习、深度学习、大语言模型',
      '学会使用 ChatGPT 或 Claude 作为编程学习助手',
      '在 Jupyter Notebook 中运行你的第一段 AI 代码',
      '完成一个简单项目：用 AI API 搭建个人聊天机器人',
    ],
    timeEstimate: '约 4-8 周',
  },
  {
    title: '有编程基础',
    icon: '⚡',
    target: '熟悉 Python/JavaScript，了解 Web 开发',
    steps: [
      '直接学习 API 调用：OpenAI SDK、Anthropic SDK 的基本用法',
      '理解关键概念：Prompt Engineering、Token、Temperature、Embedding',
      '搭建一个 RAG（检索增强生成）应用——让 AI 基于你的文档回答问题',
      '学习 LangChain 或 LlamaIndex 框架，构建复杂的 AI 工作流',
      '尝试 Fine-tuning：用你的数据微调开源模型',
    ],
    timeEstimate: '约 2-4 周',
  },
  {
    title: '进阶开发者',
    icon: '🔥',
    target: '有 AI 开发经验，想深入底层',
    steps: [
      '深入 Transformer 架构原理和注意力机制',
      '学习模型部署：vLLM、Ollama、TensorRT-LLM',
      '掌握 Agent 开发：Function Calling、Tool Use、多步推理',
      '模型量化与优化：GGUF、AWQ、GPTQ 格式对比',
      '构建生产级 AI 应用：流式输出、并发处理、成本控制、安全防护',
    ],
    timeEstimate: '持续学习',
  },
];

export const apiTutorials = [
  {
    title: 'OpenAI API 快速上手',
    icon: '🟣',
    language: 'Python',
    code: `# 1. 安装 SDK
# pip install openai

from openai import OpenAI

client = OpenAI(api_key="your-api-key")

# 2. 基础对话
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "你是一个有用的助手。"},
        {"role": "user", "content": "用一句话解释什么是 AI？"}
    ],
    temperature=0.7,
    max_tokens=200
)

print(response.choices[0].message.content)`,
    explanation: '核心参数：model（模型名）、messages（对话历史）、temperature（0-2，越高越有创造性）、max_tokens（最大输出长度）。System message 用于设定 AI 的行为准则，User message 是用户的问题。',
    docs: 'https://platform.openai.com/docs',
  },
  {
    title: 'Anthropic Claude API',
    icon: '🟠',
    language: 'Python',
    code: `# pip install anthropic

import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="你是一个资深的 Python 代码审查专家。",
    messages=[
        {"role": "user", "content": "请审查这段代码的安全性：\\n\\ndef get_user(id):\\n    sql = f'SELECT * FROM users WHERE id={id}'\\n    return db.execute(sql)"}
    ]
)

print(response.content[0].text)`,
    explanation: 'Claude API 将 system prompt 作为独立参数（不在 messages 中），更清晰的职责分离。messages 支持多轮对话，每条消息需指定 role（user 或 assistant）。Claude 在代码审查和长文档分析上表现卓越。',
    docs: 'https://docs.anthropic.com',
  },
  {
    title: 'Streaming 流式输出',
    icon: '📡',
    language: 'JavaScript',
    code: `// OpenAI 流式调用示例
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const stream = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: '写一首关于AI的诗' }],
  stream: true,  // 关键：开启流式输出
});

// 逐块处理输出
for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || '';
  process.stdout.write(content);  // 实时打印
}`,
    explanation: '流式输出（Streaming）是构建 Chat 类应用的关键技术。设置 stream: true 后，API 以 SSE（Server-Sent Events）格式逐 Token 返回结果，用户可以看到文字逐个出现，大幅提升体验。处理时需累积 delta.content 以获取完整回复。',
    docs: 'https://platform.openai.com/docs/api-reference/streaming',
  },
  {
    title: 'Function Calling / Tool Use',
    icon: '🔧',
    language: 'Python',
    code: `# Claude Tool Use 示例
tools = [
    {
        "name": "get_weather",
        "description": "获取指定城市的天气信息",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "城市名称"}
            },
            "required": ["city"]
        }
    }
]

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "北京今天天气怎么样？"}]
)

# AI 会自动判断是否需要调用工具
if response.stop_reason == "tool_use":
    tool_call = response.content[-1]
    print(f"AI 想调用: {tool_call.name}")
    print(f"参数: {tool_call.input}")
    # 你执行实际调用后，将结果返回给 AI`,
    explanation: 'Tool Use（OpenAI 称为 Function Calling）是构建 AI Agent 的核心机制。你定义工具（函数）的 schema，AI 自动判断何时需要调用工具，你执行实际函数并将结果返回，AI 基于结果继续推理。这使 AI 能查询数据库、调用 API、操作文件等。',
    docs: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use',
  },
];

export const projects = [
  {
    title: '个人 AI 聊天助手',
    icon: '💬',
    level: '入门',
    description: '用 Python + Streamlit 搭建一个 Web 聊天界面，接入 OpenAI 或 Claude API，支持多轮对话和历史记录。',
    techStack: ['Python', 'Streamlit', 'OpenAI API'],
    features: ['流式打字效果', '对话历史保存', '多轮上下文记忆', '一键部署到 Streamlit Cloud'],
    github: 'github.com/streamlit/llm-examples',
  },
  {
    title: 'RAG 文档问答系统',
    icon: '📄',
    level: '中级',
    description: '构建一个能"读懂"你的 PDF/文档的知识库问答系统。核心思路：文档切片 → 向量化存储 → 用户提问时检索相关片段 → 交给 LLM 生成答案。',
    techStack: ['Python', 'LangChain', 'ChromaDB', 'OpenAI Embeddings'],
    features: ['PDF/Word 多格式支持', '语义检索 + 关键词混合搜索', '答案引用来源标注', '支持本地私有化部署'],
    github: 'github.com/langchain-ai/rag-from-scratch',
  },
  {
    title: 'AI 代码审查 Bot',
    icon: '🤖',
    level: '中级',
    description: '开发一个自动审查 GitHub Pull Request 的 AI Bot。收到 PR → 提取代码变更 → 发送给 AI 审查 → 将审查意见自动评论到 PR 中。',
    techStack: ['Node.js', 'GitHub Actions', 'Claude API'],
    features: ['自动检测安全漏洞', '代码风格检查', '性能优化建议', 'PR 摘要生成'],
    github: 'github.com/coderabbitai/coderabbit',
  },
  {
    title: '多模态 AI 应用',
    icon: '🎯',
    level: '高级',
    description: '结合视觉和语言的多模态应用。例如：拍照识别物品并生成购物清单、上传设计草图自动生成 HTML 代码、视频内容理解和摘要。',
    techStack: ['Python', 'GPT-4o / Gemini', 'React', 'FastAPI'],
    features: ['图片识别 + 智能分析', '视频关键帧提取 + 摘要', '语音转文字 + AI 对话', '实时画面理解'],
    github: 'github.com/openai/openai-cookbook',
  },
];

export const resources = [
  {
    category: '官方文档',
    icon: '📘',
    links: [
      { name: 'OpenAI API 文档', url: 'https://platform.openai.com/docs' },
      { name: 'Anthropic Claude 文档', url: 'https://docs.anthropic.com' },
      { name: 'LangChain 文档', url: 'https://python.langchain.com' },
      { name: 'Hugging Face 课程', url: 'https://huggingface.co/learn' },
    ],
  },
  {
    category: '学习平台',
    icon: '🎓',
    links: [
      { name: 'DeepLearning.AI 课程', url: 'https://www.deeplearning.ai/courses/' },
      { name: 'Fast.ai 免费课程', url: 'https://course.fast.ai' },
      { name: '李宏毅机器学习课程', url: 'https://speech.ee.ntu.edu.tw/~hylee/ml/2023-spring.php' },
      { name: '吴恩达 Prompt Engineering 课程', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/' },
    ],
  },
  {
    category: '开源项目',
    icon: '🌟',
    links: [
      { name: 'OpenAI Cookbook', url: 'https://github.com/openai/openai-cookbook' },
      { name: 'Anthropic Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook' },
      { name: 'LangChain 示例', url: 'https://github.com/langchain-ai/langchain' },
      { name: 'Ollama（本地模型运行）', url: 'https://github.com/ollama/ollama' },
    ],
  },
  {
    category: '开发者社区',
    icon: '👥',
    links: [
      { name: 'OpenAI 开发者论坛', url: 'https://community.openai.com' },
      { name: 'Hugging Face 社区', url: 'https://huggingface.co/spaces' },
      { name: 'GitHub AI 热门项目', url: 'https://github.com/topics/artificial-intelligence' },
      { name: 'Reddit r/MachineLearning', url: 'https://reddit.com/r/MachineLearning' },
    ],
  },
];

export const faq = [
  {
    q: '没有 GPU 能做 AI 开发吗？',
    a: '完全可以！大部分 AI 开发不需要本地 GPU。使用 API 服务（OpenAI、Claude、DeepSeek）时，模型的推理在云端完成，你的电脑只负责发送请求和接收结果，普通笔记本完全够用。如果需要本地运行模型，Ollama 等工具可以在 CPU 上运行量化后的小模型。',
  },
  {
    q: 'Python 和 JavaScript 选哪个？',
    a: 'AI/ML 领域 Python 是绝对主流——几乎所有 SDK、框架（LangChain、Hugging Face Transformers）都优先支持 Python。如果你做后端 API 开发，选 Python；如果做前端 AI 应用（Web/移动端），JavaScript/TypeScript 也完全可以，OpenAI 和 Anthropic 都提供官方 JS SDK。',
  },
  {
    q: 'API 调用大概花多少钱？',
    a: '成本非常低。以 GPT-4o 为例，处理一页中文文本约 0.01 美元。Claude Haiku 更便宜，约 0.0025 美元/页。个人开发一般月费在 5-50 美元之间。DeepSeek API 价格仅为 GPT-4 的约 1/50。建议设置 API 用量上限（hard limit）防止意外超支。',
  },
  {
    q: '如何保护 API Key 安全？',
    a: '永远不要把 API Key 硬编码在代码中或提交到 Git！使用环境变量（.env 文件）+ .gitignore 是基本操作。前端应用中绝不要直接暴露 API Key——通过后端代理转发请求。生产环境使用密钥管理服务（如 AWS Secrets Manager）。',
  },
];
