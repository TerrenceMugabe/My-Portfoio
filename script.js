// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu on nav link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Navigation Active State on Scroll
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Project Modal Functionality
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');
const viewCodeButtons = document.querySelectorAll('.view-code-btn');

const projectDetails = {
  zheti: {
    title: 'Zheti.co.za eCommerce Website',
    content: `
      <h4>Overview</h4>
      <p>Zheti.co.za is a comprehensive eCommerce platform that I founded and currently lead as Product Lead. The platform serves customers across South Africa with a focus on providing quality products and a seamless shopping experience.</p>
      <h4>My Role</h4>
      <ul>
        <li>Defined the platform's vision, UX/UI design, and technical roadmap</li>
        <li>Selected and customized the platform theme for optimal user experience</li>
        <li>Optimized frontend code for performance and responsiveness</li>
        <li>Implemented Google Analytics for tracking and data-driven decisions</li>
        <li>Coordinated with external developers to maintain performance, security, and scalability</li>
        <li>Managed payment gateway integration and order processing workflows</li>
      </ul>
      <h4>Technologies Used</h4>
      <ul>
        <li>React.js for frontend components</li>
        <li>Node.js for backend services</li>
        <li>MongoDB for database management</li>
        <li>Payment gateway integrations</li>
        <li>Google Analytics for user tracking</li>
        <li>Shopify platform for eCommerce infrastructure</li>
      </ul>
    `
  },
  'task-app': {
    title: 'Task Management App',
    content: `
      <h4>Overview</h4>
      <p>A full-stack application for managing tasks and team collaboration, featuring real-time updates and user authentication.</p>
      <h4>Technologies Used</h4>
      <ul>
        <li>React: Frontend with Redux for state management</li>
        <li>Express: Backend server with REST API</li>
        <li>PostgreSQL: Relational database for task and user data</li>
        <li>WebSocket: Real-time updates for task changes</li>
      </ul>
      <h4>Code Sample</h4>
      <pre><code>
// WebSocket implementation for real-time task updates
const socket = new WebSocket('ws://api.example.com');
socket.onmessage = (event) => {
  const taskUpdate = JSON.parse(event.data);
  store.dispatch(updateTask(taskUpdate));
};
      </code></pre>
    `
  },
  'azure-migration': {
    title: 'Azure Cloud Migration',
    content: `
      <h4>Overview</h4>
      <p>Migrated enterprise applications to Microsoft Azure, optimizing performance and reducing infrastructure costs by 30%.</p>
      <h4>Technologies Used</h4>
      <ul>
        <li>Azure App Services: Hosting web applications</li>
        <li>Azure SQL Database: Managed database service</li>
        <li>Azure DevOps: CI/CD pipelines and deployment</li>
        <li>Azure Monitor: Performance monitoring and alerting</li>
      </ul>
      <h4>Key Achievements</h4>
      <ul>
        <li>Reduced infrastructure costs by 30% through optimized resource allocation</li>
        <li>Implemented CI/CD pipelines reducing deployment time from hours to minutes</li>
        <li>Set up monitoring and alerting for critical systems</li>
        <li>Improved system reliability with 99.9% uptime</li>
      </ul>
    `
  }
};

viewCodeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project');
    const project = projectDetails[projectId];
    modalTitle.textContent = project.title;
    modalContent.innerHTML = project.content;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    formMessage.className = 'form-message success';
    formMessage.textContent = 'Message sent successfully!';
    contactForm.reset();
  } catch (error) {
    formMessage.className = 'form-message error';
    formMessage.textContent = 'Failed to send message. Please try again.';
  }

  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 5000);
});

// Animation on Scroll
const animateElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

animateElements.forEach(element => {
  observer.observe(element);
});
