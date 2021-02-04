import React from "react";
import { render } from "react-dom";

import App from "./App";

import zhCN from "antd/lib/locale/zh_CN";

import { ConfigProvider } from "antd";

const Index = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <App title={`Ant Design & Parcel.`} />
    </ConfigProvider>
  );
};

render(<Index />, document.getElementById("root"));
