

// Floating Bubbles effect
if (document.querySelector("#floating-container")) { // Check if the container exists
    function createFloatingElements(num) {
        const containers = document.querySelectorAll("#floating-container");

        for (let i = 0; i < num; i++) {
            // Create first div with "floating-up"
            let divUp = document.createElement("div");
            divUp.classList.add("floating-up");
            divUp.style.left = Math.random() * 100 + "vw";
            divUp.style.animationDuration = (Math.random() * 5 + 5) + "s";

            // Create second div with "floating-down"
            let divDown = document.createElement("div");
            divDown.classList.add("floating-down");
            divDown.style.left = Math.random() * 100 + "vw";
            divDown.style.animationDuration = (Math.random() * 5 + 5) + "s";

            // Append both divs to each container
            containers.forEach(container => {
                container.appendChild(divUp);
                container.appendChild(divDown);
            });

            console.log("Created floating-up and floating-down elements");
        }
    } 

    createFloatingElements(20);
}

// Menu toggle button
if (document.getElementById('menu-btn')) {
    const menuBtn = document.getElementById('menu-btn');
    const menus = document.querySelectorAll('.menu-link-btn')
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden'); // Slide in
        setTimeout(() => {
            mobileMenu.classList.remove('translate-y-full'); // Slide in
        }, 300)
    });

    menus.forEach(menu => {
        menu.addEventListener('click', () => {
            mobileMenu.classList.add('translate-y-full'); // Slide out
            mobileMenu.classList.add('hidden'); // Slide out
        });
    })
    
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('translate-y-full'); // Slide out
        mobileMenu.classList.add('hidden'); // Slide out
    });
}

// Hover effect
if (document.querySelectorAll('.hover-text')) {
    document.querySelectorAll('.hover-text').forEach((element) => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, { 
                y: 5, 
                rotation: 3, 
                duration: 0.2, 
                yoyo: true, 
                repeat: 5, 
                ease: "power1.inOut" 
            });
        });
    
        element.addEventListener('mouseleave', () => {
            gsap.to(element, { 
                y: 0, 
                rotation: 0, 
                duration: 0.2 
            });
        });
    });
}

// Text animate effect
if (document.querySelector(".hero")) {
    document.addEventListener("DOMContentLoaded", function () {

        // headContent.textContent = "Need Your Community Managed?";
        // bottomContent.textContent = "We Make It Happen"

        let currentIndex = 0;
        let heroData = [];

        // Fetch JSON data
        fetch("config/hero-data.json")
            .then(response => response.json()) 
            .then(data => {
                heroData = data;
                updateHeroText(); // Set initial text
                setInterval(updateHeroText, 60000); // Change text every 10 seconds
            });

            

        function updateHeroText() {
            console.log(heroData);
            
            if (heroData.length === 0) return;

            // Get the current text elements
            const headContent = document.querySelector(".head-content");
            const bottomContent = document.querySelector(".bottom-content");

            // Update text content
            headContent.textContent = heroData[currentIndex].headContent;
            bottomContent.textContent = heroData[currentIndex].bottomContent;

            // Increment index and loop back to start
            currentIndex = (currentIndex + 1) % heroData.length;

            gsap.from(".animate-text", {
                y: 50, // Start lower, but not too much
                opacity: 0,
                duration: 0.8, // Slightly longer for a smoother start
                ease: "power3.out", // Slows down gradually
                onComplete: () => {
                    gsap.to(".animate-text", {
                        y: 0, // Return to natural position
                        opacity: 1,
                        duration: 1.5, // Make it feel fluid
                        ease: "power2.out", // Smooth deceleration
                        stagger: 0.3 // Smooth transition between elements
                    });
                }
            });
        }
    });
}

