import React, { memo } from "react";
import { Typography } from 'antd';

const { Text, Link } = Typography;

const TextTemplate: React.FC<any> = ({  className, children, ...restProps }) => {

  return (
    <Text className={className + " title__template"} {...restProps}>{children}</Text>
  );
};

export default memo(TextTemplate);
