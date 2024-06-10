import { Checkbox, CheckboxProps } from "antd";
import { memo } from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
const CheckboxGroup = Checkbox.Group;

const ListCheckboxTemplate: React.FC<any> = ({
  isCheckAll,
  options,
  name,
  control,
  ...restProps
}) => {
  const {
    field: { onChange, value },
  } = useController({ name, control });

  const { t } = useTranslation();

  const checkAll = options.length === value.length;
  const indeterminate = value.length > 0 && value.length < options.length;

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    onChange(e.target.checked ? options : []);
  };

  return (
    <>
      {isCheckAll ? (
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          {t('common.checkbox.checkedAll')}
        </Checkbox>
      ) : (
        <></>
      )}
      <CheckboxGroup
        options={options}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </>
  );
};

export default memo(ListCheckboxTemplate);
