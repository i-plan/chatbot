import React, { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import { AtInput, AtForm, AtList, AtListItem, AtCard } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";
import VirtualList from "@tarojs/components/virtual-list";
async function talk(txt) {
  const res = await Taro.request({
    url: `https://chatbot-server-production-cf19.up.railway.app/api/chat/txt?content=${txt}`,
    method: "POST",
  });
  console.log(res);
  return res.data.content;
}
function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}
const Row = React.memo(({ id, index, data }) => {
  return (
    <AtCard
      className={index % 2 ? "ListItemOdd" : "ListItemEven"}
      id={id}
      note="小Tips"
      extra="额外信息"
      title="这是个标题"
      thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
    >
      这也是内容区 可以随意定义功能 Row {index} : {data[index]}
    </AtCard>
    // <View
    //   id={id}
    //   className={index % 2 ? "ListItemOdd" : "ListItemEven"}
    //   style="background:red"
    // >
    //   Row {index} : {data[index]}
    // </View>
  );
});

export default class Index extends Component {
  state = {
    data: buildData(0),
    txt: "hi",
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleChange(value) {
    this.setState({
      value,
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value;
  }

  render() {
    const { data } = this.state;
    const dataLen = data.length;
    return (
      <View className="flex-wrp" style="height:100%">
        <View>
          {/* <Text>{this.state.txt}</Text> */}
          <Text style="background:red">ChatGPT</Text>
          <VirtualList
            height={1800} /* 列表的高度 */
            width="100%" /* 列表的宽度 */
            item={Row} /* 列表单项组件，这里只能传入一个组件 */
            itemData={data} /* 渲染列表的数据 */
            itemCount={dataLen} /* 渲染列表的长度 */
            itemSize={100} /* 列表单项的高度  */
          />
        </View>
        <AtInput
          confirmType="send"
          cursor
          adjustPosition
          // autoFocus
          // focus
          border={true}
          name="value"
          // title="标准五个字"
          type="text"
          placeholder="输入问题"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onConfirm={async () => {
            const t = await talk("有没有兴趣出去玩");
            this.setState({ txt: t });
          }}
        >
          {/* <Image src="https://aotu.io/img.png" /> */}
        </AtInput>
      </View>
    );
  }
}
