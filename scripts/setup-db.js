const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Setting up database...');
  
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    
    // Check if Contact table exists by trying to count records
    const contactCount = await prisma.contact.count();
    console.log(`✅ Contact table exists with ${contactCount} records`);
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    
    if (error.message.includes('does not exist')) {
      console.log('💡 Run "npx prisma db push" to create the database tables');
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();
