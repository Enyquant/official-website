export type SiteLanguage = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface NavItem {
  key: 'home' | 'projects' | 'news' | 'knowledge' | 'about' | 'contact';
  path: string;
  label: LocalizedText;
}

export interface SeoEntry {
  title: LocalizedText;
  description: LocalizedText;
  keywords: LocalizedText;
}

export interface ContactChannel {
  label: LocalizedText;
  value: string;
  href?: string;
  note?: LocalizedText;
}

export interface NewsItem {
  date: LocalizedText;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
}

export interface SolutionTrack {
  key: 'vpp' | 'algo' | 'bess';
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  audience: LocalizedText[];
  scenarios: LocalizedText[];
  outputs: LocalizedText[];
  value: LocalizedText;
  accent: string;
}

export interface KnowledgeTrack {
  key: string;
  title: LocalizedText;
  summary: LocalizedText;
  topics: LocalizedText[];
}

export interface KnowledgeArticleSection {
  heading: LocalizedText;
  body: LocalizedText[];
}

export interface KnowledgeArticle {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  publishedAt: LocalizedText;
  publishedTime: string;
  readTime: LocalizedText;
  safeScopeLabel: LocalizedText;
  heroNote: LocalizedText;
  sections: KnowledgeArticleSection[];
  keyTakeaways: LocalizedText[];
  relatedFallbackSlugs: string[];
  boundaryNote: LocalizedText;
}

export interface AboutNarrativeCard {
  key: string;
  title: LocalizedText;
  body: LocalizedText;
  bullets?: LocalizedText[];
}

export interface AboutListSection {
  title: LocalizedText;
  summary: LocalizedText;
  items: LocalizedText[];
}

export interface AboutHighlight {
  label: LocalizedText;
  value: LocalizedText;
}

export const localizedText = (text: LocalizedText, language: SiteLanguage) => text[language];

const solutionTracks: SolutionTrack[] = [
  {
    key: 'algo',
    title: {
      zh: '电力交易 Agent 与算法服务',
      en: 'Power Trading Agent and Algorithm Services',
    },
    subtitle: {
      zh: 'Power Trading Agent',
      en: 'Power Trading Agent',
    },
    summary: {
      zh: '围绕电价预测、策略生成、风险管理与执行支持，构建面向电力市场的交易 Agent 与算法能力。',
      en: 'Build trading-agent and algorithm capabilities for power markets across price forecasting, strategy generation, risk management, and execution support.',
    },
    audience: [
      { zh: '发电集团', en: 'Generation groups' },
      { zh: '售电公司', en: 'Retail electricity companies' },
      { zh: '能源集团交易团队', en: 'Energy trading teams' },
    ],
    scenarios: [
      { zh: '价格预测与报价策略', en: 'Price forecasting and bidding strategy' },
      { zh: '中长期合约优化', en: 'Medium- and long-term contract optimization' },
      { zh: '风险对冲与交易执行', en: 'Risk hedging and trade execution' },
    ],
    outputs: [
      { zh: '交易辅助决策', en: 'Trading decision support' },
      { zh: '策略生成与评估', en: 'Strategy generation and evaluation' },
      { zh: '执行支持流程', en: 'Execution support workflows' },
    ],
    value: {
      zh: '服务复杂市场环境下的智能决策与量化交易，直接贴近收益闭环。',
      en: 'Support intelligent decisions and quantitative trading in complex market conditions, closest to the revenue loop.',
    },
    accent: '#3b82f6',
  },
  {
    key: 'bess',
    title: {
      zh: '储能资产 Agent 与优化服务',
      en: 'Storage Asset Agent and Optimization Services',
    },
    subtitle: {
      zh: 'Storage Asset Agent',
      en: 'Storage Asset Agent',
    },
    summary: {
      zh: '围绕工商业及源网侧储能，提供收益测算、交易策略、调度优化与自动化运营支持。',
      en: 'Support C&I and grid-side storage through value assessment, trading strategies, dispatch optimization, and automated operations.',
    },
    audience: [
      { zh: '工商业储能业主', en: 'Commercial and industrial storage owners' },
      { zh: '源网侧储能项目方', en: 'Grid-side storage developers' },
      { zh: '储能平台与运营团队', en: 'Storage operators and platforms' },
    ],
    scenarios: [
      { zh: '充放电策略优化', en: 'Charge-discharge strategy optimization' },
      { zh: '辅助服务收益', en: 'Ancillary-service revenue' },
      { zh: '容量电价与需求响应', en: 'Capacity value and demand response' },
    ],
    outputs: [
      { zh: '投资收益评估', en: 'Investment-return assessment' },
      { zh: '收益结构诊断', en: 'Value-stack diagnostics' },
      { zh: '运营策略建议', en: 'Operating strategy recommendations' },
    ],
    value: {
      zh: '提升储能资产收益能力与运营效率，从收益优化走向资产增值。',
      en: 'Improve storage-asset revenue capability and operating efficiency, moving from revenue optimization to asset value creation.',
    },
    accent: '#f59e0b',
  },
  {
    key: 'vpp',
    title: {
      zh: '虚拟电厂/灵活性资源 Agent',
      en: 'VPP and Flexibility Resource Agent',
    },
    subtitle: {
      zh: 'VPP / Flexibility Agent',
      en: 'VPP / Flexibility Agent',
    },
    summary: {
      zh: '面向分布式光伏、储能、充电桩等灵活性资源，提供聚合优化、策略编排与市场化运营能力。',
      en: 'Provide aggregation optimization, strategy orchestration, and market-operation capability for distributed solar, storage, charging assets, and other flexible resources.',
    },
    audience: [
      { zh: '园区运营方', en: 'Industrial parks' },
      { zh: '工商业用户', en: 'Commercial and industrial users' },
      { zh: '虚拟电厂运营主体', en: 'VPP operators' },
    ],
    scenarios: [
      { zh: '分布式资源聚合', en: 'Distributed resource aggregation' },
      { zh: '充电桩与负荷管理', en: 'Charging and load management' },
      { zh: '需求响应与调节服务', en: 'Demand response and regulation services' },
    ],
    outputs: [
      { zh: '聚合调度方案', en: 'Aggregation and dispatch plans' },
      { zh: '策略编排流程', en: 'Strategy orchestration workflows' },
      { zh: '灵活性价值评估', en: 'Flexibility value assessment' },
    ],
    value: {
      zh: '推动灵活性价值在能源市场中实现，从单点优化走向系统级运营。',
      en: 'Enable flexibility value realization in energy markets, moving from point optimization to system-level operations.',
    },
    accent: '#22c55e',
  },
];

