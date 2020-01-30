$(document).ready(function () {
    class CaesarCipher {

        constructor(key) {
            this.key = key;
        }

        encrypt(message, Key = 1) {
            let encryptMessage = '';
            for (let i = 0; i < message.length; i++) {
                let letter = message[i];
                if (letter.match(/[a-z]/i)) {
                    let code = message.charCodeAt(i);
                    console.log(((code - 65 + this.key) % 26) + 65)
                    if ((code >= 65) && (code <= 90))
                        letter = String.fromCharCode(((code - 65 + (Key * this.key)) % 26) + 65);
                    else if ((code >= 97) && (code <= 122))
                        letter = String.fromCharCode(((code - 97 + (Key * this.key)) % 26) + 97);
                }
                encryptMessage += letter;
            }
            return encryptMessage;
        }

        decrypt(message) {
            let decryptMessage = this.encrypt(message, -1);
            return decryptMessage;
        }

        bruteForce(message) {
            let decryptedMessages = [];
            for (let k = 1; k < 26; k++) {
                let decryptMessage = "";
                for (let i = 0; i < message.length; i++) {
                    let letter = message[i];
                    if (letter.match(/[a-z]/i)) {
                        let code = message.charCodeAt(i);
                        if ((code >= 65) && (code <= 90))
                            letter = String.fromCharCode(((code - 65 + k) % 26) + 65);
                        else if ((code >= 97) && (code <= 122))
                            letter = String.fromCharCode(((code - 97 + k) % 26) + 97);
                    }
                    decryptMessage += letter;
                }
                decryptedMessages.push(decryptMessage);
            }
            return decryptedMessages;
        }
    }

    let crypt = new CaesarCipher(3);
    console.log(crypt.encrypt('HellO'));
    console.log(crypt.decrypt('KhooR'));
    console.log(crypt.bruteForce('KhooR'));
});