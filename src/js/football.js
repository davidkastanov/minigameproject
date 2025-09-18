document.addEventListener('DOMContentLoaded', () => {
    const field = document.querySelector('.football__field');
    const ball = document.querySelector('.football__ball');
    if (!field || !ball) return;


    field.addEventListener('click', (event) => {
        const rect = field.getBoundingClientRect();

        const bw = ball.offsetWidth;
        const bh = ball.offsetHeight || bw;


        let left = event.clientX - rect.left - field.clientLeft - bw / 2;
        let top = event.clientY - rect.top - field.clientTop - bh / 2;

        left = Math.max(0, Math.min(left, field.clientWidth - bw));
        top = Math.max(0, Math.min(top, field.clientHeight - bh));

        ball.style.transform = 'none';

        ball.style.left = left + 'px';
        ball.style.top = top + 'px';
    });
});
