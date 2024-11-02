import { useState } from 'react';

export const Services_Mother = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleVisibility = (index) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const services = [
        {
            title: "Oil application",
            content: "Holistic approaches to postnatal care focusing on physical, mental and emotional wellbeing of mother after delivery. Gentle full body massage using oils helps to improve blood circulation, tighten the loose muscles, provide physical wellbeing and aid for mental relaxation. Traditional body massage and oil application helps the body muscles to relax, loosen up the tissues and tighten the ligaments.    Body massage and oil application also helps to control blood pressure by regulating blood flow. A traditional oil massage improves blood circulation and alleviate the muscular and joint pains."
        },
        { 
            title: "Provide bath to the mother",
            content: "Traditional bath helps to promote partom healing, muscle relaxation, strengthen the body tissue and remove micro organisms from the body during postnatal period. Hot water bath not only helps for physical wellbeing it also plays a major role in the improvement of mental wellbeing, alleviate sickness and provide energy to the mother."
        },
        {
            title: "Sitz Bath",
            content: ""
        },
        { 
            title: "Type of food items during Postnatal period",
            content: "Postpartum period is also considered as lactation period. Nursing mother diet should be special and it is very important for newborn growth and development. Postpartum diet should be easily digestible, simultaneously it should strengthen tissues and promote lactation. Lactating mother requires high calories, adequate protein, fat, plenty of fluids, minerals and vitamins. The diet which contain sufficient roughages and fluids helps to control constipation. Iron rich diet also helps to prevent anemia during postnatal period. Our Mom and Newborn guide and advise to choose proper food to maintain and improve the lactation. The proper intake of balanced diet which contain adequate nutritive value helps for the fast recovery of maternal health and aid for proper growth and development of newborn."
        },
        {
            title: "Educating about the type of postnatal Exercises",
            content: "Postpartum exercises improve the muscle tone which are stretched during pregnancy and labor especially the abdominal and perineal muscles. Postnatal exercise have many benefits like strengthen the pelvic floor muscles, Improve cardio vascular fitness, promote sleep, help for weight loss, helps to improve posture, prevent back pain and prevent incontinence. Our Mom and Newborn team will teach different type of exercises to be suitable based on the type of delivery and the condition of the mother."
        },
        {
            title: "Educating and assisting mother for breastfeeding",
            content: "Breast feeding is the natural way of feeding the newborn. The new nursing mother will not have adequate knowledge about the technique of breast feeding. Most common reason the mother hesitate to feed the baby because of lack of knowledge about its benefits. Breast feeding has health benefits for both mother and newborn. The breast milk provide optimum nutrition to the newborn for their proper growth and development. Breast milk contain many antibodies which provide protection against illness. Our team will guide and support mother while feeding their newborn."
        },
        {
            title: "Educate mother how to hold the baby",
            content: "Motherhood is the period of learning many new things. Mother will be curious to hold their newborn, but as a new mother she is little worried about how to hold the baby in a way that keeps the child safe and secure. There are various ways to hold the baby depending on the circumstances. Physical contact of the mother have various benefits, by holding the newborn helps to develop bonding between mother and child, which leads to a life long attachment. Holding a newborn can help regulate their heart rate, breathing and body temperature."
        },
        {
            title: "Educate about breastfeeding positions",
            content: "Proper breast feeding position has its own values, Effective and Suitable breast feeding position are crucial for women to feed their babies without pain. The baby can suck the breast only if feeding is in correct position. Many mothers needs support with positioning their newborn for feeding. Good latch and perfect position makes both mother and baby comfortable, feed well, reduce pain and prevent health problems. Adequate milk supply can be ensured if the mother feed their baby without pain. Our expertise will guide the needed women about proper feeding postions, importance of good latch. "
        },
        {
            title: "Measures to improve milk supply",
            content: "A healthy mother will produce about 500 to 800 ml of milk per day to feed her newborn. For adequate milk production the mother needs to take additional 600 KCal per day. Breast milk production is depends partially on the mother's emotions and thoughts. It is important to keep the baby with mother all time, Apart from all these parameters the diet during postnatal period plays a major role in maintaining lactation. the mother diet which include adequate protein, fat, lipids, carbohydrate, vitamins and minerals and plenty of fluid for maintaining and improving lactation."
        },
        {
            title: "How to control stress and anxiety",
            content: "Many women experiences post natal stress and anxiety , the mother need both physical and mental rest and should be protected against worries and undue fatigue. Sleep is essential to provide adequate physical and emotional support. Worries and Unhappiness can also cause stress. Hormonal changes after child birth causes stress and anxiety coping with the demand of a new baby and everything else thats going on around can be stressful. Mother need to overcome from the stress and anxiety for emotional and mental wellbeing, or else it can adversly affect the mother's mental health. Our team will helps the mother to overcome from stress and anxiety by providing different services and engaging the mother in child care."
        },
    ];

    return (
        <div className="services-mother">
            <div className="services-mother-heading">
                <h1>SERVICES TO MOTHER</h1>
            </div>
            <div className="services-mother-container">
                <div className="services-mother-content">
                    <ul>
                        {services.map((service, index) => (
                            <li
                                key={index}
                                className={expandedIndex === index ? 'expanded' : ''}
                                onClick={() => toggleVisibility(index)}
                                style={{display: expandedIndex === null || expandedIndex === index ? 'flex' : 'none'}}
                            >
                                <div className="services-mother-content-li">
                                    <b>{service.title}</b>
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
                                    className={`services-mother-content-li-content ${expandedIndex === index ? 'visible' : ''}`}>
                                    <i>{service.content}</i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="services-mother-images">
                    <div className="background-blob-1"></div>
                    <img src="/assets/services-mother-1.jpeg" alt='body'/>
                    <div className="background-blob-2"></div>
                </div>
            </div>
        </div>
    );
}
