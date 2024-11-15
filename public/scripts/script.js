document.addEventListener("DOMContentLoaded", function() {
  // Cache DOM elements
  const userIcon = document.getElementById('user-icon');
  const linkedinIcon = document.getElementById('linkedin-icon');
  const locationIcon = document.getElementById('location-icon');
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const footer = document.getElementById('footer');

  // Floating icons
  userIcon.addEventListener('click', function() {
    linkedinIcon.classList.toggle('hidden');
    locationIcon.classList.toggle('hidden');
  });

  // LinkedIn icon click event
  linkedinIcon.addEventListener('click', function() {
    window.open('https://www.linkedin.com/company/vallika-technologies/', '_blank');
  });

  // Location icon click event
  locationIcon.addEventListener('click', function() {
    window.open('https://goo.gl/maps/W5YKRvc1Vq82', '_blank');
  });

  // Client Reviews
  const reviews = [
    { 
      client: "Sumukha Kambaloor",
      review: "With over two decades of expertise, this company has been a leader in providing tailored ERP solutions. Their commitment to customer satisfaction and attention to detail in CRM and database tuning is unmatched."
    },
    { 
      client: "Bhavish Kunder",
      review: "Their software development and testing services are second to none. The team's dedication to ensuring seamless integration and long-term scalability has been crucial for our projects' success."
    },
    { 
      client: "Ayesha Khouser",
      review: "Their ERP and CRM systems have significantly improved our operational efficiency. Their responsiveness and in-depth knowledge of database tuning have been invaluable."
    },
    { 
      client: "Aditya Sahay",
      review: "This company has transformed the way we manage our resources and customer relationships. Their expertise in database optimization and software testing guarantees top-tier performance."
    },
    { 
      client: "Shantanu",
      review: "Their approach to ERP and CRM solutions is practical and forward-thinking. The level of professionalism and attention to detail in every aspect of their services is commendable."
    },
    { 
      client: "Meghna Sandhi",
      review: "With their comprehensive understanding of ERP, database management, and software development, they've helped streamline our business processes while maintaining high standards of quality control."
    },
    { 
      client: "Samay",
      review: "Their ability to provide end-to-end ERP and CRM solutions, along with their expertise in database tuning, has made them a reliable partner in our digital transformation journey."
    }
  ];

  let currentIndex = 0;
  const reviewBoxes = document.querySelectorAll(".review-box");

  const updateReviews = () => {
    reviewBoxes.forEach((box, index) => {
      const review = reviews[(currentIndex + index) % reviews.length];
      box.classList.remove('visible');
      setTimeout(() => {
        box.querySelector("h3").textContent = ` ${review.client}`;
        const reviewParagraph = box.querySelector("p");
        reviewParagraph.textContent = review.review;
        setTimeout(() => fitTextToContainer(reviewParagraph), 10);
        box.classList.add('visible');
      }, 500);
    });
  };

  function fitTextToContainer(element) {
    const maxHeight = element.parentElement.clientHeight - element.parentElement.querySelector('h3').offsetHeight - 40;
    const originalText = element.textContent;
    let fontSize = 18;
    element.style.fontSize = `${fontSize}px`;
    element.style.lineHeight = '1.4';

    while (element.scrollHeight > maxHeight && fontSize > 12) {
      fontSize--;
      element.style.fontSize = `${fontSize}px`;
    }

    if (element.scrollHeight > maxHeight) {
      let words = originalText.split(' ');
      while (element.scrollHeight > maxHeight && words.length > 0) {
        words.pop();
        element.textContent = words.join(' ') + '...';
      }
    }
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReviews();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReviews();
  });

  updateReviews();

  // Footer visibility
  function handleScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});