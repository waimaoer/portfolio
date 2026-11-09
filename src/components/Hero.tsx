/**
 * Hero 组件 —— 首页主视觉区
 * 包含：头像、大标题、简介
 * 设计要求（AGENT.md）：深色主题（#0a0a0a 背景）、渐变色强调、移动端适配
 */
function Hero() {
  return (
    // min-h-screen 让首屏占满视口；flex 居中布局；px-* 保证移动端左右留白
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* 头像：渐变外圈 + 内部占位头像（后续可替换为真实照片） */}
      <div className="mb-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-zinc-900 md:h-40 md:w-40">
          {/* 占位人像图标：替换头像时，把这个 svg 换成 <img src="..." /> 即可 */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-16 w-16 text-zinc-500 md:h-20 md:w-20"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-8.25 10.5a8.25 8.25 0 1 1 16.5 0"
            />
          </svg>
        </div>
      </div>

      {/* 大标题：渐变色文字（bg-clip-text + text-transparent） */}
      <h1 className="mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
        你好，我是张三
      </h1>

      {/* 简介：次级文字色，限制最大宽度保证长段落可读性 */}
      <p className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
        一名热爱构建的开发者，专注于 Web
        前端与数据可视化，用简洁优雅的方式解决实际问题。
      </p>
    </section>
  )
}

export default Hero
