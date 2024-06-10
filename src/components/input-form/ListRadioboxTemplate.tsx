import React, { memo } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { useController } from "react-hook-form";
import { TYPE_MANAGEMENT } from "../../interface/constants/type/Type.const";
import { ICodeMng } from "../../interface/common/codeMng/CodeMng.interface";
import { useTranslation } from "react-i18next";

type Props = {
  options: ICodeMng[]|undefined;
  name: string;
  control: any;
  mode?: string;
  isCheck: Boolean;
};

const ListRadioboxTemplate: React.FC<Props> = ({
  options,
  control,
  name,
  mode,
  isCheck,
}) => {
  const {
    field: { onChange, value },
  } = useController({ name, control });
  const { t } = useTranslation();

  const onChangeRadio = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <Radio.Group
      onChange={onChangeRadio}
      value={value || null} 
      disabled={mode === TYPE_MANAGEMENT.MODE_DETAIL}
    >
      {isCheck ? (
        <Radio key={-1} value={null} checked={value === null}>
          {t("common.radiobox.radioboxAll")}
        </Radio>
      ) : (
        <></>
      )}
      {options && options.map((el: ICodeMng) => (
        <Radio key={el.value} value={el.value} className="text-black">
          {el.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default memo(ListRadioboxTemplate);
