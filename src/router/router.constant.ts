import { RouterType } from "../interface/constants/router/RouterType.type";
import { TYPE_MANAGEMENT } from "../interface/constants/type/Type.const";
import templateUi from "../pages/templateUi";

const url = "/supper-admin";

export const ROUTER_BASE = {
  templateUi: {
    path: `${url}/template`,
    name: "systemManagement",
    type: TYPE_MANAGEMENT.AUTH_GUARD,
    title: "systemManagement.title",
    breakcrumb: [
      {
        orderBy: 1,
        name: "systemManagement.breakcrumb",
        path: `${url}/template`,
      },
    ],
    component: templateUi,
  } as RouterType,
};
