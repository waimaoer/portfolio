# 个人作品集网站

基于 React + TypeScript + Vite + Tailwind CSS 构建的个人作品集网站，深色主题 + 渐变色设计。

## 功能

- **首页 Hero**：大标题、简介、头像
- **项目展示**：项目卡片（截图、标题、描述、技术栈标签、项目链接）
- 进行中：关于我、联系方式、滚动动画（Framer Motion）

## 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS v4（`@tailwindcss/vite` 插件方式）

## 开发

```bash
npm install
npm run dev      # 开发服务器 http://localhost:5173
npm run build    # 生产构建（tsc -b && vite build）
npm run preview  # 预览构建产物
```

## 项目结构

```
src/
  components/    # 可复用组件（Hero、Projects 等）
  data/          # 项目数据（projects.ts）
  App.tsx        # 根组件
  main.tsx       # 入口
  index.css      # Tailwind 入口 + 深色主题全局样式
```
