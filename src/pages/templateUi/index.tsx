import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardLayoutTemplate from "../../components/layout-base/CardLayoutTemplate";
import FontAwesomeBase from "../../components/font-awesome/FontAwesomeBase";
import { useNotification } from "../../components/notification-base/NotificationTemplate";
import { Avatar, Col, Input, Row, Space, Tooltip } from "antd";
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
import ListCheckboxTemplate from "../../components/input-form/ListCheckboxTemplate";
import DatePickerTemplate from "../../components/input-form/DatepickerTemplate";
import TableTemplate from "../../components/table-base/TableTemplate";
import TagTemplate from "../../components/tag-base/TagTemplate";
import TableBasic from "../../components/table-base/TableBasic";
import AvatarTemplate from "../../components/avatar-base/AvatarTemplate";
import logo from "../../assets/images/logo/image.png";
import DividerTemplate from "../../components/divider-base/DividerTemplate";
import TextEditTemplate from "../../components/joditediter-base/TextEditTemplate";
import InputFileTemplate from "../../components/input-form/InputFileTemplate";
import PreviewTemplate from "../../components/avatar-base/PreviewTemplate";
import TitleTemplate from "../../components/lable-base/TitleTemplate";
import TextTemplate from "../../components/lable-base/TextTemplate";
import FormSearchTemplate from "../../components/form-base/form-search-base/FormSearchTemplate";
import FormSearchChildTemplate from "../../components/form-base/form-search-base/FormSearchChildTemplate";

