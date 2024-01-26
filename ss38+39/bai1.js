let currentStep = 1;

        function next() {
            if (currentStep < 4) {
                document.getElementById('step' + currentStep).classList.remove('active');
                currentStep++;
                document.getElementById('step' + currentStep).classList.add('active');
            }
            checkButtons();
        }

        function prev() {
            if (currentStep > 1) {
                document.getElementById('step' + currentStep).classList.remove('active');
                currentStep--;
                document.getElementById('step' + currentStep).classList.add('active');
            }
            checkButtons();
        }

        function checkButtons() {
            document.getElementById('next').disabled = currentStep === 4;
            document.getElementById('prev').disabled = currentStep === 1;
        }

        document.getElementById('next').addEventListener('click', next);
        document.getElementById('prev').addEventListener('click', prev);