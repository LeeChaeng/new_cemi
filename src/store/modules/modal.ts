const ONOFF = "modal/MODAL" as const;
const TARGETTODO = "modal/TARGETTODO" as const;
const CLEARTARGET = "modal/CLEARTARGET" as const;

export const switchModal = () => ({ type: ONOFF });
export const targetTodo = (
  id: string,
  dateTime: number,
  text: string,
  deadline: string
) => ({
  type: TARGETTODO,
  id: id,
  dateTime: dateTime,
  text: text,
  deadline: deadline,
});
export const clearTarget = () => ({ type: CLEARTARGET });

const initialState = {
  addModalOn: false,
  todo: { id: "", dateTime: 0, text: "", deadline: "" },
};

type ModalAction =
  | ReturnType<typeof switchModal>
  | ReturnType<typeof targetTodo>
  | ReturnType<typeof clearTarget>;

export const modal = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case ONOFF:
      return { ...state, addModalOn: !state.addModalOn };
    case TARGETTODO:
      return {
        addModalOn: !state.addModalOn,
        todo: {
          id: action.id,
          dateTime: action.dateTime,
          text: action.text,
          deadline: action.deadline,
        },
      };
    case CLEARTARGET:
      return { ...state, todo: initialState.todo };
    default:
      return state;
  }
};
