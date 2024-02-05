import Link from 'next/link'
import React from 'react'

const Links = ({href,text}) => {
  return (
    <div>
      <Link href={href}>{text}</Link>
    </div>
  )
}

export default Links
