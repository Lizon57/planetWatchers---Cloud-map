export const ThemeToggler = ({ appStore }) => {
    const onToggle = () => {
        appStore.toggleIsDarkMode()
    }

    return (
        <div className={"toggler-container " + (appStore.isDarkMode ? 'dark' : 'bright')}>
            <input type="checkbox" className="toggler" defaultChecked={!appStore.isDarkMode} onClick={onToggle} />

            <i className="icn-moon" />
            <i className="icn-sun" />
        </div>
    )
}