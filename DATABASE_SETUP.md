# Database Setup for Contact Form

This project uses SQLite with Prisma ORM to store contact form submissions.

## Setup Instructions

### 1. Environment Variables
Create a `.env` file in the root directory with:
```
DATABASE_URL="file:./dev.db"
```

### 2. Database Initialization
Run the following commands to set up the database:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (creates tables)
npx prisma db push

# Optional: View database in Prisma Studio
npx prisma studio
```

### 3. Database Schema
The Contact model includes:
- `id`: Unique identifier (auto-generated)
- `name`: Contact's name
- `email`: Contact's email address
- `subject`: Message subject
- `message`: Message content
- `status`: Status (new, read, replied)
- `createdAt`: Timestamp when created
- `updatedAt`: Timestamp when last updated

### 4. API Endpoints

#### POST /api/contact
Submit a new contact form:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about AuraSAT",
  "message": "I'm interested in learning more..."
}
```

#### GET /api/contact
Retrieve all contact submissions (for admin use)

#### PATCH /api/contact/[id]
Update contact status:
```json
{
  "status": "read" // or "replied"
}
```

### 5. Admin Interface
Visit `/admin/contacts` to view and manage contact submissions.

### 6. Database File
The SQLite database file will be created as `dev.db` in the project root.

## Troubleshooting

If you encounter issues:
1. Make sure the `.env` file exists with `DATABASE_URL`
2. Run `npx prisma generate` to update the client
3. Run `npx prisma db push` to sync the schema
4. Check that the database file `dev.db` exists
