document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [
        {
            text: "I have a good experience with Uptut Academy. I'm learning lot of new things which will help me for in the future",
            author: "-Kishore, Junior Java Developer @ NLS Tech Solutions"
        },
        {
            text: "Intuitive lectures, easy to understand.",
            author: "-Shailender Kumar Singh"
        },
        {
            text: "Amazing guidance by the trainer, really answered all the questions!",
            author: "-Tejal Bhole"
        }
    ];

    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        const testimonialText = document.getElementById("testimonial-text");
        const testimonialAuthor = document.getElementById("testimonial-author");

        testimonialText.textContent = testimonials[index].text;
        testimonialAuthor.textContent = testimonials[index].author;
    }

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds

    showTestimonial(currentTestimonialIndex); // Show the first testimonial initially
});
