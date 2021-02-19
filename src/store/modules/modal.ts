const ONOFF = "mocal/MODAL" as const;

export const switchModal = () => ({ type: ONOFF });

const initialState = {
  addModalOn: false,
};

type ModalAction = ReturnType<typeof switchModal>;

export const modal = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case ONOFF:
      return { addModalOn: !state.addModalOn };
    default:
      return state;
  }
};
