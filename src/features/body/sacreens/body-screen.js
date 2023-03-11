import List from '../components/list/list';
import useStyles from './body-screen-styles';

const BodyScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <List />
    </div>
  );
};

export default BodyScreen;
