import {StateType, userReducer} from './user-reducer';

test('user reducer should increment only age', () => {
    const startState: StateType = {
        age: 20,
        childrenCount: 2,
        name: 'Dimych' };

    const action = { type: 'INCREMENT-AGE' }

    const endState = userReducer(startState, action)

    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2)
    expect (endState.name).toBe('Dimych');
});

test('user reducer should increment only childrenCount', () => {


    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };

    const  action = {
        type: 'INCREMENT-CHILDREN-COUNT'
    }

    const endState = userReducer (startState, action)

    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(3)
    expect (endState.name).toBe('Dimych');

});

test ('user reducer should increment only childrenCount', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };


    const action = {
        type: 'CHANGE-NAME',
        name: 'Dimon'
    }

    const endState = userReducer (startState, action )
    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(3)
    expect (endState.name).toBe('Dimon');

})

