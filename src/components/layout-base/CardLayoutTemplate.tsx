import React, { memo } from "react";
import { Card } from "antd";
import TitleTemplate from "../lable-base/TitleTemplate";

const CardLayoutTemplate: React.FC<any> = ({
    children,
  active,
  title,
  className,
  ...restProps
}) => {
  return (
    <>
      <Card
        className={className + " shadow-custom"}
        title={<TitleTemplate level={4}>{title && (typeof title === 'function' ? title() : title)}</TitleTemplate>}
        {...restProps}
        extra={active}>
            {children}
      </Card>
    </>
  );
};

export default CardLayoutTemplate;
