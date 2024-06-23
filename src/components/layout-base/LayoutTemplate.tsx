import React, { memo, useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  Row,
  Select,
  Space,
} from "antd";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../interface/constants/languages";
import { GetMenu, SetMenu } from "../../app/reducers/common/Menu/Menu.reducer";
// import { MenuAPI } from "../../api/common/menu.api";
import { Link } from "react-router-dom";
import { BreakcrumbType } from "../../interface/constants/router/RouterType.type";
import "animate.css";
import "./index.css";
import FontAwesomeBase from "../font-awesome/FontAwesomeBase";
import { IMenu } from "../../interface/common/Menu.interface";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeLanguage } from "../../i18n";
import logo from "../../assets/images/logo/image.png";
import english from "../../assets/images/language/en.svg";
import vietnam from "../../assets/images/language/vietnam.png";
import japan from "../../assets/images/language/japan.png";
// import SearchTemplate from "../input-form/SearchTemplate";
import TitleTemplate from "../lable-base/TitleTemplate";
import useLocalStorage from "use-local-storage";
import DividerTemplate from "../divider-base/DividerTemplate";
import NotificationTemplate from "./NotificationTemplate";

const getLogoLanguage = (selectedLanguage:string) => {
  switch (selectedLanguage) {
    case "vi": return (<img src={vietnam} className="mr-2 border-dashed border-1 border-sky-500 " />);
    case "en": return (<img src={english} className="mr-2 border-dashed border-1 border-sky-500 " />);
    case "jp": return (<img src={japan} className="mr-2 border-dashed border-1 border-sky-500 " />);
  }
  return (<></>);
}

const { Header, Content, Sider } = Layout;

interface LayoutTemplateProps {
  children: React.ReactNode;
  title: string;
  breakcrumb: BreakcrumbType[];
}

