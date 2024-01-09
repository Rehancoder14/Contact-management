
const asyncHandler = require('express-async-handler'); // using async handler will bring ease by avoiding try catch block every where
const Contact = require("../models/contact-model")
const uuid = require('uuid');
const getContact = asyncHandler(
    async (req, res) => {
        const result = await Contact.find();
        res.status(200).json({
          error: false,
          message: "Running successfully",
          data : result
        });
      }  
);
const getContactById = asyncHandler(
    async(req, res) => {

        const result = await Contact.findOne({id: req.params.id});
        if(!result){
            res.status(400);
            throw new Error( "No Contact found");
        }
      return  res.status(200).json({
          error: false,
          message: "Running successfully",
          data: result
        });
      }
);

const createContact = asyncHandler(async(req, res) => {
    const {name, contact, email} = req.body;

    if( !name || !contact || !email){
        res.status(400);
        throw new Error( "All Fields are mandatory*")
    }

    const contactModel = await Contact.create({
        id: uuid.v4(),
        name: name,
        contact: contact, 
        email: email
    });
    
    return res.status(201).json({
      error: false,
      message: "post successfully",
      data : contactModel
    });
 
});

const updateContact = asyncHandler(
    async (req, res) => {
      const updateContact = req.body;
      const result =await Contact.findOneAndUpdate({id: req.params.id},updateContact);
      
      if(!result){
        res.status(400);
        throw new Error( "No Contact found");
      }
       return res.status(200).json({
          error: false,
          message: `put successfully id ${req.params.id}`,
          data: result
        });
      }
);

const deleteContact =asyncHandler(
    async(req, res) => {
      const result = await Contact.findOneAndDelete({id: req.params.id});
      
      if(!result){
        res.status(400);
        throw new Error( "No Contact found");
      }
      return   res.status(200).json({
          error: false,
          message: `deleting successfully id ${req.params.id}`,
        });
      }
);

module.exports = {
  getContact,
  updateContact,
  createContact,
  deleteContact,
  getContactById,
};
