import clsx from 'clsx';
import { useMemo } from 'react';
import { bodyData } from '@/data/body.js';
import { BodyActions } from '@/context/bodyContext/body-actions';
import { useBodyState } from '@/context/bodyContext/body-provider';
import TypeCard from '@/features/body/components/type-cars/type-card';
import useStyles from './list-styles';

const List = () => {
  const classes = useStyles();

  const {
    state: { steps, activeStepIndex, vehicleDetail },
    dispatch,
  } = useBodyState();
  const step = steps[activeStepIndex];

  const list = useMemo(() => {
    const { data, name, parent, relatedValue } = step;
    return parent
      ? bodyData[parent].find(
          (item) => item.name === vehicleDetail[relatedValue]
        ).data
      : bodyData[data];
  }, [step]);

  const gotToNextStep = () => {
    dispatch(
      BodyActions.setActiveStepIndex(
        step.skipValue && step.skipValue === vehicleDetail[step.name]
          ? activeStepIndex + 2
          : activeStepIndex + 1
      )
    );
  };

  const gotToPrevStep = () => {
    const prevStep = steps[activeStepIndex - 1];

    dispatch(
      BodyActions.setActiveStepIndex(
        prevStep.hasSkipValue &&
          prevStep.hasSkipValue === vehicleDetail[prevStep.relatedValue]
          ? activeStepIndex - 2
          : activeStepIndex - 1
      )
    );
  };

  return (
    <div className={classes.container}>
      <p className={classes.title}>{step.title}</p>
      <div className={classes.box}>
        <button
          className={classes.button}
          onClick={gotToPrevStep}
          disabled={step.isFirstStep}
        >
          مرحله قبل
        </button>
        <div className={classes.list}>
          {list.map((item) => (
            <TypeCard item={item} name={step.name} type={step.type} />
          ))}
        </div>
        <button
          className={clsx(classes.button, classes.nextBtn)}
          onClick={gotToNextStep}
          disabled={step.isLastStep || !vehicleDetail[step.name]}
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default List;
