import React from "react";
import { useHistory } from "react-router";
import * as styles from "./navigation.module.less";
import { Tooltip, Button } from "antd";
import { CarOutlined, ShopOutlined, PlusOutlined } from "@ant-design/icons";

const Navigation = () => {
  const history = useHistory();
  return (
    <div className={styles.navigation}>
      <div className={styles.navItem}>
        <button className={styles.navButton} onClick={() => history.push("/")}>
          <img
            alt="logo"
            src="https://cdn.canopytax.com/static/primary-navbar/canopy-logo-light.svg"
          />
        </button>
      </div>
      <Tooltip title="Deliveries" placement="right">
        <div className={styles.navItem}>
          <button
            className={styles.navButton}
            onClick={() => history.push("/deliveries")}
          >
            <CarOutlined />
          </button>
        </div>
      </Tooltip>
      <Tooltip title="Locations" placement="right">
        <div className={styles.navItem}>
          <button
            className={styles.navButton}
            onClick={() => history.push("/locations")}
          >
            <ShopOutlined />
          </button>
        </div>
      </Tooltip>
      <Tooltip title="Create new" placement="right">
        <div className={styles.navItem}>
          <Button
            icon={<PlusOutlined />}
            shape="circle"
            type="primary"
            size="large"
          ></Button>
        </div>
      </Tooltip>
    </div>
  );
};

export default Navigation;
