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

This is done automatically via a github action.
See .github/workflows/jekyll.yml on this repo to understand how this process works

## Serving prod

Files in production are served through a custom Docker image

To compile this image run `docker build -t nalathletics/blog .`

To run this image as a new container run
`docker run --name nalathletics_blog -v "/full/path/to/_site":/usr/share/nginx/html:ro -p 3001:80 nalathletics/blog`

In production, this full path is `/var/www/_private/blog/_site`. The `-v` argument shows that this is a volume mounted dynamically, and so changes are reflected in real time.  

The base image is nginx. The default configuration file for this server was ejected to `conf.d/default.conf` on this repo.
Check that file to understand how the server is configured. After making changes to this file, `docker build -t nalathletics/blog .` has to be run again to reflect these changes.

If the image is updated, e.g. after making changes on conf.de/default.conf, the container has to be stop, removed, and a new one has to be generated.

`docker stop nalathletics_blog` 
`docker rm nalathletics_blog` 
 
And again `docker run ...` as before


