import Block from '@/components/block'
import React from 'react'
// import RootLayout from '../../app/layout';d

export async function getServerSideProps() {
  const response = await fetch(`http://${process.env.VERSION_API_ENDPOINT}:${process.env.VERSION_API_PORT}/version`);
  const ver = await response.json()

  return { props: { version: ver.version } }
}

export default function BlockPage({ version }) {
  return (
    // <RootLayout>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="grid grid-cols-4 gap-4">
        {/* <p className="text-white-600">aaaaaaaa {version}</p>     */}
        <Block version={version}></Block>
      </div>
      </div>
    // </RootLayout>
  )
}