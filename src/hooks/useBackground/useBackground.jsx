
const useBackground = () => {

    const bgLeftCorner = {
        backgroundImage: `url('/src/assets/image/wave_left_corner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    const bgRightCorner = {
        backgroundImage: `url('/src/assets/image/wave_right_corner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    const bgRight = {
        backgroundImage: `url('/src/assets/image/wave_right.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    const bgLeft = {
        backgroundImage: `url('/src/assets/image/wave_left.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };

    return { bgRightCorner, bgLeftCorner,bgRight,bgLeft }
};

export default useBackground;