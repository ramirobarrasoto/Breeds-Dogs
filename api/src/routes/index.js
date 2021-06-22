const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const BreedRouter = require ('./breed')
const TemperamentRouter = require ('./temperament')


const router = Router();

// async function intoToDb(){

//     let empty = Temperament.count();
//     if (empty){
//         let temperaments = await axios.get(BREED_URL);
//         temperaments.data.forEach(async temperament => {
//             await Temperament.create({
//                 id:UUIDV4()
//                 name:
//             })
            
//         });
//     }
// }


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/breeds',BreedRouter)
router.use('/temperament',TemperamentRouter)


module.exports = router;
