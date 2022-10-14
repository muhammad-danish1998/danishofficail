const sitemap =  require("nextjs-sitemap-generator");

const fs =  require("fs");

  

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

  

sitemap({
  baseUrl: "https://danishtanoli.com",
  // If you are using Vercel platform to deploy change the route to /.next/serverless/pages 
  pagesDirectory: __dirname + "/.next/server/static/" + BUILD_ID + "/pages",
  targetDirectory: "public/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["assets"], // Exclude everything that isn't static page
});