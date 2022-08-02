## 1. Install

**npm intall** 
**npm i -g pm2**

## 2. Cluster

**npm run fork** - Fork Mode at PORT 8080
 [localhost:8080](http://localhost:8080 "localhost:8080")

**npm run cluster** - Cluster mode at  8081
[localhost:8081/data](http://localhost:8081/data "localhost:8081/data")

## 3. NGINX

 **nginx.conf** 

 Use nginx_1_config settings in your configuration file 
 On Mac you can find the location with nginx -t (Mac command)

## 4.PM2

##### Start Server Fork Mode

`PORT=8080 pm2 start src/server.js --name="Servidor1" --watch`


##### Start Server Cluster Mode

`PORT=8081 pm2 start src/server.js --name="Servidor2" --watch -i max`


 `pm2 list` to check servers created
 `pm2 monit` to check servers log


## 5. PM2 with multiple servers  

 Use nginx_2_config settings in your configuration file 
 On Mac you can find the location with nginx -t (Mac command)

##### Levantar Servidores:

- Modo Fork : `PORT=8080 pm2 start src/server.js --name="servidor1" --watch`
- Modo Cluster : `PORT=8082 pm2 start src/server.js --name="servidor2" --watch -i 1`
- Modo Cluster : `PORT=8083 pm2 start src/server.js --name="servidor3" --watch -i 1`
- Modo Cluster : `PORT=8084 pm2 start src/server.js --name="servidor4" --watch -i 1`
- Modo Cluster : `PORT=8085 pm2 start src/server.js --name="servidor5" --watch -i 1`

**NGINX** 

Invoke the below command to start NGINX. This command runs NGINX as a background daemon.

nginx (Mac command)

Installing NGINX via Homebrew sets the default listening port 8080. This default port assignment ensures that you can run nginx without sudo.

You can run the below command to send the stop signal (-s stop) to ensure that NGNIX is not running. 

nginx -s stop



