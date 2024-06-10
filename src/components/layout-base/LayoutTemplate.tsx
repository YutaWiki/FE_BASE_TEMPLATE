import React, { memo, useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Breadcrumb,
  Button,
  Drawer,
  Layout,
  Menu,
  Popover,
  Row,
  Select,
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
import SearchTemplate from "../input-form/SearchTemplate";

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

  useEffect(() => {
    if (data && data.length === 0) {
      // MenuAPI.getMenu().then((result: any) => {
      dispatch(SetMenu(menu));
      // });
    }
  }, [dispatch]);

  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language
  );
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
    <Layout className="min-h-svh">
      <Drawer
        id="drawer_ui"
        title={false}
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        key={"left"}
        width={250}
        style={{ background: "#fff", overflowX: "hidden" }}
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
            padding: 0,
            background: "#ffff",
            position: 'fixed',
            top: 0,
            zIndex: 100,
            width: "100%",
            display: "flex",
            height: 60,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="flex items-center ml-[14px]">
            <div id="logo_id">
              <img src={logo} className="w-[50px]" alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <SearchTemplate></SearchTemplate>
          </div>
          <div className="flex items-center mr-[14px]">
            <span>
              <Popover
                placement="bottomRight"
                title={null}
                content={
                  <>
                    <Select
                      defaultValue={i18n.language}
                      onChange={onChangeLang}
                      value={selectedLanguage}
                      options={LANGUAGES.map(({ code, label }) => ({
                        value: code,
                        label: label,
                      }))}
                    />
                  </>
                }
              >
                <CaretDownOutlined />
              </Popover>
            </span>
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
        </Header>
        <Layout>
          <Sider
            id="sider_ui"
            trigger={null}
            collapsible
            collapsed={collapsed}
            className="shadow-md"
            style={{
              background: "#ffff",
            }}
          >
            <div className="mt-4"
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
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 0,
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                <img
                  style={{ width: 35, marginRight: 8 }}
                  src="https://s3-alpha-sig.figma.com/img/c755/abbe/255d7752e7297398c9a6cc12cada9e3a?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coDENIIEPdA2C6c-cTaUpY1GX8tsiC0sTLrODO3NdEUeKadPXx7r~wrm4d9hR8J6oeGbu5rFOAsHAj3MQpnF--gG-hJnPRpE0H5-JBjm2FOZGtWu-OPr26KOdjN5IHgrVPFyBrz6LAFvhpxkQsw9xIa06N1HyDEA-k56Gv1lr5O7Stfa6XDIlLETO7NLyX2iU74od4GIXd8wLxRw1ziHsPP8dftZt4-RBbaAJzfix9R81KUJFm6w01fHeN6EYpxJhixdmjTVliryDU424RAoT~zXVDPkQlioXbo7BnBBxfH5BaclkIufKSBTNaHgcd6g4O2dtHZU-Kq36xnxVs8onQ__"
                  alt=""
                />
                {t(title)}
              </h2>
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
