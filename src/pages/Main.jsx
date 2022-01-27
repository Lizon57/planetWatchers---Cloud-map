import axios from "axios"

import { useEffect, useRef, useState } from "react"

// import { sentinelHubService } from "../services/sentinel-hub-service"

import dummyImg from "../assets/imgs/sample.png"


export const Main = ({ appStore }) => {
    const [maxCC, setMaxCC] = useState(30)

    // const elImg1 = useRef(null)

    // const shAxios = axios.create({
    //     baseURL: 'https://services.sentinel-hub.com',
    //     responseType: 'blob'
    // })

    // useEffect(async () => {
    //     const authorization = await sentinelHubService.getToken()
    //     Object.assign(shAxios.defaults, { headers: { authorization } })

    //     const img = await shAxios.post('/api/v1/process', sentinelHubService.getDefReqBody())
    //     const url = URL.createObjectURL(img.data)
    //     elImg1.current.src = url
    // }, [])

    const onSetMaxCC = (newMaxCC) => {
        if (newMaxCC > 100 || newMaxCC < 0) return
        setMaxCC(newMaxCC)
    }



    return (
        <main className="app-main-container flex column align-center">
            <h2 className="main-title">Israel cloud Map</h2>
            <div className="maxCC-indicator">Currently max cloud covarage: {maxCC}%</div>

            <section className="imgs-display-container flex column">
                <div className="imgs-container flex justify-center">
                    <img src={dummyImg} />
                    <img src={dummyImg} />
                </div>

                <div className={"opts-btns flex " + (appStore.isDarkMode ? 'dark' : 'bright')}>
                    {/* <span onClick={ }>Replace</span> */}
                    <span onClick={() => onSetMaxCC(maxCC - 10)}>Brighten</span>
                    <span onClick={() => onSetMaxCC(maxCC + 10)}>Clouder</span>
                </div>
            </section>
        </main >
    )
}