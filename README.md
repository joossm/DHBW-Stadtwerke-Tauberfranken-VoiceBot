# DHBW-Stadtwerke-Tauberfranken-VoiceBot
VoiceBot

## Set Up Local
### if port 8080 is used:
netstat -ano | findstr :8080
taskkill /PID [task id] /F

### start ngrok:
ngrok http 8080

### To RUN the APP:
node app.js

### ngrok beenden
taskkill /f /im ngrok.exe

## development hints

### Add to package.json below "main":
"type": "module",


# supported workflows:

