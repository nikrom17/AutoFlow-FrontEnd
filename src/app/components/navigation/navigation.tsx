import * as React from 'react';
import { useHistory } from 'react-router';
import { Menu } from 'antd';
import { OrderedListOutlined, UserOutlined, FunnelPlotOutlined } from '@ant-design/icons';
import AddButtonPopover from '@components/AddButtonPopover/AddButtonPopover';
import * as styles from './navigation.module.less';

const Navigation = () => {
  const history = useHistory();
  return (
    <>
      <button className={styles.navButton} onClick={() => history.push('/')}>
        <img
          alt="logo"
          src="https://cdn.canopytax.com/static/primary-navbar/canopy-logo-light.svg"
        />
      </button>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="vertical"
        onSelect={({ key }) => history.push(`/${key}`)}
      >
        <Menu.Item key="todos" icon={<OrderedListOutlined height="1.5rem" />}>
          Todos
        </Menu.Item>
        <Menu.Item key="opportunities" icon={<FunnelPlotOutlined />}>
          Opportunities
        </Menu.Item>
        <Menu.Item key="leads" icon={<UserOutlined />}>
          Leads
        </Menu.Item>
      </Menu>
      <div className={styles.addButtonContainer}>
        <AddButtonPopover />
      </div>
    </>
  );
};

export default Navigation;
