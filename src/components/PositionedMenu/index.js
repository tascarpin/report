import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import {Grid, Paper} from "@mui/material";
import { TextField } from "@material-ui/core";
import {styled} from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PositionedMenu(props) {
    const alt = {...props.alt};
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [width, setWidth] = React.useState('');
    const [height, setHeight] = React.useState('');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [value, setValue] = React.useState('barra');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Gráfico
            </Button>
            <Button onClick={() => alt.handleAddImagem()}>Imagem</Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Escolha um gráfico</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="barra" control={<Radio />} label="Barra" />
                        <FormControlLabel value="linha" control={<Radio />} label="Linha" />
                    </RadioGroup>
                </FormControl>
                {value === "barra" &&
                    <Grid container item xs={6} direction="column">
                        <FormLabel>Parâmetros
                            <TextField
                                label="Título"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                margin="normal"
                            />
                            <TextField
                                label="Largura"
                                value={width}
                                onChange={(e) => {
                                    setWidth(e.target.value);
                                }}
                                margin="normal"
                            />
                            <TextField
                                label="Altura"
                                value={height}
                                onChange={(e) => {
                                    setHeight(e.target.value);
                                }}
                                margin="normal"
                            />
                        </FormLabel>
                        <Item onClick={() => {alt.handleAddGraficoBarra(title);  setTitle('')}}>{alt.menu.grafico.data[0]}</Item>
                    </Grid>
                }
                {value === "linha" &&
                    <Grid container item xs={6} direction="column" >
                        <FormLabel>Parâmetros
                            <TextField
                                label="Título"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                margin="normal"
                            />
                            <TextField
                                label="Largura"
                                value={width}
                                onChange={(e) => {
                                    setWidth(e.target.value);
                                }}
                                margin="normal"
                            />
                            <TextField
                                label="Altura"
                                value={height}
                                onChange={(e) => {
                                    setHeight(e.target.value);
                                }}
                                margin="normal"
                            />
                        </FormLabel>
                        <Item onClick={() => {alt.handleAddGraficoLinha(title); setTitle('')}}>{alt.menu.grafico.data[1]}</Item>
                    </Grid>
                }
            </Menu>
        </div>
    );
}
