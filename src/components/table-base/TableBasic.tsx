import { Table } from "antd";
import { memo } from "react";

function TableBasic({
  ...restProps
}: any) {
  return (
    <>
        <Table
          size="small"
          scroll={{ x: "auto" }}
          rowKey="rowNumber"
          {...restProps}
        />
    </>
  );
};

export default memo(TableBasic);
