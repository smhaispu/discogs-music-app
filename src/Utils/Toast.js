import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { useContext } from 'react';
import { Context } from '..';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function ColorAlerts() {
    const { state } = useContext(Context);
    const classes = useStyles();

    return (
        state.toast.show &&
        <div className={classes.root}>
            <Alert severity={state.toast.type} color={state.toast.type} style={{
                position: 'fixed',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                {state.toast.message}
            </Alert>
        </div>

    );
}