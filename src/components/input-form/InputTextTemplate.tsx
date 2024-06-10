import React, { memo } from "react";
import { Input } from "antd";
import { Controller } from "react-hook-form";
import { TYPE_MANAGEMENT } from "../../interface/constants/type/Type.const";
import { useTranslation } from "react-i18next";

interface Props {
  name: string;
  control: any;
  mode?: string;
  [key: string]: any;
}

const InputTextTemplate: React.FC<Props> = ({
  name,
  mode,
  control,
  ...restProps
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              {mode === TYPE_MANAGEMENT.MODE_DETAIL ? (
                <span 
                {...field}>{field.value}</span> 
              ) : (
                <Input
                  {...field}
                  {...restProps}
                  placeholder={t('common.input.placeholder')}
                  onBlur={(e) => {
                    if (field.value) {
                      field.onChange(field.value.trim());
                    }
                  }}
                />
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default memo(InputTextTemplate);
