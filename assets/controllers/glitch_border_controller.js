import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        console.log('Glitch border connected');
        const chars = ['$', '#', '&', '@'];

        function randomChar() {
            return chars[Math.floor(Math.random() * chars.length)];
        }

        function generateBorder(length) {
            return Array.from({ length }, randomChar).join('');
        }

        function updateBorders() {
            document.querySelectorAll('.glitch-border').forEach(border => {
                const size = border.classList.contains('top') || border.classList.contains('bottom')
                    ? Math.floor(border.offsetWidth / 7)
                    : Math.floor(border.offsetHeight / 7);

                border.textContent = generateBorder(size);
            });
        }

        updateBorders();
        setInterval(updateBorders, 120);

    }
}
