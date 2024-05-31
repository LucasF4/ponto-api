import { app } from "./app";
const PORT = 3033;

app.listen(PORT, () => {
  console.log("This server is running to PORT: ", PORT);
});