const milestoneItems: NewsItem[] = [
  {
    date: { zh: '2024.10', en: '2024.10' },
    category: { zh: '基金支持', en: 'Fund Support' },
    title: {
      zh: '获得代尔夫特能源倡议创业发展基金支持',
      en: 'Received support from the Delft energy-initiative startup fund',
    },
    summary: {
      zh: '完成早期项目支持，为后续技术验证与团队建设提供了启动基础。',
      en: 'Secured early-stage support that helped establish the basis for technical validation and team formation.',
    },
  },
  {
    date: { zh: '2024.11', en: '2024.11' },
    category: { zh: '机构成立', en: 'Institution Launch' },
    title: {
      zh: '成立 Energy Quant Research Institution',
      en: 'Established Energy Quant Research Institution',
    },
    summary: {
      zh: '形成围绕算法开发、电力市场建模与能源经济分析的研发实体。',
      en: 'Established a research entity focused on algorithm development, power-market modeling, and energy-economics analysis.',
    },
  },
  {
    date: { zh: '2025.05', en: '2025.05' },
    category: { zh: '合作拓展', en: 'Partnerships' },
    title: {
      zh: '与电力交易公司、英国高校及 BESS 企业达成合作',
      en: 'Built partnerships with a power-trading company, a UK university, and BESS companies',
    },
    summary: {
      zh: '围绕交易、研究与储能场景展开合作，为后续跨市场能力建设提供基础。',
      en: 'Expanded collaboration across trading, research, and storage scenarios to support cross-market capability building.',
    },
  },
  {
    date: { zh: '2025.12', en: '2025.12' },
    category: { zh: '赛事奖项', en: 'Recognition' },
    title: {
      zh: '深圳创新创业大赛海外分站赛一等奖',
      en: 'Won first prize at the Shenzhen innovation competition overseas regional event',
    },
    summary: {
      zh: '获得创新创业赛事认可，提升了公司在能源 AI 方向的外部可见度。',
      en: 'Received external recognition that strengthened the company’s visibility in energy AI.',
    },
  },
  {
    date: { zh: '2026.01', en: '2026.01' },
    category: { zh: '赛事奖项', en: 'Recognition' },
    title: {
      zh: '全国人工智能应用场景创新挑战赛种子组一等奖',
      en: 'Won first prize in the seed group of the national AI application innovation challenge',
    },
    summary: {
      zh: '在人工智能应用场景方向获得公开认可，进一步强化技术品牌叙事。',
      en: 'Received public recognition in AI application scenarios, strengthening the technology narrative.',
    },
  },
  {
    date: { zh: '2026', en: '2026' },
    category: { zh: '中国布局', en: 'China Launch' },
    title: {
      zh: '北京任能科技启动中国市场布局',
      en: 'EnergyQuant launched its China market presence in Beijing',
    },
    summary: {
      zh: '围绕中国能源市场改革窗口期，正式启动本地化运营、技术适配与市场合作布局。',
      en: 'Started localized operations, technical adaptation, and market-facing collaboration around the China power-market reform window.',
    },
  },
];

const knowledgeTracks: KnowledgeTrack[] = [
  {
    key: 'foundation',
    title: {
      zh: '电力市场怎么运行',
      en: 'How Power Markets Work',
    },
    summary: {
      zh: '建立对电力市场、交易机制与常见参与主体的基础理解。',
      en: 'Build a shared understanding of power markets, trading mechanisms, and market participants.',
    },
    topics: [
      { zh: '什么是电力市场', en: 'What is a power market?' },
      { zh: '现货市场、辅助服务与虚拟电厂是什么', en: 'What are spot markets, ancillary services, and VPPs?' },
    ],
  },
  {
    key: 'observation',
    title: {
      zh: '储能收益从哪里来',
      en: 'Where Storage Value Comes From',
    },
    summary: {
      zh: '围绕峰谷价差、辅助服务、容量价值与需求响应，理解储能资产的收益结构。',
      en: 'Understand storage value stacks across peak-valley spreads, ancillary services, capacity value, and demand response.',
    },
    topics: [
      { zh: '储能项目有哪些收益来源', en: 'What value sources can storage projects capture?' },
      { zh: '收益测算如何进入运营决策', en: 'How does value assessment enter operating decisions?' },
    ],
  },
  {
    key: 'framework',
    title: {
      zh: 'AI 决策系统如何落地',
      en: 'How AI Decision Systems Deploy',
    },
    summary: {
      zh: '从数据接入、模型预测、策略评估到系统上线，理解能源 AI 如何进入真实业务流程。',
      en: 'Understand how energy AI enters real workflows from data access, forecasting, and strategy evaluation to system launch.',
    },
    topics: [
      { zh: '从数据到预测到策略评估', en: 'From data to forecasting and strategy evaluation' },
      { zh: '从联合验证到系统上线', en: 'From joint validation to system launch' },
    ],
  },
];

