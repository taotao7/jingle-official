import prisma from "../lib/prisma.js";

const passwordHash =
  "7a8940f79411fa9290e3f52ccb859483:1fc62a92532e6ad765cd922ddaa76136e4c8c385d394e324b77415867877c1d3bc2eb1ad6b5ae192cc85bb67d9fc5c842e4f9404c2ae0ff707cdd4319e68c7b8";

async function main() {
  await prisma.adminUser.upsert({
    where: { username: "root" },
    update: { passwordHash },
    create: { username: "root", passwordHash },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
