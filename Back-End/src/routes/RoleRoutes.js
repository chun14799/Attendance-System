import { AddNewRole, GetRoles, GetRoleWithId, UpdateRole, DeleteRole } from '../controllers/RolesController';

const routes = (app) => {
    app.route('/roles')
        .get(GetRoles)
        .post(AddNewRole);
    app.route('/roles/:roleId')
        .get(GetRoleWithId)
        .put(UpdateRole)
        .delete(DeleteRole);
}

export default routes;