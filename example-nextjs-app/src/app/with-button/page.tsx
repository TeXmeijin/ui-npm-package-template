import MyComponent from '@/app/with-button/Transition'
import { Badge } from 'smarthr-ui/esm/components/Badge'

type Props = {}

const page = (props: Props) => {
  return (
    <div className={'p-8'}>
      hoge
      <MyComponent></MyComponent>
      <Badge>test</Badge>
    </div>
  )
}

export default page
