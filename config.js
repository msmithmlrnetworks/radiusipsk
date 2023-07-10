let mongodb = process.env.MONGODB_URI || 'mongodb://localhost:27017/radiusdb';
module.exports = {
    'database': mongodb,
};