import React, { memo } from "react";
import { Divider } from "antd";

const DividerTemplate: React.FC<any> = ({ ...restProps }) => {

  return (
    <>
        <Divider { ...restProps } />
    </>
  );
};

export default memo(DividerTemplate);
