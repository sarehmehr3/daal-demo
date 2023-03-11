import clsx from 'clsx';
import { useBodyState } from '@/context/bodyContext/body-provider';
import useStyles from './type-card-styles';

const TypeCard = ({ item, name, type }) => {
  const classes = useStyles();
  const {
    state: { vehicleDetail },
    selectVehicleDetail,
  } = useBodyState();

  const returnCard = () => {
    switch (type) {
      case 'simpleCard':
        return (
          <div
            className={clsx(
              classes.card,
              item.name === vehicleDetail[name] && classes.selectedCard
            )}
            onClick={selectVehicleDetail(name, item.name)}
          >
            {item.name}
          </div>
        );

      case 'radioGroup':
        return (
          <div
            id={item.name}
            className={classes.li}
            onClick={selectVehicleDetail(name, item.name)}
          >
            <div className={classes.crWrapp}>
              <div className={classes.cr}>
                {item.name === vehicleDetail[name] && (
                  <div className={classes.crx}></div>
                )}
              </div>
            </div>
            <p>{item.name}</p>
          </div>
        );

      default:
        break;
    }
  };

  return <div>{returnCard()}</div>;
};

export default TypeCard;
