const login = require ('../controllers/login');
const {getCharById} = require ('../controllers/getCharById');
const postUser = require ('../controllers/postUser')
const postFav = require ('../controllers/postFav')
const deleteFav =require ('../controllers/deleteFav')

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req,res);
});

router.get('/login', (req, res) => {
     login(req,res);
});

router.post('/login', (req, res) => {
    postUser(req,res);
});

router.post('/fav', postFav);

router.delete('/fav/:id',  (req, res) => {
     deleteFav(req,res);
});

module.exports = router; 