
# Bike Sharing Demand Prediction in Toronto 

## Overview 
Bike sharing is a shared transport service using bike on a short term for a price. The sturdy-framed bikes are available at any docking station in the city. The bikes can be taken from any station and returned to any station in the bike share system. Riders use bike share for commuting to work or leisure—like running errands, going to appointments or meeting up with friends.Riders also can use bike to connect to public transportation or just doing exercise for exploring the city.  

Weather conditions have considerable influence on cycling travel behavior. Our goal in this project is to create a viable machine learning model to explore possible correlation(s) between the different types of weather conditions and the demand on bike sharing. 



### Project Scope: 
:large_orange_diamond: Location      : This Project is based in Toronto

:large_orange_diamond: Time Range    : 3 years history from 1 January 2019 to 31 December 2021 


### Resources:

#### Data Source
:large_orange_diamond: Bike Sharing Datasets: Downloaded from an open-source portal CKAN ([bike.](https://ckan0.cf.opendata.inter.prod-toronto.ca/tr/dataset/bike-share-toronto-ridership-data) )

:large_orange_diamond: Weather Datasets: Scraped from Wunderground ( [link.](https://www.wunderground.com/history/monthly/ca/toronto/CYTZ)) and download from Meteostat ([link.](https://meteostat.net/en/station/71624?t=2019-01-01/2021-12-31))

#### Tools
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
  - Dana Du       : Manage Repo, ETL, Develop Machine Learning

 
 ## Data ETL 
 
 ### Raw data:
 #### :large_orange_diamond: Bike Sharing Data 
 The Bike sharing data is downloaded from CKAN (previously known as open data Toronto).
 
 Variables in the dataset : 
 Trip Id, Trip Duration, Start Station Id, Start Time, Start Station Name, End Station Id, End Time, End Station Name, Bike Id, User Type
 
 #### Clean and Processed Data 
 The dataset needs to be preprocessed. The preprocessing steps are:  
 * Combine ALL CSV data
 * Delete NAN data
 * Add new column Date , converted from Start Time
 * Group by Date to get counts_trips
 * Group by Date and search unique value on Bikeid to get counts_bike
 * Group by Date and sum trip duration to get trip duration
 * Filter with user type="Annual Member" and group by date to get  counts_member_annual
 * Filter with user type=" Casual Member" and group by date to get counts_member_casual
 * Merge all of the grouping into one dataframe
 * Export the cleaned bike to csv
 
 
:inbox_tray: Details of extraction please refer to [Bike_data_ETL.ipynb](https://github.com/kaylaisnomyname/group7/tree/main/Codes),   the partial cleaned csv is: [Bike_data.csv](https://github.com/kaylaisnomyname/group7/tree/main/Resources)  

 
 #### :large_orange_diamond:  Weather Data
 The Weather data is coming from two sources: the wonderground website and Meteostat. The data then  will be combined to  get more features on weather data. 
 #####  :arrow_forward: Wunderground Data
 The wunderground data  is scraped from the  daily observation table on the website. We use Parsehub to scrape the table. 
 
 Features in  dataset :
 
 Year, Month , Day, Max Dew Points, Average Dew Points, Max Wind Speed , Average Wind Speed , Min Wind Speed, Max Humidity, Average Humidity, Min Humidity
 
 Metric : Fahrenheit, Mph, Percentage
 
 ##### :arrow_forward: Meteostat Data
 The wunderground data  is downloaded directly from the website. 
 
 Features in  dataset:
 date,temperature average,temperature min,temperature max, precipitation,snow depth,	wind direction,wind speed, wind gust, air pressure, tsun

 Metric : Celcius, Kmh, Percentage,hPA
 
 #### Clean Data:
 Clean data preprocessing steps are:
 * Combine csv files to one 
 * Substring Year value to get correct value of the year
 * Mapping Month from text to number
 * Change metric from Fahrenheit to Celcius and Mph to Kmh
 
 For Meteostat , here is the step that we take using pandas  and jupyter notebook:
 - Parse Date value to Year, Month and Day and  add it to new column
 - Drop wind speed column because we will take more detailed data from wunderground and tsun column because it doesn't have any value and there is not explanation what the column stands for.
 
 
 The two dataset will be merged by Year, Month and Day to get one full dataset. The result can be seen on tables description --> Tbl_weather_data.
 
 
:inbox_tray: The full process can be seen on [Weather_data_ETL.ipynb](https://github.com/kaylaisnomyname/group7/tree/main/Codes)   and the result can be seen on [weather_data_clean.csv](https://github.com/kaylaisnomyname/group7/tree/main/Resources)

  
 
 ### Clean dataset:
:large_orange_diamond: Merge Weather Dataset with Bike Data
Data preprocessing to be continued.
 

 ### Tables Description 
 
#### Tbl_weather_data
|Field_name|Key|Data Type|Metric|Description|
|---|---|---|---|---|
|W_Date|Primary Key|datetime64[ns]||Date|
|W_Temp_Max|-|float64|Celcius|Maximum Temperature|
|W_Temp_Avg|-|float64|Celcius|Average Temperature|
|W_Temp_Min|-|float64|Celcius|Minimum Temperature|
|W_Max_wind|-|float64|Km/h|Maximum Wind Speed|
|W_Avg_wind|-|float64|Km/h|Average Wind Speed|
|W_Min_wind|-|float64|Km/h|Minimum Wind Speed|
|W_Wind_Gust|-|float64|Km/h|Wind Gust|
|W_Air_Pressure|-|float64|hPa|Air Pressure|
|W_Snow_Depth|-|float64|mm|Snow Depth|
|W_Max_humid|-|float64|%|Maximum Humidity|
|W_Avg_humid|-|float64|%|Average Humidity|
|W_Min_humid|-|float64|%|Minimum Humidity|
|W_Max_Dp|-|float64|Celcius|Maximum Dew Point|
|W_Avg_dp|-|float64|Celcius|Average Dew Point|
|W_Min_Dp|-|float64|Celcius|Minimum Dew Point|



#### Tbl_bike_data
|Field_name|Key|Data Type|Metric|Description|
|---|---|---|---|---|
|Date |Primary Key|datetime64[ns]||Date|
|counts_trips|-|int64||Trip counts|
|counts_Bike|-|int64||count of unique bike id on that date|
|trip_duration|-|float64||sum of trip duration on that date|
|counts_member_annual|-|int64||count of trip with annual member type|
|counts_member_casual|-|int64||count of trip with casual member type|

 
 
 ## Machine Learning Model  
 ** Preliminary test**: Preliminary test was performed using Dec 2021 sample. We use Linear Regression model to check for possible relationships. As the sample data is relatively small, the outcome was not as we predicted. Further details will be filled when the full cleaned dataset is ready. 
 Next stage will try out different regression models on full cleaned dataset.
 
 ## Database
 
 ### Database Planning
  For this project we will use PostGreSQL for the database. To  make sure everyone will have the database, we will make script for making the table in database and each of team member will run the script in their local machine.
  
 
 ### ERD 


 <p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/149685581-a4f98f93-6fa0-47f9-adfc-d720d1033cef.png"/>
        
</p>

<p align="center">
  <sub>Figure 1 ERD for Bikesharing Database </sub>
</p>

 
## Dashboard

details to be filled in next stage..


