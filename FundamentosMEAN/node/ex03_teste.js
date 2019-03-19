const s1 = require ('./ex03_singleton')
const s2 = require('./ex03_singleton')


s1.exibirProximo()
s2.exibirProximo()
s1.exibirProximo()
s2.exibirProximo()

/** As duas variaveis apontam pra mesma instancia criada,
 * O NODE usa sempre a mesma instancia do módulo.
 * Se for necessario uma nova insgtancia, temq ue encapsular dentro de
 * uma funcao
 */