import { AppStore } from "./store/appStore"
import { observer } from "mobx-react-lite"

import { AppHeader } from "./cmps/app-layout/AppHeader"
import { AppFooter } from "./cmps/app-layout/AppFooter"

import { Main } from "./pages/Main"

const appStore = new AppStore()

export const _App = () => {
  return (
    <div className={"app-layout " + (appStore.isDarkMode ? 'dark' : 'bright')}>
      <AppHeader appStore={appStore} />
      <section className="page-content">
        <Main appStore={appStore} />
      </section>
      <AppFooter />
    </div>
  )
}

export const App = observer(_App)