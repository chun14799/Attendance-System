import mongoose from 'mongoose';
import { RolesSchema } from '../models/Roles'
const Roles = mongoose.model('Roles', RolesSchema);
export const AddNewRole = (req, res) => {
    let newRole = new Roles(req.body);
    newRole.save((err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const GetRoles = (req, res) => {
    Roles.find({}, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const GetRoleWithId = (req, res) => {
    Roles.findById(req.params.roleId, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const UpdateRole = (req, res) => {
    Roles.findOneAndUpdate({ _id: req.params.roleId }, req.body, { new: true, useFindAndModify: false }, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const DeleteRole = (req, res) => {
    Roles.deleteOne({ _id: req.params.roleId }, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted role" })
    })
}