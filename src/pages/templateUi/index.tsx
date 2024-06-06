import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardLayoutTemplate from "../../components/layout-base/CardLayoutTemplate";
import FontAwesomeBase from "../../components/font-awesome/FontAwesomeBase";
import { useNotification } from "../../components/notification-base/NotificationTemplate";
import { Col, Input, Row } from "antd";
import ButtonBase from "../../components/button-base/ButtonBase";
import { useModalProvider } from "../../components/notification-base/ModalNotificationTemplate";
import FormTemplate from "../../components/form-base/form-basic-base/FormTemplate";
import FormChildTemplate from "../../components/form-base/form-basic-base/FormChildTemplate";
import InputTextTemplate from "../../components/input-form/InputTextTemplate";
import { TYPE_MANAGEMENT } from "../../interface/constants/type/Type.const";
import { useForm } from "react-hook-form";
import ListRadioboxTemplate from "../../components/input-form/ListRadioboxTemplate";
import SelectBoxTemplate from "../../components/input-form/SelectBoxTemplate";
import FormFooterTemplate from "../../components/form-base/form-basic-base/FormFooterTemplate";
import { useNavigate } from "react-router-dom";
import { ICodeMng } from "../../interface/common/codeMng/CodeMng.interface";
import { ROUTER_BASE } from "../../router/router.constant";
import ListCheckboxTemplate from "../../components/input-form/ListCheckboxTemplate";
import DatePickerTemplate from "../../components/input-form/DatepickerTemplate";

