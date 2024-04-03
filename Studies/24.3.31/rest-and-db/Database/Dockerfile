# Install OS (Debian) + MySQL: 
FROM mysql:5

# Copy northwind.sql to the special folder
# /docker-entrypoint-initdb.d so it will run once:
COPY ./northwind.sql /docker-entrypoint-initdb.d