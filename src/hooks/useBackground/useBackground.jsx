
const useBackground = () => {

    const bgLeftCorner = {
        backgroundImage: `url('https://i.ibb.co/Qvns8V2/wave-left-corner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    const bgRightCorner = {
        backgroundImage: `url('https://i.ibb.co/N7H1d8G/wave-right-corner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    const bgRight = {
        backgroundImage: `url('https://i.ibb.co/RQ1fnqP/wave-right.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };
    const bgLeft = {
        backgroundImage: `url('https://i.ibb.co/fMRP2My/wave-left.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
    };

    return { bgRightCorner, bgLeftCorner,bgRight,bgLeft }
};

export default useBackground;