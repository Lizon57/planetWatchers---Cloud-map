// import brightLogo from "../../assets/imgs/logo-bright.png"
import darkLogo from "../../assets/imgs/logo-dark.png"

export const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="header-content-container flex align-center space-between">
                <img src={darkLogo} className="logo" alt="Planet Watchers" />
            </div>
        </header>
    )
}