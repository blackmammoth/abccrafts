export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'canvasSize',
            title: 'Canvas Size',
            type: 'string',
        },
        {
            name: 'threadLength',
            title: 'Thread Length',
            type: 'string',
        },
        {
            name: 'nails',
            title: 'Nails',
            type: 'number'
        },
        {
            name: 'distanceNails',
            title: 'Distance Between Nails',
            type: 'string'
        },
        {
            name: 'steps',
            title: 'Steps',
            type: 'number'
        },
        {
            name: 'story',
            title: 'Story',
            type: 'string'
        }
    ]
}