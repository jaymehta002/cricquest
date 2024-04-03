import cards from '../assets/cards.json';

const Card = () => {
    return (
        <>
        <div className="hidden md:block font-inter">
    {cards.map((card, index) => (
        <div key={index} className={`hero mt-20 h-full bg-design-white ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'}` }>
            <div className="hero-content flex-col gap-12 lg:flex-row">
                {index % 2 === 0 ? (
                    <>
                        <img height={400} src={card.imgSrc} className="max-w-full lg:max-w-sm shadow-2xl lg:mr-8" />
                        <div className="w-full lg:w-96">
                            <h1 className="text-3xl lg:text-4xl design-text-black font-bold">{card.title}</h1>
                            <p className="py-6 design-text-black">{card.description}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full font-inter lg:w-96">
                            <h1 className="text-3xl font-inter lg:text-4xl design-text-black font-bold">{card.title}</h1>
                            <p className="py-6 design-text-black font-inter">{card.description}</p>
                        </div>
                        <img height={400} src={card.imgSrc} className="max-w-full lg:max-w-sm shadow-2xl lg:ml-8" />
                    </>
                )}
            </div>
        </div>
    ))}
    </div>
    
                    
    <div className="block font-inter text-center md:hidden">
    {cards.map((card, index) => (
        <div key={index} className="hero mt-8 h-full bg-design-white">
            <div className="hero-content flex-col gap-4">
                <h1 className="text-2xl design-text-black font-bold">{card.title}</h1>
                <img height={200} src={card.imgSrc} className="max-w-full h-auto shadow-2xl" alt={card.title} />
                <div className="w-full">
                    <p className="py-4 text-base design-text-black">{card.description}</p>
                </div>
            </div>
        </div>
    ))}
</div>


    </>
    );
};

export default Card;
