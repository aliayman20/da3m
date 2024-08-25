function animateCounter(element, start, end, duration) {
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const current = Math.min(Math.floor(progress / duration * (end - start) + start), end);
        element.textContent = current;
        if (current < end) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
}

// إعداد الـ Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, 0, target, 2000); // 2000 ميلي ثانية (2 ثانية)
        }
    });
}, {
    threshold: 0.5 // يبدأ العد عندما يكون العنصر مرئيًا بنسبة 50%
});

// البدء في مراقبة كل عنصر
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200, // مدة التأثير بالمللي ثانية
    });
});

/*function animateCounter(element, start, end, duration) {
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const current = Math.min(Math.floor(progress / duration * (end - start) + start), end);
        element.textContent = current;
        if (current < end) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
}

// إعداد الـ Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, 0, target, 2000); // 2000 ميلي ثانية (2 ثانية)
            observer.unobserve(counter); // وقف المراقبة بعد بدء العد
        }
    });
}, {
    threshold: 0.5 // يبدأ العد عندما يكون العنصر مرئيًا بنسبة 50%
});

// البدء في مراقبة كل عنصر
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
*/