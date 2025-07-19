# 📚 Bookify - Book Exchange Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://next-event-pro.vercel.app/)
[![Frontend](https://img.shields.io/badge/Frontend-Repository-blue)](https://github.com/sumon-ray/Next-Event-Client)
[![Backend](https://img.shields.io/badge/Backend-Repository-orange)](https://github.com/sumon-ray/Next-Event-Server)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)](https://tailwindcss.com/)

## 🌟 Overview

**Bookify** is a comprehensive web-based platform designed to facilitate seamless book exchanges between users. Built with modern web technologies, it enables users to list books, discover new reads, and engage in meaningful book-sharing experiences through an integrated community platform.

### 🎯 Mission
To create a vibrant ecosystem where book lovers can easily exchange, discover, and share their favorite reads while building meaningful connections within the reading community.

## ✨ Key Features

### 📖 Core Functionality
- **Detailed Book Listings** - Comprehensive book information with cover images, author details, genre, and condition
- **Advanced Search & Filtering** - Full-text search with multiple filter options (genre, condition, availability)
- **User Book Management** - Complete CRUD operations for personal book collections
- **Exchange Request System** - Streamlined request/accept/decline workflow with status tracking
- **Real-time Messaging** - Direct communication between users for exchange negotiations

### 👤 User Experience
- **Personalized Dashboards** - Comprehensive overview of listings, requests, and account activity
- **User Profiles** - Detailed profiles with exchange history and ratings
- **Rating & Review System** - Community-driven feedback system for books and users
- **Smart Notifications** - Real-time updates for exchange requests and platform activities

### 🌍 Community Features
- **Community Forum** - Discussion spaces for book recommendations and literary discussions
- **Book Condition Tracking** - Detailed condition specifications (New, Like New, Used)
- **Availability Management** - Real-time status updates (Available, Reserved, Exchanged)

## 🏗️ Architecture & Technology Stack

### Frontend
```
Framework: Next.js 13+ (SSR/SSG)
Styling: Tailwind CSS + Flowbite Components
State Management: React Context/Redux
Image Optimization: Next.js Image Component
```

### Backend
```
API: Next.js API Routes
Database: MongoDB/PostgreSQL
Authentication: NextAuth.js
Real-time: Socket.io/WebSockets
Cloud Storage: AWS S3/Cloudinary
Email Service: SendGrid
```

### Infrastructure
```
Deployment: Vercel (Frontend) + Custom Backend Hosting
CDN: Optimized asset delivery
Caching: Strategic caching for performance
Security: CSRF/XSS protection, input validation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB/PostgreSQL
- npm/yarn

### Installation

1. **Clone the repositories**
   ```bash
   # Frontend
   git clone https://github.com/sumon-ray/Next-Event-Client.git
   cd Next-Event-Client
   npm install
   
   # Backend
   git clone https://github.com/sumon-ray/Next-Event-Server.git
   cd Next-Event-Server
   npm install
   ```

2. **Environment Configuration**
   ```bash
   # Frontend (.env.local)
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   NEXT_PUBLIC_API_URL=http://localhost:5000
   
   # Backend (.env)
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   CLOUDINARY_URL=your-cloudinary-url
   SENDGRID_API_KEY=your-sendgrid-key
   ```

3. **Run the application**
   ```bash
   # Backend (Terminal 1)
   npm run dev
   
   # Frontend (Terminal 2)
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🎯 Target Audience

| Audience | Use Case |
|----------|----------|
| **Students & Learners** | Access academic books through exchange |
| **Teachers & Researchers** | Share reference materials with colleagues |
| **Libraries** | Foster community exchanges |
| **Book Enthusiasts** | Swap novels and discover new reads |
| **NGOs & Charities** | Facilitate book donations |
| **Cultural Organizations** | Organize community book events |

## 🔧 API Documentation

### Authentication Endpoints
```
POST /api/auth/register    - User registration
POST /api/auth/login       - User login
GET  /api/auth/profile     - Get user profile
PUT  /api/auth/profile     - Update profile
```

### Book Management
```
GET    /api/books          - Get all books (with filters)
POST   /api/books          - Add new book
GET    /api/books/:id      - Get book details
PUT    /api/books/:id      - Update book
DELETE /api/books/:id      - Delete book
```

### Exchange System
```
POST /api/exchanges        - Create exchange request
GET  /api/exchanges        - Get user exchanges
PUT  /api/exchanges/:id    - Update exchange status
```

## 📊 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed),
  profile_image: String,
  rating: Number,
  location: String,
  created_at: Date,
  updated_at: Date
}
```

### Books Collection
```javascript
{
  _id: ObjectId,
  title: String,
  author: String,
  genre: String,
  condition: String,
  description: String,
  cover_image: String,
  owner_id: ObjectId,
  status: String,
  created_at: Date,
  updated_at: Date
}
```
## 📁 Project Structure

src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── forget-password/page.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── reset-password/page.tsx
│   ├── (commonLayout)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── events/
│   │       ├── page.tsx
│   │       ├── create-event/page.tsx
│   │       ├── update-event/[slug]/page.tsx
│   │       └── [slug]/page.tsx
│   ├── (withLoginUser)/
│   │   ├── payments/success/[tranId]/page.tsx
│   │   └── profile/
│   │       ├── layout.tsx
│   │       ├── my-events/
│   │       │   ├── page.tsx
│   │       │   └── add-event/page.tsx
│   │       ├── my-received-invites/page.tsx
│   │       ├── payments-history/page.tsx
│   │       ├── personal-info/page.tsx
│   │       ├── privacy_and_security/page.tsx
│   │       └── review/page.tsx
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── manage-invites/
│   │   │   ├── all-invites/page.tsx
│   │   │   └── sent-invites/page.tsx
│   │   ├── manage-payments/page.tsx
│   │   ├── products/
│   │   │   ├── add-event/page.tsx
│   │   │   └── event-list/page.tsx
│   │   ├── review/page.tsx
│   │   └── user/page.tsx
│   ├── api/auth/[...nextauth]/route.ts
│   ├── types/
│   │   ├── event.type.ts
│   │   ├── forgetPassword.ts
│   │   ├── payment.type.ts
│   │   ├── resetPassword.ts
│   │   ├── reviewType.ts
│   │   ├── TokenUser.type.ts
│   │   ├── user.type.ts
│   │   └── userRowProps.ts
│   └── utils/
│       ├── auth.ts
│       └── authOptions.ts
│
├── components/
│   ├── about/
│   │   ├── animated-icon.tsx
│   │   ├── cta-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── features-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── misson-section.tsx
│   │   ├── story-section.tsx
│   │   ├── team-section.tsx
│   │   ├── testimonial-section.tsx
│   │   └── values-section.tsx
│   ├── contact/
│   │   ├── animated-background.tsx
│   │   ├── animated-icon.tsx
│   │   ├── floating-particles.tsx
│   │   ├── hero-section.tsx
│   │   ├── interactive-map.tsx
│   │   ├── live-chat-widget.tsx
│   │   ├── premium-contact-form.tsx
│   │   ├── premium-hero.tsx
│   │   ├── social-connect.tsx
│   │   └── social-icon.tsx
│   ├── footer/
│   │   └── CountdownTimer.tsx
│   ├── MobileSidebar/
│   │   └── MobileSidebar.tsx
│   ├── modules/
│   │   ├── adminDashboard/
│   │   │   ├── nav-main.tsx
│   │   │   └── analytics/page.tsx
│   │   ├── Auth/
│   │   │   ├── login/
│   │   │   │   ├── ForgotPassword.tsx
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── loginValidation.ts
│   │   │   └── register/
│   │   │       ├── RegisterForm.tsx
│   │   │       └── registerValidation.ts
│   │   ├── Banner/Banner.tsx
│   │   ├── Categories/Categories.tsx
│   │   ├── Events/
│   │   │   ├── Card.tsx
│   │   │   ├── CreateEvent.tsx
│   │   │   ├── DeleteModal.tsx
│   │   │   ├── EventDetails.tsx
│   │   │   ├── HomeAllEvents.tsx
│   │   │   ├── MyEvents.tsx
│   │   │   ├── ParticipantsTable.tsx
│   │   │   ├── ShowParticipantsModal.tsx
│   │   │   ├── UpdateEvent.tsx
│   │   │   ├── UpdateModal.tsx
│   │   ├── FAQ/FAQ.tsx
│   │   ├── Invite/
│   │   │   ├── InviteModal.tsx
│   │   │   ├── InviteTable.tsx
│   │   │   └── MyReceivedInvite.tsx
│   │   ├── OurAdvantage/OurAdvantage.tsx
│   │   ├── OurServices/OurService.tsx
│   │   ├── Payment/
│   │   │   ├── ManagePaymentsTable.tsx
│   │   │   ├── MyPaymentsHistory.tsx
│   │   │   └── PaymentSuccess.tsx
│   │   ├── Profile/
│   │   │   ├── ProfileMainLayout.tsx
│   │   │   ├── change-password/
│   │   │   │   ├── password-requirements.tsx
│   │   │   │   ├── password-strength-meter.tsx
│   │   │   │   ├── password-tips.tsx
│   │   │   │   ├── PasswordChange.tsx
│   │   │   │   └── success-animation.tsx
│   │   │   ├── personal-info/
│   │   │   │   ├── PersonalInfoComponent.tsx
│   │   │   │   └── profileValidation.ts
│   │   │   └── profile-sidebar/
│   │   │       ├── MobileSidebar.tsx
│   │   │       └── Sidebar.tsx
│   │   ├── Review/
│   │   │   ├── MyReview.tsx
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── ReviewForm.tsx
│   │   │   ├── updateReviewForm.tsx
│   │   │   └── SpecificEventReview/
│   │   │       ├── EventReviewReview.tsx
│   │   │       ├── ReviewButton.tsx
│   │   │       └── ReviewCarousal.tsx
│   │   ├── ReviewRow/
│   │   │   ├── ReviewDetailModal.tsx
│   │   │   └── ReviewRow.tsx
│   │   ├── UserRow/UserRow.tsx
│   │   └── WhoWeAre/WhoRWe.tsx
│   ├── shared/
│   │   ├── app-sidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSecton.tsx
│   │   ├── Navbar.tsx
│   │   ├── NextButton.tsx
│   │   ├── premium-event-card.tsx
│   │   ├── Profile-sidebar.tsx
│   │   ├── ProfileAvatar.tsx
│   │   └── Title.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       ├── progress.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
│       └── Loader/
│           ├── Loader.css
│           └── Loader.tsx
│
└── services/
    ├── AuthService/index.ts
    ├── EventService/index.ts
    ├── InviteService/index.ts
    ├── PaymentService/index.ts
    ├── ProfileService/index.ts
    ├── ReviewService/index.ts
    └── UserService/index.ts


## 🔒 Security Features

- **Authentication**: Secure JWT-based authentication with NextAuth.js
- **Input Validation**: Comprehensive server-side validation
- **XSS Protection**: Sanitized user inputs and secure headers
- **CSRF Protection**: Token-based request validation
- **Rate Limiting**: API endpoint protection
- **Secure File Upload**: Validated and processed image uploads

## 🚀 Performance Optimizations

- **SSR/SSG**: Optimized rendering strategies
- **Image Optimization**: Next.js automatic image optimization
- **Caching**: Strategic caching for frequently accessed data
- **Code Splitting**: Automatic code splitting with Next.js
- **CDN Integration**: Optimized asset delivery

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Developer

**Sumon Ray**
- Portfolio: [Your Portfolio](https://your-portfolio-link.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the flexible database solution
- Tailwind CSS for the utility-first CSS framework
- All contributors and the open-source community

---

### 🌐 Live Application
**Experience Bookify**: [https://next-event-pro.vercel.app/](https://next-event-pro.vercel.app/)

*Building communities through the love of books* 📚✨
