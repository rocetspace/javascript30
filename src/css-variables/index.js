;(function() {
    const createHandler = (key, suffix) => {
        return function () {
            document.documentElement.style.setProperty(
                key, `${this.value}${suffix}`
            );
        }
    }

    const spacingControl = document.getElementById('spacing');
    const colorControl = document.getElementById('color');
    const blurControl = document.getElementById('blur');

    const handleSpacing = createHandler('--spacing', 'px');
    const handleColor = createHandler('--bg-color', '');
    const handleBlur = createHandler('--blur', 'px');

    // Spacing
    spacingControl.addEventListener('change', handleSpacing);
    spacingControl.addEventListener('mousemove', handleSpacing);

    // Blur
    blurControl.addEventListener('change', handleBlur);
    blurControl.addEventListener('mousemove', handleBlur);

    // Color
    colorControl.addEventListener('change', handleColor);

})();