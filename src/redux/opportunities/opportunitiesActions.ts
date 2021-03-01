import * as opportunitiesTypes from './opportunitiesTypes';
import api from 'src/api/api';

// ------ SIMPLE ACTIONS ------ //

// fetch all opportunities
export const fetchOpportunitiesStart = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITIES_START,
});

export const fetchOpportunitiesSuccess: opportunitiesTypes.FetchSuccess = (data) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITIES_SUCCESS,
  data,
});

export const fetchOpportunitiesFailed = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITIES_FAILED,
});

// fetch a single opportunity
export const fetchOpportunityStart = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_START,
});

export const fetchOpportunitySuccess: opportunitiesTypes.FetchSuccess = (data) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_SUCCESS,
  data,
});

export const fetchOpportunityFailed = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// fetch all opportunities
export const fetchOpportunities: opportunitiesTypes.FetchOpportunities = () => async (
  dispatch
) => {
  try {
    dispatch(fetchOpportunitiesStart());
    const response = await api.get('opportunities');
    dispatch(fetchOpportunitiesSuccess(response));
  } catch (error) {
    dispatch(fetchOpportunitiesFailed());
  }
};

// fetch a single opportunity
export const fetchOpportunity: opportunitiesTypes.FetchOpportunity = (
  opportunityId: number
) => async (dispatch) => {
  try {
    dispatch(fetchOpportunityStart());
    const response = await api.get(`opportunities/${opportunityId}`);
    dispatch(fetchOpportunitySuccess(response));
  } catch (error) {
    dispatch(fetchOpportunityFailed());
  }
};
