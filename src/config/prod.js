const mongopassword = "hVza3oSbG2Febbx8";
export default {
    name: 'prod',
    secret: '$123abASSsdfasdf213123*dsf123DEVadfakdfj',
    mongooseString: `mongodb://root:${encodeURIComponent(mongopassword)}@cluster0-gaxbt.mongodb.net/test?retryWrites=true`
}