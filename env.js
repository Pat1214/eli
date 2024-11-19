import { config } from "dotenv";
import path from "path";

export function findNearestEnvFile(startDir = process.cwd()) {
  let currentDir = startDir;

  while (currentDir !== path.parse(currentDir).root) {
    const envPath = path.join(currentDir, ".env");

    if (fs.existsSync(envPath)) {
      return envPath;
    }

    currentDir = path.dirname(currentDir);
  }

  return null;
}
