import { Image, ImageProps } from "antd";
import React, { memo } from "react";
import { PreviewType } from "../../interface/constants/type/Type.const";

interface Props extends ImageProps {
  data?: DataPreview[];
  category: PreviewType;
  srcDefault?: DataPreview;
  srcImage?: string[];
  srcVideo?: string;
  styleVideo?: React.CSSProperties;
}

export interface DataPreview {
  width: number;
  src: string;
}

const PreviewTemplate: React.FC<Props> = ({ data, srcImage, category, srcDefault, srcVideo, styleVideo }) => {
  return (
    <>
      {category === "Image" ? (
        <Image.PreviewGroup
          items={srcImage}>
          {
            data && data.map(el => (<>
              <Image
                width={el.width}
                src={el.src}
              />
            </>))
          }
        </Image.PreviewGroup>
      ) : category === "Video" ? (
          <Image
            preview={{
              destroyOnClose: true,
              imageRender: () => (
                <video
                  muted
                  width="100%"
                  controls
                  style={styleVideo}
                  src={srcVideo}
                />
              ),
              toolbarRender: () => null,
            }}
            width={srcDefault?.width}
            src={srcDefault?.src}
          />
      ) : (
        ""
      )}
    </>
  );
};

export default memo(PreviewTemplate);
