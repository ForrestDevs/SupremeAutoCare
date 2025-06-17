import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Express Detailing',
          value: 'express',
        },
        {
          label: 'Luxury Detailing',
          value: 'luxury',
        },
        {
          label: 'Ceramic Coating + Polish',
          value: 'coating',
        },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "45 Minutes", "4 Hours"',
      },
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "$49.99", "Starting $199.99"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'calcomLink',
      type: 'text',
      required: true,
      admin: {
        description: 'Cal.com booking link slug (e.g., "detail-wash")',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Feature this service on the homepage',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
        {
          label: 'Coming Soon',
          value: 'coming-soon',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}