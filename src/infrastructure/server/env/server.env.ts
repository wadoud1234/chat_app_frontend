import { z } from 'zod'

const server_env_schema = z.object({
    API_URL: z.string().url()
})

export function validateServerEnv() {
    return server_env_schema.parse(process.env)
}

const SERVER_ENV = validateServerEnv()

export default SERVER_ENV