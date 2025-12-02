const { google } = require('googleapis');
const readline = require('readline');
const path = require('path');
const fs = require('fs');

// Ruta a tu archivo client_secret.json
const CREDENTIALS = require('../src/config/client_secret_424023247162-vro4c2ngrrbpld4g26tcjud5l6gfo8jh.apps.googleusercontent.com.json');

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

async function main() {
  const { client_secret, client_id, redirect_uris } = CREDENTIALS.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent', // importante para generar refresh token
  });

  console.log("👉 Abre este link en tu navegador:");
  console.log(authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('\nPega aquí el código que te dio Google: ', async (code) => {
    try {
      const { tokens } = await oAuth2Client.getToken(code);
      console.log("\n🎉 Tokens generados:");
      console.log(JSON.stringify(tokens, null, 2));

      fs.writeFileSync(
        path.join(__dirname, 'oauth_tokens.json'),
        JSON.stringify(tokens, null, 2)
      );

      console.log("\n📁 Guardado en scripts/oauth_tokens.json");
      rl.close();
    } catch (error) {
      console.error("❌ Error al obtener tokens:", error);
      rl.close();
    }
  });
}

main();
