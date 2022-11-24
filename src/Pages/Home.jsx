import React, { useState} from 'react';
import { Box } from '@mui/material'
import HeroBanner from '../Componenets/HeroBanner';
import SearchExercises from '../Componenets/SearchExercises';
import Exercises from '../Componenets/Exercises';

const Home = () => {
  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setbodyPart}
      />
      
      <Exercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      exercises={exercises}/>
    </Box>
  )
}

export default Home
