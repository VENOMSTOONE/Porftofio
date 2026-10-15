/** @type {import('next').NextConfig} */
const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
let basePath = '';

if (isGithubActions) {
  // Extract repository name, e.g. "myuser/portfolio" -> "/portfolio"
  const repo = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}` : '';
  // User pages like "username.github.io" don't need a basePath
  if (repo && !repo.endsWith('.github.io')) {
    basePath = repo;
  }
}

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
