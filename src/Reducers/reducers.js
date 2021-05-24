// REDUCER É UMA FUNÇÃO QUE RECEBE O ESTADO ATUAL CORRENTE E RETORNA UM NOVO ESTADO

// coloca o estado inicial e depois o que vai acontecer no estado em cada ação.
// Padrão usar switch case

import ADD_LIST from '../Actions/action';

const INITIAL_STATE = {
  item: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        item: action.item
      };
      default:
        return state;
  }
}

export default reducer;