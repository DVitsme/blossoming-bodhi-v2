-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
