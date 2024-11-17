document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', async () => {
        const textToCopy = button.getAttribute('data-copy');
        try {
            await navigator.clipboard.writeText(textToCopy);

            // Copy feedback animation
            const originalIcon = button.querySelector('.copy-icon').textContent;
            button.querySelector('.copy-icon').textContent = '✓';
            button.style.backgroundColor = '#4CAF50';
            button.style.color = 'white';

            setTimeout(() => {
                button.querySelector('.copy-icon').textContent = originalIcon;
                button.style.backgroundColor = '';
                button.style.color = '';
            }, 1000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});
