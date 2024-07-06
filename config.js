const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_49_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDYzLFxuICAgICAgICA1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL2ZXVmN2SC9HcFl5VUdYS0t5YWFRSFZYalNXcEVXN00zdWNCR3dHS1RRRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDdXTndwNHVTWTIycjRwTk9FLU11d1wiLFxuICBcInBob25lSWRcIjogXCI0NzY0MDljZi00NmRhLTRiNGYtOTU2Yi0zNzVjMjYzZTQwZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTQyLFxuICAgICAgMTY5LFxuICAgICAgMjQ3LFxuICAgICAgODEsXG4gICAgICAxMTYsXG4gICAgICAxMDIsXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgMjQ3LFxuICAgICAgOTYsXG4gICAgICAyMyxcbiAgICAgIDE1NyxcbiAgICAgIDE0MyxcbiAgICAgIDE0NCxcbiAgICAgIDU1LFxuICAgICAgMTIwLFxuICAgICAgMTkyLFxuICAgICAgMTUxLFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDYzLFxuICAgICAgNjIsXG4gICAgICA5OSxcbiAgICAgIDI0NixcbiAgICAgIDExMixcbiAgICAgIDEzOCxcbiAgICAgIDUwLFxuICAgICAgMTMwLFxuICAgICAgMjQyLFxuICAgICAgMjMyLFxuICAgICAgMTE3LFxuICAgICAgNjEsXG4gICAgICA4LFxuICAgICAgMTkwLFxuICAgICAgMTUzLFxuICAgICAgMjA1LFxuICAgICAgNTAsXG4gICAgICAxNDIsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xHZTFaSURFUEdubWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVE9PVjdEYnRQTkd5SXhHcXRDdDZaVllJdk1TZ0lPd21qQVpVSXpDUlBVdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQWVFkQ1hVdS9COUpObGl6S2lxQzJRcU4vRkoya012MGRvMjh6cFNKYURsUEYzeDlxUjBxSFlPNVhoSGhnZ3ZPKzRNd29CT2dFbVBONUhkNmh1L1NCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxSnBzSGFGZDMwNVRlVTl4TmJvVXBudG9XRCtFV3ZjNkIrdytQRjd4c3ljUTN2aVkrQnhBdXA4YTdNOUNUbGtOQ1d5ZjJ2MWJ6YjVqMW1scFkwdmNpdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1ODg0NjY1Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGFnbm9sLlwiLFxuICAgIFwibGlkXCI6IFwiOTQzODY0MTk0NDE4NjY6NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1ODg0NjY1Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDc5MzQ4XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
