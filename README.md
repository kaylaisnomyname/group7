# Toronto Bike Sharing Demand Prediction 

## Machine Learning Model: 
## Preliminary 
1. Preliminary data preprocessing:  
Raw datasets consist of bike checkout logs and daily weather conditions. Raw bike dataset is first grouped by date and then joined with weather dataset by date to form a new dataframe. All Nan values, such as depth of snow, are filled by zero since the minimum value of the snow depth is zero. The cleaned dataset is then ensured with no duplicates or NaN values. Data preprocessing details are shown in Weather_Data_ETL.ipynb and Bike_data_ETL.ipynb.  

2. Preliminary feature engineering, feature selection and decision-making process:  
There are three possible outcomes: counts_trips, trip_duration, counts_Bike. Four approaches have been made and compared. After comparing, the better target and features set is:  

    - target: counts_Bike,  
    - the independent features: average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point (the features' names here are for description only).   

3. Splitting training and testing datasets:  
The dataset is split into training and testing sets with a default ratio of 0.75 and 0.25, random state of 78. The training set is then standardized as the value magnitudes of the independent variables are too wide apart, regardless of units. 

4. Explanation of model choice, limitations and benefits:  
So far there are two models tested: Linear Regression model(LR) and Random Forest model(RF).  LR is easier and faster to compute, but sensitive to outliers. In contrast, RF is less sensitive to outliers and is able to learn non-linear relationship, yet it is relatively vulnerable to overfitting. 
As per results of the four approaches, LR has much larger mse(mean squared error) and mae(mean absolute error) and somewhat smaller R2 scores comparing to RF, which coincides to the characteristics of the models.  

5. Preliminary processing results: 

Approach 2: output = trip_duration  
Approach 3: output = counts_bike  
Approach 4: output = counts_trip  
Features: average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point  
#### :large_orange_diamond: Linear Regression

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



:inbox_tray:  The full process for preliminary  can be seen on [machineLearning_Segment2.ipynb](https://github.com/kaylaisnomyname/group7/blob/Machine_learning_main/Codes/machineLearning_Segment2.ipynb)

## New Approach and Result 

After the preliminary result we try to do different approaches to get better result for the target(y) Counts_bike . The new approach can be seen on [machineLearning_Segment3_optimization_2.ipynb](https://github.com/kaylaisnomyname/group7/blob/Machine_learning_main/Codes/machineLearning_Segment3_optimization.ipynb).

The steps are :
1.  Add new model 

We try to explore the decision tree model for the machine learning. We use Counts_bike as the target and weather data(average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point) for the input(X).  After we split and train the model , the result for R2 is 0.96377 with overall model score 0.573. This score is more lower than the Random forest model that we do in the preliminary step.  The full result and the features important can be seen below.

|Approach|Output(y)|Input(X)|MAE|MSE|RMSE|R2|Model Score|Features|
|---|---|---|---|---|---|---|---|---|
|1|Counts_bike|Weather Data|160.38|42654.64|206.53|0.96377|0.573|0.705699   0.0572998  0.028832   0.04761139 0.00846358 0.08907662 0.0630176 |


<img width="546" alt="DT3" src="https://user-images.githubusercontent.com/88597187/152836698-4825a4b7-3622-47b4-9c34-d0c96c2b4a77.png">

2.  Eliminate Features

From the Feature importance, we can see that the snow_depth is the least importance features. We eliminate the snow_depth and run the code again for the linear regression, random forest and decision trees.  From the result we can see that random forest and decision trees model has the same MAE,MSE,RMSE,and R2, while the linear regression have higher score for MAE,MSE,RMSE,and R2, but lower score for the R2. 

For the  overall model score  random forest(0.777)  has the best score followed by linear regression(0.757) and decision tree (0.537). If we compare with the result before the feature elimination, the score before  feature elimination is better.

Full result can be seen on table below.

Output(y)= Counts_bike

Input (X)= avg temp, avg humid, avg dp, avg wind, air pressure, wind gust

|Approach|MAE|MSE|RMSE|R2|Model Score|Features|
|---|---|---|---|---|---|---|
|Linear_Regression |435.616|4286339.084|535.106|0.757|0.748|21.98059841  -36.09301518 -128.96411332   21.35227387 -470.12185838 952.56045789 |
|Random Forest |162.798|43482.05|208.5235|0.963|0.777|0.72704048 0.04967765 0.03794172 0.05280546 0.0873387  0.04519599 |
|Decision Trees|162.798|43482.05|208.5235|0.963|0.537|0.70508605 0.05949338 0.02820474 0.0518988  0.09274557 0.06257146|


From the approaches we  have been done and  compared it to the preliminary result,  we can summarize that the best model for the bike demand prediction is the Random Forest with the 7 features( average_temp, average_wind_speed, wind_gust, air_pressure, snow_depth, average_humid, average_dew_point)  and target counts_bike. 
