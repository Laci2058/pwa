export interface ValutaApiResponse {
    meta: string
    data: ValutaData
}
export interface ValutaSubData{
    code: string
    value: number
}
export type ValutaData = Record<string, ValutaSubData>


/*
{
        "meta": {
            "last_updated_at": "2023-05-10T23:59:59Z"
        },
        "data": {
            "HUF": {
                "code": "HUF",
                "value": 336.590361
            }
        }
    }
*/