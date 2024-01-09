const express = require('express');
const { getContact, getContactById, createContact, updateContact, deleteContact } = require('../controllers/contact_controller');
const router = express.Router();

router.get("/",getContact );


  router.get("/:id", getContactById);


  router.post("/", createContact );

  router.put("/:id", updateContact);

  router.delete("/:id",deleteContact );

module.exports  = router;