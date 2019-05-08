import mongoose from 'mongoose';
import User from '../models/users.model';
import bcrypt from 'bcrypt';
import jwt from '../services/jwt';

exports.shouldLoggedIn = (req, res, next) => {
    if (req.headers['x-access-token']) {
        jwt.validate(req.headers['x-access-token'])
            .then(data => {
                req.userData = data;
                next();
            })
            .catch(err => {
                console.log(err)
                res.status(401).json({
                    statusCode: 401,
                    message: 'UnAuthorized due to Invalid or Expired Token'
                })
            })
    } else {
        res.status(403).json({
            error: {
                statusCode: 403,
                message: 'x-access-token header is missing'
            }
        })
    }
}
exports.shouldLoggedInasAdmin = (req, res, next) => {
   
    if (req.headers['x-access-token']) {
        jwt.validate(req.headers['x-access-token'])
            .then(data => {
                if (data.access_level && data.access_level === 2) {
                    req.userData = data;
                    next();
                }else{
                    console.log(data)
                    res.status(403).json({
                        error: {
                            statusCode: 403,
                            message: 'Forbidden'
                        }
                    })
                }

            })
            .catch(err => {
                res.status(401).json({
                    statusCode: 401,
                    message: 'UnAuthorized due to Invalid or Expired Token'
                })
            })
    } else {
        res.status(403).json({
            error: {
                statusCode: 403,
                message: 'x-access-token header is missing'
            }
        })
    }
}