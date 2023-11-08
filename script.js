document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const drawLineBtn = document.getElementById("drawLineBtn");

    drawLineBtn.addEventListener("click", drawLine);

    function drawLine() {
        const x1 = parseInt(prompt("Введите X1:"));
        const y1 = parseInt(prompt("Введите Y1:"));
        const x2 = parseInt(prompt("Введите X2:"));
        const y2 = parseInt(prompt("Введите Y2:"));

        bresenhamLine(x1, y1, x2, y2);
    }

    function bresenhamLine(x1, y1, x2, y2) {
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const sx = (x1 < x2) ? 1 : -1;
        const sy = (y1 < y2) ? 1 : -1;
        let err = dx - dy;

        while (true) {
            ctx.fillRect(x1, y1, 1, 1);

            if (x1 === x2 && y1 === y2) {
                break;
            }

            const e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
        }
    }
});
