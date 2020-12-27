import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
const PORT = process.env.PORT||5000;
import departmentRoutes from './src/routes/DepartmentRoutes';
import userRoutes from './src/routes/UserRoutes';
import shiftRoutes from './src/routes/ShiftRoutes';
import payslipRoutes from './src/routes/PayslipRoutes';
import attendanceRoutes from './src/routes/AttendanceRoutes';
import roleRoutes from './src/routes/RoleRoutes';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';


// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors())
app.use(bodyParser.json());

departmentRoutes(app);
userRoutes(app);
shiftRoutes(app);
payslipRoutes(app);
attendanceRoutes(app);
roleRoutes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
)
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`))