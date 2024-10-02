// import React from 'react';
// import Image from 'next/image';
// import styles from './styles.module.css';

import BookReview from "./BookReview";
import Gallery from "./Gallery";

const FlipCard = () => {
  return (
    // <div className={styles.flipCardContainer}>
    //   <div className={styles.flipCard}>
    //     {/* Front of the card */}
    //     <div className={styles.cardFront}>
    //       <figure>
    //         <Image 
    //               src="/bookReview/sky.png"
    //               // Adjust the path according to your project's structure
    //           alt="Front"
    //           width={210} // Set the appropriate width
    //           height={100} // Set the appropriate height
    //         />
    //         <figcaption>Front Side

    //         <h1>great book</h1>

    //         </figcaption>
    //         <div className={styles.imgBg}></div>
    //       </figure>
    //     </div>
        
    //     {/* Back of the card */}
    //     <div className={styles.cardBack}>
    //       <figure>
    //         <Image 
    //           src="/image/sky.svg"
    //           alt="Back"
    //           width={310} // Set the appropriate width
    //           height={500} // Set the appropriate height
    //         />
    //         <ul>
    //           <li>Detail 1</li>
    //           <li>Detail 2</li>
    //           <li>Detail 3</li>
    //         </ul>
    //         <div className={styles.imgBg}></div>
    //       </figure>
    //     </div>
    //   </div>
    // </div>

    <BookReview />
    // <Gallery />
  );
};

export default FlipCard;
