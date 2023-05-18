import imageUrlBuilder from "@sanity/image-url";
import {createClient} from '@sanity/client'


export const client = createClient({
        projectId: 'upp6kz8b',
        dataset: 'production',
        useCdn: true,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
        apiVersion: '2023-05-17'
    })

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);