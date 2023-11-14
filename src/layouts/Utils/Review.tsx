import ReviewModel from "../../models/ReviewModels";
import { StarsReview } from "./StarsReview";

export const Review: React.FC<{review: ReviewModel}> = ({review}) => {

    const {date, rating, userEmail, reviewDescription} = review
    const dates = new Date(date)
    const longMonth = dates.toLocaleString('en-us', {month: 'long'})
    const dateDay = dates.getDate()
    const dateYear = dates.getFullYear()
    const dateRender = longMonth + " " + dateDay + ", " + dateYear

    return (
        <div>
            <div className="col-sm-8 col-md-8">
            <h5>{userEmail}</h5>
            <div className="row">
                <div className="col">
                    {dateRender}
                </div>
                <div className="col">
                    <StarsReview rating={rating} size={16}/>
                </div>
            </div>
            <div className="mt-2">
                <p>
                    {reviewDescription}
                </p>
            </div>
            <hr />
        </div>
        </div>
        
    )
}