import { AppStore } from "./store/appStore"
import { observer } from "mobx-react-lite"

import { AppFooter } from "./cmps/app-layout/AppFooter"
import { AppHeader } from "./cmps/app-layout/AppHeader"

const appStore = new AppStore()

export const _App = () => {
  return (
    <div className={"app-layout " + (appStore.isDarkMode ? 'dark' : 'bright')}>
      <AppHeader appStore={appStore} />
      <section className="page-content">

      </section>
      <AppFooter />
    </div>
  )
}

export const App = observer(_App)