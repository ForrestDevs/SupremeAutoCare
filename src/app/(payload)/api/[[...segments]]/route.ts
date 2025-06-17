/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { NextRequest } from 'next/server'

import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_PATCH, REST_POST } from '@payloadcms/next/routes'

export const GET = (request: NextRequest, { params }: { params: { segments: string[] } }) =>
  REST_GET(request, { params, config })

export const POST = (request: NextRequest, { params }: { params: { segments: string[] } }) =>
  REST_POST(request, { params, config })

export const DELETE = (request: NextRequest, { params }: { params: { segments: string[] } }) =>
  REST_DELETE(request, { params, config })

export const PATCH = (request: NextRequest, { params }: { params: { segments: string[] } }) =>
  REST_PATCH(request, { params, config })