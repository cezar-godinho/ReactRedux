const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    module:  [
        {
            id: 1, title: 'Iniciando com React', lesson: [
                { id: 1, title: 'Primeira Aula' },
                { id: 2, title: 'Segunda Aula' },
            ],
        },
        {
            id: 2, title: 'Aprendendo Redux', lesson: [
                { id: 3, title: 'Terceira Aula' },
                { id: 4, title: 'Quarta Aula' },
            ],
        },
    ]
}

export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON'){
        console.log(action.activeLesson);
        return { ...state,  
                activeLesson: action.lesson,
                activeModule: action.module,
        };
    }
    return state;
}