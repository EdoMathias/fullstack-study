import React from 'react';
import styles from './About.module.css';

function About(): JSX.Element {
  return (
    <>
      <div className={styles.introSection}>
        <h2 className={styles.introSectionWelcome}>Welcome to</h2>
        <h1 className={styles.siteHeader}>ELDEN TRIPS</h1>
        <p>
          The ultimate destination for adventurers seeking to recreate the
          awe-inspiring journeys of Elden Ring within our own world. Whether
          you're drawn to the rugged beauty of the Lands Between, the ancient
          mysteries of Stormveil Castle, the haunting allure of the Roundtable
          Hold, or the eerie beauty of the Rot Lakes in Caelid, Elden Trips
          offers meticulously curated itineraries to immerse you in the
          fantastical realms of Elden Ring.
        </p>
        <h2 className={styles.siteHeader}>YOUR JOURNEY AWAITS.</h2>
      </div>
    </>
  );
}

export default About;
