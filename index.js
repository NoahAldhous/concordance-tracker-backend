import express from 'express';

import {people} from './data';

const app = express();

app.get('/', (request, response) => {
        response.json(people)
});

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})