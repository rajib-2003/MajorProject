import React from 'react';
import './AndhraPradesh.css'; // Import CSS for styling

const AndhraPradeshCulturePage = () => {
    return (
        
         <div className='main'>
          <section className='home_image'>
            <img src="/images/home-image.jpg" alt="Home" />
          </section>
          
            <header>
                <h1>Explore Andhra Pradesh</h1>
            </header>
            <div className="culture-page">
            <section className="art-section">
              <div className="details">
                <h2>Art & Craft</h2>
                <p>Kalamkari is a traditional art form that involves painting or printing on fabric using natural dyes. Andhra Pradesh is known for its Kalamkari work, which includes intricate designs and motifs depicting mythological stories, nature, and folklore. Bidriware is a metal handicraft that originated in Bidar, Karnataka, but is also practiced in Andhra Pradesh. It involves creating intricate designs on metal objects, usually made of zinc and copper, with silver inlay work. Bidriware items include vases, bowls, trays, and jewelry.</p>
                </div>
                <div className="image">
                <img src="/images/andra-art.jpg" alt="Art & Craft" />
                
                </div>
            </section>
            <section className="art-section">
            <div className="details">
                <h2>Cuisine</h2>
                <p>Rice is the staple food of Andhra Pradesh, and the cuisine includes a wide variety of rice dishes. One of the most famous rice dishes is the spicy Andhra Biryani, a fragrant rice dish cooked with meat or vegetables and flavored with aromatic spices. Andhra cuisine is known for its spicy and tangy pickles and chutneys. Gongura pachadi, made from the leaves of the roselle plant, is a popular pickle in Andhra Pradesh. Other common chutneys include tomato chutney, peanut chutney, and coconut chutney.</p>
                </div>
                <div className="image">
                <img src="/images/andra-food.jpg" alt="Cuisine" />
                </div>
            </section>
            <section className="art-section">
              <div className="details">
                <h2>Dance & Music</h2>
                <p>Kuchipudi is a classical dance form that originated in the village of Kuchipudi in Andhra Pradesh. It is known for its graceful movements, intricate footwork, and expressive storytelling. Kuchipudi dance performances often depict mythological stories from Hindu epics like the Ramayana and Mahabharata. Perini Thandavam is a traditional dance form that originated in the Kakatiya dynasty of Andhra Pradesh. It is characterized by vigorous movements, rhythmic footwork, and powerful expressions. Performed by male dancers, Perini Thandavam was historically used as a martial dance form to boost the morale of warriors before going into battle.</p>
                </div>
                <div className="image">
                <img src="/images/andra-dance.jpg" alt="Dance & Music" />
                </div>
            </section>
            <section className="art-section">
              <div className="details">
                <h2>Festivals</h2>
                <p>Ugadi, also known as Telugu New Year, is celebrated with great fervor and enthusiasm in Andhra Pradesh. It marks the beginning of the traditional lunar calendar and is observed with rituals, prayers, and special festive foods like Ugadi Pachadi. Sankranti, also known as Makar Sankranti, is a harvest festival celebrated in January. It marks the transition of the sun into the zodiac sign of Capricorn and is celebrated with kite flying, traditional foods like Pongal, and cultural performances.</p>
                </div>
                <div className="image">
                <img src="/images/andra-festival.jpg" alt="Festivals" />
                </div>
            </section>
        </div>
      
        </div>
        
    );
}

export default AndhraPradeshCulturePage;