function TemplateUi() {
  const mode = TYPE_MANAGEMENT.MODE_CREATE;

  // Sử dụng react hook form
  const { control, getValues, watch, reset } = useForm<any>({
    defaultValues: {
      input: "",
      radio: "",
      combobox: "",
      checkbox: "",
      datepicker: "2013-05-09",
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
      label: "Nút 1",
    },
    {
      value: "2",
      label: "Nút 2",
    },
    {
      value: "3",
      label: "Nút 3",
    },
    {
      value: "4",
      label: "Nút 4",
    },
    {
      value: "5",
      label: "Nút 5",
    },
  ] as ICodeMng[];

  // form search icon
  const [icon, setIcon] = useState("home");

  // notification custom
  const { openNotification } = useNotification();
  const { openModal } = useModalProvider();

  // Tables

  const columns = [
    {
      title: t("common.rowNum"),
      dataIndex: "rowNumber",
      key: "rowNumber",
      align: "center",
      showSorterTooltip: false,
      render: (text: any, record: any, index: number) =>
        getValues("current") * getValues("size") + index + 1,
    },
    {
      title: t("table.name"),
      dataIndex: "name",
      key: "name",
      sorter: true,
      showSorterTooltip: false,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("table.code"),
      dataIndex: "code",
      key: "code",
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: t("table.subName"),
      dataIndex: "subName",
      key: "subName",
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: t("table.urlNote"),
      dataIndex: "urlNote",
      key: "urlNote",
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: t("table.status"),
      dataIndex: "status",
      key: "status",
      sorter: true,
      showSorterTooltip: false,
      render: (data: string) => {
        return (
          <>
            {data === "ACTIVE_TYPE_1" ? (
              <TagTemplate color="cyan">
                {t("objectsManagement.status.active")}
              </TagTemplate>
            ) : (
              <TagTemplate color="red">
                {t("objectsManagement.status.unActive")}
              </TagTemplate>
            )}
          </>
        );
      },
    },
    {
      title: t("table.roleName"),
      dataIndex: "roleName",
      key: "roleName",
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: t("table.moduleName"),
      dataIndex: "moduleName",
      key: "moduleName",
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: t("common.action"),
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <Tooltip title={t("common.button.detail")}>
            <ButtonBase category="remove"></ButtonBase>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <>
      {/* form search icon */}
      <CardLayoutTemplate
        className="mt-7"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {t("templateUi.iconTemplate.title")} // Mẫu sẽ được update theo
            figma
          </>
        )}
      >
        <TextTemplate className="text-lg mb-4">Search Icon</TextTemplate>
        <Input
          defaultValue="home"
          onChange={(e: any) => {
            setIcon(e.target.value);
          }}
        />

        <TextTemplate className="text-lg my-4">
          Kết quả icon: <FontAwesomeBase className="ml-3" iconName={icon} />
        </TextTemplate>
      </CardLayoutTemplate>

      {/* notification */}
      <CardLayoutTemplate
        className="mt-7"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"Mẫu thông báo"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        <Row gutter={16}>
          <Col span={12}>
            <TextTemplate className="text-lg mb-4">
              {t("templateUi.notificationTemplate.notification")}
            </TextTemplate>
            <ButtonBase
              category="bassic"
              onClick={() =>
                openNotification(
                  "error",
                  t("common.notification.error"),
                  "Lỗi nha!!!"
                )
              }
            >
              Error
            </ButtonBase>
            <ButtonBase
              category="bassic"
              onClick={() =>
                openNotification(
                  "info",
                  t("common.notification.info"),
                  "Lỗi nha!!!"
                )
              }
            >
              info
            </ButtonBase>
            <ButtonBase
              category="bassic"
              onClick={() =>
                openNotification(
                  "success",
                  t("common.notification.success"),
                  "Lỗi nha!!!"
                )
              }
            >
              success
            </ButtonBase>
            <ButtonBase
              category="bassic"
              onClick={() =>
                openNotification(
                  "warning",
                  t("common.notification.warning"),
                  "Lỗi nha!!!"
                )
              }
            >
              warning
            </ButtonBase>
          </Col>
          <Col span={12}>
            <TextTemplate className="text-lg mb-4">
              {t("templateUi.notificationTemplate.modalConfig")}
            </TextTemplate>
            <ButtonBase
              category="bassic"
              onClick={() => {
                openModal(
                  "error",
                  t("common.notification.error"),
                  t("objectsManagement.error.notFound"),
                  () => {
                    alert("Hàm trả về khi chọn oke");
                  }
                );
              }}
            >
              Error
            </ButtonBase>
            <ButtonBase
              category="bassic"
              onClick={() => {
                openModal(
                  "confirm",
                  t("common.confirm.title"),
                  t("objectsManagement.error.notFound"),
                  () => {
                    alert("Hàm trả về khi chọn oke");
                  }
                );
              }}
            >
              confirm
            </ButtonBase>
            <ButtonBase
              category="bassic"
              onClick={() => {
                openModal(
                  "info",
                  t("common.notification.info"),
                  t("objectsManagement.error.notFound"),
                  () => {
                    alert("Hàm trả về khi chọn oke");
                  }
                );
              }}
            >
              info
            </ButtonBase>
            <ButtonBase
              category="bassic"
              onClick={() => {
                openModal(
                  "success",
                  t("common.notification.success"),
                  t("objectsManagement.error.notFound"),
                  () => {
                    alert("Hàm trả về khi chọn oke");
                  }
                );
              }}
            >
              success
            </ButtonBase>
            <ButtonBase
              category="bassic"
              onClick={() => {
                openModal(
                  "warning",
                  t("common.notification.warning"),
                  t("objectsManagement.error.notFound"),
                  () => {
                    alert("Hàm trả về khi chọn oke");
                  }
                );
              }}
            >
              warning
            </ButtonBase>
          </Col>
        </Row>
      </CardLayoutTemplate>

      {/* Button base */}
      <CardLayoutTemplate
        className="mt-7"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"Mẫu Button"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        <TextTemplate className="text-lg mb-4">Basic button</TextTemplate>
        <br/>
        <ButtonBase category="bassic">Basic button</ButtonBase>

        <br/>
        <TextTemplate className="text-lg mb-4">Loading button</TextTemplate>
        <br/>
        <ButtonBase category="bassic" loading={true}>
          Loading button
        </ButtonBase>
        <br/>
        <TextTemplate className="text-lg mb-4">Button thêm</TextTemplate>
        <br/>
        <ButtonBase category="create"></ButtonBase>
        <br/>

        <TextTemplate className="text-lg mb-4">Button sửa</TextTemplate>
        <br/>
        <ButtonBase category="update"></ButtonBase>
        <br/>

        <TextTemplate className="text-lg mb-4">
          Button Đi tới chỉnh sửa
        </TextTemplate>
        <br/>
        <ButtonBase category="goUpdate"></ButtonBase>
        <br/>

        <TextTemplate className="text-lg mb-4">Button Xóa</TextTemplate>
        <br/>
        <ButtonBase category="remove"></ButtonBase>
        <br/>

        <TextTemplate className="text-lg mb-4">Button Quay lại</TextTemplate>
        <br/>
        <ButtonBase category="back"></ButtonBase>
        <br/>

        <TextTemplate className="text-lg mb-4">
          Button clear form
        </TextTemplate>
        <br/>
        <ButtonBase category="clearForm"></ButtonBase>
        <br/>

        <TextTemplate className="text-lg mb-4">Button tìm kiếm</TextTemplate>
        <br/>
        <ButtonBase category="search"></ButtonBase>
        <br/>
      </CardLayoutTemplate>

      {/* Form base */}
      <CardLayoutTemplate
        className="mt-7"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"Mẫu Form"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        {/* form crud */}
        <FormTemplate contentSize={"70"} labelSize={"30"}>
          {/* content form crud */}

          {/* Input form template */}
          <FormChildTemplate title={"Input template"} required={true}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormChildTemplate>

          {/* Radio form template */}
          <FormChildTemplate title={"Radio template"} required={true}>
            <ListRadioboxTemplate
              name="radio"
              mode={mode}
              control={control}
              options={dataComponet}
              isCheck={false}
            />
          </FormChildTemplate>

          {/* Combobox template */}
          <FormChildTemplate title={"Combobox template"} required={false}>
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
          <FormChildTemplate title={"Checkbox template"} required={true}>
            <ListCheckboxTemplate
              name="checkbox"
              mode={mode}
              control={control}
              options={dataComponet}
              isCheck={false}
            />
          </FormChildTemplate>

          {/* Datepicker template */}
          <FormChildTemplate title={"Datepicker template"} required={true}>
            <DatePickerTemplate
              mode={mode}
              name="datepicker"
              control={control}
            />
          </FormChildTemplate>

          <FormFooterTemplate>
            {mode === TYPE_MANAGEMENT.MODE_CREATE ? (
              <ButtonBase category="create"></ButtonBase>
            ) : mode === TYPE_MANAGEMENT.MODE_DETAIL ? (
              <ButtonBase category="goUpdate"></ButtonBase>
            ) : (
              <>
                <ButtonBase category="update"></ButtonBase>
                <ButtonBase category="remove"></ButtonBase>
              </>
            )}
            <ButtonBase category="back"></ButtonBase>
          </FormFooterTemplate>
        </FormTemplate>
      </CardLayoutTemplate>

      {/* Form base */}
      <CardLayoutTemplate
        className="mt-7"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"Mẫu Form Search"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        {/* form crud */}
        <FormSearchTemplate footer={
              <>
                <ButtonBase category="clearForm"></ButtonBase>
                <ButtonBase category="search"></ButtonBase>
              </>}>
          {/* content form crud */}

          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>

          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
          {/* Input form template */}
          <FormSearchChildTemplate label={"Input template"}>
            <InputTextTemplate mode={mode} name="input" control={control} />
          </FormSearchChildTemplate>
        </FormSearchTemplate>
      </CardLayoutTemplate>

      {/* Form base */}
      <CardLayoutTemplate
        className="mt-7 mb-3"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"Table Template"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        <TableBasic columns={columns}></TableBasic>
      </CardLayoutTemplate>

      <TextTemplate className="text-lg mb-4">Form Table</TextTemplate>
      <TableTemplate
        title={() => (
          <>
            <FontAwesomeBase className="mr-2" iconName={"list"} />{" "}
            {t("titleTable")}
          </>
        )}
        active={
          <>
            <ButtonBase
              category="bassic"
              className="mx-2 btn btn__header__table btn__create"
              icon={<FontAwesomeBase className="mr-1" iconName={"plus"} />}
            >
              {t("common.button.create")}
            </ButtonBase>
          </>
        }
        onChange={() => {
          alert("Change");
        }}
        handlePageSizeChange={() => {
          alert("Change");
        }}
        handlePaginationChange={() => {
          alert("Change");
        }}
        columns={columns}
        dataSource={[]}
        loading={false}
        skeleton={false}
        paginationProp={{
          current: 1,
          size: 10,
          total: 1,
        }}
      ></TableTemplate>

      {/* Form base */}
      <CardLayoutTemplate
        className="mt-7 mb-3"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"Avatar and Divider Template"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        <Space size={16} wrap>
          <AvatarTemplate
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
          <DividerTemplate type="vertical" />
          <AvatarTemplate>U</AvatarTemplate>
          <DividerTemplate type="vertical" />
          <AvatarTemplate size={40}>USER</AvatarTemplate>
          <DividerTemplate type="vertical" />
          <AvatarTemplate src={logo} />
          <DividerTemplate type="vertical" />
          <AvatarTemplate src={<img src={logo} alt="avatarAvatarTemplate" />} />
          <DividerTemplate type="vertical" />
          <AvatarTemplate
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          >
            U
          </AvatarTemplate>
          <DividerTemplate type="vertical" />
          <AvatarTemplate
            style={{ backgroundColor: "#87d068" }}
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
        </Space>
        <DividerTemplate orientation="left">
          Group Avater Template
        </DividerTemplate>

        <Avatar.Group>
          <AvatarTemplate src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <a href="https://ant.design">
            <AvatarTemplate style={{ backgroundColor: "#f56a00" }}>
              K
            </AvatarTemplate>
          </a>
          <Tooltip title="Ant User" placement="top">
            <AvatarTemplate
              style={{ backgroundColor: "#87d068" }}
              icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
            />
          </Tooltip>
          <AvatarTemplate
            style={{ backgroundColor: "#1677ff" }}
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
        </Avatar.Group>
        <DividerTemplate />
        <Avatar.Group
          max={{
            count: 2,
            style: { color: "#f56a00", backgroundColor: "#fde3cf" },
          }}
        >
          <AvatarTemplate src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
          <AvatarTemplate style={{ backgroundColor: "#f56a00" }}>
            K
          </AvatarTemplate>
          <Tooltip title="Ant User" placement="top">
            <AvatarTemplate
              style={{ backgroundColor: "#87d068" }}
              icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
            />
          </Tooltip>
          <AvatarTemplate
            style={{ backgroundColor: "#1677ff" }}
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
        </Avatar.Group>
        <DividerTemplate />
        <Avatar.Group
          size="large"
          max={{
            count: 2,
            style: { color: "#f56a00", backgroundColor: "#fde3cf" },
          }}
        >
          <AvatarTemplate src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
          <AvatarTemplate style={{ backgroundColor: "#f56a00" }}>
            K
          </AvatarTemplate>
          <Tooltip title="Ant User" placement="top">
            <AvatarTemplate
              style={{ backgroundColor: "#87d068" }}
              icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
            />
          </Tooltip>
          <AvatarTemplate
            style={{ backgroundColor: "#1677ff" }}
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
        </Avatar.Group>
        <DividerTemplate />
        <Avatar.Group
          size="large"
          max={{
            count: 2,
            style: {
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            },
            popover: { trigger: "click" },
          }}
        >
          <AvatarTemplate src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <AvatarTemplate style={{ backgroundColor: "#f56a00" }}>
            K
          </AvatarTemplate>
          <Tooltip title="Ant User" placement="top">
            <AvatarTemplate
              style={{ backgroundColor: "#87d068" }}
              icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
            />
          </Tooltip>
          <AvatarTemplate
            style={{ backgroundColor: "#1677ff" }}
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
        </Avatar.Group>
        <DividerTemplate />
        <Avatar.Group shape="square">
          <AvatarTemplate style={{ backgroundColor: "#fde3cf" }}>
            A
          </AvatarTemplate>
          <AvatarTemplate style={{ backgroundColor: "#f56a00" }}>
            K
          </AvatarTemplate>
          <AvatarTemplate
            style={{ backgroundColor: "#87d068" }}
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
          <AvatarTemplate
            style={{ backgroundColor: "#1677ff" }}
            icon={<FontAwesomeBase iconName={"home"}></FontAwesomeBase>}
          />
        </Avatar.Group>
      </CardLayoutTemplate>

      {/* Form base */}
      <CardLayoutTemplate
        className="mt-7 mb-3"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"Textediter Template"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        <TextEditTemplate
          columns={columns}
          height={300}
          name={"textEditer"}
          mode={TYPE_MANAGEMENT.MODE_CREATE}
          control={control}
        ></TextEditTemplate>
      </CardLayoutTemplate>

      {/* Input File base */}
      <CardLayoutTemplate
        className="mt-7 mb-3"
        title={() => (
          <>
            <FontAwesomeBase
              className="mr-3"
              iconName={"home"}
            ></FontAwesomeBase>
            {"File Image Template"} // Mẫu sẽ được update theo figma
          </>
        )}
      >
        <TextTemplate className="text-lg mb-4">Upload file</TextTemplate>
        <InputFileTemplate
          columns={columns}
          name={"textEditer"}
          mode={TYPE_MANAGEMENT.MODE_CREATE}
          control={control}
        ></InputFileTemplate>
        <br/>

        <TextTemplate className="text-lg mb-4">Preview Bassic</TextTemplate>
        <br/>

        <PreviewTemplate
          category="Image"
          data={[
            {
              width: 200,
              src: "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-clouds-and-flowers-in-pink-landscape-image_2945381.jpg",
            },
          ]}
        ></PreviewTemplate>
        <br/>

        <TextTemplate className="text-lg mb-4">Preview List</TextTemplate>
        <br/>
        <PreviewTemplate
          category="Image"
          data={[
            {
              width: 200,
              src: "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-clouds-and-flowers-in-pink-landscape-image_2945381.jpg",
            },
            {
              width: 200,
              src: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg",
            },
          ]}
        ></PreviewTemplate>
        <br/>

        <TextTemplate className="text-lg mb-4">
          Preview a collection from one image.
        </TextTemplate>
        <br/>
        <PreviewTemplate
          category="Image"
          data={[
            {
              width: 200,
              src: "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-clouds-and-flowers-in-pink-landscape-image_2945381.jpg",
            },
          ]}
          srcImage={[
            "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-clouds-and-flowers-in-pink-landscape-image_2945381.jpg",
            "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-dien-thoai-35.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sxBlxs9by-D43ovCOqtwBJbc6w0ZbNzVeLOQoMQf5Am8Bvhe0tQNYePvivVQ6vB8beg&usqp=CAU",
          ]}
        ></PreviewTemplate>
        <br/>

        <TextTemplate className="text-lg mb-4">Video Preview.</TextTemplate>
        <br/>
        <PreviewTemplate
          category="Video"
          srcDefault={{
            width: 200,
            src: "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-clouds-and-flowers-in-pink-landscape-image_2945381.jpg",
          }}
          srcVideo={
            "https://hls.tuoitre.vn/tuoitre/animated_thumb/p_00:00:10/471584752817336320/2024/6/11/chay-rung-1718093153754294046332.mp4"
          }
          styleVideo={{ width: 900 }}
        ></PreviewTemplate>
        <br/>
      </CardLayoutTemplate>
    </>
  );
}

export default memo(TemplateUi);
