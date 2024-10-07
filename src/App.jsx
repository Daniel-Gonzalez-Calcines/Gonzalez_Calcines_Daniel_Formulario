import './App.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


document.body.style = 'background: white;';

function App() {

    const [data, setData] = useState({ name: '' });
    const [data2, setData2] = useState({ surname: '' });
    const [data3, setData3] = useState({ edad: ''});
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [selectedGenero, setSelectedGenero] = useState('');
    const [selectedLenguaje, setSelectedLenguaje] = useState('');
    const [rating, setRating] = useState();
    const [openDialog, setOpenDialog] = useState(false);

    const handleClear = () => {
        setData({ name: '', brand: '' });
        setData2({ surname: '', brand: '' });
        setData3({ edad: '', brand: '' });
        setSelectedLenguaje('');
        setSelectedGenero('');
        setRating(0);
        setAcceptedTerms(false);
    };

    const handleSubmit = (e) => {
        console.log(data, data2, data3, acceptedTerms, selectedGenero, selectedLenguaje, rating, openDialog);
        e.preventDefault();
        setOpenDialog(true);
    };

    return (
        <>
            <Box component='form' onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid TextField size={{ xs: 12, sm: 6 }}>
                        <TextField
                            required
                            fullWidth
                            id="Nombre"
                            label="Nombre"
                            value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    </Grid>
                    <Grid TextField size={{ xs: 12, sm: 6 }}>
                        <TextField
                            required
                            fullWidth
                            id="Apellidos"
                            label="Apellidos"
                            value={data2.surname} onChange={(e) => setData2({ ...data2, surname: e.target.value })}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    </Grid>
                    <Grid TextField size={{ xs: 6, sm: 4 }}>
                        <TextField
                            required
                            fullWidth
                            id="Edad"
                            label="Edad"
                            value={data3.edad} onChange={(e) => setData3({ ...data3, edad: e.target.value })}
                            type="number"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    </Grid>
                    <Grid FormControl size={{ xs: 6, sm: 4 }}>
                        <FormControl fullWidth>
                            <FormLabel id="genero">Gender</FormLabel>
                            <RadioGroup
                                sx={{ color: 'black' }}
                                row
                                name="genero"
                                justifyContent="center"
                                value={selectedGenero} onChange={(e) => setSelectedGenero(e.target.value)}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" sx={{ color: 'black' }} />
                                <FormControlLabel value="male" control={<Radio />} label="Male" sx={{ color: 'black' }} />
                                <FormControlLabel value="other" control={<Radio />} label="Other" sx={{ color: 'black' }} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid FormControl size={{ xs: 12, sm: 4 }}>
                        <FormControl required fullWidth>
                            <InputLabel id="Lenguaje">Lenguaje de programación</InputLabel>
                            <Select
                                labelId="Lenguaje de programación"
                                id="Lenguaje de programación"
                                value={selectedLenguaje} onChange={(e) => setSelectedLenguaje(e.target.value)}
                            >
                                <MenuItem value="JavaScript">JavaScript</MenuItem>
                                <MenuItem value="Python">Python</MenuItem>
                                <MenuItem value="Java">Java</MenuItem>
                                <MenuItem value="C++">C++</MenuItem>
                                <MenuItem value="Ruby">Ruby</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Divider component="li" />
                <Grid container spacing={2}>
                    <Grid Rating size={12}>
                        <Rating name="simple-controlled" value={rating} onChange={(newValue) => setRating(newValue)} />
                        <Typography variant="body2" color="textSecondary">
                            Puntue la encuesta (1-5)
                        </Typography>
                    </Grid>
                    <Grid FormGroup size={12}>
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />} label="He leído y acepto los términos y condiciones" sx={{ color: 'Grey' }} />
                        </FormGroup>
                    </Grid>
                    <Grid Button size={{ xs: 12, md: 6 }}>
                        <Button variant="contained" fullWidth type='submit' disabled={!acceptedTerms}>Enviar</Button>
                    </Grid>
                    <Grid Button size={{ xs: 12, md: 6 }}>
                        <Button variant="contained" fullWidth onClick={handleClear}>Limpiar</Button>
                    </Grid>
                </Grid>
            </Box>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás de acuerdo con enviar este formulario?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>No</Button>
                    <Button onClick={() => setOpenDialog(false)} autoFocus>Sí</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default App
