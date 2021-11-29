import * as axios from "axios";

async function CleanFirestore() {
  await axios.default.delete(
    "http://localhost:8081/emulator/v1/projects/biko-plus-project/databases/(default)/documents"
  );
}

export { CleanFirestore };
