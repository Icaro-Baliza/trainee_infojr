import { createClient  } from "../prismicio";
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { SliceZone } from "@prismicio/react";
import {components} from "../slices"


type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home( {page}: PageProps ){
    return(
        <div>
            <SliceZone slices={page.data.slices} components = {components}/>
        </div>
    )
}

export async function getStaticProps({previewData}: GetStaticPropsContext) {
    const client = createClient({ previewData })
    const page = await client.getByUID('page', "Home")
  
    return {
      props: {
        page,
      },
    }
  }
