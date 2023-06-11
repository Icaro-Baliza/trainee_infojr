import { createClient } from '../../prismicio'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { SliceZone } from '@prismicio/react'
import {components} from "../../slices"

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({page}: PageProps) {
  return (
    <main className='home'>
      <SliceZone slices={page.data.slices} components={components}/>
    </main>
  )
}

export async function getStaticProps({previewData}: GetStaticPropsContext) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', "home")

  return {
    props: {
      page,
    },
  }
}

