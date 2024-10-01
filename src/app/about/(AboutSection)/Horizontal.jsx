import Image from 'next/image';

const Horizontal = () => {
    return (
        <div className='w-full flex justify-between'>
            <Image
            src='/image/line.png'
            width={800}
            height={500}
            />
        </div>
    );
};

export default Horizontal;