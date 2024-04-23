import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionIntanse = await mongoose.connect(`${process.env.DATABASE_URL}`, {
            dbName: "curly_giggle", // Specify your database name here
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Other options...
        });
        console.log(`\n 🟢Mongodb connected !! DB Host: ${connectionIntanse.connection.host}`);
        
    } catch (error) {
        console.log('Mongodb Connection Error:::', error);
        process.exit(1);
    }
}

export default connectDB;
