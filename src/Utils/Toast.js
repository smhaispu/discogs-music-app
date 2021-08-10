import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function ColorAlerts({ toast }) {

    const classes = useStyles();

    return (
        toast.show &&
        <div className={classes.root}>
            <Alert severity={toast.type} color={toast.type} style={{
                position: 'fixed',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                {toast.message}
            </Alert>
        </div>

    );
}