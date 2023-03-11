import { createUseStyles } from 'react-jss';

export default createUseStyles({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    zIndex: 100,
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 140,

      backgroundImage: 'linear-gradient(white, #f5f5f5)',
      borderRadius: '50%',
      zIndex: -1,
      width: 600,
      height: 600,
    },
  },
});
