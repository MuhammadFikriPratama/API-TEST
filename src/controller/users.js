const getAllUsers = (req, res) => {
    const data = {
        id: "1",
        name: "fikri",
        email: "fikri@gmail.com",
        address: "bdg"
    }

    res.json({
        message: "GET all users success",
        return: data
    })
}

const createNewUsers = (req, res) => {
    console.log(req.body);
    res.json({
        messsage: "CREATE new users success",
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message: "UPDATE user success",
        data: req.body
    })

}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name: "Fikri P",
            email: "fikri@gmail.com",
            address: "BDG"
        }
    })
}


module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
}