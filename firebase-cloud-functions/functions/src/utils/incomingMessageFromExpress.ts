import { Request } from "firebase-functions/v2/https";
import { IncomingMessage } from "node:http";
import { Socket } from "node:net";

// From https://github.com/FirebaseExtended/firebase-framework-tools/pull/122
export function incomingMessageFromExpress(req: Request): IncomingMessage {
  const socket = new Socket();
  const incomingMessage = new IncomingMessage(socket);

  incomingMessage.push(req.rawBody);
  incomingMessage.push(null);

  incomingMessage.headers = req.headers;
  incomingMessage.headersDistinct = req.headersDistinct;
  incomingMessage.httpVersion = req.httpVersion;
  incomingMessage.httpVersionMajor = req.httpVersionMajor;
  incomingMessage.httpVersionMinor = req.httpVersionMinor;
  incomingMessage.method = req.method;
  incomingMessage.rawHeaders = req.rawHeaders;
  incomingMessage.rawTrailers = req.rawTrailers;
  incomingMessage.trailers = req.trailers;
  incomingMessage.trailersDistinct = req.trailersDistinct;
  incomingMessage.url = req.url;

  return incomingMessage;
}
