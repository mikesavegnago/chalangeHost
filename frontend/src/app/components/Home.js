import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';

const CustomRadio = withStyles({
    root: {
        color: '#16437E',
        '&$checked': {
          color: '#fff',
          background: '#4480C5 0% 0% no-repeat padding-box'
        },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const CustomButton = withStyles((theme) => ({
    root: {
        background: '#FF6A17 0% 0% no-repeat padding-box',
        borderRadius: '26px',
        opacity: 1,
        font: 'normal normal bold 22px/27px Montserrat',
        letterSpacing: '0px',
        color: '#FFFFFF',
        '&:hover': {
            background: '#FF6A17 0% 0% no-repeat padding-box',
          },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1)
  },
  text: {
    margin: 'auto',
    maxWidth: '329px',
    color: '#1D5297',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(10),
    alignContent: 'center'
  },
  paperRadios: {
    margin: 'auto',
    marginBottom: theme.spacing(4),
    height: '41px',
    width: '330px',
    boxShadow: '0px 2px 4px #4480C570',
    border: '1px solid #4480C5',
    borderRadius: '21px',
    opacity: 1
  },
  paperPlan: {
    padding: theme.spacing(2),
    margin: 'auto',
    height: '650px',
    maxWidth: '329px',
    border: '1px solid #DFECFF',
    borderTop: '#FF6A17 solid 10px',
    borderBottom: '#FF6A17 solid 2px',
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('triennially');
  const [product, setProduct] = React.useState({});
  const [cycle, setCycle] = React.useState({});

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    const filtered = Object.keys(product).length ? product.cycle.find(elm => elm.type === event.target.value) : {};
    setCycle(filtered);
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/prices/6")
        .then(results => results.json())
        .then(results => setProduct(results));
}, []);

  React.useEffect(() => {
    const filtered = Object.keys(product).length ? product.cycle.find(elm => elm.type === 'triennially') : {};
    setCycle(filtered);
}, [product]);

  return (
    <div className={classes.root}>
        <Grid container spacing={2} className={classes.text}>
            Quero pagar a cada:
        </Grid>
        <Paper className={classes.paperRadios}>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position">
                    <FormControlLabel
                     style={{margin: 0}}
                        value="triennially"
                        className={selectedValue === 'triennially' ? 'radioActive' : 'radio'}
                        control={<CustomRadio
                            checked={selectedValue === 'triennially'}
                            onChange={handleChange}
                            value="triennially"
                            name="radio-button"
                          />}
                        label="3 anos"
                    />
                    <FormControlLabel
                     style={{margin: 0}}
                        value="annually"
                        className={selectedValue === 'annually' ? 'radioActive' : 'radio'}
                        control={<CustomRadio
                            checked={selectedValue === 'annually'}
                            onChange={handleChange}
                            value="annually"
                            name="radio-button"
                          />}
                        label="1 ano"
                    />
                    <FormControlLabel
                     style={{margin: 0}}
                        value="monthly"
                        className={selectedValue === 'monthly' ? 'radioActive' : 'radio'}
                        control={<CustomRadio
                            checked={selectedValue === 'monthly'}
                            onChange={handleChange}
                            value="monthly"
                            name="radio-button"
                          />}
                        label="1 mês"
                    />
                </RadioGroup>
            </FormControl>
        </Paper>
        <Paper className={classes.paperPlan}>
            <Grid container spacing={2}>
                <div className="tituloPlano">
                    <img alt="title" src={window.location.href+"/assets/Grupo 29910.svg"} />
                    <br/>
                    {product.name}
                </div>
                <div className="valorDe">
                    <strike>R$ {cycle.price_renew}</strike> &nbsp;
                    <strong>R$ {cycle.price_renew}</strong>
                    <br/>
                    equivalente a
                </div>
                <div style={{width: '100%', padding: '20px'}}>
                    <span className="cifra">R$</span>
                    <span className="valor">12,59</span>
                    <span className="cifra">/mês</span>
                </div>
                <div style={{width: '100%', padding: '20px'}}>
                    <CustomButton variant="contained" className="button">Contrate Agora</CustomButton>
                </div>
                <div className="dominio">
                    1 ano de Domínio Grátis &nbsp;
                    <img alt="i" src={window.location.href+"/assets/Componente 5.svg"} />
                </div>
                <div className="economize">
                    economize R$ 174,48 <span className="off">40% OFF</span>
                </div>
                <div className="finalText">
                    Sites Ilimitados <br/>
                    <strong>100 GB</strong> de Armazenamento <br/>
                    Contas de E-mail <strong>Ilimitadas</strong> <br/>
                    Criador de Sites <strong>Grátis</strong> <br/>
                    Certificado SSL <strong>Grátis</strong> (https)
                </div>
            </Grid>
        </Paper>
    </div>
  );
}
