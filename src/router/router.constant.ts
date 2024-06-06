import { RouterType } from "../interface/constants/router/RouterType.type";
import { TYPE_MANAGEMENT } from "../interface/constants/type/Type.const";
import templateUi from "../pages/templateUi";

const url = "/supper-admin";

export const ROUTER_BASE = {
  templateUi: {
    path: `${url}/template`,
    name: "templateUi",
    type: TYPE_MANAGEMENT.AUTH_GUARD,
    title: "templateUi.title",
    breakcrumb: [
      {
        orderBy: 1,
        name: "templateUi.breakcrumb.one",
        path: `${url}/template`,
      },
      {
        orderBy: 2,
        name: "templateUi.breakcrumb.two",
        path: `${url}/template`,
      },
    ],
    component: templateUi,
  } as RouterType,
};
