const sections = document.querySelectorAll('.form-section');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let currentStep = 0;

function updateButtons() {
    prevBtn.disabled = currentStep === 0;
    nextBtn.textContent = currentStep === sections.length - 1 ? 'Review' : 'Next';
}

function showSection(step) {
    sections.forEach((section, index) => {
        section.classList.toggle('active', index === step);
    });
    updateButtons();
}

nextBtn.addEventListener('click', () => {
    if (currentStep < sections.length - 1) {
        currentStep++;
        showSection(currentStep);
        if (currentStep === sections.length - 1) {
            document.getElementById('review-name').textContent = document.getElementById('name').value;
            document.getElementById('review-email').textContent = document.getElementById('email').value;
            document.getElementById('review-number').textContent = document.getElementById('number').value;
            document.getElementById('review-education').textContent = document.getElementById('education').value;
            document.getElementById('review-about').textContent = document.getElementById('about').value;
            document.getElementById('review-address').textContent = document.getElementById('address').value;
            document.getElementById('review-city').textContent = document.getElementById('city').value;
            document.getElementById('review-country').textContent = document.getElementById('country').value;

            const preferences = [];
            if (document.getElementById('newsletter').checked) preferences.push('Newsletter');
            if (document.getElementById('updates').checked) preferences.push('Updates');
            document.getElementById('review-preferences').textContent = preferences.join(', ');
        }
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        showSection(currentStep);
    }
});

showSection(currentStep);
