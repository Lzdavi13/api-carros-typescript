-- CreateTable
CREATE TABLE "carros" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "carros_pkey" PRIMARY KEY ("id")
);
