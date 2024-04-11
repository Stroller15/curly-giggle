import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // console.log(process.env.DATABASE_URL)
        const connectionIntanse = await mongoose.connect(`${process.env.DATABASE_URL}`);
        console.log(`\n Mongodb connected !! DB Host: ${connectionIntanse.connection.host}`);
        
    } catch (error) {
        console.log('Mongodb Connection Error:::', error);
        process.exit(1);
    }
}

export default connectDB;