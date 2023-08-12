const axios = require("axios");

const getAllCharacters = async (req, res) => {
    try {
        let allCharacters = [];

        for (let page = 1; page <= 15; page++) {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
            const characters = response.data.results;
            allCharacters = allCharacters.concat(characters);
        }

        const rymData = allCharacters.map(({ id, name, gender, species, origin, image, status }) => ({
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }));

        console.log(rymData);
        return res.status(200).json(rymData);
    } catch (error) {
        console.log("Error al obtener los datos de la API", error);
        return res.status(404).send(error.message);
    }
};

module.exports = getAllCharacters;
