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
        <li>Selected and optimised the platform theme for optimal user experience</li>
        <li>Optimized frontend code for performance and responsiveness</li>
        <li>Implemented Google Analytics for tracking and data-driven decisions</li>
        <li>Coordinated with external developers to maintain performance, security, and scalability</li>
        
      </ul>
     
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
    title: 'ZhetX Digital Agency',
    content: `
      <h4>Overview</h4>
      <p>Currently developing the official website for ZhetX Digital Agency to showcase services, portfolio, and digital expertise.</p>
      <h4>Technologies Used</h4>
      <ul>
        <li>HTML & CSS: Layout structure and custom styling</li>
        <li>JavaScript: Interactivity and DOM manipulation</li>
        <li>React: Component-based architecture for scalability</li>
        <li>Git & GitHub: Version control and collaboration</li>
      </ul>
      <h4>Key Highlights</h4>
      <ul>
        <li>Designed a clean UI with smooth navigation and responsive design.</li>
        <li>Integrated reusable React components to support growth and flexibility.</li>
        <li>Focused on SEO and performance optimization from the ground up.</li>
        <li>Project is in progress — launch coming soon with full functionality.</li>
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

