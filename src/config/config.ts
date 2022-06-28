export const SERVER_CONFIG = {
    port:Number(process.env.PORT) || 3000,
    cors:process.env.CORS || false,
}

export const DB_CONFIG = {
    mongoURI:process.env.MONGO_URI || '',
}