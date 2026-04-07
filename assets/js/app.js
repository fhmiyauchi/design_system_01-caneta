document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Smooth Scrolling Setup (Lenis)
    // ==========================================
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical', 
        gestureDirection: 'vertical', 
        smooth: true,
        mouseMultiplier: 1,
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // ==========================================
    // 2. Initial UI Animation (GSAP)
    // ==========================================
    const headlineText = new SplitType('#main-headline', { types: 'lines,words,chars' })
    const tlLoad = gsap.timeline({ defaults: { ease: 'power4.out' }, paused: true })
    
    gsap.set('#nav-bar', { y: -50, opacity: 0 })
    gsap.set('.eyebrow-line', { scaleX: 0, transformOrigin: 'center' })
    gsap.set('.eyebrow-text', { opacity: 0 })
    gsap.set(headlineText.chars, { y: 100, opacity: 0 })
    gsap.set('.subtitle-text', { opacity: 0, y: 20 })
    gsap.set('.button-group button', { opacity: 0, y: 20 })
    gsap.set('#pagination-rail', { opacity: 0, x: 20 })
    gsap.set('#scroll-hint', { opacity: 0, y: 20 })

    tlLoad.to('#nav-bar', { y: 0, opacity: 1, duration: 0.6, delay: 0.1 })
          .to('.eyebrow-line', { scaleX: 1, duration: 0.5 }, "-=0.2")
          .to('.eyebrow-text', { opacity: 1, duration: 0.5 }, "-=0.3")
          .to(headlineText.chars, { y: 0, opacity: 1, duration: 0.8, stagger: 0.015 }, "-=0.5")
          .to('.subtitle-text', { opacity: 1, y: 0, duration: 0.6 }, "-=0.8")
          .to('.button-group button', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.6")
          .to('#pagination-rail', { opacity: 1, x: 0, duration: 0.8 }, "-=0.8")
          .to('#scroll-hint', { opacity: 1, y: 0, duration: 0.8 }, "-=0.8")

    // ==========================================
    // 3. Apple-Style Canvas Image Sequence
    // ==========================================
    const canvas = document.getElementById("sequence-canvas");
    const context = canvas.getContext("2d");
    
    // Canvas Sizing to Window
    let windowWidth, windowHeight;
    function resizeCanvas() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        canvas.width = windowWidth;
        canvas.height = windowHeight;
        render(); // Always render current frame on resize
    }
    window.addEventListener('resize', resizeCanvas);

    // Sequence Data (updated to the new images path)
    const frameCount = 121;
    const currentFrame = index => (
        `./assets/images/video_frames/frame_${(index + 1).toString().padStart(4, '0')}.jpg`
    );

    const images = [];
    const sequence = { frame: 0 };
    
    let loadedImages = 0;
    const preloaderCounter = document.getElementById('preloader-counter');
    const preloaderBar = document.getElementById('preloader-bar');
    const preloader = document.getElementById('preloader');

    function imageLoaded() {
        loadedImages++;
        const progress = Math.min((loadedImages / frameCount) * 100, 100);
        preloaderCounter.innerText = `${Math.floor(progress)}%`;
        preloaderBar.style.width = `${progress}%`;

        if (loadedImages === frameCount) {
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                resizeCanvas();
                tlLoad.play();
            }, 500);
        }
    }

    // Preload all images
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = imageLoaded;
        img.onerror = imageLoaded;
        img.src = currentFrame(i);
        images.push(img);
    }

    // Central Render Function
    function render() {
        if (images[sequence.frame] && images[sequence.frame].complete) {
            const img = images[sequence.frame];
            const imgRatio = img.width / img.height;
            const canvasRatio = canvas.width / canvas.height;
            let renderWidth, renderHeight, xConfig, yConfig;

            if (canvasRatio > imgRatio) {
                renderWidth = canvas.width;
                renderHeight = canvas.width / imgRatio;
                xConfig = 0;
                yConfig = (canvas.height - renderHeight) / 2;
            } else {
                renderWidth = canvas.height * imgRatio;
                renderHeight = canvas.height;
                xConfig = (canvas.width - renderWidth) / 2;
                yConfig = 0;
            }

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, xConfig, yConfig, renderWidth, renderHeight);
        }
    }

    // ==========================================
    // 4. GSAP ScrollTrigger Sequence Timeline
    // ==========================================
    const tlScroll = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-trigger-container",
            pin: ".hero-pin",
            start: "top top",
            end: "+=300%",
            scrub: 1,
            onUpdate: (self) => {
                gsap.set('#scroll-progress', { height: `${self.progress * 100}%` });
            }
        }
    });

    tlScroll.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
        onUpdate: render 
    }, 0);

    tlScroll.to('#content-block', {
        y: -150,
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.15,
        ease: "power2.in"
    }, 0);

    tlScroll.to('#hero-glass-panel', {
        opacity: 0,
        duration: 0.15,
        ease: "power2.in"
    }, 0);

    tlScroll.to('#scroll-hint', { opacity: 0, duration: 0.05 }, 0);
    
    // ==========================================
    // 5. Experise Grid Entry Animations
    // ==========================================
    gsap.set('.expertise-header', { y: 30, opacity: 0 });
    gsap.set('.reveal-card', { y: 50, opacity: 0 });

    ScrollTrigger.create({
        trigger: '#expertise-section',
        start: 'top 75%',
        animation: gsap.timeline()
            .to('.expertise-header', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
            .call(() => document.querySelector('.expertise-header').classList.add('reveal-active'), null, "-=0.8")
            .to('#expertise-section .reveal-card', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }, "-=0.5")
    });

    gsap.utils.toArray(['#specs-section', 'footer']).forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 85%',
            animation: gsap.timeline().to(section.querySelectorAll('.reveal-card'), { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' })
        });
    });
    
    resizeCanvas();

    // ==========================================
    // 6. Flashlight Hover Effect Setup
    // ==========================================
    document.querySelectorAll('.flashlight-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ==========================================
    // 7. Custom Cursor Logic
    // ==========================================
    const cursor = document.getElementById('custom-cursor');
    const cursorLabel = cursor.querySelector('.cursor-label');
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    });

    window.addEventListener('mouseover', (e) => {
        const interactiveZones = e.target.closest('a, button, .kinetic-wrap, #nav-bar iconify-icon, .ds-input');
        if (interactiveZones) {
            let label = "";
            if(interactiveZones.classList.contains('kinetic-wrap')) label = "VER MAIS";
            else if(interactiveZones.classList.contains('secondary-button')) label = "PLAY";
            else if(interactiveZones.classList.contains('beam-button')) label = "RESERVAR";
            
            if(label) {
                cursor.classList.add('cursor-hover-labeled');
                if(cursorLabel) cursorLabel.textContent = label;
            } else {
                cursor.classList.add('cursor-hover');
            }
        }
    });
    window.addEventListener('mouseout', (e) => {
        const interactiveZones = e.target.closest('a, button, .kinetic-wrap, #nav-bar iconify-icon, .ds-input');
        if (interactiveZones) {
            cursor.classList.remove('cursor-hover', 'cursor-hover-labeled');
            if(cursorLabel) cursorLabel.textContent = "";
        }
    });

    // ==========================================
    // 8. Mobile Menu Interaction
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    let menuOpen = false;
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenuBtn.innerHTML = '<iconify-icon class="text-2xl" icon="solar:close-square-line-duotone" aria-hidden="true"></iconify-icon>';
            } else {
                mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
                mobileMenuBtn.innerHTML = '<iconify-icon class="text-2xl" icon="solar:hamburger-menu-line-duotone" aria-hidden="true"></iconify-icon>';
            }
        });
    }

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) {
                menuOpen = false;
                mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
                mobileMenuBtn.innerHTML = '<iconify-icon class="text-2xl" icon="solar:hamburger-menu-line-duotone" aria-hidden="true"></iconify-icon>';
            }
        });
    });

    ScrollTrigger.refresh();

});
