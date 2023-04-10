import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import admin from "firebase-admin";

const serviceAccount = {
  type: "service_account",
  project_id: "simple-web-chat-71a60",
  private_key_id: "9a8e9d5ccd92e57178ff8e54b82e704d910cdadb",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzoEOlI7q0pvL4\niyjP2aDp8DEaUiQ4XhMeJ7vFSiQDn3fcRRv+/2NRc2NlP31sjtSXJrLtdXWXHdep\nyqfnLV6A+QdRe6ZLJ/14qIdVIHqZSrgqdD2DSDr5RgpJp3ychYAuDfzPR3EDx0B1\nB3pIfEzB9m2YA42iOvUWHbc+WON4VU6dzJ+KvcOxX69jynBTmlVWYNWVCeDomGpk\neaEOYai362BsA0YlH3cridIaN1oSTYSFWr85EFnknCWWDMvkzlHR+4uDDRA+r9MP\nANJciQDBCS5Tw/0rX3JUW2radEmh4QT8n4eOqu39gZ9ZmIVrsm58oC/HO3x5EyWB\nThKrqJYxAgMBAAECggEAEDuc58Q5b9ctwMpXfAxcOQGTRNN37hdXJCcar//WqCeP\nXgec03su9Y7Q97bSIq8rUfGV9lTigi9ln85U3ogNSoIdNP7qQbZ+dwEvIcFKpkAu\nmB+WUFJRvT8+iynb3nIUg5T3nzlpYpo6HmYrmRHEOgi6hL2/EF8o0PPXuiAV7N5z\nC2p1hnF/d7EWEPJdj7zutNwabXgsL0ifM0Sq7wKToc1YAFpFEFuaXR/ZPRrTyvjE\nGjmt0M4He6cUtOdhIoktbFopmXSlKHqCyIUg+786wBW9lY2gVkW+y+9bTwSDddM0\nbWGqtrZ8jUQAd6YNVNpkUyMwfS3LlqH0TqnmARv+lQKBgQD8mQQ8EhsNfnmQL2/g\nDgzoENpbvaX0+Uyqif/CEvhL0br2r9xn0GfORVmYUTVrX9cMsHdFQkdiUYRKCZfk\nSANdFzhX3eRzYy52i5iiQpIne3TOHGt1uoPpRG0k+UgYeEi+QT5nPG8/HPCQ40LJ\ndNxBfStodcYUTOSpYyNoH4mMqwKBgQC2C6I3Jz5Jz2PYhdSDBfcrMwZfbIOV2wPJ\nOqxL3ohyrS1niyz4lYrSgo5RYQZAKFiCrmcKaD8sSY/H36aneKk+KXXgKTlf3w4s\nuSWtt2vIjm0DSeN5T5avT+48i1QKm+3Hv5Ft+Fx6mGAe8h+/fJxBl8ypN9uJ4uSb\nyHy/AmZwkwKBgGugdyFxRX2Wag15aN26nt0ycRet0sxyfKwdaJA0rP8BOfxqKitB\nrTlCa05vK6e4ilSpy+gCuY+20/sH42QtGuHLRwKJVRGlLOLtz/czDjssazR2/4KG\nGjaGJUsfvAxRFA2clw49vdjSZ94UNxzHYiG1R42WwPNdYACccTWoWl9JAoGABMiF\neKGFV3cljnjlvpOXjQEIN9WoF3XrwYvTHyM3vpuiR8g2ZEm5nhJkHutHuMPWn4hp\nmLJohodgScYsoNXgzItWV499vHEl9DLhNJFPObPUVXPJkFRxByY4gkq+6JB0TP1R\nmuwdsfLzA50lDGj/yhFtBT08fYECtL0t2e78NhUCgYABYNhFSH+FkeM+tSUMMy2U\nL8xkWQWQMEAAg8ya0UFSNzmCMbVwYgsVNQEPsq7ub1hg2dqDa0jWzCwChPCPu2j/\nF6N7xEecG5FfuIgAVKO21Wiy1P6magcXiPmh0FhtLSct5y47q8YpAzsfcwBaR5LQ\nDAcnX+lXRmMnoyfywFclvQ==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-5kd87@simple-web-chat-71a60.iam.gserviceaccount.com",
  client_id: "103897174969756691911",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5kd87%40simple-web-chat-71a60.iam.gserviceaccount.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

interface SocketData {
  user: string;
}

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const httpServer = createServer(app);
const io = new Server<SocketData>(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.use(async (socket, next) => {
  const token = socket.handshake.auth.token;
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log("decodedToken", decodedToken);
    socket.data.user = decodedToken;
  } catch (error) {
    return next(new Error("authenticaiton failed"));
  }
  next();
});

io.on("connection", (socket) => {
  console.log("We are live and connected");
  console.log("User connect: ", socket.id);
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
