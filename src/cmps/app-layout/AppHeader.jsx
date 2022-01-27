import brightLogo from "../../assets/imgs/logo-bright.png"
import darkLogo from "../../assets/imgs/logo-dark.png"

import { ThemeToggler } from "./ThemeToggler"

export const AppHeader = ({ appStore }) => {
    return (
        <header className="app-header">
            <div className="header-content-container flex align-center space-between">
                <img src={appStore.isDarkMode ? brightLogo : darkLogo} className="logo" alt="Planet Watchers" />

                <ThemeToggler appStore={appStore} />
            </div>
        </header>
    )
}