import mongoose from "mongoose";
import { DepartmentsSchema } from "../models/Departments";
const Departments = mongoose.model("Departments", DepartmentsSchema);
export const AddNewDepartment = (req, res) => {
  let newDepartment = new Departments(req.body);
  newDepartment.save((err, department) => {
    if (err) {
      res.send(err);
    }
    res.json(department);
  });
};
export const GetDepartments = (req, res) => {
  Departments.find({}, (err, department) => {
    if (err) {
      res.send(err);
    }
    res.json(department);
  });
};
export const GetDepartmentWithId = (req, res) => {
  Departments.findById(req.params.departmentId, (err, department) => {
    if (err) {
      res.send(err);
    }
    res.json(department);
  });
};
export const UpdateDepartment = (req, res) => {
  Departments.findOneAndUpdate(
    { _id: req.params.departmentId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, department) => {
      if (err) {
        res.send(err);
      }
      res.json(department);
    }
  );
};
export const DeleteDepartment = (req, res) => {
  Departments.deleteOne({ _id: req.params.departmentId }, (err, department) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted department" });
  });
};
