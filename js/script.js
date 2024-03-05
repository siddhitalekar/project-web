const nav_header=document.querySelector(".header");
const section_hero= document.querySelector(".section-hero");



const Observer= new IntersectionObserver(
    (entries)=>{
        const ent=entries[0];
        console.log(ent);
        ent.isIntersecting===false
        ? document.body.classList.add("Sticky")
        : document.body.classList.remove("Sticky");


    },
    {
    root:null,
    rootMargin:"-80px",
    threshold:0,
});

Observer.observe(section_hero);