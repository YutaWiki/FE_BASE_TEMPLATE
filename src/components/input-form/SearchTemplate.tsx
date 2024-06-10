import React, { memo } from "react";
import Search from "antd/es/input/Search";
import { useTranslation } from "react-i18next";

const SearchBase: React.FC<any> = ({  children, loading, icon, onSearch, ...restProps }) => {

    const { t } = useTranslation();
  return (
    <>
      <Search placeholder={t('common.input.placeholder')} onSearch={onSearch} {...restProps} />
    </>
  );
};

export default memo(SearchBase);
