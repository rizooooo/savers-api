const Inquiry = require("../models/inquiry.model");

const Controller = {
    GET: async (req, res) => {
        try {
            const result = await Inquiry.findAll();
            console.log(result);

            res.status(200).send(result);
            // res.send('Hello Inquiries!');
        } catch (error) {
            console.log(resuerrorlt);
        }
    },
    POST: async (req, res) => {
        try {
            const result = await Inquiry.create(req.body);
            res.status(200).send(result);
        } catch (error) {
            console.log(resuerrorlt);
        }
    },

}

module.exports = Controller;