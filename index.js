import express from 'express';

import {people} from './data.js';

const app = express();
const PORT = 3001

//Basic GET reqeust handling
app.get('/', (request, response) => {
        response.json(people)
});

//App listening on PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})