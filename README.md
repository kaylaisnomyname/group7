

# Toronto Bike Sharing Demand Prediction 

## Overview: 
Bike sharing is a shared transport service using bike on a short term for a price. The sturdy-framed bikes are available at any docking station in the city. The bikes can be taken from any station and returned to any station in the bike share system. Riders use bike share for commuting to work or leisure—like running errands, going to appointments or meeting up with friends.Riders also can use bike to connect to public transportation or just doing exercise for exploring the city.  

Weather conditions have considerable influence on cycling travel behavior. Our goal in this project is to create a viable machine learning model to explore possible correlation(s) between the different types of weather conditions and the demand on bike sharing. 



### Project Scope: 
:large_orange_diamond: Location      : This Project is based in Toronto

:large_orange_diamond: Time Range    : 3 years history from 1 January 2019 to 31 December 2021 


### Resources:

#### Data Source:  
:large_orange_diamond: Bike Sharing Datasets: Downloaded from an open-source portal CKAN ([bike.](https://ckan0.cf.opendata.inter.prod-toronto.ca/tr/dataset/bike-share-toronto-ridership-data) )

:large_orange_diamond: Weather Datasets: Scraped from Wunderground ( [link.](https://www.wunderground.com/history/monthly/ca/toronto/CYTZ)) and downloaded from Meteostat ([link.](https://meteostat.net/en/station/71624?t=2019-01-01/2021-12-31))

#### Tools:
:large_orange_diamond: Software: Jupyter Notebook,PostGreSQL,Parsehub

:large_orange_diamond: Language: Python,SQL

:large_orange_diamond: Library: Pandas,glob,os,sklearn

:large_orange_diamond: Vizualization: Tableau/HTLM/JS


### Questions we hope to answer: 

* How weather conditions affect the demand of bike sharing in Toronto?
* Which weather condition(s) or feature(s) is having the most impact on the demand of bike sharing in Toronto? 
* Suggestions for next business strategy.  



## Group communication protocols:
* Team members communicate via Slack, Email and Google drive.  
* Responsibilities:
  - Inez Suyono   : ETL, Develop Database
  - Ivan Coelho   : Develop Database / Visualization
  - Shohesh Patel : Develop Machine Learning
  - Dana Du       : Manage Repo, ETL, Machine Learning

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


 ## Data and Database:
 Data will consists of two tables, one for bike data and the other is for weather data.
 This data will be extracted from datasource and stored on database using PostGreSQL. 
 
 For more detailed about ETL Process and Database please click button below

 <!-- Place this tag where you want the button to render. -->

   
<a href="https://github.com/kaylaisnomyname/group7/tree/Database_main/Database_bike_sharing"> ![More Detail](https://img.shields.io/badge/-DETAILS%20>>-brightgreen?style=for-the-badge)</a>


## Dashboard:


https://public.tableau.com/app/profile/ivan4393/viz/ProjectRawData/Story1?publish=yes

#### Top Starting Station
#### Member Type
#### Average Trip Duration



We use Tableau to interactive data visualization with the project to identify some relevant points. We transform the way we see the data to solves those problems below.

### Bike and Weather Data merged

https://public.tableau.com/app/profile/ivan4393/viz/Dashboard_16428543063150/Story1?publish=yes

#### Average Trip Duration by Year
#### Annual Member and Casual Member
#### Annual Members
#### Weather Temperature 

### Raw Data

https://public.tableau.com/app/profile/ivan4393/viz/ProjectRawData/Story1?publish=yes

#### Top Starting Station
#### Member Type
#### Average Trip Duration


### WebSite creation 

The main purpose of creation of the website is practice what we learn through the bootcamp. In this website we used tools to show what we can do with HTML and CSS.

#### Tools 

### HTML
### CSS
### Bootstrap
### Images



 


