This repository contains the code of the National Athletics League's Blog.

## Branch structure

All the code merged into `master` is built and deployed automatically to https://nalathletics.com/blog

This is made publicly available automatically. Be careful.

## Local server

A new local server can be brought up by running

`jekyll serve` 


## Building

The website can be built by running. This generates a folder `_site` that contains the static files as they are compiled for production

`jekyll build`

## Deploying to prod

Deploys to blog.nalathletics.com (deprecated) are done automatically via Netlify

Deploys to nalathletics.com/blog are done automatically after updating the branch `master` in github. This is done via Github Actions
