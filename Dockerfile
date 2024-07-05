# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the built application
RUN npm install -g serve

# Set the command to serve the application
CMD ["serve", "-s", "build"]

# Expose the port the application will run on
EXPOSE 3000