const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: 'what-is-a-power-market',
    category: { zh: '市场基础', en: 'Market Fundamentals' },
    title: {
      zh: '什么是电力市场：从计划调度到市场化交易',
      en: 'What Is A Power Market: From Planned Dispatch To Market Trading',
    },
    summary: {
      zh: '用公开、可理解的语言解释电力市场为什么出现、解决什么问题，以及中长期、现货与辅助服务之间的关系。',
      en: 'Explain why power markets exist, what problems they solve, and how long-term contracts, spot markets, and ancillary services work together.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 6 分钟', en: '6 min read' },
    safeScopeLabel: { zh: '公开科普', en: 'Public Primer' },
    heroNote: {
      zh: '电力市场不是把电当成普通商品简单买卖，而是在电网约束下用价格信号协调发电、用电与灵活性资源。',
      en: 'A power market is not a simple commodity exchange. It uses price signals under grid constraints to coordinate generation, demand, and flexible resources.',
    },
    sections: [
      {
        heading: { zh: '为什么需要电力市场', en: 'Why Power Markets Exist' },
        body: [
          {
            zh: '传统电力系统长期依赖计划调度与行政定价，但随着电源结构复杂化、用户需求变化和新能源占比提升，单一计划体系越来越难同时兼顾效率、成本和灵活性。',
            en: 'Traditional power systems relied on planned dispatch and administrative pricing, but a more complex generation mix, changing demand, and higher renewable penetration make it harder for a single planning regime to balance efficiency, cost, and flexibility.',
          },
          {
            zh: '市场化并不意味着完全放任，而是在安全约束、调度规则和结算体系之内，用价格帮助系统表达稀缺性和调节价值。',
            en: 'Marketization does not mean removing control. It means using prices within reliability constraints, dispatch rules, and settlement systems to express scarcity and the value of flexibility.',
          },
        ],
      },
      {
        heading: { zh: '中长期、现货与辅助服务如何衔接', en: 'How Long-Term, Spot, And Ancillary Layers Connect' },
        body: [
          {
            zh: '中长期市场更强调锁定电量与价格，为参与者提供稳定预期；现货市场承担更接近交割时点的供需平衡与价格发现；辅助服务则补足频率、备用和爬坡等系统稳定需求。',
            en: 'Long-term markets focus on locking in volume and prices, spot markets handle balancing and price discovery closer to delivery, and ancillary services cover stability needs such as frequency response, reserve, and ramping.',
          },
          {
            zh: '这三层不是彼此替代，而是围绕同一交割体系分层协同运行。理解这种衔接关系，是理解储能、虚拟电厂和交易系统为什么会越来越重要的起点。',
            en: 'These layers do not replace each other. They operate around the same delivery system at different horizons. Understanding that linkage is the starting point for understanding why storage, VPPs, and trading systems matter more over time.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '电力市场的目标是提升资源配置效率，而不是取消系统约束。', en: 'Power markets aim to improve resource allocation, not remove system constraints.' },
      { zh: '中长期、现货和辅助服务是同一体系中的不同层次。', en: 'Long-term, spot, and ancillary services are different layers of the same system.' },
      { zh: '价格信号的价值在于表达稀缺性、灵活性和实时平衡压力。', en: 'Price signals matter because they express scarcity, flexibility, and real-time balancing pressure.' },
    ],
    relatedFallbackSlugs: [
      'china-vs-europe-power-markets',
      'from-data-to-forecast-to-execution',
      'public-value-stack-of-storage',
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
  {
    slug: 'public-value-stack-of-storage',
    category: { zh: '储能框架', en: 'Storage Framework' },
    title: {
      zh: '储能项目的公开价值框架：不仅是峰谷套利',
      en: 'The Public Value Framework For Storage: More Than Energy Arbitrage',
    },
    summary: {
      zh: '从公开可解释的角度梳理储能项目的价值来源，说明为什么储能不能只按单一价差逻辑理解。',
      en: 'Outline the public and explainable value sources of storage projects and show why storage cannot be understood only through a single spread-arbitrage lens.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 7 分钟', en: '7 min read' },
    safeScopeLabel: { zh: '公开方法框架', en: 'Public Framework' },
    heroNote: {
      zh: '储能的价值常常来自多种市场与调节职责的叠加，而不是某一个收益点的短期放大。',
      en: 'Storage often creates value by stacking multiple market and balancing roles instead of relying on one narrowly defined revenue source.',
    },
    sections: [
      {
        heading: { zh: '为什么单一套利视角不够', en: 'Why A Single-Arbitrage View Is Not Enough' },
        body: [
          {
            zh: '在公开讨论里，储能经常被简化为“低价充电、高价放电”。这种描述有帮助，但它忽略了储能同时面对功率、能量、状态区间和履约义务等多重约束。',
            en: 'In public discussions, storage is often simplified as charge low and discharge high. That framing is useful, but it ignores the fact that storage operates under power, energy, state-of-charge, and delivery constraints at the same time.',
          },
          {
            zh: '现实中的储能价值通常由多层收益组成，例如能量套利、辅助服务、容量补偿、需求响应或园区级灵活性支持。',
            en: 'In practice, storage value usually comes from several layers, including energy arbitrage, ancillary services, capacity value, demand response, or site-level flexibility support.',
          },
        ],
      },
      {
        heading: { zh: '更稳健的公开价值栈理解', en: 'A More Robust Public Value Stack' },
        body: [
          {
            zh: '更稳健的理解方式，是把储能看成一种可以在不同时间尺度上提供灵活性的资源。短周期里，它帮助系统平衡波动；更长周期里，它帮助资产管理者组织收益结构与运营节奏。',
            en: 'A more robust lens is to treat storage as a flexibility resource operating across different time scales. At short horizons it helps the system absorb volatility, and at longer horizons it helps operators organize revenue structure and operating cadence.',
          },
          {
            zh: '因此，讨论储能价值时，更适合使用“价值栈”和“适用场景”两个概念，而不是直接跳到某个项目的具体收益数字。',
            en: 'That is why public discussions of storage are better framed in terms of value stack and deployment scenarios rather than project-specific revenue figures.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '储能的价值通常来自多市场、多职责的叠加。', en: 'Storage value often comes from stacking multiple markets and operating roles.' },
      { zh: '公开表达应聚焦价值框架和适用场景，而不是项目收益参数。', en: 'Public communication should focus on value frameworks and deployment scenarios, not project-level revenue parameters.' },
      { zh: '单一价差逻辑无法完整解释储能在新型电力系统中的角色。', en: 'A single spread-arbitrage story cannot fully explain the role of storage in modern power systems.' },
    ],
    relatedFallbackSlugs: [
      'from-data-to-forecast-to-execution',
      'what-is-a-power-market',
      'china-vs-europe-power-markets',
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
  {
    slug: 'china-vs-europe-power-markets',
    category: { zh: '行业观察', en: 'Market Observation' },
    title: {
      zh: '中国与欧洲电力市场有哪些关键差异',
      en: 'What Are The Key Differences Between Chinese And European Power Markets',
    },
    summary: {
      zh: '从市场组织方式、价格形成和阅读方法三个角度，解释中国与欧洲电力市场为什么不能机械类比。',
      en: 'Explain why Chinese and European power markets should not be compared mechanically, focusing on market organization, price formation, and how to read them.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 6 分钟', en: '6 min read' },
    safeScopeLabel: { zh: '公开行业观察', en: 'Public Observation' },
    heroNote: {
      zh: '跨市场视角的价值，不在于把一个地区的机制模板直接复制到另一个地区，而在于理解各自制度为何形成、如何演进。',
      en: 'The value of a cross-market lens is not copying one region’s template into another, but understanding why each market design emerged and how it evolves.',
    },
    sections: [
      {
        heading: { zh: '共同点：都在解决同一类系统问题', en: 'Shared Ground: Both Solve Similar System Problems' },
        body: [
          {
            zh: '无论是中国还是欧洲，电力市场都要处理同样的核心问题：如何在可靠供电前提下完成价格发现、资源协调和灵活性激励。',
            en: 'Both Chinese and European power markets must solve the same core problems: price discovery, resource coordination, and flexibility incentives under reliability constraints.',
          },
          {
            zh: '因此，两边都会出现中长期安排、现货出清、辅助服务和跨区域协调这些共同主题。',
            en: 'That is why both regions feature recurring themes such as long-term contracting, spot clearing, ancillary services, and cross-regional coordination.',
          },
        ],
      },
      {
        heading: { zh: '差异点：制度成熟度、价格颗粒度与运行单元', en: 'Where They Differ: Maturity, Granularity, And Operating Units' },
        body: [
          {
            zh: '欧洲自由化市场的发展更早，跨国耦合、分区定价和连续交易等机制形成了较成熟的共同语言。中国市场则更强调全国统一框架下的省级和区域运行单元，不同省份所处阶段和机制差异仍然很大。',
            en: 'European liberalized markets developed earlier, so cross-border coupling, zonal pricing, and continuous trading form a more mature shared language. China, by contrast, operates through provincial and regional units inside a national reform framework, with large differences across provinces and market stages.',
          },
          {
            zh: '这意味着阅读中国市场时，不能把某一省份的运行方式误认为全国统一机制；阅读欧洲市场时，也不能忽略国家之间在约束、耦合和产品设计上的差异。',
            en: 'That means a single Chinese province should not be mistaken for a national template, and European markets should not be treated as if national differences in constraints, coupling, and product design do not matter.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '中国与欧洲市场在核心目标上相通，但在制度路径上差异显著。', en: 'Chinese and European markets share core objectives but differ sharply in institutional pathways.' },
      { zh: '跨市场比较应该比较机制逻辑，而不是机械复制术语。', en: 'Cross-market comparison should focus on mechanism logic rather than copying terminology mechanically.' },
      { zh: '公开内容更适合讲框架差异，不适合延伸成具体交易判断。', en: 'Public-facing content should explain structural differences, not drift into concrete trading judgments.' },
    ],
    relatedFallbackSlugs: [
      'what-is-a-power-market',
      'from-data-to-forecast-to-execution',
      'public-value-stack-of-storage',
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
  {
    slug: 'from-data-to-forecast-to-execution',
    category: { zh: '系统框架', en: 'System Framework' },
    title: {
      zh: '从数据到预测到执行：能源 AI 系统的高层框架',
      en: 'From Data To Forecast To Execution: A High-Level Energy AI System Framework',
    },
    summary: {
      zh: '用公开、非敏感的方式说明能源 AI 系统通常由哪些层次构成，以及为什么可审计与可解释性是长期关键。',
      en: 'Explain, in a public and non-sensitive way, the typical layers of an energy AI system and why auditability and explainability matter over time.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 6 分钟', en: '6 min read' },
    safeScopeLabel: { zh: '公开系统框架', en: 'Public System View' },
    heroNote: {
      zh: '能源 AI 系统的价值，不只是模型预测得更准，而是把数据、判断、执行和反馈连接成可持续演进的闭环。',
      en: 'The value of an energy AI system is not only in better forecasting, but in connecting data, decisions, execution, and feedback into an evolvable loop.',
    },
    sections: [
      {
        heading: { zh: '高层系统分层', en: 'The High-Level Stack' },
        body: [
          {
            zh: '一个能源 AI 系统通常可以从上到下分成数据层、预测层、决策层、执行层和监控反馈层。不同团队会有不同命名，但底层逻辑相似：先把信息组织好，再把不确定性转成可执行判断。',
            en: 'An energy AI system can usually be described as a stack of data, forecasting, decision, execution, and monitoring-feedback layers. Teams may name them differently, but the logic is similar: structure information first, then turn uncertainty into executable decisions.',
          },
          {
            zh: '在公开表达中，更重要的是说明这些层为什么需要协同，而不是暴露任何具体模型结构或参数。',
            en: 'For public communication, it matters more to explain why these layers must work together than to expose any concrete model structure or parameter choices.',
          },
        ],
      },
      {
        heading: { zh: '为什么可审计和可解释性重要', en: 'Why Auditability And Explainability Matter' },
        body: [
          {
            zh: '能源系统天然受规则、交付、结算和安全约束影响，因此一个系统不仅要能输出判断，还要让团队知道判断从何而来、可以怎样复核、何时需要人工干预。',
            en: 'Energy systems are shaped by rules, settlement, delivery, and safety constraints. A usable system must not only produce decisions, but also make it possible to understand where they came from, how to review them, and when human intervention is required.',
          },
          {
            zh: '这也是为什么能源 AI 不能只被理解成一个单点模型，而更像是一套围绕真实运行场景组织起来的工作框架。',
            en: 'That is also why energy AI should not be understood as a single model. It is better understood as an operating framework built around real-world workflows.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '能源 AI 系统通常由数据、预测、决策、执行和反馈几层组成。', en: 'Energy AI systems usually combine data, forecasting, decision, execution, and feedback layers.' },
      { zh: '公开表达应强调系统协同与审计能力，而不是模型细节。', en: 'Public communication should emphasize system coordination and auditability rather than model details.' },
      { zh: '可解释性是系统长期可用性的组成部分，不是附加装饰。', en: 'Explainability is part of long-term usability, not an optional layer of polish.' },
    ],
    relatedFallbackSlugs: [
      'public-value-stack-of-storage',
      'china-vs-europe-power-markets',
      'what-is-a-power-market',
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
];

export const siteContent = {
  identity: {
    name: {
      zh: '任能科技',
      en: 'EnergyQuant Technology',
    },
    shortName: {
      zh: '任能科技',
      en: 'EnergyQuant',
    },
    mark: 'EQ',
    footerSummary: {
      zh: '以 AI 原生智能驱动能源决策',
      en: 'Driving energy decisions with AI-native intelligence',
    },
    address: {
      zh: '中国 · 北京',
      en: 'Beijing, China',
    },
    email: 'info@enyquant.com',
    rights: {
      zh: '保留所有权利。',
      en: 'All rights reserved.',
    },
  },
  navigation: [
    { key: 'home', path: '/', label: { zh: '首页', en: 'Home' } },
    { key: 'projects', path: '/projects', label: { zh: '解决方案', en: 'Solutions' } },
    { key: 'news', path: '/news', label: { zh: '发展历程', en: 'Milestones' } },
    { key: 'knowledge', path: '/knowledge', label: { zh: '知识中心', en: 'Knowledge' } },
    { key: 'about', path: '/about', label: { zh: '关于我们', en: 'About' } },
    { key: 'contact', path: '/contact', label: { zh: '联系我们', en: 'Contact' } },
  ] as NavItem[],
  home: {
    hero: {
      tagline: {
        zh: '以 AI 原生智能驱动能源决策',
        en: 'Driving Energy Decisions with AI-Native Intelligence',
      },
      slogan: {
        zh: 'AI 原生。决策基础设施。能源智能。',
        en: 'AI-native. Decision infrastructure. Energy intelligence.',
      },
      subtitle: {
        zh: '任能科技是一家构建面向电力市场的通用 Agent 与 AI 决策基础设施的能源智能公司。',
        en: 'EnergyQuant is an energy intelligence company building general-purpose agents and AI decision infrastructure for power markets.',
      },
      chips: [
        { zh: 'Power Market Agents', en: 'Power Market Agents' },
        { zh: 'AI Decision Infrastructure', en: 'AI Decision Infrastructure' },
        { zh: 'Scenario Decision Systems', en: 'Scenario Decision Systems' },
      ],
      spotlight: {
        zh: '把规则、知识、模型、执行与反馈组织成可复用、可治理、可迭代的 Agent 决策底座。',
        en: 'Organizing rules, knowledge, models, execution, and feedback into a reusable, governable, and iterative agent decision foundation.',
      },
      ctaProjects: {
        zh: '查看项目',
        en: 'View Solutions',
      },
      ctaKnowledge: {
        zh: '进入知识库',
        en: 'Explore Knowledge Base',
      },
    },
    solutionsPreview: {
      title: {
        zh: '三大业务解决方案',
        en: 'Three Solution Directions',
      },
      subtitle: {
        zh: '从电力交易智能决策切入，向储能资产优化与虚拟电厂/灵活性资源运营扩展。',
        en: 'Starting from intelligent power-trading decisions, then expanding into storage optimization and VPP/flexibility operations.',
      },
    },
    cta: {
      title: {
        zh: '查看我们的解决方案',
        en: 'Explore Our Solution Directions',
      },
      subtitle: {
        zh: '浏览围绕能源市场场景构建的解决方案方向与合作入口。',
        en: 'Review solution directions and collaboration entry points for energy-market scenarios.',
      },
      button: {
        zh: '浏览解决方案',
        en: 'Browse Solutions',
      },
      secondaryButton: {
        zh: '联系任能科技',
        en: 'Contact EnergyQuant',
      },
    },
  },
  projects: {
    title: {
      zh: '解决方案',
      en: 'Solutions',
    },
    subtitle: {
      zh: '围绕电力交易 Agent、储能资产 Agent 与虚拟电厂/灵活性资源 Agent，提供面向真实业务场景的解决方案入口。',
      en: 'Present solution directions across power-trading agents, storage-asset agents, and VPP/flexibility-resource agents.',
    },
    tagline: {
      zh: 'SOLUTION DIRECTIONS',
      en: 'SOLUTION DIRECTIONS',
    },
    labels: {
      audience: { zh: '适用对象', en: 'Audience' },
      scenarios: { zh: '典型场景', en: 'Scenarios' },
      outputs: { zh: '输出内容', en: 'Outputs' },
      value: { zh: '核心价值', en: 'Core Value' },
    },
    solutions: solutionTracks,
    cta: {
      title: {
        zh: '需要进一步沟通适用场景？',
        en: 'Need a closer discussion on fit-for-purpose scenarios?',
      },
      subtitle: {
        zh: '如果你想进一步了解任能科技的合作方式、交付路径与适用场景，可以通过联系页面与我们沟通。',
        en: 'If you want to discuss collaboration formats, delivery paths, or fit-for-purpose scenarios in more detail, please reach out through the contact page.',
      },
      button: {
        zh: '联系任能科技',
        en: 'Contact EnergyQuant',
      },
    },
  },
  about: {
    title: {
      zh: '关于任能科技',
      en: 'About EnergyQuant',
    },
    subtitle: {
      zh: '构建面向高复杂度、高波动、高规则密度和高实时性能源场景的 AI 决策基础设施。',
      en: 'Building AI decision infrastructure for energy scenarios with high complexity, volatility, rule density, and real-time constraints.',
    },
    company: {
      title: {
        zh: '任能科技是谁',
        en: 'Who We Are',
      },
      content: {
        zh: '任能科技面向电力市场、储能资产和灵活性资源场景，提供 AI 驱动的预测、优化、策略评估与系统化交付能力。',
        en: 'EnergyQuant provides AI-driven forecasting, optimization, strategy evaluation, and systems delivery for power markets, storage assets, and flexibility-resource scenarios.',
      },
      history: {
        zh: '团队结合欧洲电力市场实践经验与中国能源市场改革需求，帮助合作方把复杂市场问题转化为可验证、可部署的技术方案。',
        en: 'The team combines European power-market operating experience with China market reform needs, helping partners turn complex market problems into verifiable and deployable technical solutions.',
      },
      coreBusiness: [
        { zh: '电力交易 Agent 与算法服务', en: 'Power-trading agents and algorithm services' },
        { zh: '储能资产 Agent 与优化服务', en: 'Storage-asset agents and optimization services' },
        { zh: '虚拟电厂/灵活性资源 Agent', en: 'VPP and flexibility-resource agents' },
        { zh: 'API 接入与 Agent 工作流', en: 'API integration and agent workflow delivery' },
      ],
      highlights: [
        {
          label: { zh: '公司使命', en: 'Mission' },
          value: {
            zh: '推动能源决策从经验驱动走向数据、模型与 Agent 协同驱动',
            en: 'Move energy decisions from experience-driven to data, model, and agent-collaboration driven',
          },
        },
        {
          label: { zh: '能力路径', en: 'Capability Path' },
          value: {
            zh: '规则、知识、模型、执行与反馈的闭环底座',
            en: 'A closed-loop foundation across rules, knowledge, models, execution, and feedback',
          },
        },
        {
          label: { zh: '服务方式', en: 'Delivery Mode' },
          value: {
            zh: '定制化方案、联合验证、模块化交付与系统接入',
            en: 'Custom solutions, joint validation, modular delivery, and system integration',
          },
        },
        {
          label: { zh: '合作原则', en: 'Collaboration' },
          value: {
            zh: '联合验证，形成可交付结果',
            en: 'Joint validation toward deliverable outcomes',
          },
        },
      ] as AboutHighlight[],
    },
    mission: {
      title: {
        zh: '我们交付什么',
        en: 'What We Deliver',
      },
      cards: [
        {
          key: 'mission',
          title: { zh: '决策系统', en: 'Decision Systems' },
          body: {
            zh: '把规则理解、数据处理、预测判断、策略生成与执行反馈连接成可运行的能源决策系统。',
            en: 'Connect rule understanding, data processing, forecasting, strategy generation, and execution feedback into operating energy decision systems.',
          },
        },
        {
          key: 'vision',
          title: { zh: '场景能力', en: 'Scenario Capability' },
          body: {
            zh: '围绕电力交易、储能资产优化与虚拟电厂/灵活性资源运营，提供可落地的模型、策略与系统支持。',
            en: 'Provide deployable model, strategy, and system support across power trading, storage-asset optimization, and VPP/flexibility operations.',
          },
        },
        {
          key: 'values',
          title: { zh: '产品形态', en: 'Product Form' },
          body: {
            zh: '将成熟能力封装为预测、规则解释、策略评估、储能优化和 Agent 工作流模块，嵌入客户业务流程。',
            en: 'Package validated capabilities into forecasting, rule explanation, strategy evaluation, storage optimization, and agent workflow modules embedded in customer operations.',
          },
          bullets: [
            { zh: '预测与策略评估模块', en: 'Forecasting and strategy evaluation modules' },
            { zh: '储能与灵活性资源优化模块', en: 'Storage and flexibility optimization modules' },
            { zh: 'API 接入与 Agent 工作流', en: 'API integration and agent workflow delivery' },
          ],
        },
      ] as AboutNarrativeCard[],
    },
    serviceTargets: {
      title: {
        zh: '服务对象',
        en: 'Who We Serve',
      },
      summary: {
        zh: '围绕能源市场中的关键参与者，提供从数据接入、模型部署、策略开发到系统上线的一体化能力支持。',
        en: 'Support key participants in energy markets from data access, model deployment, and strategy development to system launch.',
      },
      items: [
        { zh: '储能企业', en: 'Energy storage companies' },
        { zh: '电厂与发电集团', en: 'Power plants and generation groups' },
        { zh: '售电公司', en: 'Electricity retailers' },
        { zh: '产业园区与工商业场景', en: 'Industrial parks and C&I scenarios' },
        { zh: '能源集团与项目开发方', en: 'Energy groups and project developers' },
      ],
    } as AboutListSection,
    marketFocus: {
      title: {
        zh: '关注市场',
        en: 'Markets We Follow',
      },
      summary: {
        zh: '围绕欧洲验证经验与亚洲市场落地机会，持续观察电力市场结构演进与应用边界。',
        en: 'Track both European validation experience and Asian implementation opportunities across changing power-market structures.',
      },
      items: [
        { zh: '中国电力市场', en: 'China power markets' },
        { zh: '日本电力市场', en: 'Japan power markets' },
        { zh: '欧洲自由化电力市场经验', en: 'European liberalized power-market experience' },
        { zh: '储能、虚拟电厂与灵活性场景', en: 'Storage, VPP, and flexibility scenarios' },
      ],
    } as AboutListSection,
    workStyle: {
      title: {
        zh: '交付路径',
        en: 'Delivery Path',
      },
      summary: {
        zh: '从真实业务问题出发，完成诊断、建模、试点验证与系统化上线。',
        en: 'Start from real business problems, then move through diagnosis, modeling, pilot validation, and system launch.',
      },
      items: [
        { zh: '场景诊断：明确市场规则、数据条件与收益目标', en: 'Scenario diagnosis: clarify market rules, data conditions, and value objectives' },
        { zh: '模型与策略：构建预测、优化与风险评估能力', en: 'Models and strategy: build forecasting, optimization, and risk-evaluation capability' },
        { zh: '联合验证：在真实业务场景中验证效果与边界', en: 'Joint validation: verify results and boundaries in real operating scenarios' },
        { zh: '系统上线：通过 API、模块或 Agent 工作流进入客户流程', en: 'System launch: enter customer workflows through APIs, modules, or agent workflows' },
      ],
    } as AboutListSection,
  },
  news: {
    heading: {
      zh: '发展历程',
      en: 'Milestones',
    },
    summary: {
      zh: '这里展示任能科技在技术验证、机构建设与中国市场布局方面的重要公开节点。',
      en: 'This page outlines the public milestones behind technical validation, institutional build-out, and China market launch.',
    },
    items: milestoneItems,
  },
  knowledge: {
    heading: {
      zh: '知识中心',
      en: 'Knowledge Hub',
    },
    summary: {
      zh: '从电力市场基础、交易机制、储能收益和系统方法出发，理解能源智能决策的关键问题。',
      en: 'Understand key questions in energy intelligence through power-market basics, trading mechanisms, storage value, and system methods.',
    },
    tagline: {
      zh: 'KNOWLEDGE ENTRY',
      en: 'KNOWLEDGE ENTRY',
    },
    safetyNote: {
      zh: '围绕公开可讨论的问题建立共同语言。',
      en: 'Build a shared language around publicly discussable questions.',
    },
    tracks: knowledgeTracks,
    articles: knowledgeArticles,
    contactNote: {
      zh: '如果你正在评估电力交易、储能或灵活性资源场景，可以从这些主题开始沟通。',
      en: 'If you are evaluating power trading, storage, or flexibility-resource scenarios, these topics can start the conversation.',
    },
    labels: {
      featuredTitle: { zh: '首批公开文章', en: 'Featured Public Articles' },
      featuredSubtitle: {
        zh: '以下文章基于公开知识整理与改写，只保留基础机制、行业观察和高层框架。',
        en: 'The articles below are curated and rewritten from public-safe knowledge, preserving only fundamentals, market observation, and high-level frameworks.',
      },
      trackTitle: { zh: '知识覆盖范围', en: 'Knowledge Coverage' },
      trackSubtitle: {
        zh: '这些主题说明我们会持续公开讨论的知识范围，但不展开敏感实现与执行细节。',
        en: 'These tracks define the themes we discuss publicly without exposing sensitive implementation or execution details.',
      },
      articleCategory: { zh: '分类', en: 'Category' },
      articleReadTime: { zh: '阅读时长', en: 'Read Time' },
      articlePublishedAt: { zh: '发布日期', en: 'Published' },
      articleAction: { zh: '阅读全文', en: 'Read Article' },
      keyTakeaways: { zh: '关键要点', en: 'Key Takeaways' },
      boundaryTitle: { zh: '公开边界说明', en: 'Public Boundary Note' },
      continueReading: { zh: '继续阅读', en: 'Continue Reading' },
      relatedArticles: { zh: '相关推荐', en: 'Related Articles' },
      previousArticle: { zh: '上一篇', en: 'Previous Article' },
      nextArticle: { zh: '下一篇', en: 'Next Article' },
      backToKnowledge: { zh: '返回知识中心', en: 'Back To Knowledge Hub' },
    },
  },
  contact: {
    heading: {
      zh: '联系任能科技',
      en: 'Contact EnergyQuant',
    },
    summary: {
      zh: '如果你希望了解公司情况、讨论合作场景或交流公开知识内容，欢迎通过以下方式联系我们。',
      en: 'If you want to learn more about the company, discuss collaboration scenarios, or talk through public knowledge topics, please reach out through the channels below.',
    },
    channelsTitle: {
      zh: '联系方式',
      en: 'Contact Channels',
    },
    inquiryTitle: {
      zh: '可以交流的话题',
      en: 'Topics We Can Discuss',
    },
    noteTitle: {
      zh: '沟通说明',
      en: 'Communication Notes',
    },
    noteBody: {
      zh: '来信时可以简单说明你的背景、关注的问题和合作场景，我们会尽快评估并回复。',
      en: 'When you write to us, a short note about your background, topics of interest, and collaboration context will help us evaluate and respond efficiently.',
    },
    channels: [
      {
        label: { zh: '邮箱', en: 'Email' },
        value: 'info@enyquant.com',
        href: 'mailto:info@enyquant.com',
        note: {
          zh: '适用于公司介绍、合作沟通、研究与咨询交流。',
          en: 'Use this for company introductions, collaboration, research, and advisory discussions.',
        },
      },
      {
        label: { zh: '所在地', en: 'Location' },
        value: 'Beijing, China',
        note: {
          zh: '团队当前在北京办公。',
          en: 'The team is currently based in Beijing.',
        },
      },
    ] as ContactChannel[],
    inquiryTypes: [
      { zh: '商务合作与场景交流', en: 'Business collaboration and scenario discussions' },
      { zh: '研究与咨询沟通', en: 'Research and advisory discussions' },
      { zh: '行业交流与内容合作', en: 'Industry exchange and content collaboration' },
      { zh: '人才加入', en: 'Talent and career conversations' },
    ],
  },
  seo: {
    default: {
      title: {
        zh: '任能科技 | 能源 AI 决策基础设施',
        en: 'EnergyQuant | AI decision infrastructure for energy markets',
      },
      description: {
        zh: '任能科技介绍面向电力市场、储能资产与灵活性资源场景的 AI 决策基础设施能力。',
        en: 'EnergyQuant introduces AI decision-infrastructure capabilities for power markets, storage assets, and flexibility-resource scenarios.',
      },
      keywords: {
        zh: '任能科技, EnergyQuant, 能源 AI, AI 决策基础设施, 储能优化, 虚拟电厂, 电力交易 Agent',
        en: 'EnergyQuant, energy AI, AI decision infrastructure, storage optimization, virtual power plants, power trading agents',
      },
    },
    home: {
      title: {
        zh: '任能科技 | 以 AI 原生智能驱动能源决策',
        en: 'EnergyQuant | Driving energy decisions with AI-native intelligence',
      },
      description: {
        zh: '任能科技构建面向电力市场的通用 Agent 与 AI 决策基础设施，服务复杂能源场景中的分析、决策、执行与优化。',
        en: 'EnergyQuant builds general-purpose agents and AI decision infrastructure for power markets, supporting analysis, decisions, execution, and optimization in complex energy scenarios.',
      },
      keywords: {
        zh: '任能科技, 能源 AI, 电力市场 Agent, AI 决策基础设施, 储能优化, 虚拟电厂',
        en: 'EnergyQuant, energy AI, power market agents, AI decision infrastructure, storage optimization, virtual power plants',
      },
    },
    projects: {
      title: {
        zh: '任能科技 | 解决方案',
        en: 'EnergyQuant | Solutions',
      },
      description: {
        zh: '浏览任能科技围绕电力交易 Agent、储能资产 Agent 与虚拟电厂/灵活性资源 Agent 构建的公开解决方案方向。',
        en: 'Browse solution directions across power-trading agents, storage-asset agents, and VPP/flexibility-resource agents.',
      },
      keywords: {
        zh: '任能科技, 解决方案, 电力交易 Agent, 虚拟电厂, 储能优化, AI 决策基础设施',
        en: 'EnergyQuant, solutions, power-trading agents, virtual power plant, storage optimization, AI decision infrastructure',
      },
    },
    news: {
      title: {
        zh: '任能科技 | 发展历程',
        en: 'EnergyQuant | Milestones',
      },
      description: {
        zh: '查看任能科技在技术验证、机构建设与中国市场布局方面的重要公开节点。',
        en: 'Review public milestones across technical validation, institutional build-out, and China market launch.',
      },
      keywords: {
        zh: '任能科技, 发展历程, 公开里程碑, 能源 AI',
        en: 'EnergyQuant, milestones, public timeline, energy AI',
      },
    },
    knowledge: {
      title: {
        zh: '任能科技 | 知识中心',
        en: 'EnergyQuant | Knowledge Hub',
      },
      description: {
        zh: '知识中心围绕电力市场、储能收益与能源 AI 落地问题，提供公开可讨论的基础内容。',
        en: 'The knowledge hub provides publicly discussable foundations around power markets, storage value, and energy AI deployment.',
      },
      keywords: {
        zh: '任能科技, 知识中心, 电力市场基础, 行业观察, 方法框架',
        en: 'EnergyQuant, knowledge hub, power market fundamentals, industry observation, system frameworks',
      },
    },
    about: {
      title: {
        zh: '任能科技 | 关于我们',
        en: 'EnergyQuant | About Us',
      },
      description: {
        zh: '了解任能科技的公司使命、服务对象、关注市场与 AI 决策基础设施工作方式。',
        en: 'Learn about EnergyQuant mission, audiences, markets of focus, and AI decision-infrastructure working style.',
      },
      keywords: {
        zh: '任能科技, 关于我们, 公司使命, 服务对象, 能源市场',
        en: 'EnergyQuant, about us, mission, audiences, energy markets',
      },
    },
    contact: {
      title: {
        zh: '任能科技 | 联系我们',
        en: 'EnergyQuant | Contact',
      },
      description: {
        zh: '通过联系页面与任能科技交流公司情况、合作场景、研究与咨询话题。',
        en: 'Use the contact page to discuss company information, collaboration scenarios, and research or advisory topics with EnergyQuant.',
      },
      keywords: {
        zh: '任能科技, 联系方式, 商务合作, 研究咨询',
        en: 'EnergyQuant, contact, business collaboration, research and advisory',
      },
    },
  } as Record<string, SeoEntry>,
} as const;
