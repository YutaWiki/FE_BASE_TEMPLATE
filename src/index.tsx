import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Provider } from 'react-redux';
import { store } from './app/store';
import { I18nextProvider } from 'react-i18next';

import { GlobalLoadingProvider } from './components/global-loading/GlobalLoading';
import { ModalNotificationTemplate } from './components/notification-base/ModalNotificationTemplate';
import { NotificationProvider } from './components/notification-base/NotificationTemplate';
import i18n from './i18n';

library.add(fas, fab, far);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <GlobalLoadingProvider>
        <ModalNotificationTemplate>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </ModalNotificationTemplate>
      </GlobalLoadingProvider>
    </I18nextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
