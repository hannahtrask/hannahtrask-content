import {defineField, defineType} from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            description: 'Recommended size: 1920x1080px (16:9 aspect ratio) - Used as full-screen hero background',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'technologies',
            type: 'array',
            of: [{type: 'string'}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'additionalImages',
            title: 'Additional Images',
            type: 'array',
            of: [{type: 'image'}],
            description: 'Recommended size: 500x500px (1:1 square aspect ratio) - Used in square gallery grid (max 250px wide)',
        }),
        defineField({
            name: 'webpageImage',
            title: 'Webpage Image',
            type: 'image',
            description: 'Recommended size: 3022x5772px (1:1.91 portrait aspect ratio) - Used for full webpage screenshots',
        }),
        defineField({
            name: 'fullDescription',
            title: 'Full Description',
            type: 'array',
            of: [{type: 'block'}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'websiteUrl',
            title: 'Website URL',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
    ],
})