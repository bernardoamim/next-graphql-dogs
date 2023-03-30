import {dehydrate, useQuery} from 'react-query'
import Head from 'next/head'

import { queryClient, getDogs } from '../src/api'

export default function Home() {
  const { data } = useQuery(['dogs'], () => getDogs())

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export async function getServerSideProps() {
  await queryClient.prefetchQuery('dogs', () => getDogs())

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}