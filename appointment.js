document.addEventListener('DOMContentLoaded', function() {
            // Form submission handling
            const form = document.getElementById('appointmentForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const reason = document.getElementById('reason').value;
                
                // Show confirmation
                alert`(Thank you, ${name}! Your appointment has been booked. Confirmation sent to ${email}.)`;
                
                // Reset form
                form.reset();
            });
            
            // Google Meet button functionality
            const meetBtn = document.getElementById('googleMeetBtn');
            meetBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Google Meet session will start at your scheduled appointment time. A link will be emailed to you.');
            });
            
            // Calendar day selection
            const days = document.querySelectorAll('.calendar-day:not(.booked)');
            days.forEach(day => {
                day.addEventListener('click', function() {
                    // Remove selected class from all days
                    days.forEach(d => d.classList.remove('selected'));
                    // Add selected class to clicked day
                    this.classList.add('selected');
                });
            });
            
            // Time slot selection
            const timeSlots = document.querySelectorAll('.time-slot');
            timeSlots.forEach(slot => {
                slot.addEventListener('click', function() {
                    // Remove selected class from all slots
                    timeSlots.forEach(s => s.classList.remove('selected'));
                    // Add selected class to clicked slot
                    this.classList.add('selected');
                });
            });
        });