import axios from "axios"
import QueryString from "qs"
import { dateService } from "./date-service"

const _clientId = 'f4ab1100-68d7-437e-8c3c-e87022ce7db5'
const _clientSecret = ',Bm4|87PYb_?N-}ZzZjGk1/j?D>qF3e:Y-LzIhF4'

async function getToken() {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }

    const reqBody = QueryString.stringify({
        client_id: _clientId,
        client_secret: _clientSecret,
        grant_type: 'client_credentials'
    })

    try {
        const token = await axios.post('https://services.sentinel-hub.com/oauth/token', reqBody, config)
        return `Bearer ${token.data.access_token}`
    }
    catch (_err) {
        console.log(_err)
        throw 'Cannot get token'
    }
}

function getReqBody(maxCC = 30, dates = dateService.getRandomDates()) {
    return {
        "input": {
            "bounds": {
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    34.052648,
                                    31.46264
                                ],
                                [
                                    34.066938,
                                    31.442724
                                ],
                                [
                                    34.231822,
                                    31.302022
                                ],
                                [
                                    34.501131,
                                    30.656816
                                ],
                                [
                                    34.528612,
                                    30.533877
                                ],
                                [
                                    34.567085,
                                    30.491284
                                ],
                                [
                                    34.550596,
                                    30.420256
                                ],
                                [
                                    34.622046,
                                    30.358656
                                ],
                                [
                                    34.852883,
                                    29.759609
                                ],
                                [
                                    34.874867,
                                    29.559123
                                ],
                                [
                                    34.918836,
                                    29.439598
                                ],
                                [
                                    34.98479,
                                    29.549567
                                ],
                                [
                                    35.023262,
                                    29.64032
                                ],
                                [
                                    35.006774,
                                    29.707139
                                ],
                                [
                                    35.089216,
                                    29.883518
                                ],
                                [
                                    35.138681,
                                    30.045322
                                ],
                                [
                                    35.160665,
                                    30.268556
                                ],
                                [
                                    35.215626,
                                    30.339695
                                ],
                                [
                                    35.18265,
                                    30.424993
                                ],
                                [
                                    35.21013,
                                    30.538608
                                ],
                                [
                                    35.30906,
                                    30.779598
                                ],
                                [
                                    35.358525,
                                    30.902225
                                ],
                                [
                                    35.462952,
                                    31.099982
                                ],
                                [
                                    35.40799,
                                    31.240985
                                ],
                                [
                                    35.451959,
                                    31.395847
                                ],
                                [
                                    35.490432,
                                    31.512996
                                ],
                                [
                                    35.508881,
                                    31.670915
                                ],
                                [
                                    35.558346,
                                    31.759699
                                ],
                                [
                                    35.530865,
                                    31.893883
                                ],
                                [
                                    35.544606,
                                    31.964979
                                ],
                                [
                                    35.519873,
                                    32.038348
                                ],
                                [
                                    35.567964,
                                    32.211639
                                ],
                                [
                                    35.559456,
                                    32.403154
                                ],
                                [
                                    35.559456,
                                    32.514394
                                ],
                                [
                                    35.575944,
                                    32.593106
                                ],
                                [
                                    35.564952,
                                    32.634749
                                ],
                                [
                                    35.625409,
                                    32.676373
                                ],
                                [
                                    35.683118,
                                    32.68562
                                ],
                                [
                                    35.688614,
                                    32.706422
                                ],
                                [
                                    35.749072,
                                    32.738772
                                ],
                                [
                                    35.839758,
                                    32.826519
                                ],
                                [
                                    35.85075,
                                    32.872667
                                ],
                                [
                                    35.886475,
                                    32.937234
                                ],
                                [
                                    35.85075,
                                    33.103046
                                ],
                                [
                                    35.831513,
                                    33.126051
                                ],
                                [
                                    35.839758,
                                    33.153649
                                ],
                                [
                                    35.837009,
                                    33.197328
                                ],
                                [
                                    35.815025,
                                    33.229498
                                ],
                                [
                                    35.787544,
                                    33.26625
                                ],
                                [
                                    35.809529,
                                    33.314463
                                ],
                                [
                                    35.7793,
                                    33.337412
                                ],
                                [
                                    35.732583,
                                    33.325939
                                ],
                                [
                                    35.674874,
                                    33.280028
                                ],
                                [
                                    35.628157,
                                    33.275435
                                ],
                                [
                                    35.625409,
                                    33.238688
                                ],
                                [
                                    35.586936,
                                    33.263953
                                ],
                                [
                                    35.5677,
                                    33.275435
                                ],
                                [
                                    35.540219,
                                    33.229498
                                ],
                                [
                                    35.540219,
                                    33.128351
                                ],
                                [
                                    35.512597,
                                    33.096144
                                ],
                                [
                                    35.45214,
                                    33.08924
                                ],
                                [
                                    35.430155,
                                    33.068528
                                ],
                                [
                                    35.361454,
                                    33.061622
                                ],
                                [
                                    35.320233,
                                    33.086939
                                ],
                                [
                                    35.232295,
                                    33.093843
                                ],
                                [
                                    35.094892,
                                    33.096144
                                ],
                                [
                                    34.891536,
                                    33.160547
                                ],
                                [
                                    34.866803,
                                    33.132951
                                ],
                                [
                                    34.844819,
                                    33.001753
                                ],
                                [
                                    34.762377,
                                    32.953368
                                ],
                                [
                                    34.71566,
                                    32.854211
                                ],
                                [
                                    34.690928,
                                    32.68562
                                ],
                                [
                                    34.633219,
                                    32.435613
                                ],
                                [
                                    34.5178,
                                    32.089556
                                ],
                                [
                                    34.435358,
                                    31.952162
                                ],
                                [
                                    34.396155,
                                    31.834399
                                ],
                                [
                                    34.295851,
                                    31.702466
                                ],
                                [
                                    34.052648,
                                    31.46264
                                ]
                            ]
                        ]
                    ]
                }
            },
            "data": [
                {
                    "dataFilter": {
                        "timeRange": {
                            "from": dates[0],
                            "to": dates[1]
                        },
                        "maxCloudCoverage": maxCC,
                        "mosaickingOrder": "mostRecent"
                    },
                    "type": "sentinel-2-l2a"
                }
            ]
        },
        "output": {
            "width": 512,
            "height": 1249.631,
            "responses": [
                {
                    "identifier": "default",
                    "format": {
                        "type": "image/png"
                    }
                }
            ]
        },
        "evalscript": "//VERSION=3\n\nfunction setup() {\n  return {\n    input: [\"B02\", \"B03\", \"B04\"],\n    output: { bands: 3 }\n  };\n}\n\nfunction evaluatePixel(sample) {\n  return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02];\n}"
    }
}


export const sentinelHubService = {
    getToken,
    getDefReqBody: getReqBody
}