import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

//Toast message to display the online offline status
//Future scope :Can be used for all kind of alerts as well as sucess messages.
// In future it can accept delay ,message, className to determine what message should be shown where and till what time span
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