if (document.querySelector(".project-name")) {
    document.addEventListener("DOMContentLoaded", function() {
        // Fetch JSON data
        console.log('It is working');
        
        fetch("config/projects.json")
            .then(response => response.json())
            .then(data => {
                let currentIndex = 0; // Track current project index
                const projectName = document.querySelector(".project-name");
                const projectAbout = document.querySelector(".project-about");
                const moreCaseStudiesBtn = document.querySelector(".more-case-studies");
    
                function updateProject() {
                    currentIndex = (currentIndex + 1) % data.length; // Cycle through projects
                    projectName.innerHTML = `${data[currentIndex].name}: 
                        <span class="text-gray-500 project-about">${data[currentIndex].about}</span>`;
                }
    
                // Add event listener to button
                moreCaseStudiesBtn.addEventListener("click", function(event) {
                    event.preventDefault();
                    updateProject();
                });
            })
            .catch(error => console.error("Error loading projects:", error));
    });
}

// Text animate effect on  y
if (document.querySelector(".scroll-container")) {
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector('.scroll-trigger-1')) {
        gsap.from(".scroll-trigger-1", {
            y: 100, // Moves the text up from below
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".scroll-trigger-1",
                start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
                toggleActions: "play none none none", // Runs only once when observed
            }
        });
    }

    if (document.querySelector('.scroll-trigger-2')) {
        gsap.from(".scroll-trigger-2", {
            y: 100, // Moves the text up from below
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".scroll-trigger-2",
                start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
                toggleActions: "play none none none", // Runs only once when observed
            }
        })
    }

    if (document.querySelector('.scroll-trigger-3')) {
        gsap.from(".scroll-trigger-3", {
            y: 100, // Moves the text up from below
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".scroll-trigger-3",
                start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
                toggleActions: "play none none none", // Runs only once when observed
            }
        })
    }

    if (document.querySelector('.scroll-trigger-4')) {
        gsap.from(".scroll-trigger-4", {
            y: 100, // Moves the text up from below
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".scroll-trigger-4",
                start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
                toggleActions: "play none none none", // Runs only once when observed
            }
        })
    }

    if (document.querySelector('.scroll-trigger-5')) {
        gsap.from(".scroll-trigger-5", {
            y: 100, // Moves the text up from below
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".scroll-trigger-5",
                start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
                toggleActions: "play none none none", // Runs only once when observed
            }
        })
    }

    if (document.querySelector('.scroll-trigger-6')) {     
        gsap.from(".scroll-trigger-6", {
            y: 100, // Moves the text up from below
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".scroll-trigger-6",
                start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
                toggleActions: "play none none none", // Runs only once when observed
            }
        })
    }

    if (document.querySelector('.scroll-trigger-7')) {     
        gsap.from(".scroll-trigger-7", {
            y: 100, // Moves the text up from below
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".scroll-trigger-7",
                start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
                toggleActions: "play none none none", // Runs only once when observed
            }
        })
    }
}


// if (document.querySelectorAll("#floating-down-container")) {

//     function createFloatingElements(num) {
//         const containers = document.querySelectorAll("#floating-down-container");
//         for (let i = 0; i < num; i++) {
//             let div = document.createElement("div");
//             div.classList.add("floating-up", "floating-down");
//             div.style.left = Math.random() * 100 + "vw";
//             div.style.animationDuration = (Math.random() * 5 + 5) + "s";
//             containers.forEach(container => {
//                 container.appendChild(div);
//                 console.log("Yes");
                
//             });
//             console.log(div);
            
            
//         }
//     } 
//     createFloatingElements(100);
// }

// Floating bubbles from bottom
// if (document.querySelectorAll("#floating-down-container")) {

//     function createFloatingElements(num) {
//         const containers = document.querySelectorAll("#floating-down-container");
//         for (let i = 0; i < num; i++) {
//             let div = document.createElement("div");
//             div.className = "floating-down";
//             div.style.left = Math.random() * 100 + "vw";
//             div.style.animationDuration = (Math.random() * 5 + 5) + "s";
//             containers.forEach(container => {
//                 container.appendChild(div);
//                 console.log("Yes");
                
//             });
//         }
//     } 
//     createFloatingElements(25);
// }