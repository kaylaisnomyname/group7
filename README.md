
# Bike Sharing Demand Prediction in Toronto 

## Overview 
Bike sharing is a shared transport service using bike on a short term for a price or free. The sturdy-framed bikes are available at any docking station in the city. The bikes can be taken from any station and returned to any station in the bike share system. Riders use bike share for commuting to work or leisure—like running errands, going to appointments or meeting up with friends.Riders also can use bike to connect to public transportation or just doing exercise for exploring the city.  

Weather conditions have considerable influence on cycling travel behavior especially in Canada with 4 seasons ( Spring, Summer, Fall and Winter). Our goal in this project is to determine correlation between the difference type of weather with the demand on bike sharing using machine learning. 



### Project Scope 
:large_orange_diamond: Location      : For This Project  the location of the data is only in Toronto city 

:large_orange_diamond: Time Range    : The data will take 3 latest years from 1 January 2019 to 31 December 2021 


### Resources
#### Data Source
:large_orange_diamond: Bike Sharing Datasets: Downloaded from open data Toronto ( [link.](https://ckan0.cf.opendata.inter.prod-toronto.ca/tr/dataset/bike-share-toronto-ridership-data) )

:large_orange_diamond: Weather Datasets: Scraped from Wunderground ( [link.](https://www.wunderground.com/history/monthly/ca/toronto/CYTZ)) and download from Meteostat ([link.](https://meteostat.net/en/station/71624?t=2019-01-01/2021-12-31))

#### Tools
:large_orange_diamond: Software: Jupyter Notebook,PostGreSQL,Parsehub

:large_orange_diamond: Language: Python,SQL

:large_orange_diamond: Library : Pandas,glob,os,sklearn



### Questions we hope to answer:  

* How weather conditions affect the demand of bike sharing in Toronto?
* Which features of weather can better predict the demand of bike sharing in Toronto? 
* Suggestions for next business strategy.  


## Group communication protocols:
* Through this project, Team member communicated constantly using Slack and Email. Team member also use Google drive to shared project timeline and management.
* Responsibilities:

  Dana Du       : Manage Repositories, Develop Machine Learning 
  
  Inez Suyono   : Develop Database
  
  Ivan Coelho   : Develop Database
  
  Shohesh Patel : Develop Machine Learning

 ## Database
 
 ### Data Collecting and Cleaning
 
 #### :large_orange_diamond: Bike Sharing Data 
 
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
 
 #### Clean and Merge Data
 
 The dataset from wunderground  is not clean , Here is the step of data cleaning :
 * Combine all csv data to one dataframe
 * Substring Year value  to get correct value of the year
 * Mapping Month from text to number
 * Change metric from Fahrenheit to Celcius and Mph to Kmh
 
 For Meteostat , Here is the step of data cleaning :
 - Parse Date value to Year, Month and Day and  add it to new column
 - Drop wind speed column because we will take more detailed data from wunderground and tsun column because it doesn't have any value and there is not explanation what the column stands for.
 
 
 The two dataset will be merged by Year, Month and Day to get one full dataset. The result can be seen on tables description --> Tbl_weather_data.
 


 ### Tables Description 
 
#### Tbl_weather_data
|Field_name|Key|Data Type|Metric|Description|
|---|---|---|---|---|
|W_Year|Primary Key|int64||Year of the data|
|W_Month|Primary Key|int64||Month of the data|
|W_Day|Primary Key|int64||Day of the data|
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
 
 ### ERD 
 
 ## Machine Learning Model  



 


 


