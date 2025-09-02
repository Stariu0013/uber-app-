export const SETTINGS = {
  PORT: process.env.PORT || 5003,
  MONGO_URL:
    process.env.MONGO_URL ||
    'mongodb+srv://admin:admin@cluster0.muakfxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  DB_NAME: process.env.DB_NAME || 'ed-back-lessons-uber',
};
