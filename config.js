let mongodb = process.env.MONGODB_URI;
let DB_NAME = process.env.DB_NAME;
module.exports = {
    'database': `${mongodb}/${DB_NAME}`,
};