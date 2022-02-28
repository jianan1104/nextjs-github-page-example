require('dotenv').config()

module.exports = {
  reactStrictMode: false,
  env: {
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN
  }
}
