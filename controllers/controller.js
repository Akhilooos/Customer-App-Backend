import Customer from "../models/customer-model.js";

const getAllCustomers = async(req,res)=>{
    const customerData = await Customer.find();
    res.status(200).json({customerData});
};

const getEachCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customerItem = await Customer.findById(id);
        if (!customerItem) {
            return res.status(404).json({ message: "Customer Not found" });
        }
        res.status(200).json({ customerItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while fetching the customer" });
    }
};

const addCustomer = async (req, res) => {
    try {
        const newCustomer = await Customer.create(req.body);
        res.status(201).json({ newCustomer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the customer" });
    }
};

const editCustomer = async(req,res) =>{
    const { id } = req.params;
    try{
        const customerToEdit = await Customer.findByIdAndUpdate(id,req.body);
        if(!customerToEdit){
            res.status(404).json({success:false,message:"Customer not found"});
        }
        else{
            res.status(200).json({customerToEdit});
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating the customer data" });
    }
};

const deleteCustomer = async (req,res) => {
    const { id } = req.params;
    try{
        const customerToDelete = await Customer.findByIdAndDelete(id);
        if(!customerToDelete){
            res.status(404).json({success:false,message:"Task not found"});
        }
        else{
            res.status(200).json({customerToDelete});
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting the customer" });
    }
}

export {getAllCustomers,getEachCustomer,addCustomer,editCustomer,deleteCustomer};