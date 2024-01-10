const express = require('express');
const { getContact, getContactById, createContact, updateContact, deleteContact } = require('../controllers/contact_controller');
const validateToken = require('../middleware/validate-token-handler');
const router = express.Router();


router.use(validateToken);
router.get("/",getContact );

router.get("/:id", getContactById);
router.post("/", createContact );
router.put("/:id", updateContact);
router.delete("/:id",deleteContact );


module.exports  = router;