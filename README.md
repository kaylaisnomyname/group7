
# Toronto Bike Sharing Demand Prediction/Machine Learning 


## Pre-Eliminary 
For the pre-eliminary , we will use two model Linear Regression and Random Forest .

### Data Preprocessing :
Raw datasets consist of bike checkout logs and daily weather conditions. Raw bike dataset is first grouped by date and then joined with weather dataset by date to form a new dataframe. All Nan values, such as depth of snow, are filled by zero since the minimum value of the snow depth is zero. The cleaned dataset is then ensured with no duplicates or NaN values. Data preprocessing details are shown in Weather_Data_ETL.ipynb and Bike_data_ETL.ipynb. 


### Feature engineering, Feature selection and decision-making process: 

:large_orange_diamond: Possible Input Features (X): average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point 

:large_orange_diamond: Possible Target Output (y): counts_trips, trip_duration, counts_Bike

Four approach has been made to select the best output and input. The first approach is for testing only which take  count trips as output and all possible input features + other field in the table as the input.  The other three approach  will focus on the weather data( all possible input features)  and difference output as the target.

###  Splitting training and testing datasets:

The dataset is split into training and testing sets with a default ratio of 0.75 and 0.25, random state of 78. The training set is then standardized as the value magnitudes of the independent variables are too wide apart, regardless of units.

### Performance Metric 

:large_orange_diamond: MAE : This metric will be used to measure how far the prediction from the actual output by calculating the average of the difference between original value and predicted values.

:large_orange_diamond: MSE : This metric measures the average squares of the error 

:large_orange_diamond: RMSE : This metric  is  the square root of the mean of the square of all of the error

:large_orange_diamond: R Squared : R-squared is a statistical measure of how close the data are to the fitted regression line. R Squared is range between 0-100%. 
* 0% indicates that the model explains none of the variability of the response data around its mean.
* 100% indicates that the model explains all the variability of the response data around its mean.


:large_orange_diamond: Overall model Score : this metric calculate the model score 

:large_orange_diamond: Feature Importance : Feature importances refers  to a class of techniques for assigning scores to input features to a predictive model that indicates the relative importance of each feature when making a prediction. The scores can be used for better understanding of the data , model and reducing the number of input features.

### Result 

From the four approach that has been made, we will focus on the result of 3 latest approach, because the first approach take input features other than the weather data . Here is the score result of the data.

#### :large_orange_diamond: Linear Regression

Weather Data : average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point


|Approach|Output(y)|Input(X)|MAE|MSE|RMSE|R2|Model Score|Features|
|---|---|---|---|---|---|---|---|---|
|2|Trip Duration|Weather Data|2898617.80|19112705117582.13|4371807.99|0.66|0.61|3028435.96795406  -157634.29552501  -834353.15862045    42048.10134156 467305.57600121 -2607110.83188877  3292337.77972865|
|3|Count Bikes|Weather Data|433.93|284447.25|533.33|0.76|0.75| -5.24344439  -34.27180844 -128.52401456   21.32274899  -47.95303541 -468.61274889  961.28760939|
|4|Count Trips|Weather Data|2898617.80|19112705117582.13|4371807.99|0.66|0.61|3028435.96795406  -157634.29552501  -834353.15862045    42048.10134156 467305.57600121 -2607110.83188877  3292337.77972865|

<p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/151683588-c5967148-c933-44d8-8549-5962a67dc5d4.jpg" width="350" height="250"/>
 <img src="https://user-images.githubusercontent.com/88597187/151683672-f200e351-24f0-4291-b625-9306b3bd1d45.JPG" width="350" height="250"/>
<img src="https://user-images.githubusercontent.com/88597187/151683684-26e6f899-7150-4e06-a7cd-4d6e1004e1a7.jpg" width="350" height="250"/> 
  
</p>

<p align="center">
  <sub>Figure 1 Chart Features Importance for Linear Regression </sub>
</p>




#### :large_orange_diamond: Random Forest 


Weather Data : average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point


|Approach|Output(y)|Input(X)|MAE|MSE|RMSE|R2|Model Score|Features|
|---|---|---|---|---|---|---|---|---|
|2|Trip Duration|Weather Data|1048141.49|2810649367460.835|1676499.14|0.95|0.63|0.69310303 0.04746964 0.04085829 0.06743581 0.00131287 0.10377995 0.04604042|
|3|Count Bikes|Weather Data|160.38|42654.64|206.53|0.96|0.78| 0.72344709 0.04846094 0.03794404 0.05178519 0.01088794 0.08389985 0.04357494|
|4|Count Trips|Weather Data|1048141.49|2810649367460.835|1676499.14|0.95|0.63|0.69310303 0.04746964 0.04085829 0.06743581 0.00131287 0.10377995 0.04604042|



<p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/151683712-47d457a7-0a2c-4dc3-9b8a-8da8646a638d.jpg" width="350" height="250"/>
 <img src="https://user-images.githubusercontent.com/88597187/151683713-b971f832-69ca-49d4-a8f5-7fdb2b134778.jpg" width="350" height="250"/>
<img src="https://user-images.githubusercontent.com/88597187/151683714-0c7319f8-2174-4ab9-b33c-5505c17de672.jpg" width="350" height="250"/> 
  
</p>

<p align="center">
  <sub>Figure 2 Chart Features Importance for Random Forest </sub>
</p>



### Explanation of model choice, limitations and benefits:
From the two models we tested:  Linear Regression model(LR) and Random Forest model(RF). LR is easier and faster to compute, but sensitive to outliers. In contrast, RF is less sensitive to outliers and is able to learn non-linear relationship, yet it is relatively vulnerable to overfitting. As per results of the four approaches, LR has much larger mse(mean squared error) and mae(mean absolute error) and somewhat smaller R2 scores comparing to RF, which coincides to the characteristics of the models.

