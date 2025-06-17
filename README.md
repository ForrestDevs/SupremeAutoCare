# Supreme Auto Care - Modernized CMS

A completely modernized auto detailing website built with Next.js 15, Payload CMS 3.0, and PostgreSQL. This project transforms the original static site into a powerful, dynamic content management platform.

## 🚀 What's New

### Technology Stack Upgrade
- **Next.js 13.4.19 → 15.1.0** with App Router
- **React 18.2.0 → 18.3.1** with modern patterns  
- **TypeScript 5.2.2 → 5.6.3** with improved types
- **Tailwind CSS 3.3.3 → 3.4.16** with latest utilities

### New Features
- **Payload CMS 3.0** - Complete content management system
- **PostgreSQL Database** - Robust data storage with migrations
- **Vercel Blob Storage** - Optimized media handling
- **Dynamic Services Management** - No more hardcoded content
- **Gallery CMS** - Easy image management with categories
- **Admin Authentication** - Secure admin access
- **Type Generation** - Automatic TypeScript types

## 📦 Quick Start

### 1. Prerequisites
- Node.js 20.9.0 or higher
- PostgreSQL database (local or cloud)
- Vercel account (for blob storage)

### 2. Installation
```bash
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup
Copy the example environment file:
```bash
cp .env.local.example .env.local
```

Configure your environment variables in `.env.local`:

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Payload CMS
PAYLOAD_SECRET=your-32-character-secret-here

# Database (PostgreSQL)
DATABASE_URL=postgresql://username:password@localhost:5432/supremeauto

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token

# Auth (for future better-auth integration)
AUTH_SECRET=your-auth-secret-here
AUTH_TRUST_HOST=true
```

### 4. Database Setup

For local development with Docker:
```bash
# Create docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: supremeauto
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Run the container:
```bash
docker-compose up -d
```

### 5. Payload Setup
```bash
# Generate TypeScript types
npm run generate:types

# Create initial migration  
npm run migration:create

# Run migrations
npm run migration:up
```

### 6. Development
```bash
npm run dev
```

Access your applications:
- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin  
- **API**: http://localhost:3000/api

## 🗄️ Content Management

### Collections

#### Services
Manage detailing services with:
- Dynamic pricing and duration
- Category organization (Express, Luxury, Coating)
- Cal.com booking integration
- Featured service highlighting
- Status management

#### Gallery
Organize showcase images with:
- Category filtering (Interior, Exterior, Engine, etc.)
- Featured image selection
- Custom ordering
- Tag system
- Metadata management

#### Media
Central media library featuring:
- Vercel Blob storage integration
- Multiple image sizes (thumbnail, card, tablet)
- Alt text and captions
- Automatic optimization

#### Users
Admin user management with:
- Email/password authentication
- Role-based access control
- Secure session handling

## 🔧 Development Workflow

### Making Schema Changes
1. Update collection configs in `src/collections/`
2. Generate types: `npm run generate:types`
3. Create migration: `npm run migration:create`
4. Apply migration: `npm run migration:up`

### Content Updates
1. Access admin at `/admin`
2. Login with admin credentials
3. Update content through intuitive interface
4. Changes reflect immediately on frontend

## 📱 Frontend Features

### Responsive Design
- Mobile-first approach
- Improved breakpoints and touch interactions
- Optimized images and loading states

### Performance
- Next.js 15 optimizations
- React Server Components
- Automatic image optimization
- Efficient data fetching

### User Experience  
- Smooth transitions and animations
- Better accessibility
- Improved error handling
- Loading states

## 🚀 Deployment

### Environment Variables (Production)
Update your production environment with:
- Production database URL
- Production Vercel Blob token
- Production app URL
- Secure secrets (generate new ones)

### Vercel Deployment
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy with zero configuration

### Database Migrations
Always run migrations in production:
```bash
npm run migration:up
```

## 🔒 Security Features

- Secure admin authentication
- Environment variable protection
- Database connection encryption
- CORS and CSRF protection
- Secure file uploads

## 📊 Performance Monitoring

- Built-in Vercel Analytics
- Performance monitoring
- User experience tracking
- Image optimization metrics

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint

# Payload CMS
npm run payload              # Payload CLI
npm run generate:types       # Generate TypeScript types
npm run migration:create     # Create new migration
npm run migration:up         # Run migrations
npm run migration:down       # Rollback migrations
npm run migration:refresh    # Refresh all migrations
```

## 🆘 Troubleshooting

### Common Issues

**Database Connection**
- Verify DATABASE_URL format
- Check database exists and is accessible
- Confirm network connectivity

**Media Uploads**  
- Verify BLOB_READ_WRITE_TOKEN
- Check Vercel Blob storage permissions
- Confirm file size within limits

**Build Errors**
- Run `npm run generate:types`
- Clear Next.js cache: `rm -rf .next`
- Verify all environment variables

### Getting Help
- Check [Payload CMS documentation](https://payloadcms.com/docs)
- Review [Next.js 15 docs](https://nextjs.org/docs)
- Join [Payload Discord community](https://discord.com/invite/payload)

## 🎯 Migration from Static Site

### What Changed
- **Services**: Hardcoded services → Dynamic CMS management
- **Gallery**: Static image arrays → Dynamic uploads with metadata
- **Content**: Fixed content → Flexible, manageable content
- **Admin**: No admin interface → Full-featured admin panel

### Data Migration
The original static data can be imported through:
1. Admin panel manual entry
2. Custom import scripts
3. Database seeding scripts

## 🔮 Future Enhancements

### Planned Features
- Better Auth integration (when ES module issues resolved)
- Multi-language support
- Advanced analytics dashboard
- Customer testimonials system
- Email marketing integration
- Advanced SEO tools

### Content Expansion
- Blog/news section
- Service packages and bundles
- Customer portal
- Loyalty program system
- Review and rating system

## 📄 License

This project maintains the same license as the original Supreme Auto Care website.

## 🤝 Contributing

Contributions are welcome! Please follow the development workflow and ensure all tests pass before submitting pull requests.

---

**Note**: This modernization transforms Supreme Auto Care from a static website to a powerful, scalable, and easily manageable platform while maintaining the original design aesthetic and user experience.
