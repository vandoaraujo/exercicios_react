import Pessoa from './pessoa'
// import './modulos/moduloA'
// import './assets/css/estilo.css'
import './assets'
/**
 * Usamos desse modo pois estamos usando o padrao
 * do ECMA Script
 * 
 */
//const Pessoa = require('./pessoa')
const atendente = new Pessoa
console.log(atendente.cumprimentar())