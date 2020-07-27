import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import DeliveriesPage from "@pages/deliveriesPage/deliveriesPage";
import LocationsPage from "@pages/locationsPage/locationsPage";
import ErrorPage from "@pages/errorPage/errorPage";
import HomePage from "@pages/homePage/homePage";

// master list of roles used in this app
type Roles = "admin" | "basicUser" | "paidUser";

interface Routes {
  allIds: string[];
  byId: {
    [key: string]: {
      Component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
      path: string;
      requiredRoles: Roles[];
    };
  };
}

export const routeConstants: string[] = [
  "error",
  "home",
  "deliveries",
  "locations",
];

export const routes: Routes = {
  allIds: ["deliveries", "error", "home", "locations"],
  byId: {
    deliveries: {
      requiredRoles: [],
      Component: DeliveriesPage,
      path: "/deliveries",
    },
    locations: {
      requiredRoles: [],
      Component: LocationsPage,
      path: "/locations",
    },
    error: { requiredRoles: [], Component: ErrorPage, path: "/error" },
    home: { requiredRoles: [], Component: HomePage, path: "/home" },
  },
};