function TemplateUi() {
  const mode = TYPE_MANAGEMENT.MODE_CREATE

  // Sử dụng react hook form
  const { control, getValues, watch, reset } = useForm<any>({
    defaultValues: {
      input: "",
      radio: "",
      combobox: "",
      checkbox: "",
      datepicker: "2013-05-09"
    },
  });

  // theo dõi biến
  const input = watch("input");

  useEffect(() => {
    console.log("Theo dõi biến input: " + input);
  }, [input]);

  // Điều hướng trang
  const navigate = useNavigate();

  // đa ngôn ngữ
  const { t } = useTranslation();

  // Data custom
  const dataComponet = [
    {
      value: "1",
      label: "Nút 1"
    },
    {
      value: "2",
      label: "Nút 2"
    },
    {
      value: "3",
      label: "Nút 3"
    },
    {
      value: "4",
      label: "Nút 4"
    },
    {
      value: "5",
      label: "Nút 5"
    }
  ] as ICodeMng[]

  // form search icon
  const [icon, setIcon] = useState("home")

  // notification custom
  const { openNotification } = useNotification();
  const { openModal } = useModalProvider();

  return (
    <>
      {/* form search icon */}
      <CardLayoutTemplate className="mt-7" title={() => (<>
        <FontAwesomeBase className="mr-3" iconName={"home"}></FontAwesomeBase>{t("templateUi.iconTemplate.title")} // Mẫu sẽ được update theo figma
      </>)}>
        <h1 className="text-xl mb-4">Search Icon</h1>
        <Input defaultValue="home" onChange={(e: any) => {
          setIcon(e.target.value)
        }} />

        <h1 className="text-xl my-4">Kết quả icon: <FontAwesomeBase className="ml-3" iconName={icon} /></h1>
      </CardLayoutTemplate>

      {/* notification */}
      <CardLayoutTemplate className="mt-7" title={() => (<>
        <FontAwesomeBase className="mr-3" iconName={"home"}></FontAwesomeBase>{t("templateUi.notificationTemplate.title")} // Mẫu sẽ được update theo figma
      </>)}>
        <Row gutter={16}>
          <Col span={12}>
            <h1 className="text-xl mb-4">{t("templateUi.notificationTemplate.notification")}</h1>
            <ButtonBase onClick={() => openNotification("error", t("common.notification.error"), "Lỗi nha!!!")}>Error</ButtonBase>
            <ButtonBase onClick={() => openNotification("info", t("common.notification.info"), "Lỗi nha!!!")}>info</ButtonBase>
            <ButtonBase onClick={() => openNotification("success", t("common.notification.success"), "Lỗi nha!!!")}>success</ButtonBase>
            <ButtonBase onClick={() => openNotification("warning", t("common.notification.warning"), "Lỗi nha!!!")}>warning</ButtonBase>
          </Col>
          <Col span={12}>
            <h1 className="text-xl mb-4">{t("templateUi.notificationTemplate.modalConfig")}</h1>
            <ButtonBase onClick={() => {
              openModal("error", t("common.notification.error"), t("objectsManagement.error.notFound"),
                () => {
                  alert("Hàm trả về khi chọn oke")
                }
              );
            }}>Error</ButtonBase>
            <ButtonBase onClick={() => {
              openModal("confirm", t("common.confirm.title"), t("objectsManagement.error.notFound"),
                () => {
                  alert("Hàm trả về khi chọn oke")
                }
              );
            }}>confirm</ButtonBase>
            <ButtonBase onClick={() => {
              openModal("info", t("common.notification.info"), t("objectsManagement.error.notFound"),
                () => {
                  alert("Hàm trả về khi chọn oke")
                }
              );
            }}>info</ButtonBase>
            <ButtonBase onClick={() => {
              openModal("success", t("common.notification.success"), t("objectsManagement.error.notFound"),
                () => {
                  alert("Hàm trả về khi chọn oke")
                }
              );
            }}>success</ButtonBase>
            <ButtonBase onClick={() => {
              openModal("warning", t("common.notification.warning"), t("objectsManagement.error.notFound"),
                () => {
                  alert("Hàm trả về khi chọn oke")
                }
              );
            }}>warning</ButtonBase>
          </Col>
        </Row>
      </CardLayoutTemplate>

      {/* Button base */}
      <CardLayoutTemplate className="mt-7" title={() => (<>
        <FontAwesomeBase className="mr-3" iconName={"home"}></FontAwesomeBase>{t("templateUi.buttonTemplate.title")} // Mẫu sẽ được update theo figma
      </>)}>
        <h1 className="text-xl mb-4">Basic button</h1>
        <ButtonBase>Basic button</ButtonBase>

        <h1 className="text-xl mb-4">Button thêm</h1>
        <ButtonBase className="btn__custom btn__add"><FontAwesomeBase className="m2-3" iconName={"plus"}></FontAwesomeBase>{t("common.button.create")}</ButtonBase>

        <h1 className="text-xl mb-4">Button sửa</h1>
        <ButtonBase className="btn__custom btn__update"><FontAwesomeBase className="m2-3" iconName={"pen-to-square"}></FontAwesomeBase>{t("common.button.update")}</ButtonBase>

        <h1 className="text-xl mb-4">Button Đi tới chỉnh sửa</h1>
        <ButtonBase className="btn__custom btn__goToUpdate"><FontAwesomeBase className="m2-3" iconName={"wrench"}></FontAwesomeBase>{t("common.button.goToUpdate")}</ButtonBase>

        <h1 className="text-xl mb-4">Button Xóa</h1>
        <ButtonBase className="btn__custom btn__remove"><FontAwesomeBase className="m2-3" iconName={"trash"}></FontAwesomeBase>{t("common.button.delete")}</ButtonBase>

        <h1 className="text-xl mb-4">Button Quay lại</h1>
        <ButtonBase className="btn__custom btn__back"><FontAwesomeBase className="m2-3" iconName={"rotato-left"}></FontAwesomeBase>{t("common.button.back")}</ButtonBase>

        <h1 className="text-xl mb-4">Button clear form</h1>
        <ButtonBase className="btn__custom btn__clearForm"><FontAwesomeBase className="m2-3" iconName={"broom"}></FontAwesomeBase>{t("common.formSearch.clear")}</ButtonBase>

        <h1 className="text-xl mb-4">Button tìm kiếm</h1>
        <ButtonBase className="btn__custom btn__search"><FontAwesomeBase className="m2-3" iconName={"magnifying-glass"}></FontAwesomeBase>{t("common.formSearch.search")}</ButtonBase>

      </CardLayoutTemplate>


      {/* Form base */}
      <CardLayoutTemplate className="mt-7" title={() => (<>
        <FontAwesomeBase className="mr-3" iconName={"home"}></FontAwesomeBase>{t("templateUi.formTempate.title")} // Mẫu sẽ được update theo figma
      </>)}>


        {/* form crud */}
        <FormTemplate contentSize={"70"} labelSize={"30"}>
          {/* content form crud */}

          {/* Input form template */}
          <FormChildTemplate
            title={"Input template"}
            required={true}
          >
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormChildTemplate>

          {/* Radio form template */}
          <FormChildTemplate
            title={"Radio template"}
            required={true}
          >
            <ListRadioboxTemplate
              name="radio"
              mode={mode}
              control={control}
              options={dataComponet}
              isCheck={false}
            />
          </FormChildTemplate>

          {/* Combobox template */}
          <FormChildTemplate
            title={"Combobox template"}
            required={false}
          >
            <SelectBoxTemplate
              mode={mode}
              showSearch
              className="w-full"
              name="combobox"
              control={control}
              options={dataComponet}
            ></SelectBoxTemplate>
          </FormChildTemplate>

          {/* Checkbox template */}
          <FormChildTemplate
            title={"Checkbox template"}
            required={true}
          >
            <ListCheckboxTemplate
              name="checkbox"
              mode={mode}
              control={control}
              options={dataComponet}
              isCheck={false}
            />
          </FormChildTemplate>

          {/* Datepicker template */}
          <FormChildTemplate
            title={"Datepicker template"}
            required={true}
          >
            <DatePickerTemplate mode={mode} name="datepicker" control={control} />
          </FormChildTemplate>

          <FormFooterTemplate>
            {mode === TYPE_MANAGEMENT.MODE_CREATE ? (
              <ButtonBase
                className="mx-2 btn btn__create"
                onClick={() => console.log(getValues())}
              >
                <FontAwesomeBase className="m2-3" iconName={"plus"}></FontAwesomeBase>{t("common.button.create")}
              </ButtonBase>
            ) : mode === TYPE_MANAGEMENT.MODE_DETAIL ? (
              <ButtonBase
                // onClick={() =>
                //   navigate(
                //     `${ROUTER_BASE.objectManagement.path}/${TYPE_MANAGEMENT.MODE_UPDATE}/${id}`
                //   )
                // }
                className="mx-2 btn btn__goToUpdate"
              >
                {t("common.button.goToUpdate")}
              </ButtonBase>
            ) : (
              <>
                {" "}
                <ButtonBase
                  className="mx-2 btn btn__update"
                // onClick={() => onUpdate()}
                >
                  {t("common.button.update")}
                </ButtonBase>
                <ButtonBase
                  className="mx-2 btn btn__delete"
                // onClick={() => onDelete()}
                >
                  {t("common.button.delete")}
                </ButtonBase>
              </>
            )}
            <ButtonBase className="mx-2 btn btn__back" onClick={() => alert("Back !!!")}>
              {t("common.button.back")}
            </ButtonBase>
          </FormFooterTemplate>
        </FormTemplate>
      </CardLayoutTemplate>

      
      {/* Form base */}
      <CardLayoutTemplate className="mt-7" title={() => (<>
        <FontAwesomeBase className="mr-3" iconName={"home"}></FontAwesomeBase>{"Table Template"} // Mẫu sẽ được update theo figma
      </>)}>
        <h1> Phân table sẽ demo khi có api mẫu</h1>
      </CardLayoutTemplate>
    </>
  );
}

export default memo(TemplateUi);
