import { utilService } from "./util-service"

function getRandomDates() {
    let currYear = new Date
    currYear = currYear.getFullYear()

    const firstDate = new Date(utilService.getRandomInt(2017, currYear - 1), utilService.getRandomInt(0, 5), 1)
    const secondDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 6, 1)

    return [firstDate.toISOString(), secondDate.toISOString()]
}


export const dateService = {
    getRandomDates
}