import { AppFooter } from "./cmps/app-layout/AppFooter"
import { AppHeader } from "./cmps/app-layout/AppHeader"

export const App = () => {
  return (
    <div className="app-layout">
      <AppHeader />
      <section className="page-content">

      </section>
      <AppFooter />
    </div>
  )
}