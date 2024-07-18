import {memo} from 'react'
import {useRouter} from 'next/navigation'
import {InlineStack, Text, Button, Banner, Box} from '@shopify/polaris'
import {useSnapshot} from 'valtio'
import {store} from '@/core'

export default memo(function(props: {album?: boolean}) {
  const router = useRouter()
  const snap = useSnapshot(store.mem)

  if (snap.app.pending.status) return null
  if (snap.app.status !== 'ACTIVE') return <Box paddingBlockEnd="400"><Banner tone="warning">
    <InlineStack>
      <Text as="p" variant="bodyMd" fontWeight="bold" tone="critical">Since you have not subscribed, the widget will not be displayed in your store. </Text>
      <Button variant="plain" tone="success" onClick={() => router.push('/subscription')}>Go to subscribe(7-day free trial)</Button>
    </InlineStack>
  </Banner></Box>

  if (snap.app.pending.block) return null
  if (snap.app.block !== true) return <Box paddingBlockEnd="400"><Banner tone="warning">
    <InlineStack>
      <Text as="p" variant="bodyMd" fontWeight="bold" tone="critical">Rax: Music Player app extension is not activated yet.</Text>
      <Button variant="plain" tone="success" url={snap.app.block} target="_top">Go to activate</Button>
    </InlineStack>
  </Banner></Box>

  if (props.album) return <Box paddingBlockEnd="400"><Banner tone="warning">
    <InlineStack>
      <Text as="p" variant="bodyMd" fontWeight="bold" tone="critical">You currently have no active albums. The player will not be displayed in the store.</Text>
    </InlineStack>
  </Banner></Box>
})
