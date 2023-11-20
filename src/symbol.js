import React from 'react';
import Icon from './icon';
import { useState } from 'react';
import { faStar, faThumbsUp, faEye,faHeart } from '@fortawesome/free-solid-svg-icons';

const MyComponent = () => {
   const[count1,setcount1] = useState(126);
   const[count2,setcount2] = useState(12);
   const[count3,setcount3] = useState(574);
   const[count4,setcount4] = useState(456);

   const star=()=>{
     setcount1(count1+1);
   };

   const star1=()=>{
    setcount2(count2+1);
  };

  const star2=()=>{
    setcount3(count3+1);
  };
  const star3=()=>{
    setcount4(count4+1);
  };
  return (
    <div>
      <div style={{ display: 'flex' }}>
      <Icon icon={faStar} onClick={star} bgColor="#7CB9E8" iconColor="white" text={count1} />
      <Icon icon={faThumbsUp} onClick={star1} bgColor="yellow" iconColor="white" text={count2} />
      <Icon icon={faEye} onClick={star2} bgColor="grey" iconColor="white" text={count3} />
      <Icon icon={faHeart} onClick={star3} bgColor="red" iconColor="white" text={count4} />


      </div>
      <br/>
      <strong style={{ color:"#7CB9E8"}}>134 posts </strong>
    </div>
  );
};

export default MyComponent;
