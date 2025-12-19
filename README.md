# Super Admin Authentication Screen & Dashboard (WorkPruf)

## Description

This project implements a comprehensive super admin authentication system and dashboard for WorkPruf, a platform designed to manage and monitor organizations. The application provides secure login functionality with password reset capabilities, and a feature-rich dashboard for organization management and activity monitoring.

### Key Features

**🔐 Authentication System**
- Secure super admin login with email and password validation
- Password reset functionality with simulated email notifications
- Client-side form validation with user-friendly error messages
- Responsive design that works on desktop and mobile devices

**📊 Admin Dashboard**
- Organization management with visual status indicators
- Interactive organization cards showing key metrics (users, type, status)
- Detailed organization overview modals with comprehensive information
- Edit organization functionality with real-time updates
- Activity logging system to track all administrative actions

**🎨 User Interface**
- Modern, clean design with consistent styling
- Responsive layout that adapts to different screen sizes
- Intuitive navigation and user interactions
- Professional color scheme and typography

**📱 Technical Implementation**
- Pure HTML5, CSS3, and JavaScript (no external dependencies)
- Modular code structure for easy maintenance
- Demo data for testing and demonstration purposes
- Ready for backend integration

### Use Cases

This application is ideal for:
- Platform administrators managing multiple organizations
- System monitoring and audit trail requirements
- Organization lifecycle management (create, view, edit)
- Activity tracking and compliance reporting

Open `super-admin-login.html` in a browser to view a WorkPruf Super Admin sign-in screen.

Open `dashboard.html` to view the WorkPruf dashboard with organization list.

Notes:
- This is a static/WorkPruf page with client-side validation only.
- Replace the JS form handler (`super-admin-login.js`) with a secure backend integration for real authentication.
- Includes a "Forgot your password?" link that simulates sending a reset email (WorkPruf only).
- Dashboard shows a list of WorkPruf organizations with status and user counts; click any card for detailed overview.
- Edit organizations by clicking the "Edit Organization" button in the organization detail modal.
- Activity logs track all system actions including organization edits.

Quick test (Windows):
1. In File Explorer, double-click `super-admin-login.html` to open it in your default browser.
2. Enter an email and a password (8+ chars) and click Sign in.
3. Click "Forgot your password?" to test the reset WorkPruf.
4. Open `dashboard.html` to see the organization list; click any organization card for details.
5. Click "Edit Organization" in the detail modal to modify organization information.
6. View activity logs at the bottom to see all system actions.
