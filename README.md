## machine learning

### Results:
Approach 1: y = counts_trips, X = all: both LR and RF overfit, output mostly weighted on bike data.  
Approach 2: y = trip_duration, X = 7 weather avg variables: both models have huge mae and mse, overall model score around 60%, R2 score RF better than LR.  
Approach 3: y = counts_Bike, X = 7 weather avg variables: both models have significantly smaller mae and mse compared to Approach 2, model scores and R2 scores are better than Approach 2, RF better than LR   
Approach 4: y = counts_trips, X = 7 weather avg variables: both models have huge mae and mse, overall model scores are around 60%, R2 score RF better than LR.   
ps: Scaled or no-scaled training and testing sets have similar outcomes.   
In summary: Random Forest model performs better than Linear Regression model on this dataset.   
Future: further improvement on model accuracy is needed.
