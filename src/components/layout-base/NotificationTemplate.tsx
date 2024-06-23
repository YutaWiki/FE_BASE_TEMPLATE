import React, { memo } from "react";
import { Avatar, Menu } from "antd";
import logo from "../../assets/images/logo/image.png";
import ButtonBase from "../button-base/ButtonBase";
import FontAwesomeBase from "../font-awesome/FontAwesomeBase";

const NotificationTemplate: React.FC<any> = () => {
  return (
    <>
      <Menu className="w-[400px]">
        <div className="notification__header">
          <div>
            <div>
              <h1 className="font-bold text-xl">Thông báo</h1>
              <span>
                <ButtonBase category="bassic" icon={<FontAwesomeBase iconName={'ellipsis'}></FontAwesomeBase>}>

                </ButtonBase>
              </span>
            </div>
          </div>
        </div>
        <div className="notification__content">
          <Menu.Item>
            <div className="flex">
              <div>
                <Avatar className="w-[45px] h-[45px] border-solid border-1 border-gray-300" src={logo}></Avatar>
              </div>
              <div className="ml-3">
                <span className="notification__title"><span className="font-bold">Admin</span> đã phê duyệt bài viết của bạn</span>
              </div>
              <div>

              </div>
            </div>
          </Menu.Item>
        </div>
        <div className="notification__footer">

        </div>
      </Menu>
    </>
  );
};

export default memo(NotificationTemplate);
