import React, { memo } from "react";
import { Button, ButtonProps } from "antd";
import { ButtonType } from "../../interface/constants/type/Type.const";
import FontAwesomeBase from "../font-awesome/FontAwesomeBase";
import { useTranslation } from "react-i18next";
interface ButtonBaseProps extends ButtonProps {
  children?: any;
  category: ButtonType;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: any;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  category,
  loading,
  icon,
  onClick,
  ...restProps
}) => {
  const { t } = useTranslation();
  return (
    <>
      {category === "bassic" ? (
        <>
          <Button
            onClick={onClick}
            loading={loading}
            icon={icon}
            {...restProps}
          >
            {children}
          </Button>
        </>
      ) : category === "create" ? (
        <>
          <Button
            loading={loading}
            onClick={onClick}
            className="btn__custom btn__add"
            icon={
              <FontAwesomeBase
                className="m2-3"
                iconName={"plus"}
              ></FontAwesomeBase>
            }
          >
            {t("common.button.create")}
          </Button>
        </>
      ) : category === "back" ? (
        <>
          <Button
            loading={loading}
            onClick={onClick}
            className="btn__custom btn__back"
            icon={
              <FontAwesomeBase
                className="m2-3"
                iconName={"rotate-left"}
              ></FontAwesomeBase>
            }
          >
            {t("common.button.back")}
          </Button>
        </>
      ) : category === "clearForm" ? (
        <>
          <Button
            loading={loading}
            onClick={onClick}
            className="btn__custom btn__clearForm"
            icon={
              <FontAwesomeBase
                className="m2-3"
                iconName={"broom"}
              ></FontAwesomeBase>
            }
          >
            {t("common.formSearch.clear")}
          </Button>
        </>
      ) : category === "goUpdate" ? (
        <>
          <Button
            loading={loading}
            onClick={onClick}
            className="btn__custom btn__goToUpdate"
            icon={
              <FontAwesomeBase
                className="m2-3"
                iconName={"wrench"}
              ></FontAwesomeBase>
            }
          >
            {t("common.button.goToUpdate")}
          </Button>
        </>
      ) : category === "remove" ? (
        <>
          <Button
            className="mx-2 btn btn__table btn__detail"
            icon={<FontAwesomeBase iconName={"circle-info"} />}
          ></Button>
        </>
      ) : category === "search" ? (
        <>
          <Button
            loading={loading}
            onClick={onClick}
            className="btn__custom btn__search"
            icon={
              <FontAwesomeBase
                className="m2-3"
                iconName={"magnifying-glass"}
              ></FontAwesomeBase>
            }
          >
            {t("common.formSearch.search")}
          </Button>
        </>
      ) : category === "update" ? (
        <>
          <Button
            loading={loading}
            onClick={onClick}
            className="btn__custom btn__update"
            icon={
              <FontAwesomeBase
                className="m2-3"
                iconName={"pen-to-square"}
              ></FontAwesomeBase>
            }
          >
            {t("common.button.update")}
          </Button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default memo(ButtonBase);
