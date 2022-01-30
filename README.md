

# Toronto Bike Sharing Demand Prediction 

## Machine Learning Model:  
1. Preliminary data preprocessing:  
Raw datasets consist of bike checkout logs and daily weather conditions. Raw bike dataset is first grouped by date and then joined with weather dataset by date to form a new dataframe. All Nan values, such as depth of snow, are filled by zero since the minimum value of the snow depth is zero. The cleaned dataset is then ensured with no duplicates or NaN values. Data preprocessing details are shown in Weather_Data_ETL.ipynb and Bike_data_ETL.ipynb.  

2. Preliminary feature engineering, feature selection and decision-making process:  
There are three possible outcomes: counts_trips, trip_duration, counts_Bike. Four approaches have been made and compared. The details and results are shown in machineLearning_Scaled.ipynb. After comparing, the better target and features set is:  

    - target: counts_Bike,  
    - the independent features: average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point (the features' names here are for description only).   

3. Splitting training and testing datasets:  
The dataset is split into training and testing sets with a default ratio of 0.75 and 0.25, random state of 78. The training set is then standardized as the value magnitudes of the independent variables are too wide apart, regardless of units. 

4. Explanation of model choice, limitations and benefits:  
So far there are two models tested: Linear Regression model(LR) and Random Forest model(RF).  LR is easier and faster to compute, but sensitive to outliers. In contrast, RF is less sensitive to outliers and is able to learn non-linear relationship, yet it is relatively vulnerable to overfitting. 
As per results of the four approaches, LR has much larger mse(mean squared error) and mae(mean absolute error) and somewhat smaller R2 scores comparing to RF, which coincides to the characteristics of the models.  

### Result 

From the four approach that has been made, we will focus on the result of 3 latest approach, because the first approach take input features other than the weather data . Here is the score result of the data.

#### :large_orange_diamond: Linear Regression

Weather Data : average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point


|Approach|Output(y)|Input(X)|MAE|MSE|RMSE|R2|Model Score|Features|
|---|---|---|---|---|---|---|---|---|
|2|Trip Duration|Weather Data|2898617.80|19112705117582.13|4371807.99|0.66|0.61|3028435.96795406  -157634.29552501  -834353.15862045    42048.10134156 467305.57600121 -2607110.83188877  3292337.77972865|
|3|Count Bikes|Weather Data|433.93|284447.25|533.33|0.76|0.75| -5.24344439  -34.27180844 -128.52401456   21.32274899  -47.95303541 -468.61274889  961.28760939|
|4|Count Trips|Weather Data|2898617.80|19112705117582.13|4371807.99|0.66|0.61|3028435.96795406  -157634.29552501  -834353.15862045    42048.10134156 467305.57600121 -2607110.83188877  3292337.77972865|



###### LR_Approach 2
![LR_1](https://user-images.githubusercontent.com/88597187/151683588-c5967148-c933-44d8-8549-5962a67dc5d4.jpg)  
###### LR_Approach 3 
![LR_2](https://user-images.githubusercontent.com/88597187/151683672-f200e351-24f0-4291-b625-9306b3bd1d45.JPG)  
###### LR_Approach 4 
![LR_3](https://user-images.githubusercontent.com/88597187/151683684-26e6f899-7150-4e06-a7cd-4d6e1004e1a7.jpg)    





#### :large_orange_diamond: Random Forest   


Weather Data : average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point


|Approach|Output(y)|Input(X)|MAE|MSE|RMSE|R2|Model Score|Features|
|---|---|---|---|---|---|---|---|---|
|2|Trip Duration|Weather Data|1048141.49|2810649367460.835|1676499.14|0.95|0.63|0.69310303 0.04746964 0.04085829 0.06743581 0.00131287 0.10377995 0.04604042|
|3|Count Bikes|Weather Data|160.38|42654.64|206.53|0.96|0.78| 0.72344709 0.04846094 0.03794404 0.05178519 0.01088794 0.08389985 0.04357494|
|4|Count Trips|Weather Data|1048141.49|2810649367460.835|1676499.14|0.95|0.63|0.69310303 0.04746964 0.04085829 0.06743581 0.00131287 0.10377995 0.04604042|



###### RF_Approach 2
![RF_1](https://user-images.githubusercontent.com/88597187/151683712-47d457a7-0a2c-4dc3-9b8a-8da8646a638d.jpg)
###### RF_Approach 3
![RF_2](https://user-images.githubusercontent.com/88597187/151683713-b971f832-69ca-49d4-a8f5-7fdb2b134778.jpg)
###### RF_Approach 4
![RF_3](https://user-images.githubusercontent.com/88597187/151683714-0c7319f8-2174-4ab9-b33c-5505c17de672.jpg)


### Explanation of model choice, limitations and benefits:
From the two models we tested:  Linear Regression model(LR) and Random Forest model(RF). LR is easier and faster to compute, but sensitive to outliers. In contrast, RF is less sensitive to outliers and is able to learn non-linear relationship, yet it is relatively vulnerable to overfitting. As per results of the four approaches, LR has much larger mse(mean squared error) and mae(mean absolute error) and somewhat smaller R2 scores comparing to RF, which coincides to the characteristics of the models.


:inbox_tray:  The full process can be seen on [machineLearning_Segment2.ipynb](https://github.com/kaylaisnomyname/group7/tree/Machine_learning_main/Codes)
