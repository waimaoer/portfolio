/**
 * 项目数据 —— 项目展示区的内容来源
 * 新增项目时往数组里追加一条即可，无需改动组件
 */
export interface Project {
  /** 项目名称 */
  title: string
  /** 项目简短描述 */
  description: string
  /** 技术栈标签 */
  techStack: string[]
  /** 项目链接（代码仓库或在线地址，无则留空字符串） */
  link: string
  /** 项目截图：有真实图片传 url，否则留空由组件渲染渐变占位图 */
  screenshot?: string
}

export const projects: Project[] = [
  {
    title: '数据可视化平台',
    description:
      '面向业务的实时数据大屏，支持多维度指标分析与自定义图表配置。',
    techStack: ['React', 'TypeScript', 'ECharts', 'Node.js'],
    link: 'https://github.com/username/project-one',
  },
  {
    title: '个人博客系统',
    description:
      '支持 Markdown 写作、暗色主题与全文检索的静态博客，自动部署上线。',
    techStack: ['Vite', 'React', 'Tailwind CSS'],
    link: 'https://github.com/username/project-two',
  },
  {
    title: '湖仓一体数据管道',
    description:
      '基于 Flink + Paimon 的实时入湖方案，覆盖采集、清洗、建模全流程。',
    techStack: ['Flink', 'Paimon', 'MinIO', 'Trino'],
    link: '',
  },
  {
    title: '团队周报汇总工具',
    description:
      '自动收集多团队周报并生成汇总页面，替代人工复制粘贴的重复劳动。',
    techStack: ['Python', 'openpyxl', 'HTML'],
    link: '',
  },
]
