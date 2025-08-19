import { Pump } from 'basehub/react-pump'

const Page = async () => {
  return (
    <Pump queries={[{ __typename: true }]}>
      {async ([data]) => {
        'use server'
        return <>{JSON.stringify(data, null, 2)}</>
      }}
    </Pump>
  )
}

export default Page