import { projects, type Project } from '../data/projects'

/**
 * 单个项目卡片：截图 + 标题 + 描述 + 技术栈标签 + 链接
 * 有真实截图时渲染图片（懒加载），否则渲染渐变占位图
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-colors duration-300 hover:border-zinc-600">
      {/* 截图区域 */}
      <div className="relative aspect-video overflow-hidden">
        {project.screenshot ? (
          // loading="lazy" 满足 AGENT.md 的图片懒加载要求
          <img
            src={project.screenshot}
            alt={`${project.title} 截图`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          // 占位图：渐变背景 + 项目名首字，后续替换截图时填 projects.ts 的 screenshot 字段即可
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-600/40 via-purple-600/40 to-pink-600/40">
            <span className="text-4xl font-bold text-zinc-200/70">
              {project.title.slice(0, 1)}
            </span>
          </div>
        )}
      </div>

      {/* 文字信息区域 */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* 项目链接：没有链接时不渲染，保证所有链接可点击 */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            查看项目
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12.232 4.232a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 9H6a1 1 0 1 1 0-2h7.586l-1.354-1.354a1 1 0 0 1 0-1.414Z" />
              <path d="M3 8a1 1 0 0 1 1-1v7h9v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8Z" />
            </svg>
          </a>
        )}
      </div>
    </li>
  )
}

/**
 * Projects 组件 —— 项目展示区
 * 网格布局：移动端 1 列，md 2 列，lg 3 列
 */
function Projects() {
  return (
    // py-* 控制区块留白，max-w-* 限制内容宽度，保证大屏可读性
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        项目展示
      </h2>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
