export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    //crio o array tabsToShow e adiciono a
    //cada elemento e => tabsToShow[e] o valor true.
    //A função tabsToShow = {} cria um array vazio e
    //a função  tabsToShow[e] cria o indice do array
    // tabsToShow['tabList'] por exemplo com o valor true.
    //Essa função irá retornar o array de abas que serão exibidas.
    const tabsToShow = {}
    
    tabIds.forEach(e => tabsToShow[e] = true)

    //Como é uma action, toda action tem que ter um retorno com
    //um type e um payload.
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}
