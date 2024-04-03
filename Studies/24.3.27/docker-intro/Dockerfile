
# Install Linux Alipne - latest version (not recommended):
# FROM alpine

# Install Linux Alipne - specific version (not recommended):
# FROM alpine319

# Install Linux Alipne - specific version + Node.js - latest version (not recommended):
# FROM node:alpine3.19

# Install Linux Alipne - specific version + Node.js - specific version (recommended):
FROM node:20-alpine3.19

# Install global installations: 
RUN npm i -g ts-node

# Create a new folder for our application inside the image: 
WORKDIR /app

# Copy package.json and package-lock.json from vs-code into /app inside the image:
COPY package*.json /app

# Run npm i inside the image for creating node_modules inside the image:
RUN npm i 

# Copy our application into the image: 
COPY . /app

# Which command to run when container start: 
ENTRYPOINT npm start

# 1. Create image:
# docker build -t <image-name> <Dockerfile location>
# docker build -t test-image .
# docker build -t edomathias/test-image:1.0 .

# 2. Create container: 
# docker create --name <container-name> -p <host-port:container-port> <image-name>
# docker create --name test-container -p 4010:4000 test-image
# docker create --name test-container -p 4010:4000 edomathias/test-image:1.0

# 3. Run container: 
# docker start <container-name>
# docker start test-container

# Create container using given image + start it. If image not exist in our computer - download it:
# docker run kobiarev/kittens-image:1.0
