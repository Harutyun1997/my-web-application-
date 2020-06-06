const ADD_MESSAGE = "ADD-MESSAGE";

let dialogsData = [
    {
        name: 'Nik',
        id: 1,
    },
    {
        name: 'Har',
        id: 2,
    },
    {
        name: 'Mon',
        id: 3,
    },
    {
        name: 'Mik',
        id: 4,
    },
    {
        name: 'Art',
        id: 5,
    },
    {
        name: 'Sam',
        id: 6,
    }
];

let messageData = [
    {
        name: 'Mat',
        message: 'Hello Har what do you do',
        src: 'https://coderthemes.com/simple/bs3/dark/assets/images/users/avatar-1.jpg'
    },
    {
        name: 'My',
        message: 'Why do you not answer',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR748d7Dv1mrey9dMZ8JBoHduFtrJ5A5rEKviKi9cABIRe9WR'
    },
    {
        name: 'Mat',
        message: 'Do you working tomorrow',
        src: 'https://coderthemes.com/simple/bs3/dark/assets/images/users/avatar-1.jpg'

    },
    {
        name: 'My',
        message: 'Because his car not working',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR748d7Dv1mrey9dMZ8JBoHduFtrJ5A5rEKviKi9cABIRe9WR'

    },
    {
        name: 'Mat',
        message: 'My mother is not home',
        src: 'https://coderthemes.com/simple/bs3/dark/assets/images/users/avatar-1.jpg'

    }
];

let initialState = {
    dialogsData: dialogsData,
    messageData: messageData,
    userData: [],
};

const messagesReducer = (state = initialState, action) => {
    let stateClone;
    switch (action.type) {

        case ADD_MESSAGE : {
            let userData = JSON.parse(localStorage.getItem('userData'));
            let newMessage = {
                name: userData.name,
                message: action.message,
                src: userData.src
            };
            stateClone = {...state, messageData: [...state.messageData, newMessage]};
            return stateClone;
        }
        default:
            return state;
    }
};

export const createMessageActionCreator = (message) =>
    ({type: ADD_MESSAGE, message: message});

export default messagesReducer;
