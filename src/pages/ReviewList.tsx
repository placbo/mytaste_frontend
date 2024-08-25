import { Stack, Card, CardContent, Rating, Typography } from '@mui/material';
import { FC } from 'react';
import { Review } from '../types';

interface IReviewListProps {
  reviews: Review[];
}

export const ReviewList: FC<IReviewListProps> = ({ reviews }) => {
  return (
    <Stack direction="column" spacing={2}>
      {reviews &&
        reviews.map((review) => (
          <Card key={review.reviewId} sx={{ backgroundColor: '#333333' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Rating sx={{ mb: 2 }} name="simple-controlled" precision={0.5} readOnly value={review.rating} />
              <Typography variant="body1" gutterBottom>
                {review.comment}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {review.user}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Stack>
  );
};
