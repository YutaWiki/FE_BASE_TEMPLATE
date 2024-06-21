import { Button, Collapse } from "antd";
import React, { memo, useState } from "react";
import './index.css';

interface FormSearchTemplateProps {
    footer: React.ReactNode;
    children: React.ReactNode;
}
const FormSearchTemplate: React.FC<FormSearchTemplateProps> = ({
    footer,
    children
}) => {
  const { Panel } = Collapse;
  const [activeKeys, setActiveKeys] = useState<any>([]);

  // List of panel keys
  const panelKeys = ['1', '2', '3'];

  // Function to toggle all panels
  const toggleAll = () => {
    if (activeKeys.length === panelKeys.length) {
      // If all panels are open, close them
      setActiveKeys([]);
    } else {
      // Otherwise, open all panels
      setActiveKeys(panelKeys);
    }
  };
  return (
    <>
      <div>
      <Button onClick={toggleAll} style={{ marginBottom: '20px' }}>
        {activeKeys.length === panelKeys.length ? 'Collapse All' : 'Expand All'}
      </Button>
      <Collapse 
        activeKey={activeKeys}
        bordered={false}
        onChange={(keys) => setActiveKeys(keys)}>
        <Panel header="" key="1">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-2 xl:p-5">
            {children}
          </div>
          <div className="grid grid-cols-1 justify-center items-center h-full p-4 md:p-2 xl:p-5">
                <div className="col-span-1 text-center">
                    {footer}
                </div>
          </div>
        </Panel>
      </Collapse>
      </div>
    </>
  );
};

export default memo(FormSearchTemplate);
