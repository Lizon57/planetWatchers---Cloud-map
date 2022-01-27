import { action, makeObservable, observable } from "mobx"

export class AppStore {
    isDarkMode = true

    constructor() {
        makeObservable(this, {
            isDarkMode: observable,
            toggleIsDarkMode: action,
        })
    }

    toggleIsDarkMode() {
        this.isDarkMode = !this.isDarkMode
    }
}