import { Fab, makeStyles, Tooltip } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
}));

function Add() {
  const classes = useStyles();
  return (
    <Tooltip title="Add">
      <Fab color="primary" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
}

export default Add;
