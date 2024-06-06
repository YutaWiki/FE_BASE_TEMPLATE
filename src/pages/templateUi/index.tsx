import { memo } from "react";
import { useTranslation } from "react-i18next";

function TemplateUi() {
  const { t } = useTranslation()
  return (
    <>
      <h1>{ t("title") }</h1>
    </>
  );
}

export default memo(TemplateUi);
