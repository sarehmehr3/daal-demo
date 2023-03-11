import { createUseStyles } from 'react-jss';

export default createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },

  box: {
    width: '58%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },

  list: {
    border: '1px #cfd8dc solid',
    borderRadius: 10,
    padding: '10px 15px',
  },

  button: {
    width: 180,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    border: 'unset',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,

    '&:hover': {
      backgroundColor: '#cfd8dc',
      cursor: 'pointer',
    },

    '&:disabled': {
      cursor: 'default',
      backgroundColor: '#e9e9eb',
    },
  },

  title: {
    margin: '20px auto',
    fontSize: 20,
    fontWeight: 'bolder',
    width: 220,
    textAlign: 'center',
  },

  nextBtn: {
    backgroundColor: 'blue',
    color: 'white',

    '&:hover': {
      backgroundColor: '#0000ff2e',
      color: 'black',
      cursor: 'pointer',
    },

    '&:disabled': {
      cursor: 'default',
      backgroundColor: '#e9e9eb',
      color: 'black',
    },
  },
});
