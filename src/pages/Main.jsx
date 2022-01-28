import { useEffect, useState } from "react"

import axios from "axios"
import { useDebouncedCallback } from "use-debounce"

import { sentinelHubService } from "../services/sentinel-hub-service"
import { dateService } from "../services/date-service"

// import dummyImg from "../assets/imgs/sample.png"


export const Main = ({ appStore }) => {
    const [maxCC, setMaxCC] = useState(30)
    const [imgsSrc, setImgsSrc] = useState({ first: null, second: null })
    const [imgsDates, setImgsDates] = useState({ first: dateService.getRandomDates(), second: dateService.getRandomDates() })

    const shAxios = axios.create({
        baseURL: 'https://services.sentinel-hub.com',
        responseType: 'blob'
    })

    useEffect(() => {
        const getImgsData = async () => {
            const first = await getImg(imgsDates.first)
            const second = await getImg(imgsDates.second)
            setImgsSrc({ first, second })
        }
        getImgsData()
    }, [maxCC, imgsDates])

    const getImg = async (dates) => {
        const authorization = await sentinelHubService.getToken()
        Object.assign(shAxios.defaults, { headers: { authorization } })


        const img = await shAxios.post('/api/v1/process', sentinelHubService.getDefReqBody(maxCC, dates))
        return URL.createObjectURL(img.data)
    }


    const debouncedReplace = useDebouncedCallback(() => {
        setImgsDates({ first: dateService.getRandomDates(), second: dateService.getRandomDates() })
    }, 500)

    const debouncedSetMaxCC = useDebouncedCallback(newMaxCC => {
        if (newMaxCC > 100 || newMaxCC < 0) return
        setMaxCC(newMaxCC)
    }, 500)

    const _getDatesTitle = (dates) => {
        const fromDate = new Date(dates[0])
        const toDate = new Date(dates[1])

        return (
            <div className="img-title">
                <div>
                    <span className="title">From:</span>
                    <span className="date">{fromDate.toLocaleDateString()}</span>
                </div>

                <div>
                    <span className="title">To:</span>
                    <span className="date">{toDate.toLocaleDateString()}</span>
                </div>
            </div>
        )
    }


    return (
        <main className="app-main-container flex column align-center">
            <h2 className="main-title">Israel cloud map</h2>
            <div className="maxCC-indicator">Max cloud covarage: {maxCC}%</div>

            <section className="imgs-display-container flex column">
                <div className="imgs-container flex justify-center">
                    <div className="img-with-title">
                        {_getDatesTitle(imgsDates.first)}
                        <img src={imgsSrc.first} alt={`Israel with ${maxCC}% cloud coverage`} />
                        {/* <img src={dummyImg} /> */}
                    </div>
                    <div className="img-with-title">
                        {_getDatesTitle(imgsDates.second)}
                        <img src={imgsSrc.second} alt={`Israel with ${maxCC}% cloud coverage`} />
                        {/* <img src={dummyImg} /> */}
                    </div>
                </div>

                <div className={"opts-btns flex " + (appStore.isDarkMode ? 'dark' : 'bright')}>
                    <span onClick={debouncedReplace}>Replace</span>
                    <span onClick={() => debouncedSetMaxCC(maxCC - 10)}>Brighten</span>
                    <span onClick={() => debouncedSetMaxCC(maxCC + 10)}>Clouder</span>
                </div>
            </section>
        </main >
    )
}