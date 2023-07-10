let mongodb = process.env.MONGODB_URI;
module.exports = {
    'database': `${mongodb}/${DB_NAME}`,
};