import { GRAPHQL_POST } from '@payloadcms/next/routes'
import configPromise from '@payload-config'

export const POST = GRAPHQL_POST(configPromise)
export const GET = GRAPHQL_POST(configPromise)
