// connectDB.ts
import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    logger.info("[DB]: Connected to database successfully");
  } catch (error) {
    logger.info("[DB]: Failed to connect to database");
    logger.error("[DB]: Failed to connect to database", error);
    process.exit(1); // Stop aplikasi jika gagal konek
  }
};

export { prisma, connectDB };
