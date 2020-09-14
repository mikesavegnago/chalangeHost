import {
    Grid
} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    toolbar: {
        top: '0px',
        left: '0px',
        width: '100%',
        height: '52px'
    }
}));

function Main(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <img style={{left: '20%', position: 'absolute', top: '5px'}} alt="logo" src={window.location.href+"/assets/hostgator-logo.svg"} />
            </div>
            <nav className="nav" aria-label="mailbox folders">
                <Grid container spacing={0}>
                    <Hidden only={['xs', 'sm', 'md']}>
                        <Grid item xs style={{marginTop: '100px'}}>
                            <img alt="table" src={window.location.href+"/assets/Grupo 29995.svg"} />
                        </Grid>
                    </Hidden>
                    <Grid item xs style={{marginTop: '100px'}}>
                        <div className="hospedagem">
                            Hospedagem de Sites
                        </div>
                        <div className="titulo">
                            Tenha uma hospedagem de sites estável e evite perder visitantes diariamente
                        </div>
                        <div className="checks" style={{marginTop: '50px'}}>
                            <img alt="check1" src={window.location.href+"/assets/icon-check.svg"} />
                            &nbsp; 99,9% de disponibilidade: seu site sempre no ar
                        </div>
                        <div className="checks">
                            <img alt="check2" src={window.location.href+"/assets/icon-check.svg"} />
                            &nbsp; Suporte 24h, todos os dias &nbsp;
                            <img alt="check3" src={window.location.href+"/assets/icon-check.svg"} />&nbsp;
                            Painel de Controle cPanel
                        </div>
                    </Grid>
                    <Hidden only={['xs', 'sm', 'md']}>
                        <Grid item xs style={{marginTop: '100px'}}>
                            <img alt="boy" src={window.location.href+"/assets/Grupo 29996.svg"} />
                        </Grid>
                    </Hidden>
                </Grid>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default withRouter(Main);