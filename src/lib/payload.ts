import { getPayload } from 'payload'
import config from '@payload-config'
import type { Config } from 'payload'

// Initialize Payload instance
let payload: Awaited<ReturnType<typeof getPayload>> | null = null

export const getPayloadClient = async (): Promise<Awaited<ReturnType<typeof getPayload>>> => {
  if (!payload) {
    payload = await getPayload({ config: config as Config })
  }
  return payload
}

// Utility functions for fetching data
export async function getServices() {
  const payload = await getPayloadClient()
  
  const services = await payload.find({
    collection: 'services',
    where: {
      status: {
        equals: 'active',
      },
    },
    sort: 'category',
  })
  
  return services.docs
}

export async function getServiceBySlug(slug: string) {
  const payload = await getPayloadClient()
  
  const services = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })
  
  return services.docs[0] || null
}

export async function getGalleryImages() {
  const payload = await getPayloadClient()
  
  const gallery = await payload.find({
    collection: 'gallery',
    sort: 'order',
    limit: 50,
  })
  
  return gallery.docs
}

export async function getFeaturedGalleryImages() {
  const payload = await getPayloadClient()
  
  const gallery = await payload.find({
    collection: 'gallery',
    where: {
      featured: {
        equals: true,
      },
    },
    sort: 'order',
    limit: 20,
  })
  
  return gallery.docs
}