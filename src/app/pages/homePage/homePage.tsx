import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import * as deliveriesActions from "src/redux/actions/deliveriesActions";
import * as deliveriesTypes from "src/redux/types/deliveriesTypes";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

interface StateProps {
  deliveries: deliveriesTypes.DeliveriesState;
}

interface Props extends StateProps {
  fetchDeliveries: deliveriesTypes.FetchDeliveries;
  fetchClientDeliveries: deliveriesTypes.FetchClientDeliveries;
  fetchDelivery: deliveriesTypes.FetchDelivery;
}

const Home: React.FC<Props> = ({
  deliveries,
  fetchDeliveries,
  fetchClientDeliveries,
  fetchDelivery,
}) => {
  const history = useHistory();
  const { isAuthenticated, user } = useAuth0();

  React.useEffect(() => {
    // fetchDeliveries();
    fetchClientDeliveries(1);
    fetchDelivery(6);
  }, [fetchClientDeliveries, fetchDeliveries, fetchDelivery]);

  return (
    <>
      <h1>This is the home page</h1>
      <p>User Info:</p>
      <p>{`First Name: ${isAuthenticated && user.given_name}`}</p>
      <p>{`Last Name: ${isAuthenticated && user.family_name}`}</p>
      <p>{`Email: ${isAuthenticated && user.email}`}</p>
      <div>
        <Button onClick={() => history.push("/about")} type="primary">
          Go to the about page
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  deliveries: state.deliveries,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchDeliveries: () => dispatch(deliveriesActions.fetchDeliveries()),
  fetchClientDeliveries: (clientId: number) =>
    dispatch(deliveriesActions.fetchClientDeliveries(clientId)),
  fetchDelivery: (deliveryId: number) =>
    dispatch(deliveriesActions.fetchDelivery(deliveryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
