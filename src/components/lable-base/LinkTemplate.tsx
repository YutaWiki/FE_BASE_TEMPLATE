import React, { memo } from "react";
import { Typography } from 'antd';

const { Link } = Typography;

const LinkTemplate: React.FC<any> = ({  className, children, ...restProps }) => {

  return (
    <Link className={className + " "} {...restProps}>{children}</Link>
  );
};

export default memo(LinkTemplate);
