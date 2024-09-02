"use server"

import SERVER_ENV from "./server.env"

export async function getApiUrl(): Promise<string> {
    return SERVER_ENV.API_URL
}