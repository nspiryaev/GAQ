window.addEventListener('DOMContentLoaded', function () {

    function stepForm() {
        const steps = document.querySelectorAll('.form__step');
        const nextBtn = document.querySelector('.next__step');
        const backBtn = document.querySelector('.back__step');
        const form = document.querySelector('.form__steps');
        const stepNumbers = document.querySelectorAll('.step__number');
        const progress = document.querySelector('.progress__success');
        const finishBlock = document.querySelector('.finish');
    
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        }); 
    
        let formStep = 0;
    
        backBtn.addEventListener('click', function() {
            formStep--;
            stepNumbers[formStep + 1].classList.remove('active__number');
            updateFormSteps();
        });
        nextBtn.addEventListener('click', function() {
           if(formStep < steps.length - 1) {
            formStep++;
            updateFormSteps();
           }
        });
    
        function updateFormSteps() {
            steps.forEach(function(step) {
                step.classList.contains('active') && step.classList.remove('active');
            });
    
            steps[formStep].classList.add('active');
            stepNumbers[formStep].classList.add('active__number');

            if (formStep === 0) {
                backBtn.style.display = 'none';
            } else {
                backBtn.style.display = 'inline-block';
            }

            if (formStep === steps.length - 1) {
                nextBtn.innerHTML = 'Finish';

                nextBtn.addEventListener('click', function() {
                    finishBlock.style.display = 'block';
                    form.style.display = 'none';
                });
            } else {
                nextBtn.innerHTML = 'Next';
            }

            const actives = document.querySelectorAll('.active__number');
            const percent = ((actives.length - 1) / (stepNumbers.length - 1)) * 100 + '%';
            
            progress.style.width = percent;
        };
    
        updateFormSteps();
    
    };

    if(document.querySelector('.form__step')) {
        stepForm();
    }

});



