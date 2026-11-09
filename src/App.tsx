import Hero from './components/Hero'
import Projects from './components/Projects'

/**
 * 应用根组件
 * 目前渲染首页 Hero 区块与项目展示区，后续按 tech_design.md 依次补充
 * Header / About / Contact / Footer 组件
 */
function App() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}

export default App
