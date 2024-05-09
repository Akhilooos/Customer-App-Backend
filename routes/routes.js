import express from "express";
import { addCustomer, deleteCustomer, editCustomer, getAllCustomers, getEachCustomer } from "../controllers/controller.js";

const router = express.Router();

router.route('/').get(getAllCustomers).post(addCustomer);
router.route('/:id').get(getEachCustomer).patch(editCustomer).delete(deleteCustomer);


export default router;
