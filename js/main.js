<script>
    AOS.init({ duration: 800 });

    window.addEventListener('scroll', () => {
        document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
    });

    const words = ["LEGACY", "STRENGTH", "DISCIPLINE"];
    let i = 0, j = 0, isDeleting = false;
    function type() {
        let current = words[i];
        document.querySelector(".typewriter").innerText = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
        if (!isDeleting && j > current.length) { isDeleting = true; setTimeout(type, 1500); }
        else if (isDeleting && j < 0) { isDeleting = false; i = (i+1)%words.length; j=0; setTimeout(type, 500); }
        else setTimeout(type, 50);
    }
    type();

    function toggleMenu() { document.getElementById("nav-list").classList.toggle("active"); }

    function switchLevel(levelName) {
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.classList.remove('active');
            if(btn.dataset.level === levelName) btn.classList.add('active');
        });
        document.querySelectorAll('.schedule-grid').forEach(grid => grid.classList.remove('active'));
        document.getElementById(levelName).classList.add('active');
    }

    function calcBMI() {
        const w = document.getElementById('bmi-weight').value, h = document.getElementById('bmi-height').value;
        if(w && h) document.getElementById('bmi-result').innerText = `BMI: ${(w/((h/100)**2)).toFixed(1)}`;
    }

    function calcCalories() {
        const w = document.getElementById('cal-weight').value, h = document.getElementById('cal-height').value, a = document.getElementById('cal-age').value;
        if(w && h && a) document.getElementById('cal-result').innerText = `Needs: ${Math.round(10*w + 6.25*h - 5*a + 5)} kcal`;
    }

    function openModal(plan, price) {
        document.getElementById('paymentModal').style.display = "block";
        document.getElementById('modalPlan').innerText = plan;
        document.getElementById('modalPrice').innerText = price;
        document.body.style.overflow = "hidden";
    }
    function closeModal() { document.getElementById('paymentModal').style.display = "none"; document.body.style.overflow = "auto"; }
    function openAdmission() { document.getElementById('admissionModal').style.display = "block"; document.body.style.overflow = "hidden"; }
    function closeAdmission() { document.getElementById('admissionModal').style.display = "none"; document.body.style.overflow = "auto"; }

    window.onclick = function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
</script>
