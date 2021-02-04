import React, { FC } from "react";
import { Button } from "antd";

import "./style/index.less";

type AppProps = {
  title: string;
};

const App: FC<AppProps> = ({ title }) => {
  return (
    <>
      <p className={"foo"}>Hi! {title}</p>
      <Button type="primary" href={"https://ant.design/index-cn"}>
        Antd Docs
      </Button>
      &nbsp;
      <Button type="primary" href={"https://parceljs.org/"}>
        Parcel Docs
      </Button>
    </>
  );
};

export default App;
