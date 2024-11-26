// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const panels = document.querySelectorAll('.panel');

// Chart instances
let accuracyChart = null;
let responseTimeChart = null;

// Initialize charts
function initializeCharts() {
    // Clear any existing charts
    if (accuracyChart) {
        accuracyChart.destroy();
    }
    if (responseTimeChart) {
        responseTimeChart.destroy();
    }

    // Create accuracy chart
    const accuracyCtx = document.getElementById('accuracyChart');
    if (accuracyCtx) {
        accuracyChart = new Chart(accuracyCtx, {
            type: 'bar',
            data: {
                labels: ['Computer Security', 'History', 'Social Science'],
                datasets: [{
                    label: 'Accuracy by Domain (%)',
                    data: [85.0, 84.0, 88.0],
                    backgroundColor: '#457b9d'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });
    }

    // Create response time chart
    const responseTimeCtx = document.getElementById('responseTimeChart');
    if (responseTimeCtx) {
        responseTimeChart = new Chart(responseTimeCtx, {
            type: 'bar',
            data: {
                labels: ['Computer Security', 'History', 'Social Science'],
                datasets: [{
                    label: 'Average Response Time (ms)',
                    data: [474.54, 444.44, 455.37],
                    backgroundColor: '#2a9d8f'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        });
    }
}

// Handle navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navLinks.forEach(nav => nav.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));

        link.classList.add('active');

        const target = link.getAttribute('href').substring(1);
        const targetPanel = document.getElementById(target);
        targetPanel.classList.add('active');

        // Initialize charts when showing Results panel
        if (target === 'results') {
            initializeCharts();
        }
    });
});

// Initialize on page load if results panel is active
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('results').classList.contains('active')) {
        initializeCharts();
    }
});