import crypto from "crypto";
import { promisify } from "util";

const scrypt = promisify(crypto.scrypt);

const KEYLEN = 64;

export const hashPassword = async (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const derivedKey = await scrypt(password, salt, KEYLEN);
  return `${salt}:${derivedKey.toString("hex")}`;
};

export const verifyPassword = async (password, passwordHash) => {
  if (!passwordHash?.includes(":")) {
    return false;
  }
  const [salt, storedKey] = passwordHash.split(":");
  if (!salt || !storedKey) {
    return false;
  }
  const derivedKey = await scrypt(password, salt, KEYLEN);
  const storedBuffer = Buffer.from(storedKey, "hex");
  if (storedBuffer.length !== derivedKey.length) {
    return false;
  }
  return crypto.timingSafeEqual(storedBuffer, derivedKey);
};
