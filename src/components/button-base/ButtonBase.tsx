import React, { memo } from "react";
import { Button } from "antd";

const ButtonBase: React.FC<any> = ({  children, loading, icon, onClick, ...restProps }) => {

  return (
    <>
      <Button
        onClick={onClick} loading={loading} icon={icon}
        {...restProps}
      >
        {children}
      </Button>
    </>
  );
};

export default memo(ButtonBase);
