import { useState } from 'react';

export const Services_Newborn = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleVisibility = (index) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const services = [
        {
            title: "Oil application",
            content: "Oil application and massages to a little one has many positive aspects. Research proved that oil massage promotes the growth and development of newborns. As the newborn has dedicated skin, a good oil massage makes the skin healthy, moisturizes the skin and improves the skin health. Not only benefits the skin, it also relaxes the muscles and improves sleep, strengthening the bones and massage also helps for emotional development and strengthens their immune system by increasing blood circulation."
        },
        {
            title: "Bath to the child",
            content: "Regular baths to the newborn child protect them from microorganisms. Baat and care of the skin helps to maintain the proper texture and avoid irritation and protect from inflammation. It also removes dead skin and improve blood circulation. By providing a bath to the child also enhancers physical energy level and improvement in clarity by relaxing the mind."
        },
        {
            title: "Sunlight exposure",
            content: "Exposure to sunlight will reduce the bilirubin level and therefore it decreases risk of physiological jaundice. It also helps to produce vitamin D. Vitamin D helps the body to absorb calcium easily. Sunlight exposure also have other benefits like increasing the insulin and serotonin level and also helps to boost immune system by producing more white blood cells (WBC)."
        },
        {
            title: "Umbilical cord stump care",
            content: "Cord stump care helps to dry out easily and prevent infection. It also enhances good air circulation. Umbilical coat stem care provides the fastest and safest cord healing."
        },
        {
            title: "Swaddling a baby",
            content: "Wrapping the newborn with the soft cloth helps them to feel safe and secure by recreating the restricted space of the uterus. Safe swordling of newborn how many benefits like restricting hands and leg movement of infants, therefore their sleeping time will be more. It also helps to maintain board temperature and prevent heat loss."
        },
        {
            title: "Care of eyes",
            content: "A newborn will have a very sensitive eye and also it produces more mucus. Eye care is critical to the newborn to prevent infection in their early development. As the newborn eyes are more sensitive chances of infection are higher. Proper eye care not only prevent infection it also minimise future problems during vision development."
        },
        {
            title: "Bonding",
            content: "Bonding is the attachment developed between the mother and their newborn. Bonding is vital for emotional and physical development. It is not only the physical connection but also an emotional connection between the mother and the newborn. It also aids the brain development by releasing some hormones and chemicals. It helps to stimulate neural connection and aids for fast development of language, emotional regulation and cognitive skills."
        }
    ];

    return (
        <div className="services-newborn">
            <div className="services-newborn-heading">
                <h1>SERVICES TO NEWBORN</h1>
            </div>
            <div className="services-newborn-container">
                <div className="services-newborn-images">
                    <div className="background-blob-1"></div>
                    <img src="/assets/services-baby.jpg" alt='body'/>
                    <div className="background-blob-2"></div>
                </div>
                <div className="services-newborn-content">
                    <ul>
                        {services.map((service, index) => (
                            <li
                                key={index}
                                className={expandedIndex === index ? 'expanded' : ''}
                                onClick={() => toggleVisibility(index)}
                                style={{display: expandedIndex === null || expandedIndex === index ? 'flex' : 'none'}}
                            >
                                <div className="services-newborn-content-li">
                                    {service.title}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="20"
                                        width="20"
                                        viewBox="0 0 512 512"
                                        style={{
                                            transform: expandedIndex === index ? 'rotate(0deg)' : 'rotate(180deg)'
                                        }}
                                    >
                                        <path fill="#ffffff"
                                              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                                    </svg>
                                </div>
                                <div
                                    className={`services-newborn-content-li-content ${expandedIndex === index ? 'visible' : ''}`}>
                                    {service.content}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
