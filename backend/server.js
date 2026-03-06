import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./router/userRoute.js";
import productRouter from "./router/productRoute.js";
import cartRouter from "./router/cartRoute.js";
import orderRouter from "./router/orderRoute.js";


// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary()

//meddlewares
app.use(express.json())
app.use(cors())

// api endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});
 
app.listen(port, () => console.log("server started on PORT : " + port));
