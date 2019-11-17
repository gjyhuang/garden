export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const LOAD_DECK = 'LOAD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export function addDeck({title}) {
    return {
        type: ADD_DECK,
        title
    }
}

export function loadDeck({key, title, questions}) {
    return {
        type: LOAD_DECK,
        title,
        questions,
        key
    }
}

export function removeDeck({deckKey}) {
    return {
        type: REMOVE_DECK,
        deckKey
    }
}

export const addCard = ({deckKey, question, answer}) => {
    return {
        type: ADD_CARD,
        deckKey,
        question,
        answer
    }

}

export const decks = (state = {}, action) => {
    const {title, questions, deckKey, question, answer} = action;

    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                [deckKey]: {
                    title: deckKey,
                   questions: state[deckKey].questions.concat({question: question, answer: answer})
                }
            }

        case ADD_DECK:
            return {
                ...state,
                [title]: {
                    title: title,
                    questions: []
                }
            }
        case REMOVE_DECK:
            let clone = Object.assign({}, state);
            delete clone[deckKey];
            return clone;

        case LOAD_DECK:
            return {
                ...state,
                [title]: {
                    title: title,
                    questions: questions
                }
            }
        default :
            return state
    }
}
