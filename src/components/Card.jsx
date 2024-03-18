const Card = () => {
    const cards = [
        {
            imgSrc: '/about1.svg',
            title: 'Discover 4 Hidden Players',
            description: 'Everyday at 12AM, 4 new hidden cricket players will become available for you to discover. Their IPL price value and role will be listed at top. Your mission is to guess as many of these players as possible within 15 attempts'
        },
        {
            imgSrc: '/about2.png',
            title: 'Make Your Guess Utilize Search & Auto-Complete',
            description: 'To guess a player, simply start typing their name using the keyboard provided. As you type, suggestions will appear. Navigate through the suggestions using the arrows, and once your desired player is highlighted, hit the "Guess" button.'
        },
        {
            imgSrc: '/about3.svg',
            title: 'Spot Common Traits',
            description: 'Compare your Player Guess. If your guessed player shares any traits with the hidden players, such as Nation, team, age, or Role, those traits will be revealed. Use this valuable information to narrow down your future guesses.'
        },
        {
            imgSrc: '/unveil.svg',
            title: 'Unveil the Players',
            description: `Correct Guesses - A successful guess will unveil the player's name, highlighted in blue. However, an incorrect guess, regardless of whether any traits match, will cost you a life.`
        },
        {
            imgSrc: '/about6.svg',
            title: 'Utilize Hints',
            description: `Reveal Hidden Traits Feel free to use one of your 3 hints at any point during the game to uncover a hidden trait. Click the "Hint" button and select the trait you want to reveal. Strategically use hints to boost your chances of success.`,
        },
        {
            imgSrc: `/about7.svg`,
            title: `Achieve Victory`,
            description: `Maintain Streaks & Earn Awards To emerge victorious, you must uncover all 5 hidden players before exhausting your 20 lives. Winning the game adds to your win streak, provided you also won the previous day's game. Even if you don't win, you can still make progress and earn awards for completing other challenges.`
        },
        {
            imgSrc: `/about8.svg`,
            title: `Share Your Score`,
            description: `Challenge Your Friends Prove your skills by sharing your results on social media or challenging friends to beat or match your score.`
        },

        // Add more cards as needed
    ];

    return (
        <>
        <div id='about' className="hidden md:block font-inter">
    {cards.map((card, index) => (
        <div key={index} className={`hero mt-20 h-full bg-design-white ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'}` }>
            <div className="hero-content flex-col gap-12 lg:flex-row">
                {index % 2 === 0 ? (
                    <>
                        <img src={card.imgSrc} className="max-w-full lg:max-w-sm shadow-2xl lg:mr-8" />
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
                        <img src={card.imgSrc} className="max-w-full lg:max-w-sm shadow-2xl lg:ml-8" />
                    </>
                )}
            </div>
        </div>
    ))}
    </div>
    
                    
    <div id="about" className="block font-inter text-center md:hidden">
    {cards.map((card, index) => (
        <div key={index} className="hero mt-8 h-full bg-design-white">
            <div className="hero-content flex-col gap-4">
                <h1 className="text-2xl design-text-black font-bold">{card.title}</h1>
                <img src={card.imgSrc} className="max-w-full h-auto shadow-2xl" alt={card.title} />
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
