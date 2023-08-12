const login = require ('../controllers/login');
const {getCharById} = require ('../controllers/getCharById');
const postUser = require ('../controllers/postUser')
const postFav = require ('../controllers/postFav')
const deleteFav =require ('../controllers/deleteFav')
const getAllUsers = require ('../controllers/getAllUsers')
const getAllCharacters = require ('../controllers/getAllCharacters')

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req,res);
});

router.post('/login', (req, res) => {
     login(req,res);
});

router.post('/users', (req, res) => {
    postUser(req,res);
});

router.post('/fav', postFav);

router.delete('/fav/:id',  (req, res) => {
     deleteFav(req,res);
});

router.get('/users', getAllUsers)

router.get('/characters', getAllCharacters)

module.exports = router; 