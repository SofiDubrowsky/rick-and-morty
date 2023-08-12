const {User} = require ('../DB_connection');


const getAllUsers= async (req, res) => {
 try {
    const AllUsers = await User.findAll();

    if(!AllUsers) throw Error ('No hay usuarios registrados')
    
    return res.status(200).json(AllUsers)

 } catch (error) {
    return res.status(500).send(error.message);
 }
}

module.exports = getAllUsers;