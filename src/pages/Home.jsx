import images from '../assets/images.jpeg';
import images1 from '../assets/images1.jpeg';
import images2 from '../assets/images2.jpeg';
import images3 from '../assets/images3.jpeg';
import images4 from '../assets/images4.jpg';
import images5 from '../assets/images5.jpeg';
import images6 from '../assets/images6.jpeg';
import images7 from '../assets/images7.jpeg';
import images8 from '../assets/images8.jpeg';
import images9 from '../assets/images9.jpeg';
import images10 from '../assets/images10.jpeg';
import images11 from '../assets/images11.jpeg';
import images12 from '../assets/images12.jpeg';
import images13 from '../assets/images13.jpeg';
import images14 from '../assets/images14.jpg';
import images15 from '../assets/images15.jpeg';
import images16 from '../assets/images16.jpeg';
// import images14 from '../assets/images14.jpg';

const imageUrls = [
    images,
    images1,
    images2,
    images3,
    images4,
    images5,
    images6,
    images7,
    images8,
    images9,
    images10,
    images11,
    images12,
    images13,
    images14,
    images15,
    images16,
    // images14,
];


export default function Home() {
    const columns = [[], [], [], []];
    imageUrls.forEach((img, i) => {
        columns[i % 4].push(img);
    });
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="text-center py-8">
                <h1 className="text-3xl font-bold mb-2">Image Gallery☠️
                </h1>
            </div>

            {/* Flex Column Layout */}
            <div className="flex flex-wrap px-4">
                {columns
                    .filter(col => col.length > 0)
                    .map((col, i) => (
                        <div key={i} className="w-full sm:w-1/2 lg:w-1/4 px-1">
                            {col.map((img, j) => (
                                <img
                                    key={j}
                                    src={img}
                                    alt={`img-${i}-${j}`}
                                    className="w-full rounded shadow-sm mb-2"
                                />
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};