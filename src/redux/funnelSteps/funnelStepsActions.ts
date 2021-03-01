import * as funnelStepsTypes from './funnelStepsTypes';
import api from 'src/api/api';

// ------ SIMPLE ACTIONS ------ //

// fetch all funnelSteps
export const fetchFunnelStepsStart = () => ({
  type: funnelStepsTypes.FETCH_FUNNEL_STEPS_START,
});

export const fetchFunnelStepsSuccess: funnelStepsTypes.FetchSuccess = (data) => ({
  type: funnelStepsTypes.FETCH_FUNNEL_STEPS_SUCCESS,
  data,
});

export const fetchFunnelStepsFailed = () => ({
  type: funnelStepsTypes.FETCH_FUNNEL_STEPS_FAILED,
});

// fetch a single funnelStep
export const fetchFunnelStepStart = () => ({
  type: funnelStepsTypes.FETCH_FUNNEL_STEP_START,
});

export const fetchFunnelStepSuccess: funnelStepsTypes.FetchSuccess = (data) => ({
  type: funnelStepsTypes.FETCH_FUNNEL_STEP_SUCCESS,
  data,
});

export const fetchFunnelStepFailed = () => ({
  type: funnelStepsTypes.FETCH_FUNNEL_STEP_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// fetch all funnelSteps
export const fetchFunnelSteps: funnelStepsTypes.FetchFunnelSteps = () => async (
  dispatch
) => {
  try {
    dispatch(fetchFunnelStepsStart());
    const response = await api.get('funnel-steps');
    dispatch(fetchFunnelStepsSuccess(response));
  } catch (error) {
    dispatch(fetchFunnelStepsFailed());
  }
};

// fetch a single funnelStep
export const fetchFunnelStep: funnelStepsTypes.FetchFunnelStep = (
  funnelStepId: number
) => async (dispatch) => {
  try {
    dispatch(fetchFunnelStepStart());
    const response = await api.get(`funnel-steps/${funnelStepId}`);
    dispatch(fetchFunnelStepSuccess(response));
  } catch (error) {
    dispatch(fetchFunnelStepFailed());
  }
};
