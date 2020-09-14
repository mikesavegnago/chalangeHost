import {
    Avatar,
    Grid,
    Paper
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { lightBlue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover" : {
            '& $avatar': {
                display: 'none'
            },
            '& $checkbox': {
                display: 'block'
            },
        },
        flexGrow: 1,
        paddingTop: theme.spacing(2),
        height: theme.spacing(12),
    },
    rootChecked: {
        '& $avatar': {
            display: 'none'
        },
        '& $checkbox': {
            display: 'block'
        },
        flexGrow: 1,
        paddingTop: theme.spacing(2),
        height: theme.spacing(12),
    },
    avatar: {
        display: 'block',
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    checkbox: {
        display: 'none',
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    users: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        fontSize: theme.spacing(1.5),
        color: '#666',
        backgroundColor: lightBlue[100]
    },
    owner: {
        textAlign: 'center',
        padding: theme.spacing(2)
    },
    lines: {
        padding: theme.spacing(0.1)
    },
    blue: {
        color: '#666',
        backgroundColor: lightBlue[100],
    },
  }));

function List(props) {
    const classes = useStyles();
    const data = props.data;
    const [haveChecked, setHaveChacked] = useState(false);

    const handleChecked = (event) => {
      props.handleChecked(event.target.checked, props.index)
    };

    useEffect(() => {
        (haveChecked !== props.havechecked) && setHaveChacked(props.havechecked)
    }, [props.havechecked, haveChecked]);

    return (
        <Paper elevation={2} key={data.id + "paper"} className={haveChecked ? classes.rootChecked : classes.root}>
            asda
        </Paper>
    );
}

export default withRouter(List);