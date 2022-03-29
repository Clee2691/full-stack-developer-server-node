import users from './users.js';

let userArray = users;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const findUsersByType = (type) => {
    return userArray.filter(user => user.type == type);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if (type) {
        res.json(findUsersByType(type));
        return;
    }

    res.json(userArray);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = userArray.find(u => u._id === userId);
    res.json(user);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    userArray.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    userArray = userArray.filter(usr =>
        usr._id !== userId);
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    userArray = userArray.map(usr =>
        usr._id === userId ?
        updatedUser :
        usr);
    res.sendStatus(200);
}

export default userController;