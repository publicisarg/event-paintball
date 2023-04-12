// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const ayuda = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += '- ' + Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += '- ' + Object.keys(bin).sort()[i - 1] + '\n';
    }
  }
  return `Bienvenido! a continuación te dejo los comandos para poder avanzar:
\n${c}\n
[tab]: para completar el comando.
[ctrl+l]/clear: para limpiar la terminal.\n
`;
};

// About
export const info = async (args: string[]): Promise<string> => {
  return `Has sido seleccionado para una competencia de paintball, Prepárate para luchar por la victoria. Para tener mas info recorda que te dejo los comandos
  mapa, hora, 
  `;
};
// Redirection
export const mapa = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Abriendo mapa...';
};

// About
export const lugar = async (args: string[]): Promise<string> => {
  return `La reserva se hizo para el día 14 a las 19.00 horas, igualmente solicitan que se este presente 5 o 10 minutos antes para hacer el pago en recepción.`;
};

export const precio = async (args: string[]): Promise<string> => {
  return `El valor de la competenia tiene un costo de $4800 cada uno, esto incluye equipamiento completo
  + 200 Paintballs.`;
};

export const mas = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const portada = (args?: string[]): string => {
  return `


  MMP**MM**YMM *7MM                     *7MM***Mq.             *MM        
  P*   MM   *7   MM                       MM   *MM.             MM        
       MM        MMpMMMb.   .gP*Ya        MM   ,M9 *7MM  *7MM   MM,dMMb.  
       MM        MM    MM  ,M'   Yb       MMmmdM9    MM    MM   MM    *Mb 
       MM        MM    MM  8M******       MM         MM    MM   MM     M8 
       MM        MM    MM  YM.    ,       MM         MM    MM   MM.   ,M9 
     .JMML.    .JMML  JMML. *Mbmmd'     .JMML.       *Mbod*YML. P^YbmdP'  

                Q U E   G A N E    E L   M E J O R

Has sido seleccionado para un caso muy especial, para tener informacion sobre el caso sigue los pasos.
Escriba 'ayuda' para visualizar la lista de comandos.
`;
};