type MenuItem = Required<MenuProps>["items"][number];
const LayoutTemplate: React.FC<LayoutTemplateProps> = ({
  children,
  title,
  breakcrumb,
}) => {
  const [userName, setUserName] = useState<String>("Admin")

  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language
  );

  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">{ t('menuItem.profile') }</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">{ t('menuItem.setting') }</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <a href="https://www.aliyun.com">{ t('menuItem.logout') }</a>,
      key: "2",
    },
  ];
  // FIX Cứng menu
  const menu = [
    {
      id: "bd7bc0b3-b7f7-480a-b82e-b10d41801a20",
      code: "QLHT",
      name: "Hệ thống",
      url: "/super-admin/system-management",
      icon: "circle-exclamation",
      parentId: null,
      orderBy: 0,
      type: "base.common.code.object.menu",
    },
    {
      id: "4af9696b-82ea-4a3b-a61d-bdba2ee774dc",
      code: "QLTT",
      name: "Thông tin",
      url: "/super-admin/information",
      icon: "gear",
      children: [
        {
          id: "fe287cf2-34ff-404f-b4f0-283ce36f81dc",
          code: "QLTT_QLGDV",
          name: "Gói dịch vụ",
          url: "/super-admin/information/premium",
          icon: "gear",
          children: [],
          parentId: "4af9696b-82ea-4a3b-a61d-bdba2ee774dc",
          orderBy: 0,
          type: "base.common.code.object.menu",
        },
        {
          id: "20b92710-0777-470f-aabf-7e24d5dea767",
          code: "QLTT_QLNV",
          name: "Nhân viên",
          url: "/super-admin/information/staff-info",
          icon: "gear",
          children: [],
          parentId: "4af9696b-82ea-4a3b-a61d-bdba2ee774dc",
          orderBy: 1,
          type: "base.common.code.object.menu",
        },
        {
          id: "813a08b2-8d53-4212-8f68-fea1393763f6",
          code: "QLTT_QLND",
          name: "Người dùng",
          url: "/super-admin/information/client-info",
          icon: "gear",
          children: [],
          parentId: "4af9696b-82ea-4a3b-a61d-bdba2ee774dc",
          orderBy: 2,
          type: "base.common.code.object.menu",
        },
      ],
      parentId: null,
      orderBy: 1,
      type: "base.common.code.object.menu",
    },
    {
      id: "078f10b7-2e67-4249-b469-07bcccedb209",
      code: "DEVELOPER",
      name: "Developer",
      url: "/super-admin/developer",
      icon: "code",
      children: [
        {
          id: "30e84b08-5f9e-4d6f-a678-28e2a62f99e6",
          code: "QLHT_JWT",
          name: "Json token",
          url: "/super-admin/developer/json-token",
          icon: "info",
          children: [],
          parentId: "078f10b7-2e67-4249-b469-07bcccedb209",
          orderBy: 4,
          type: "base.common.code.object.menu",
        },
      ],
      parentId: null,
      orderBy: 0,
      type: "base.common.code.object.menu",
    },
  ] as IMenu[];

  const data = useAppSelector(GetMenu);
  const dispatch = useAppDispatch();

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    setIsDark(false);
    if (data && data.length === 0) {
      // MenuAPI.getMenu().then((result: any) => {
      dispatch(SetMenu(menu));
      // });
    }
  }, [dispatch]);

  const onChangeLang = (langCode: string) => {
    setSelectedLanguage(langCode);
    changeLanguage(langCode);
  };

  function buildMenuTree(menuList: IMenu[]): MenuItem[] {
    return menuList.map((el) => {
      if (el.childId && el.childId.length > 0) {
        return getItem(
          <Link to={el.url ?? ""}>
            <span style={{ marginLeft: 15, marginRight: 15 }}>{el.name}</span>
          </Link>,
          el.url + "",
          buildMenuTree(el.childId),
          <FontAwesomeBase iconName={el.icon ?? ""} />
        );
      }
      if (el.parentId == null) {
        return getItem(
          <Link to={el.url ?? ""}>
            <span style={{ marginLeft: 15, marginRight: 15 }}>{el.name}</span>
          </Link>,
          el.url + "",
          undefined,
          <FontAwesomeBase iconName={el.icon ?? ""} />
        );
      }
      return getItem(
        <Link to={el.url ?? ""}>
          <span style={{ marginLeft: 15, marginRight: 15 }}>{el.name}</span>
        </Link>,
        el.url + ""
      );
    });
  }

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    icon?: React.ReactNode
  ): MenuItem {
    return {
      key,
      children,
      label,
      icon,
    } as MenuItem;
  }

  return (
    <Layout className="min-h-svh" data-theme={isDark ? "dark" : "light"}>
      <Drawer
        id="drawer_ui"
        title={false}
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        key={"left"}
        width={250}
      >
        <Layout
          id="layout_drawer"
          style={{ background: "#fff", overflowX: "hidden" }}
          className={` bg-white layout-dashboard`}
        >
          <Row className="flex justify-center align-middle mt-5 pb-8">
            <div className="brand text-center">
              <Link to="/" className="active">
                <img src={logo} alt="" />
              </Link>
            </div>
          </Row>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={buildMenuTree(data)}
          />
        </Layout>
      </Drawer>
      <Layout>
        <Header
          className="shadow-md"
          style={{
            position: "fixed",
            top: 0,
            zIndex: 100,
            width: "100%",
            display: "flex",
            height: 60,
            padding: "0 24px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="flex items-center ml-[14px]">
            <div id="logo_id">
              <img src={logo} className="w-[50px]" alt="" />
            </div>
            <div>
              {/* show sider */}
              <Button
                type="text"
                id="btn__sider"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 45,
                  height: 45,
                  margin: "5px 0 ",
                  display: "none"
                }}
              />
              {/* show drawer */}
              <Button
                type="text"
                id="btn__drawer"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setVisible(true)}
                style={{
                  fontSize: "16px",
                  width: 45,
                  height: 45,
                  margin: "5px 0 ",
                }}
              />
            </div>
          </div>
          {/* <div className="flex items-center">
            <SearchTemplate></SearchTemplate>
          </div> */}
          <div className="flex items-center mr-[14px]">
            <Select
              className="border-0 change__language"
              suffixIcon={null}
              defaultValue={i18n.language}
              onChange={onChangeLang}
              value={selectedLanguage}
              options={LANGUAGES.map(({ code, label }) => ({
                value: code,
                label: <div className="flex items-center">{getLogoLanguage(code)}{label}</div>,
              }))}
            />
            <DividerTemplate type="vertical" />
            <div className="px-[11px]">
              <Dropdown className="cursor-pointer" menu={ {items} } trigger={['click']}>
                <Space>
                  <Avatar src={logo}></Avatar>
                  <span>{t('hi')}{userName}</span>
                </Space>
              </Dropdown>
            </div>
          <DividerTemplate type="vertical" />
            <Dropdown key={"notification__custom"} open={true} className="cursor-pointer notification__custom" 
              overlay={
                  <NotificationTemplate></NotificationTemplate>
              }
             trigger={['hover']}>
                <Space>
                  <Badge count={1} size="small" overflowCount={10}>
                    <FontAwesomeBase className="text-base" iconName={"bell"} />
                  </Badge>
                </Space>
              </Dropdown>
          </div>
        </Header>
        <Layout className="mt-[60px]">
          <Sider
            id="sider_ui"
            trigger={null}
            collapsible
            collapsed={collapsed}
            className="shadow-md"
          >
            <div
              className="mt-4"
              style={{
                width: collapsed ? "80px" : "200px",
                position: "fixed",
                top: 60,
                transition: "all 0.2s",
              }}
            >
              {/* <div>
                <img src={logo} alt="" />
              </div> */}
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={buildMenuTree(data)}
              />
            </div>
          </Sider>
          {/* animate__animated animate__bounceInRight  */}
          <Content className={`my-[30px] mx-[40px] h-screen"`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TitleTemplate
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 0,
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                <img style={{ width: 35, marginRight: 8 }} src={logo} alt="" />
                {t(title)}
              </TitleTemplate>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link to={"/"}>
                    <HomeOutlined />
                  </Link>
                </Breadcrumb.Item>
                {breakcrumb.map((el) => {
                  return (
                    <>
                      <Breadcrumb.Item key={el.name}>
                        <Link to={el.path} key={el.name}>
                          {t(el.name)}
                        </Link>
                      </Breadcrumb.Item>
                    </>
                  );
                })}
              </Breadcrumb>
            </div>
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default memo(LayoutTemplate);
