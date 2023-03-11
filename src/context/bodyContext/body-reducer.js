import { BodyActions } from './body-actions';

export const BodyInitState = {
  steps: [
    {
      order: 1,
      name: 'brand',
      data: 'brands',
      type: 'simpleCard',
      isFirstStep: true,
      title: 'برند خودرو شما چیه',
    },
    {
      order: 2,
      name: 'car',
      data: 'cars',
      type: 'simpleCard',
      parent: 'brands',
      relatedValue: 'brand',
      title: 'خودروتون رو انتخاب کنید',
    },
    {
      order: 3,
      name: 'usage',
      data: 'usage',
      type: 'radioGroup',
      title: 'نوع کاربری وسیله نقلیه خود را انتخاب نمایید',
    },
    {
      order: 4,
      name: 'year',
      data: 'years',
      type: 'simpleCard',
      title: 'سال ساخت خودرو',
    },
    {
      order: 5,
      name: 'importType',
      data: 'importTypes',
      type: 'simpleCard',
      title: 'خودروی شما تولید داخل است یا وارداتی ؟',
    },
    {
      order: 6,
      name: 'newCar',
      data: 'newCar',
      type: 'simpleCard',
      title: 'خودرو صفر کیلومتر است؟',
    },
    {
      order: 7,
      name: 'prevInsuranceStatus',
      data: 'prevInsuranceStatus',
      type: 'simpleCard',
      skipValue: 'بیمه قبلی نداشتم',
      title: 'وضعیت بیمه نامه قبلی',
    },
    {
      order: 8,
      name: 'prevInsuranceOffYear',
      data: 'prevInsuranceOffYear',
      type: 'simpleCard',
      hasSkipValue: 'بیمه قبلی نداشتم',
      relatedValue: 'prevInsuranceStatus',
      title: 'تعداد سال تخفیف عدم خسارت بیمه بدنه',
    },
    {
      order: 9,
      name: 'insuranceOffYear',
      data: 'insuranceOffYear',
      type: 'simpleCard',
      isLastStep: true,
      title: 'تخفیف عدم خسارت ثالث',
    },
  ],
  vehicleDetail: {},
  activeStepIndex: 0,
};

export const BodyReducer = (state = BodyInitState, action) => {
  switch (action.type) {
    case BodyActions.SET_ACTIVE_STEP_INDEX: {
      return {
        ...state,
        activeStepIndex: action.payload,
      };
    }

    case BodyActions.SET_VEHIVLE_DETAIL: {
      return {
        ...state,
        vehicleDetail: action.payload,
      };
    }

    default:
      return state;
  }
};
