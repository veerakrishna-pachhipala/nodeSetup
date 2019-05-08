import mongoose from 'mongoose'
import config from '../config/config.js'

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(config.mongooseString, { useNewUrlParser: true })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error(err);
                console.error('Database connection error')
            })
    }
}

export default new Database()
