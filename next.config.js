/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // rewrites는, 유저를 redirect 시키기는 하지만 URL은 변하지 않음
        // 예를 들어, index.ts 에서 URL을 fetch 하는데 API_KEY를 숨기고 싶다면
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      } 
    ]
  }
}

module.exports = nextConfig
