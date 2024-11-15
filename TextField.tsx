import {memo, useEffect, useState} from 'react'
import {TextField, type TextFieldProps} from '@shopify/polaris'

export default memo(function({onChange, value, ...props}: TextFieldProps) {
  const [v, set] = useState(value)

  useEffect(() => {
    set(value)
  }, [value])

  return <TextField {...props} value={v} onChange={e => {
    set(e)
    onChange?.(e, props.id ?? '')
  }} />
})
