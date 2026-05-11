import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

const QRCode = require('qrcode');

QRCode.toFile('qrcode.png', 'https://exemplo.com', function (err) {
  if (err) throw err;
  console.log('QR Code gerado com sucesso!');
});


async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();
