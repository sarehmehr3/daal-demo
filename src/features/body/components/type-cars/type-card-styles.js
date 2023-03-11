import { createUseStyles } from 'react-jss';

export default createUseStyles({
  card: {
    width: 220,
    height: 70,
    backgroundColor: '#cfd8dc',
    borderRadius: 10,
    border: 'unset',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: '#00c4358c',
      cursor: 'pointer',
    },
  },

  radioLable: {
    display: 'block',
    position: 'relative',
    paddingLeft: '35px',
    marginBottom: '12px',
    cursor: 'pointer',
    fontSize: '22px',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },

  li: {
    position: 'relative',
    width: 220,
    height: 70,
    backgroundColor: '#cfd8dc',
    borderRadius: 10,
    border: 'unset',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: 10,
    gap: 10,

    '&:hover': {
      backgroundColor: '#00c4358c',
      cursor: 'pointer',
    },
  },

  cr: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: '#cfd8dc',
    border: '2px solid black',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 3,
  },

  crWrapp: {
    width: 25,
    height: 25,
    borderRadius: '50%',
    background: 'transparent',
  },

  crx: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    background: 'rgba(20, 98, 255, .8)',
  },

  selectedCard: {
    background: '#00c435',
  },
});
