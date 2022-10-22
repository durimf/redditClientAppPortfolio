import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import SubredditList from '../assets/SubredditList';





export default function RecipeReviewCard() {
 


 return (
  <Card sx={{ my: 10, height: '90%' }} >
   <CardHeader
  
    title="Post Title"

   />

   <CardContent>
  <SubredditList/>
   </CardContent >
  </Card>
 );
}
