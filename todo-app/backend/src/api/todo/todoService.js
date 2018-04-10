const Todo = require('./todo')

//com isso criamos uma api rest com a url basica
Todo.methods(['get','post','put','delete'])
//quando atualizar um registro no mongo,
//quremos q a resposta venha já com o cliente novo e não
//com o antigo. o runValidators valida os dados do schema, required...default...
Todo.updateOptions({new:true, runValidators: true})

//é muito simples criar um serviço...
//ele já expoe a parte web e o acesso aos dados.
module.exports = Todo
































/**
 * Classificação dos sistemas; Modelagem de Sistemas; Os conceitos, objetivos, funções
e componentes dos Sistemas de Informação; As dimensões tecnológica, organizacional e humana dos Sistemas de
Informação; Os tipos de Sistemas de Informação; Interface Humano-Computador; Usabilidade: definição e métodos para
avaliação. SISTEMAS DE INFORMAÇÕES GERENCIAIS E DE APOIO A DECISÃO: Banco de Dados relacionais versus
Banco de Dados multidimensionais; Conceitos de Datawarehousing, Datamining e Big Data. ENGENHARIA DE SOFTWARE:
Processo de Engenharia de Software; Gerência de Engenharia de Software; Métodos e Modelos de Engenharia de Software;
Qualidade de Software; Requisitos de Software; Projeto de Software; Construção de Software; Teste de Software; Manutenção
de Software; Gerência de Configuração de Software; Economia da Engenharia de Software. ; Casos de Uso. Metodologias
Ágeis. SCRUM. KANBAN. Histórias do Usuário (User Stories). Avaliação do Esforço de Desenvolvimento: Análise de Pontos
de Função , Pontos de História.
BANCOS DE DADOS: Modelo de entidades e Relacionamentos, Modelo Relacional;
Dependências funcionais e formas normais; Álgebra relacional e SQL; Procedimentos armazenados; Modelagem e Projeto de
Bancos de Dados Relacionais; Modelagem Dimensional; Sistemas de Gerenciamento de Bancos de Dados (SGBD):
arquitetura, segurança, integridade, concorrência, recuperação após falha, controle de acesso, gerenciamento de transações,
particionamento, gerência de desempenho; Bancos de Dados Distribuídos e Paralelos. Bancos de Dados NOSQL.
CONCEITOS E TECNOLOGIAS DE INTERNET: Princípios e arquitetura da internet e de sistemas web; Usabilidade,
Acessibilidade, Interoperabilidade em sistemas web. Portais e Ambientes colaborativos; Redes Sociais. ESTRUTURA DE
DADOS E ALGORITMOS: Tipos básicos de dados; Algoritmos para pesquisa e ordenação; Listas lineares e suas
generalizações: Listas ordenadas, listas encadeadas, pilhas e filas; Árvores e suas generalizações: Árvores binárias, árvores
de busca, árvores balanceadas (AVL), árvores B e B+. PROGRAMAÇÃO: Conceitos básicos e características estruturais das
linguagens de programação; Conceitos de orientação a objetos. Linguagem de marcação: HTML e XML; Programação em
Java. SEGURANÇA DA INFORMAÇÃO: Conceitos, termos e definições; Classificação de informações. Segurança física e
lógica; Firewall e proxies; VPN; Softwares maliciosos; Norma ISO 27002. Certificação e Assinatura digital: conceito de ICP;
Criptografia Simétrica e Assimétrica; Single sign-on: conceito e utilização; Controle de acesso; Sistemas de detecção de
intrusão; LÓGICA MATEMÁTICA: Sentido lógico-matemático convencional dos conectivos; Argumentos; A lógica sentencial; A
lógica de predicados de primeira ordem; Regras de formação de fórmulas; Sistemas dedutivos; Valores-verdade; Funções de
avaliação. Tabelas Verdade.

 */