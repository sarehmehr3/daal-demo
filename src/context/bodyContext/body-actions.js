export const BodyActions = {
  SET_ACTIVE_STEP_INDEX: 'SET_ACTIVE_STEP_INDEX',
  setActiveStepIndex: function (activeStepIndex) {
    return {
      type: this.SET_ACTIVE_STEP_INDEX,
      payload: activeStepIndex,
    };
  },

  SET_VEHIVLE_DETAIL: 'SET_VEHIVLE_DETAIL',
  setVehicleDetail: function (vehicleDetail) {
    return {
      type: this.SET_VEHIVLE_DETAIL,
      payload: vehicleDetail,
    };
  },
};
