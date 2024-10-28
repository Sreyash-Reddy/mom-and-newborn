import { useState } from 'react';

export const Services_Newborn = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleVisibility = (index) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const services = [
        {
            title: "Oil application",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
        {
            title: "Provide bath to the mother",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
        {
            title: "Type of food items",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
        {
            title: "Educating and assisting mother for breastfeeding",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
        {
            title: "Educate mother how to hold the baby",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
        {
            title: "Educate about breastfeeding positions",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
        {
            title: "Measures to improve milk supply",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
        {
            title: "How to control stress and anxiety",
            content: "Lorem ipsum dolor sit amet. Eos alias molestiae sed nihil dolor ut velit quia et blanditiis vero et nulla sunt. Ea nesciunt consequatur a facilis aperiam qui quis perspiciatis et repellendus atque aut inventore maxime eum corrupti galisum. Aut nemo eligendi quo expedita nemo in unde dolores aut dolores libero nam quod repellendus ab enim sunt? Non vitae enim et itaque nulla rem sequi quia. Est beatae optio vel temporibus corporis ad galisum quia aut dolores quia aut quisquam earum. 33 quia perspiciatis aut nemo quaerat hic sint delectus qui praesentium amet et consequuntur dolorum ab molestiae nemo aut consectetur iste. Est reprehenderit alias eum ipsa voluptatum ad assumenda galisum"
        },
    ];

    return (
        <div className="services-newborn">
            <div className="services-newborn-heading">
                <h1>SERVICES TO MOTHER</h1>
            </div>
            <div className="services-newborn-container">
                <div className="services-newborn-images">
                    <div className="background-blob-1"></div>
                    <img src="/assets/services-mother-1.jpeg" alt='body'/>
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
