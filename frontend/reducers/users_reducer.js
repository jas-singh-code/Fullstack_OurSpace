
null_state = {
    firstName: '',
    lastName: '',
    email:'',
    birthday: '',
    gender: ''
}

export default (state={}, action) => {
    Object.freeze(state)
}