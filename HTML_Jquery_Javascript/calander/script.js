document.addEventListener('DOMContentLoaded', function() {
    const calendarDays = document.getElementById('calendar-days');
    const monthYear = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthYear.textContent = currentDate.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });

        // Get the first day of the month
        const firstDay = new Date(year, month, 1).getDay();

        // Get the last day of the month
        const lastDay = new Date(year, month + 1, 0).getDate();

        // Clear previous cells
        calendarDays.innerHTML = '';

        // Fill in the days
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendarDays.appendChild(emptyCell);
        }

        for (let day = 1; day <= lastDay; day++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = day;
            dayCell.addEventListener('click', function() {
                const selected = document.querySelector('.calendar-days .selected');
                if (selected) {
                    selected.classList.remove('selected');
                }
                dayCell.classList.add('selected');
            });
            calendarDays.appendChild(dayCell);
        }
    }

    prevButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
