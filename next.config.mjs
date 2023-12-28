import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dirName = dirname(fileURLToPath(import.meta.url));
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  sassOptions: {
    includePaths: [join(dirName, "styles")],
  },
};

export default nextConfig;
