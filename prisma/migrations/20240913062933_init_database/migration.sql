/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_ownerId_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "tableuser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "first_name" TEXT,
    "status" SMALLINT,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "tableuser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tableuser_email_key" ON "tableuser"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "tableuser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
