
document.querySelectorAll('[data-toggle]').forEach(btn => {
  btn.addEventListener('click', () => document.querySelector(btn.dataset.toggle).classList.toggle('open'));
});
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
    try {
      const r = await fetch(FORMSPREE_URL, { method:'POST', headers:{'Accept':'application/json'}, body:new FormData(form) });
      if (r.ok) {{ alert('Thanks! Your message was sent. We will reach out shortly.'); form.reset(); return; }}
      throw new Error('Form service not configured.');
    } catch (err) {
      const body = encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nMessage: ${data.message}`);
      window.location.href = `mailto:Cwsteadmanllc@gmail.com?subject=New Inquiry from Website&body=${body}`;
    }
  });
}
document.querySelectorAll('.faq details').forEach(d => {
  d.addEventListener('toggle', () => { d.style.borderColor = d.open ? 'rgba(96,165,250,.5)' : 'rgba(255,255,255,.06)'; });
});
