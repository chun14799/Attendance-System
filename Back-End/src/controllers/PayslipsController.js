import mongoose from 'mongoose';
import { PayslipsSchema } from '../models/Payslips'
const Payslips = mongoose.model('Payslips', PayslipsSchema);
export const AddNewPayslip = (req, res) => {
    let newPayslip = new Payslips(req.body);
    newPayslip.save((err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const GetPayslips = (req, res) => {
    Payslips.find({}, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const GetPayslipWithId = (req, res) => {
    Payslips.findById(req.params.departmentId, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const UpdatePayslip = (req, res) => {
    Payslips.findOneAndUpdate({ _id: req.params.payslipId }, req.body, { new: true, useFindAndModify: false }, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const DeletePayslip = (req, res) => {
    Payslips.deleteOne({ _id: req.params.payslipId }, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted payslip" })
    })
}