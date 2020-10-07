FROM nginx
COPY _site /usr/share/nginx/html
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
