import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
connectToDatabase()
    .then(() => {
    app.listen(2000, () => console.log("server is runing at port 2000 and connected to database"));
})
    .catch((error) => console.log(error));
//connections and listeneres
//# sourceMappingURL=index.js.map