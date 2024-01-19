const express = require('express');
const router = express.Router()
const Model = require('../model/model');

module.exports = router;

//Post Method
router.post('/post', async (req, res) => {
    const SiempreNunca  = new Model({
        palabra: req.body.palabra,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion
    })
    try {
        const dataToSave = await SiempreNunca.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
let data = new Model({
    palabra: 'Siempre',
    fecha: new Date(),
    descripcion: 'Siempre'
})
//Get all Method
router.get('/getAll',  (req, res) => {
    const respuesta = Model.find({});
    respuesta.then((data) => {
        res.status(200).json(data)
    })
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
