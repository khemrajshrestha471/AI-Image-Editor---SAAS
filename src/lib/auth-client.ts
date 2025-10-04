import { createAuthClient } from "better-auth/react"
import { polarClient } from "@polar-sh/better-auth";

import { env } from "process"
export const authClient = createAuthClient({
    baseURL: env.BETTER_AUTH_URL,
    plugins: [polarClient()],
})