import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        console.log('Resizable border connected');

        function generateTopBorder(length) {
            return Array.from({ length }, () => '=').join('');
        }
        function generateSideBorder(length) {
            return Array.from({ length }, () => '=').join('');
        }
        function generateBottomBorder(length) {
            return Array.from({ length }, () => '=').join('');
        }

        function updateBorders() {
            document.querySelectorAll('.resizable-border').forEach(border => {
                const size = border.classList.contains('top') || border.classList.contains('bottom')
                    ? Math.floor(border.offsetWidth / 6)
                    : Math.floor(border.offsetHeight / 6);


                if (border.classList.contains('top')) {console.log('Size top' + size); border.textContent = generateTopBorder(size)}
                if (border.classList.contains('bottom')) {console.log('Size bottom' + size);border.textContent = generateBottomBorder(size)}
                if (border.classList.contains('left')) {console.log('Size left' + size);console.log('Size' + size); border.textContent = generateSideBorder(size)}
                if (border.classList.contains('right')) {console.log('Size right' + size); border.textContent = generateSideBorder(size)}

            });
        }

        updateBorders();
        // setInterval(updateBorders, 12000);


    }
}
