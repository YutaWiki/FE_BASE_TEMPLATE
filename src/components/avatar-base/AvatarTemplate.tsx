import React, { memo } from "react";
import { Avatar } from "antd";

const AvatarTemplate: React.FC<any> = ({  ...restProps }) => {

  return (
    <Avatar {...restProps} />
  );
};

export default memo(AvatarTemplate);
