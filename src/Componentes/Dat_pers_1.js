import React, {useState,Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Dat_per_1(){
    const[form,setForm] = useState({});
    const [fech_nam, setFech_Nam] = useState(new Date());

    const handleChange= (e) =>{
       setForm({
           ...form,
           [e.target.name]:e.target.value,
       }); 
    } 


    const handleChangeTime= (e) =>{
        setForm({
            ...form,
            [e.name]:e.date,
        }); 
     } 


    return(
        <>
        <h2>¿Cómo te llamas?</h2>

           
            <input type= "text" id="apellidos" name="apellidos" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Apellidos"/>
       <br/>
       <br/>
       <input type= "text" id="nombre" name="nombre" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Nombre"/>
        <br/>
        <h2>¿Con que género género te identificas?</h2>
            
            {/* Genero 1 */ }
            <input type = "radio" 
            id="Masculino"  
            name="genero" 
            value="Masculino"
            onChange={handleChange}/>
            <label htmlFor= "Masculino" >Masculino</label>
            {/* Genero 2 */ }
            <input type = "radio" 
            id="Femenino"  
            name="genero" 
            value="Femenino"
            onChange={handleChange}/>
            <label htmlFor= "Femenino" >Femenino</label>
            {/* Genero 3 */ }
            <input type = "radio"
             id="No_bin"  
             name="genero" 
            value="No_bin"
            onChange={handleChange}/>
            <label htmlFor= "No_bin" >No Binario</label>
            <br/>
        <h2>Indica cuando naciste</h2>
        <DatePicker   name="fecha_nac" id="fecha_nac" selected={fech_nam} onChange={(date) => setFech_Nam(date)} />
            
            
            
            <br/>
            <br/> 

        
        </>
    ); 
}