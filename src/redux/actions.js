import { ADD_CONTACT, DELETE_CONTACT , SET_FILTER } from './types';

import shortid from 'shortid';

//*  Payload (нагрузка) в Redux относится к значению данных, которые передаются в экшен (action) вместе с типом действия (action type).
//*  В контексте Redux, экшен является простым объектом, который описывает изменение состояния приложения.Он содержит тип действия и данные(payload),
//*  необходимые для выполнения изменений.После того, как экшен создан, он отправляется в Redux store,
//*  который обрабатывает действие и обновляет состояние приложения в соответствии с переданными данными.Payload в Redux может быть любого типа данных,
//*  включая строки, числа, объекты или массивы.Он может содержать одно значение или несколько значений, в зависимости от необходимости.


export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: shortid.generate(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  }
}