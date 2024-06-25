import React, { memo } from "react";
import "./index.css"

interface GroupFilterTemplateProps {
  children?: any;
  id: string;
  name: string;
  checked?: boolean;
  onChange?: (id: string, checked: boolean) => void;
}

const GroupFilterTemplate: React.FC<GroupFilterTemplateProps> = ({
  children,
  id,
  name,
  checked,
  onChange,
  ...restProps
}) => {

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(id, event.target.checked);
    }
  };

  return (
    <>
      <input
        {...restProps}
        name={name}
        type="radio"
        className="hidden"
        id={id}
        checked={checked}
        onChange={handleRadioChange}
      />
      <label
        className={`group__filter rounded-full transition-all font-bold ${checked ? 'on' : ''}`}
        htmlFor={id}
      >
        {children}
      </label>
    </>
  );
};

export default memo(GroupFilterTemplate);
