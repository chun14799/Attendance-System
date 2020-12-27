import { AddNewPayslip, GetPayslips, GetPayslipWithId, UpdatePayslip, DeletePayslip } from '../controllers/PayslipsController';

const routes = (app) => {
    app.route('/payslips')
        .get(GetPayslips)
        .post(AddNewPayslip);
    app.route('/payslips/:payslipId')
        .get(GetPayslipWithId)
        .put(UpdatePayslip)
        .delete(DeletePayslip);
}

export default routes;