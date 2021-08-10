import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import { useContext, useEffect } from 'react';
import { Context } from '..';
import { Button } from '@material-ui/core';
import { Image, DetailsContainter, Content } from './Release.style';
import defaultImage from '../Assets/defaultImage.jpeg'

const ItemDetails = () => {
    const { state, dispatch } = useContext(Context);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (state?.popUpDetails?.isOpen !== undefined) {
            setOpen(state?.popUpDetails?.isOpen);
        }
    }, [state?.popUpDetails?.isOpen]);

    const handleClose = () => {
        setOpen(false);
        dispatch({
            ...state, popUpDetails: {
                isOpen: false
            }
        })
    };


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {state?.popUpDetails?.title}
                </DialogTitle>
                <DialogContent>
                    <Content>
                        <div>
                            {state?.popUpDetails?.thumb ? <Image src={state?.popUpDetails?.thumb} alt="No image" /> : <Image src={defaultImage} alt="No image" />}
                        </div>
                        <DetailsContainter>
                            {state && state.popUpDetails && Object.keys(state?.popUpDetails).map(field => {
                                if (field !== 'isOpen' && field !== 'thumb' && field !== 'stats' && field !== 'resource_url' && field !== 'id') {
                                    return <DialogContentText key={field} style={{ textTransform: 'capitalize' }}>
                                        {field}: {state?.popUpDetails[field]}
                                    </DialogContentText>
                                } else {
                                    return null;
                                }

                            })}
                        </DetailsContainter>
                    </Content>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ItemDetails;