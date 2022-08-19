import app from "./src/app"
import { AppDataSource } from "./src/data-source"

async function init() {
  const PORT = process.env.PORT || 3000

  await AppDataSource.initialize()

  app.listen(PORT, () => console.log("Running at http://localhost:" + PORT))
}
init()
