import admin from "./routes/admin.js";
import bookings from "./routes/bookings.js";
import malls from "./routes/malls.js";
import slots from "./routes/slots.js";
import users from "./routes/users.js";

import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "*",
}));

app.use(express.json());
app.use("/admin", admin);
app.use("/book", bookings);
app.use("/malls", malls);
app.use("/slots", slots);
app.use("/users", users);

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

export default app;
