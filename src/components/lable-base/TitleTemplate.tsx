import React, { memo } from "react";
import { Typography } from 'antd';

const { Title } = Typography;

const TitleTemplate: React.FC<any> = ({  className, level, children, ...restProps }) => {

  return (
    <Title level={level} className={className + " title__template"} {...restProps}>{children}</Title>
  );
};

export default memo(TitleTemplate);
