import {memo} from 'react'
import Link from 'next/link'

interface Props {
  external?: boolean
  url: string
  rel?: string
  children?: React.ReactNode
}

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/

export default memo(function({external, children, url = '', ...rest}: Props) {
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    return <a href={url} {...rest}>{children}</a>
  }

  return <Link href={url} {...rest}>{children}</Link>
})
