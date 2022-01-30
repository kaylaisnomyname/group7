

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

