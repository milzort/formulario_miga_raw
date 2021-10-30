
import './App.css';
import {DataAR} from './Componentes/Data_act_rec';
import {DataAL} from './Componentes/Data_act_lab';
import {DataPP} from './Componentes/Data_parti';
import Dat_per_1 from './Componentes/Dat_pers_1';
import Dat_per_2 from './Componentes/Dat_pers_2';
import Dat_per_3 from './Componentes/Dat_pers_3';
import Dat_per_4 from './Componentes/Dat_pers_4';
import {Activ_5} from './Componentes/Actividad_5';
import {Activ_6} from './Componentes/Actividad_6';
import Dat_parti_1 from './Componentes/Particip_1';
import { Activ_1 } from './Componentes/Actividad_1';
import { Activ_2 } from './Componentes/Actividad_2';
import { Activ_3 } from './Componentes/Actividad_3';
import { Activ_4 } from './Componentes/Actividad_4';
import Dat_parti_4 from './Componentes/Particip_4';
import Dat_parti_5 from './Componentes/Particip_5';
import Dat_parti_2 from './Componentes/Particip_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
        <h1>Formulario migala</h1>
        </section>  
        
        <section>
          <Dat_per_1/>
          <hr/>
          <Dat_per_2/>
          <hr/>
          <Dat_per_3/>
          <hr/>
          <Dat_per_4/>      
          <hr/>
          <DataAL>
          <Activ_1/>
          <hr/> 
          <Activ_2/> 
          <hr/>           
          <Activ_3/>
          <hr/>           
          <Activ_4/>
          </DataAL>
          <hr/> 
          <DataAR>
          <Activ_5/>
          <hr/>
          <Activ_6/>
          </DataAR>
          <hr/>
          <DataPP>
          <Dat_parti_1/>
          <hr/>
          <Dat_parti_2/>
          <hr/>
          <Dat_parti_4/>
          <hr/>
          <Dat_parti_5/>
          </DataPP>
          <br/><br/>

        </section>

      </header>
    </div>
  );
}

export default App;
