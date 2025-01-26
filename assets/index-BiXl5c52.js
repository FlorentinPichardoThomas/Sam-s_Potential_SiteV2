(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="resume-container">
    <h1>John Doe</h1>
    <p class="title">Senior Cloud Engineer</p>

    <div class="contact-info">
      <a href="mailto:john.doe@email.com">📧 john.doe@email.com</a>
      <a href="https://linkedin.com/in/johndoe" target="_blank">💼 LinkedIn</a>
      <a href="https://github.com/johndoe" target="_blank">🐙 GitHub</a>
    </div>

    <section class="section">
      <h2>Summary</h2>
      <p>Experienced Cloud Engineer with 8+ years of expertise in designing, implementing, and maintaining cloud infrastructure. Specialized in AWS, Azure, and GCP with a strong focus on automation, security, and scalability.</p>
    </section>

    <section class="section">
      <h2>Technical Skills</h2>
      <div class="skills">
        <span class="skill-tag">AWS</span>
        <span class="skill-tag">Azure</span>
        <span class="skill-tag">Google Cloud</span>
        <span class="skill-tag">Terraform</span>
        <span class="skill-tag">Docker</span>
        <span class="skill-tag">Kubernetes</span>
        <span class="skill-tag">CI/CD</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">Infrastructure as Code</span>
      </div>
    </section>

    <section class="section">
      <h2>Professional Experience</h2>
      <ul>
        <li>
          <strong>Senior Cloud Engineer</strong> | TechCorp Inc. (2020-Present)
          <ul>
            <li>Architected and implemented multi-cloud solutions reducing operational costs by 30%</li>
            <li>Led migration of legacy systems to microservices architecture</li>
            <li>Implemented infrastructure as code practices using Terraform</li>
          </ul>
        </li>
        <li>
          <strong>Cloud Infrastructure Engineer</strong> | CloudTech Solutions (2018-2020)
          <ul>
            <li>Managed cloud infrastructure for 50+ enterprise clients</li>
            <li>Developed automated deployment pipelines</li>
            <li>Implemented disaster recovery solutions</li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>Certifications</h2>
      <ul>
        <li>AWS Solutions Architect Professional</li>
        <li>Google Cloud Professional Cloud Architect</li>
        <li>Microsoft Azure Solutions Architect Expert</li>
        <li>Certified Kubernetes Administrator (CKA)</li>
      </ul>
    </section>

     <div class="button-container">
      <a href="https://calendly.com/johndoe" target="_blank" class="vintage-button">📅 Schedule a Meeting</a>
      <button class="vintage-button" onclick="document.getElementById('testimonialModal').style.display='block'">
        ⭐ View Testimonials
      </button>
    </div>
  </div>

  <div id="testimonialModal" class="modal">
    <div class="modal-content">
      <span class="close-button" onclick="document.getElementById('testimonialModal').style.display='none'">&times;</span>
      <h2>Client Testimonials</h2>
      
      <div class="testimonial">
        <p>"John's expertise in cloud architecture transformed our infrastructure. His solutions helped us achieve 99.99% uptime and significant cost savings."</p>
        <strong>- Sarah Johnson, CTO at TechStart Inc.</strong>
      </div>
      
      <div class="testimonial">
        <p>"Working with John was a game-changer for our DevOps practices. His implementation of CI/CD pipelines increased our deployment frequency by 300%."</p>
        <strong>- Mike Chen, Engineering Manager at CloudScale</strong>
      </div>
      
      <div class="testimonial">
        <p>"John's deep understanding of multi-cloud architectures helped us build a robust and scalable system that handles millions of requests daily."</p>
        <strong>- Lisa Rodriguez, Director of Engineering at DataFlow Systems</strong>
      </div>
    </div>
  </div>

  <script>
    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('testimonialModal');
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  <\/script>
`;
