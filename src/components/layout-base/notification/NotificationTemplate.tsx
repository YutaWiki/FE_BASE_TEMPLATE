import React, { memo, useState } from "react";
import { Avatar, Card, Dropdown, Menu, Space } from "antd";
import logo from "../../../assets/images/logo/image.png";
import ButtonBase from "../../button-base/ButtonBase";
import FontAwesomeBase from "../../font-awesome/FontAwesomeBase";
import GroupFilterTemplate from "../../group-filter/GroupFilterTemplate";

const NotificationTemplate: React.FC<any> = () => {
// Sử dụng một state để theo dõi id của radio button được chọn hiện tại
const [selectedRadio, setSelectedRadio] = useState<string | null>("aaaaa");

const handleRadioChange = (id: string, checked: boolean) => {
  if (checked) {
    setSelectedRadio(id);
  }
};

  return (
    <>
      <Menu key={"notification-1"}>
        {/* <div className="py-3 px-2">
          <div className="notification__header">
            <div>
              <div className="flex justify-between">
                <h1 className="font-bold text-xl">Thông báo</h1>
                <span>
                  <Dropdown
                    key={"notification__custom"}
                    className="cursor-pointer notification__custom"
                    overlay={
                      <Menu key={"setting-1"}>
                        <Menu.Item key={"setting-item-1"}>
                          <span>
                            <FontAwesomeBase
                              className="mr-3 text-xl"
                              iconName={"check"}
                            ></FontAwesomeBase>
                            Đánh dấu đọc tất cả đã đọc
                          </span>
                        </Menu.Item>
                        <Menu.Item key={"setting-item-2"}>
                          <span>
                            <FontAwesomeBase
                              className="mr-3 text-xl"
                              iconName={"gear"}
                            ></FontAwesomeBase>
                            Cài đặt thông báo
                          </span>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["click"]}
                  >
                    <Space>
                      <ButtonBase
                        category="icon"
                        icon={
                          <FontAwesomeBase
                            iconName={"ellipsis"}
                          ></FontAwesomeBase>
                        }
                      ></ButtonBase>
                    </Space>
                  </Dropdown>
                </span>
              </div>
            </div>
          </div>
          <div className="notification__tab mt-2 mb-2">
            <div>
              <GroupFilterTemplate
                id="aaaaa"
                name="radioGroup"
                checked={selectedRadio === "aaaaa"}
                onChange={handleRadioChange}
              >
                Tất cả
              </GroupFilterTemplate>
              <GroupFilterTemplate
                id="bbbbbbb"
                name="radioGroup"
                checked={selectedRadio === "bbbbbbb"}
                onChange={handleRadioChange}
              >
                Chưa đọc
              </GroupFilterTemplate>
            </div>
          </div>
          <div className="notification__goList">
              <div className="flex justify-between">
                <span className="text-base font-bold">Danh sách</span>
                <a>Xem tất cả</a>
              </div>
          </div>
          <div className="notification__content"> */}
            <Menu.Item style={{height: '75px'}} key={"notification-item-1"}>
              <div className="flex py-2">
                <div className="flex items-center">
                  <Avatar
                    className="w-[55px] h-[55px] border-solid border-1 border-gray-300"
                    src={logo}
                  ></Avatar>
                </div>
                <div className="ml-3">
                  <span className="notification__title">
                    <span className="font-bold">Admin</span> đã phê duyệt bài
                    viết của bạn
                  </span>
                </div>
                <div></div>
              </div>
            </Menu.Item>
          {/* </div>
          <div className="notification__footer">Xem thông báo trước đó</div>
        </div> */}
      </Menu>
    </>
  );
};

export default memo(NotificationTemplate);
