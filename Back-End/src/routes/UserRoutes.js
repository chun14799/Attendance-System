import { AddNewUser, GetUsers, GetUserWithId, UpdateUser, DeleteUser ,LoginUser } from '../controllers/UsersController';

const routes = (app) => {
    app.route('/users')
        .get(GetUsers)
        .post(AddNewUser);
    app.route('/users/:userId')
        .get(GetUserWithId)
        .put(UpdateUser)
        .delete(DeleteUser);
    app.post('/login',LoginUser);
}

export default routes;