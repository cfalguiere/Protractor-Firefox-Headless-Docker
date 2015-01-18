FROM ubuntu
# TODO tag

# nginx
RUN apt-get update
RUN apt-get install -y nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
#RUN rm /etc/nginx/conf.d/default.conf
#RUN rm /etc/nginx/conf.d/example_ssl.conf
#COPY conf /etc/nginx

COPY content /usr/share/nginx/html
ADD conf/default /etc/nginx/sites-available/default

EXPOSE 80

CMD ["nginx"]