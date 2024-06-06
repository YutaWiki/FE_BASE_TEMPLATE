import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTER_BASE } from "./router.constant";
import React, { memo } from 'react';
import LayoutTemplate from "../components/layout-base/LayoutTemplate";
import AuthGuard from "../guard/AuthGuard";
import { TYPE_MANAGEMENT } from "../interface/constants/type/Type.const";
import GuestGuard from "../guard/GuestGuard";
import { AppConfig } from "../AppConfig";
import LoginForm from "../pages/common/login-form";

function RouterRender() {
  return (
    <>
      <BrowserRouter basename={AppConfig.routerBase}>
        <Routes>
          <Route
            path="*"
            element={<span>404</span>}
          />
          <Route
            path="/layout-guard-roles"
            element={<span>403</span>}
          />

          <Route
            path="/"
            element={
              <Navigate
                replace
                to={ROUTER_BASE.templateUi.path}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginForm></LoginForm>
            }
          />
          {Object.entries(ROUTER_BASE).map(([key, router]) => (            
            React.createElement(Route, { path: router.path, key: router.name, element: (<>
            {router.type === TYPE_MANAGEMENT.AUTH_GUARD ? <>
              <AuthGuard>
                <LayoutTemplate key={key} title={router.title} breakcrumb={router.breakcrumb}>
                  { React.createElement(router.component) }
                </LayoutTemplate>
              </AuthGuard>
            </> : <>
              <GuestGuard>
                <LayoutTemplate key={key} title={router.title} breakcrumb={router.breakcrumb}>
                  { React.createElement(router.component) }
                </LayoutTemplate>
              </GuestGuard>
            </>}
            </>)})
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterRender;
