import Pessoa from './pessoa'
import './modulos/moduloA'
/**
 * Usamos desse modo pois estamos usando o padrao
 * do ECMA Script
 * 
 */
//const Pessoa = require('./pessoa')
const atendente = new Pessoa
console.log(atendente.cumprimentar())