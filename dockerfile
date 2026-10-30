FROM nginx:alpine

# Copy HTML, CSS, and JS into the default Nginx web root
COPY Form-validation/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]