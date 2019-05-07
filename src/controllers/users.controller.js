import mongoose from 'mongoose';
import User from '../models/users.model';
import bcrypt from  'bcrypt';
exports.add = function addUser(req, res, next) {
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({
            error: {
                statusCode: 400,
                message: 'body is missing'
            }
        });
        return;
    }
    let password= bcrypt.hashSync(req.body.password, 10);
    let newUser = new User({
        name: req.body.name,
        password:password,
        phone: req.body.phone
    });

    newUser.save((err, result) => {
        if (err) {
            if (err.code === 11000) {
                res.status(409).json({
                    error: {
                        statusCode: 409,
                        message: 'User Already exists.'
                    }
                });
            }
            else if (err.errors) {

                const errors = Object.keys(err.errors).map(key => {
                    return {
                        name: err.errors[key].path,
                        error: err.errors[key].name,
                        message: err.errors[key].message
                    }
                });
                console.log(err.errors)
                res.status(412).json({
                    errors,
                    code: err.name
                })
            } else {
                console.error(err)
                res.status(500).json({
                    error: {
                        statusCode: 500,
                        message: 'Something went wrong while adding a new user'
                    }
                });
            }
        } else {
            res.status(201).json({
                statusCode: 201,
                data: {
                    id: result['_id']
                },
                message: 'Successfully Created'
            })
        }
    })

}
exports.getById = function getUserById(req, res, next) {
    if (req.params && req.params.id) {
        User.findById(req.params.id.toString(), {
            name:1,
            active:1,
            phone:1,
            access_level:1
        })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    error: {
                        statusCode: 500,
                        message: 'Something went wrong while getting user details'
                    }
                });
            })
    } else {
        res.status(412).json({
            error: {
                message: 'userid is missing',
                statusCode: 412
            }
        });
    }
}