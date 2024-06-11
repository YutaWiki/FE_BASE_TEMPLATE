import React, { memo, useState } from "react";
import { Upload, message, UploadFile, Image } from "antd";
import type { UploadProps } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import "./index.css";
import { useTranslation } from "react-i18next";
import ButtonBase from "../button-base/ButtonBase";
import { useModalProvider } from "../notification-base/ModalNotificationTemplate";
import { AppConfig } from "../../AppConfig";
import { useNotification } from "../notification-base/NotificationTemplate";

const InputFileTemplate: React.FC<any> = ({
  children,
  loading,
  icon,
  onClick,
  ...restProps
}) => {

    const {t} = useTranslation();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { openModal } = useModalProvider();
  const { openNotification } = useNotification();
  const props: UploadProps = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file);
        setFileList([...info.fileList]);
        openNotification(
          "success",
          t("common.notification.success"),
          t("common.inputFile.success")
        )
      }
    },
    onRemove(file) {
      openModal(
        "confirm",
        t("common.confirm.title"),
        t("common.inputFile.confirm"),
        () => {
          const updatedFileList = fileList.filter(f => f.uid !== file.uid);
          setFileList(updatedFileList);
        }
      );
    },
    showUploadList: false,
  };

  const beforeUpload = (file: File) => {
    const isWithinSizeLimit = file.size / 1024 / 1024 < AppConfig.MaxSize;
    if (!isWithinSizeLimit) {
      openModal(
        "error",
        t("common.notification.error"),
        t("common.inputFile.validateFile.maxSize"),
        () => {}
      );
      return Upload.LIST_IGNORE;
    }
    return true;
  };
  
  const handleDownload = (file: UploadFile) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file.originFileObj as Blob); 
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      <Upload beforeUpload={beforeUpload} {...props}>
        <ButtonBase category={'bassic'} icon={<UploadOutlined />}>{t("common.inputFile.upload")}</ButtonBase>
      </Upload>

      <div className="file-list ml-4">
        {fileList.map(file => (
          <div key={file.uid} className="file-item my-1">
            <span onClick={() => handleDownload(file)} className="text-blue-500 cursor-pointer hover:opacity-80">{file.name}</span>
            <DeleteOutlined
              style={{ color: "red", cursor: "pointer", marginLeft: 10 }}
              onClick={() => props.onRemove!(file)}
            />
          </div>
        ))}
      </div>
      <div className="file-list ml-4">
        {fileList.map(file => (
          <>
            {file.type?.startsWith('image/') && (
                <Image
                    className="mr-4 cursor-pointer"
                    src={URL.createObjectURL(file.originFileObj as Blob)}
                />
            )}
          </>
        ))}
      </div>
      
    </>
  );
};

export default memo(InputFileTemplate);
