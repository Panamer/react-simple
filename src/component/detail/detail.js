import React from "react";
import  Keycontent from "../namekey_content/namekey_content"

export default class Keycontent extends React.Component {
  render() {
    const {keycontents} = this.props;
    const {inImgs} = this.props;
    const {outImgs} = this.props;

    // 将对象换成 数组
   const  contentArray =  Object.keys(keycontent).map(function(key) {
      return keycontent[key];
    });
    const mappedKeycontents = contentArray.map(tweet => <Keycontent key = {tweet}></Keycontent>)
    // TODO   封装 基本图片组件
    const  inImageUis =  inImgs.map(inimg => <img src={inimg} alt="">);
    const  outImageUis =  outImgs.map(outimg => <img src={outimg} alt="">);

    return (
        <div class="col-md-4">
          <h1>达奇漂流工具</h1>
          <div className="button">机构漂流管理</div>
          <div>用户详情页面</div>
          <div>
            <ul>{mappedKeycontents}</ul>
          </div>
          <div>用户上传照片</div>
          <div>收到达奇</div>
          <div>
            <ul>{inImageUis}</ul>
          </div>

          <div>寄出达奇</div>
          <div>
            <ul>{outImageUis}</ul>
          </div>

        </div>
    );
  }
}
