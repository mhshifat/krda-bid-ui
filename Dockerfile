FROM node:17-alpine3.15 as builder

RUN mkdir -p  /react-ui


#RUN apt 
# copy the package.json to install dependencies
COPY package.json /react-ui/
COPY public /react-ui/public
COPY src /react-ui/src
COPY tailwind.config.js /react-ui/


WORKDIR /react-ui

# Install the dependencies and make the folder
RUN apk --no-cache add --virtual  \
  g++ gcc libgcc libstdc++ linux-headers make py-pip && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet --legacy-peer-deps && \
  npm run-script build



FROM nginx:alpine

# #!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./.nginx/gzip.conf /etc/nginx/gzip.conf

# ## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
