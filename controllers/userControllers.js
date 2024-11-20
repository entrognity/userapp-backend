const { Users, UsersAddress } = require('../models/userModel');


exports.getAddress = async (req, res) => {
    try {
        const userID = '7993924730';

        if (!userID) {
            return res.status(400).json({
                status: 'failed',
                message: 'User ID is required.'
            });
        }

        const retAddress = await UsersAddress.find({
            userMobNumber: userID
        })
            .select('-__v -_id -userGmapUrl')
            .sort('createdAt');
        console.log(retAddress);

        res.status(200).json({
            status: 'success',
            address: retAddress
        });
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const userID = '7993924730';

        if (!userID) {
            return res.status(400).json({
                status: 'failed',
                message: 'User ID is required.'
            });
        }

        const user = await Users.findOne({
            userID: userID
        })
            .select('-__v -_id');

        res.status(200).json({
            status: 'success',
            data: user
        });
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message
        });
    }
};

exports.addAddress = async (req, res) => {
    try {
        const userID = '7993924730';
        // later do data sanitizations and validations
        const addrData = req.body;
        addrData.userMobNumber = userID;
        const address = await UsersAddress.create(addrData);
        res.status(200).json({
            status: 'success',
            data: address
        });
    } catch(err) {
        res.status(500).json({
            status: 'failed',
            message: err.message
        });
    }
};