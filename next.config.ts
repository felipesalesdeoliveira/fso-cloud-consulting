import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/fso-cloud-consulting" : "",
  assetPrefix: isGithubPages ? "/fso-cloud-consulting/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/fso-cloud-consulting" : "",
  },
};

export default nextConfig;
