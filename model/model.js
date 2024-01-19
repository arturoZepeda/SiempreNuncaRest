const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    palabra: {
        required: true,
        type: String
    },
    fecha: {
        required: true,
        type: Date
    },
    descripcion: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('SiempreNunca', dataSchema)
