const express = require('express');
const { registerUser, getUsers, loginUser , getCurrent, updateUserData, deleteUserData} = require('../controllers/user-controller');
const validateToken = require('../middleware/validate-token-handler');
const router = express.Router();

router.get('/', validateToken,getUsers);

router.post('/register', registerUser);

router.post('/login',loginUser);

router.put('/:id',validateToken ,updateUserData);

router.delete('/:id',validateToken, deleteUserData );

router.get('/current', validateToken,getCurrent);

module.exports = router;