import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { memo } from "react";

const FontAwesomeBase = ({iconName, ...restProps}) => {
    return <>
        <FontAwesomeIcon icon={["fa", iconName]} className={`icon__custom text-gray-500 ${restProps.className}`}
            {...restProps} />
    </>
};

export default memo(FontAwesomeBase);