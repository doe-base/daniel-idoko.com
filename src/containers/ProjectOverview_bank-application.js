import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Grid,
  Card,
  CardMedia,
  useTheme,
  CardContent,
} from '@mui/material';
import ProjectImageSlider from '../components/image-slider/ResponsiveSlider';
import useStyles from "../styles/project";

  const techStack = [
    'Next.js',
    'React',
    'Material UI',
    'Axios',
    'Golang',
    'PostgreSQL',
    'JWT'
  ];


export default function BankApplicationOverviewContainer({DarkMode}){
    const theme = useTheme();
    const isDark = DarkMode;
    const classes = useStyles({DarkMode});

    const images = [
      '/img/bank-application/bank-application-1.png',
      '/img/bank-application/bank-application-2.png',
      '/img/bank-application/bank-application-3.png',
      '/img/bank-application/bank-application-4.png',
      '/img/bank-application/bank-application-5.png',
      '/img/bank-application/bank-application-6.png',
      '/img/bank-application/bank-application-7.png',
    ];

    return(

      <>
        {/* Title */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          Bank Application
        </Typography>

        {/* Image Slider */}
        <Box sx={{ mb: 3 }}>
          <ProjectImageSlider images={images} darkMode={isDark} />
        </Box>

        {/* Description */}
        <Typography variant="body1" sx={{ mb: 3, color: isDark ? '#aaa' : 'text.secondary' }}>
          This project is a full-stack web-based banking application built to mimic a real-world digital banking experience. It has three key components:
          a landing website for unauthenticated users, a secure backend server built with Golang, and a responsive banking dashboard for authenticated users.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: isDark ? '#aaa' : 'text.secondary' }}>
          On visiting the app, users first arrive at the public-facing landing page. This page includes general bank-related features like an about section,
          a loan calculator, an ATM locator, and more. From here, users can either create a new account or log in.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: isDark ? '#aaa' : 'text.secondary' }}>
          Account creation involves entering an email address, to which a unique login ID is sent for authentication. However, this functionality is disabled in the demo version.
          To test the app without setting it up locally, you can use a sudo account instead.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: isDark ? '#aaa' : 'text.secondary' }}>
          To experience the bank dashboard in the demo, simply click the <a href="https://bank-application-website.vercel.app" target="_blank" style={{color: 'rgb(30, 175, 237)'}}>Demo</a> button and use
           <code className={classes.codeBlock}>123456789</code>  as the login ID. This grants you access to core features like viewing account balance,
          transaction history, and more.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: isDark ? '#aaa' : 'text.secondary' }}>
          If you'd like to explore the full authentication flow (including account creation and email login), you’ll need to <a href="#set-up-locally" style={{color: 'rgb(30, 175, 237)'}}>set the project up locally</a>.
        </Typography>



        {/* Tech Stack */}
        <Typography variant="h6" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              color="primary"
              variant={isDark ? 'outlined' : 'filled'}
            />
          ))}
        </Box>



        {/* Architecture */}
        <Typography variant="h6" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          Project Architecture
        </Typography>

        <Typography className={classes.theParagraph} sx={{ marginBottom: '2rem' }}>
          You can try out a demo of this project by clicking the <strong>Demo</strong> button and logging in with <code className={classes.codeBlock}>123456789</code> to experience the bank app from a sudo user’s perspective. However, if you'd like to run this project locally, it's important to first understand how the architecture is structured. The application is divided into three key parts: the backend server, the PostgreSQL database, and two separate frontend apps. Below is a breakdown of each component and how to set them up.
        </Typography>


        <Box
          component="pre"
          sx={{
            backgroundColor: isDark ? '#121212' : '#f5f5f5',
            color: isDark ? '#ddd' : '#333',
            padding: '1rem',
            borderRadius: '8px',
            overflowX: 'auto',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
        {`
.
  ├── bank-app/                # Main user-facing banking dashboard (Next.js)
  │   ├── app/                 # App logic, routes, and UI components
  │   │   ├── auth/            # Auth-related routes and pages
  │   │   ├── components/      # Reusable UI components
  │   │   ├── constants/       # Constant values used across the app
  │   │   ├── containers/      # UI containers for layout and structure
  │   │   ├── context/         # React contexts (e.g., auth, theme)
  │   │   ├── css/             # CSS modules
  │   │   ├── data/            # Static data or mock datasets
  │   │   ├── elite-bank-app/  # Core banking app pages/features
  │   │   ├── styles/          # Additional styling files
  │   │   └── theme/           # Theming logic
  │   ├── public/imgs/         # Static image assets
  │   ├── globals.css          # Global styles
  │   ├── layout.tsx           # Shared layout component
  │   ├── page.tsx             # Root page
  │   └── ...                  # Config files (next.config, tsconfig, etc.)

  ├── server/                  # Backend API (Golang)
  │   ├── cmd/main.go          # Server entry point
  │   ├── pkgs/                # Modular backend logic
  │   │   ├── auth/            # Authentication handlers
  │   │   ├── config/          # Environment configs and constants
  │   │   ├── gets/            # GET route handlers
  │   │   ├── middleware/      # HTTP middlewares
  │   │   ├── registration/    # Signup/registration logic
  │   │   └── utils/           # Helper functions
  │   ├── postgres_queries/    # SQL schema and seed data
  │   ├── queries/             # SQL query files (Go integrated)
  │   ├── go.mod, go.sum       # Go modules
  │   └── sql_table_map.md     # Documentation for DB table structure

  ├── website/                 # Project landing site and login UI (Next.js)
  │   ├── app/                 # Page and layout components
  │   │   ├── components/
  │   │   ├── constants/
  │   │   ├── containers/
  │   │   ├── css/
  │   │   ├── ecw/             # (Assumed custom feature set)
  │   │   ├── styles/
  │   │   └── theme/
  │   ├── public/              # Static assets like images and icons
  │   ├── globals.css          # Global styling
  │   ├── layout.tsx, page.tsx # Root layout and page
  │   └── ...                  # Next.js config and typings

  ├── README.md                # Project root documentation
  ├── todos.txt                # Task list or notes
        `}
        </Box>


        <Typography id="set-up-locally" variant="h6" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          How to Run This Application Locally
        </Typography>

        <Typography className={classes.theParagraph} sx={{ mb: 2 }}>
          Follow these steps to set up and run the project on your local machine. The application consists of three major parts: the backend server, the PostgreSQL database, and two frontend apps. Each part is located in a dedicated folder and must be set up individually.
        </Typography>

        <Box component="ol" sx={{ pl: 3, color: isDark ? '#aaa' : '#555', mb: 4 }}>
          <li style={{marginBottom: '2rem'}}>
            <Typography variant="subtitle1" fontWeight="bold" fontSize="1.2rem">Backend (Golang Server)</Typography>
            <Typography component="div" sx={{ ml: 2, mt: 1 }}>
              <ul>
                <li>Navigate to the <code className={classes.codeBlock}>/server</code> directory.</li>
                <li> Create a <strong><code className={classes.codeBlock}>.env</code></strong> file in the <code className={classes.codeBlock}>/server</code> directory with the following content:</li>
                  <Box component="pre" sx={{ 
                    backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5', 
                    color: isDark ? '#eee' : '#333',
                    padding: '1rem',
                    borderRadius: '6px',
                    overflowX: 'auto',
                    border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: '0.85rem',
                    marginBottom: '2rem'
                  }}>
                    WEBSITE_DOMAIN=http://localhost:3000{"\n"}
                    BANK_APP_DOMAIN=http://localhost:3001{"\n"}
                    BANK_APP_DOMAIN1=localhost{"\n"}
                    {"\n"}
                    PostgreConnectionString=postgres://[user]:[password]@[host]:[port]/[database]?sslmode=disable
                    {"\n"}
                    {"\n"}
                    SENDER_MAIL=your_email@gmail.com{"\n"}
                    APP_PASSWORD=your_app_password{"\n"}
                    EMAIL_PORT=587{"\n"}
                    EMAIL_HOST=smtp.gmail.com{"\n"}
                    {"\n"}
                    JWT_KEY=your_jwt_secret
                  </Box>

                <li>Run <code className={classes.codeBlock}>go mod tidy</code> to install dependencies.</li>
                <li>Start the server using <code className={classes.codeBlock}>go run cmd/main.go</code>.</li>
                <li>This server handles API logic, session cookies, and communication with PostgreSQL.</li>
              </ul>
            </Typography>
          </li>

          <li style={{marginBottom: '2rem'}}>
            <Typography variant="subtitle1" fontWeight="bold" fontSize="1.2rem">Database (PostgreSQL)</Typography>
            <Typography component="div" sx={{ ml: 2, mt: 1 }}>
              <ul>
                <li>Ensure PostgreSQL is installed and running.</li>
                <li>Create a new database, e.g., <code className={classes.codeBlock}>bankapp</code>.</li>
                <li>
                  Create a connection string and paste it into the server .env file as shown earlier.
                </li>
                <li>Apply the SQL schema located in <code className={classes.codeBlock}>/server/postgres_queries</code>. It includes example user data.</li>
              </ul>
            </Typography>
          </li>

          <li style={{marginBottom: '2rem'}}>
            <Typography variant="subtitle1" fontWeight="bold" fontSize="1.2rem">Frontend (Next.js Apps)</Typography>
            <Typography component="div" sx={{ ml: 2, mt: 1 }}>
              This project includes two separate Next.js apps:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>
                  <strong>Project Website:</strong> Located in <code className={classes.codeBlock}>/website</code>. This is the landing page and login interface.<br />
                  Run with <code className={classes.codeBlock}>npm run dev</code> or <code className={classes.codeBlock}>yarn dev</code>.
                </li>
                <li>
                  <strong>Bank App:</strong> Located in <code className={classes.codeBlock}>/bank-app</code>. This is the main dashboard for authenticated users.<br />
                  Run with <code className={classes.codeBlock}>npm run dev</code> or <code className={classes.codeBlock}>yarn dev</code>.
                </li>
              </ul>
            </Typography>
          </li>
        </Box>





        {/* What I Learned */}
        <Typography variant="h6" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          What I Learned
        </Typography>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', color: isDark ? '#aaa' : '#555' }}>
          <li><strong>Full-Stack Integration:</strong> Built and connected frontend, backend, and database layers seamlessly.</li>
          <li><strong>Golang Server Development:</strong> Practiced writing clean and efficient HTTP handlers and routes in Go.</li>
          <li><strong>Authentication with JWT:</strong> Implemented secure login flow using token-based authentication.</li>
          <li><strong>State Management with React:</strong> Managed user sessions and page rendering based on authentication status.</li>
          <li><strong>Responsive UI Design:</strong> Created a consistent, accessible UI across devices using Material UI.</li>
          <li><strong>PostgreSQL Integration:</strong> Learned to structure and query relational data effectively for authentication and user details.</li>
          <li><strong>API Handling:</strong> Built and consumed RESTful APIs with Axios and Go handlers.</li>
        </ul>

        {/* Conclusion */}
        <Typography variant="body1" sx={{ color: isDark ? '#aaa' : 'text.secondary' }} style={{marginBottom: '2rem'}}>
          This project demonstrates a complete banking application architecture and frontend design.
          While some functionality remains mock or limited, the structure lays a solid foundation for future expansion
          into a fully functional platform.
        </Typography>
      </>        
    )
};
// It demonstrates advanced modularization and problem-solving