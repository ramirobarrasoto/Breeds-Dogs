const {Breed} = require("../db");
const { v4: uuidv4 } = require('uuid');

 const createBreed= async  (req, res)=> {

    const { name, height, weight, life_span, temperament } = req.body;
    
    try {
        await Breed.create({
            id: uuidv4(),
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
            image: 'https://i.blogs.es/ab74c7/fotografo-de-perros_-santos-roman-piccolo-italiano/450_1000.jpg'
        })
        
        //const dog = await Breed.findByPk(breed.id)
            .then(breed => breed.addTemperaments(temperament))
            .then(r => res.send({ message: 'New breed created successfully' }))
    } catch (err) {
        console.log(err.message);
    }
};


module.exports= createBreed