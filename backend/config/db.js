import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manjikavi8:food1234@cluster0.ym3spvz.mongodb.net/food-del')
        .then(() => console.log("DB Connected"));
};
