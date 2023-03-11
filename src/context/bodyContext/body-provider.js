import { BodyActions } from './body-actions';
import { BodyInitState, BodyReducer } from './body-reducer';
import { createContext, useContext, useMemo, useReducer } from 'react';

export const BodyContext = createContext();

const BodyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BodyReducer, BodyInitState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  const selectVehicleDetail = (name, value) => () => {
    const { activeStepIndex, steps, vehicleDetail } = state;
    const activeStep = steps[activeStepIndex];
    dispatch(
      BodyActions.setVehicleDetail({
        ...state.vehicleDetail,
        [name]: value,
      })
    );

    !activeStep.isLastStep &&
      dispatch(
        BodyActions.setActiveStepIndex(
          activeStep.skipValue && activeStep.skipValue === value
            ? state.activeStepIndex + 2
            : state.activeStepIndex + 1
        )
      );
  };

  return (
    <BodyContext.Provider {...{ value: { ...value, selectVehicleDetail } }}>
      {children}
    </BodyContext.Provider>
  );
};

const useBodyState = () => {
  const bodyContext = useContext(BodyContext);
  if (!bodyContext) {
    throw new Error('useBodyState must be used within a BodyProvider');
  }

  return bodyContext;
};

export { BodyProvider, useBodyState };
