import type { CollectionConfig } from "payload";

export const GALLERY_CATEGORIES = [
  { label: "Exterior Detail", value: "exterior" },
  { label: "Interior Detail", value: "interior" },
  { label: "Ceramic Coating", value: "ceramic-coating" },
  { label: "Paint Correction", value: "paint-correction" },
  { label: "Wheels", value: "wheels" },
] as const;

export const Gallery: CollectionConfig = {
  slug: "gallery",
  labels: {
    singular: "Gallery Photo",
    plural: "Gallery",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "order", "updatedAt"],
    group: "Content",
    description:
      "Photos shown on the Gallery page. Lower sort order shows up first.",
  },
  access: {
    read: () => true,
  },
  defaultSort: "order",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Shown as the caption, e.g. \"Lamborghini Huracan\".",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "exterior",
      options: [...GALLERY_CATEGORIES],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Sort order — lower numbers appear first.",
      },
    },
  ],
};
