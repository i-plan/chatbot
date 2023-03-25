import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
// import { ChatGPTAPI } from 'chatgpt'

async function talk() {
  console.log("talk")
  // const apiKey = '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'
  // const api = new ChatGPTAPI({
  //   apiKey: apiKey
  // })

  // const res = await api.sendMessage('Hello World!')
  // console.log(res.text)
}
export default class Index extends Component {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true} onClick={()=>talk()}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}
