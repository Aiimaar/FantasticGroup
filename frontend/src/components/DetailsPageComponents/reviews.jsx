import React from "react";
import {
  ReviewList,
  ReviewCard,
  ReviewHeader,
  ReviewerName,
  RatingBlock,
  Stars,
  Rating,
  ReviewContent,
  ButtonsRow,
  ActionButton,
  EmptyStars,
} from "../../components/DetailsPageComponents/reviews.styled";
const Reviews = () => {
  return (
<ReviewList>
            <h2 style={{color:"#A37C67"}}>Reviews</h2>
            <ReviewHeader>
                <ReviewerName>Christofer</ReviewerName>
                <RatingBlock>
                  <Stars>★ ★</Stars>
                 <EmptyStars> ☆ ☆ ☆</EmptyStars>
                  <Rating>3/5</Rating>
                </RatingBlock>
              </ReviewHeader>
            <ReviewCard>
             
              <ReviewContent>
                I like this place, it is really comfy seats and good caffe
              </ReviewContent>
            </ReviewCard>
            <ReviewHeader>
                <ReviewerName>Sophie</ReviewerName>
                <RatingBlock>
                  <Stars>★ ★ ★</Stars>
                  <EmptyStars>☆ ☆</EmptyStars>
                  <Rating>3.5/5</Rating>
                </RatingBlock>
              </ReviewHeader>
            <ReviewCard>
          
              <ReviewContent>
                Good place for work. I like atmosphere.
              </ReviewContent>
            </ReviewCard>
            <ButtonsRow>
              <ActionButton>More reviews</ActionButton>
              <ActionButton>
                Map <span role="img" aria-label="map"></span>
              </ActionButton>
            </ButtonsRow>
          </ReviewList>
          )}

          export default Reviews;