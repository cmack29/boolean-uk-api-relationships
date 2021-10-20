const { prisma, address } = require("../utils/database")

const getAll = async (req, res) => {
    try{
        const allUsers = await prisma.user.findMany()
        res.json({data: allUsers})
    }
    catch(error) {
        console.error(error)
    }
}

const getOneById = async (req, res) => {
    try{
        const users = await prisma.user.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        console.log(users)
        res.json({data: users})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const getOneByAddress = async (req, res) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                address: address
            }
        })
        console.log(user)
        res.json({data: user})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

module.exports = { getAll, getOneById, getOneByAddress }