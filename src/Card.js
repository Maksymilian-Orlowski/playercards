import React from "react";

const Card = ({ name, image, description, lvl}) => {
    return (
      <div style={styles.container}>
        <div style={styles.container2}>
            <h2 style={styles.title}>{name}</h2>
        </div>
        <img src={image} alt={`employee`} style={styles.image} />
        <h4 style={styles.text}>  {lvl} lvl </h4>
        <p style={styles.text}>  {description}</p>
      </div>
    );
  };
  
  const styles = {
    container: {
      border: '2px solid black',
      borderRadius: '8px',
      padding: '0px',
      margin: '26px',
      textAlign: 'center',
      backgroundColor: '#aaa',
      width: '200px',
      height: '300px',
    },
    container2: {
        //border: '1px solid black',
        borderRadius: '0px',
        padding: '10px 0px 10px 0px',
        margin: '0px',
        textAlign: 'center',
        
        width: '199px',
        
      },
    title: {
      margin: '0 0 10px',
    },
    text: {
      margin: '4px',
      fontSize: '15px',
    },
    image: {
      width: '199px',
      height: '120px',
      margin: '0',
      objectFit: 'cover',

      border: '1px solid black',
        borderRadius: '0px',
        padding: '0px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
  };
  
  export default Card;