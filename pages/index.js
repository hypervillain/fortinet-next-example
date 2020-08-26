import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'

import resolver from '../sm-resolver.js'

const Page = (props) => <SliceZone {...props} resolver={resolver} />


// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'homepage',
  queryType: 'single'
})

export default Page