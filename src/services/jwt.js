import jwt from 'jsonwebtoken';
import config from '../config/config';
const defaultOptions = {
    expiresIn: '24h'
}
exports.create = (payload, options = defaultOptions, secretKey = config.secret) => new Promise((resolve, reject) => {
    let token = jwt.sign({ data: payload }, secretKey, options);
    resolve(token);
})
exports.validate = (token, secretKey = config.secret) => new Promise((resolve, reject) => {
    let payload = jwt.verify(token, secretKey);
    resolve(payload.data);
})