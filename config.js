const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0gzYmMwNmx6WFZVbmpXbkh4bmMvQlJMQnJFR1VhWXBKYVcrYWNOb1dWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2k2dng2MVNCN3E4Q3dyOGYvVDU1VFAxMVhOcTJXaDYzZFFQeWR0M3FnUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ0hFQ0tWT3duZGJVdURLZnNuOE1LaVJVeTYrWTRaemlxeWVsTFZIa1Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoOTRDT05iQTJkamtPaWgvdkkxemtFL2ZBVFhFYXhxUXVFTGVia0hZM2dNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNcVptRklKTHFqSU1BRmFaMmw0dXRPMVEvL0huYVVNWGJ2L2wySUFSVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR4MmVNaGlTeEtkN2premdUUVRRUUpsTW4yOTkyRWtNVnBwUDNjU01KeGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01DVzJseXJ6VlFqUWxkQlVMeERnY0tWTmlIa1JQMk5LMEpGaWhZQlFsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDJCVnVWUW8xcFNJNFZtUktoSGZMWEJ5ZkJ2VlJxZWJXZm5GNEs0bWloTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhPRm1LeTJqd0J1MktDcUlpUjJybExWVHViS1pRZjRWb05obDB4emVuTWQ5T2xJa0hsNkdZMzZ5M3ZHeW9ucFRJUmY5anhwcG9VVUZTanNManl5SGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJrZ2NFUElCV3AwcTV4RnpEcExHNjdoOHFvbkxRZnFYNmUrUGpzY3AveXFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwODU5MDcyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0ODQ4MjdFQ0Q2MzAwMTk1QTJDNDgwOTU5MzIxNjREQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NTk5MTk4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDg1OTA3MjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkExOEI0MTkzQ0I4OTUyMzM2M0U2NjNBMkE5Qzk0OTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjU5OTE5OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNkFMREM5WjEiLCJtZSI6eyJpZCI6IjkyMzMwODU5MDcyNToxNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1ODQ3MTg1MzMyMjM1ODoxNEBsaWQiLCJuYW1lIjoi8J+SlOKUgeKUgeKUgeKUgeKYhvCdl6bwnZeU8J2XlyDwnZeg8J2XqPCdl6HwnZeX8J2XlCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTNzZ3YwRkVKaW56c1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUUNJclVxbExNMHhXK0hmbjdsa2QrT3pobmphMFVTTHQvSFN0ZHRZOVFtST0iLCJhY2NvdW50U2lnbmF0dXJlIjoieHE1eks3UzZMWFlYd1d2WkNLTUJHM2ZwYWN6TUcycGJIMmpvRncwQTRVenZCamJVSlZpODYxYXArQm13WlR0YnVxdkxPb1ducDlmUUp4RDgxbUx1Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImExWmRvR3I5WnpGcTVJYTN2R0xZSDdjN2ZTYjRnNGZuM21Ka2Z5ak40eEtaVWFSTS9BQ2R5dzNWZTZTdmovS0RFam8xOXZLWjQwdkl0Z2hMN2hKdGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA4NTkwNzI1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVBaUsxS3BTek5NVnZoMzUrNVpIZmpzNFo0MnRGRWk3ZngwclhiV1BVSmkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjU5OTE5NiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBQTkifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
