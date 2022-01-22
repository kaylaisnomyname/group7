
# Toronto Bike Sharing Demand Prediction/Data ETL and Database 


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
 
 
:inbox_tray: Details of extraction please refer to [Bike_data_ETL.ipynb](https://github.com/kaylaisnomyname/group7/tree/Database_main/ETL_CODE),   the full cleaned csv is: [Bike_data.csv](https://github.com/kaylaisnomyname/group7/tree/Database_main/Resources)  

 
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
 
 #### Clean and Processed Data:
 For Wunderground, here is the step that we take using pandas and jupyter notebook:
 * Combine csv files to one 
 * Substring Year value to get correct value of the year
 * Mapping Month from text to number
 * Change metric from Fahrenheit to Celcius and Mph to Kmh
 
 For Meteostat , here is the step that we take using pandas  and jupyter notebook:
 - Parse Date value to Year, Month and Day and  add it to new column
 - Drop wind speed column because we will take more detailed data from wunderground and tsun column because it doesn't have any value and there is not explanation what the column stands for.
 
 
 The two dataset will be merged by Year, Month and Day to get one full dataset. The result can be seen on Tbl_weather_data.
 
 
:inbox_tray: The full process can be seen on [Weather_data_ETL.ipynb](https://github.com/kaylaisnomyname/group7/tree/Database_main/ETL_CODE)   and the result can be seen on [weather_data_clean.csv](https://github.com/kaylaisnomyname/group7/tree/Database_main/Resources)

  
 
### Clean dataset:
:large_orange_diamond: 
Merge dataset for weather and bike data for 3 years. 
The full process can be seen on [Bike_data_ETL.ipynb](https://github.com/kaylaisnomyname/group7/tree/Database_main/ETL_CODE),   the full cleaned csv is: [Bike_weather_merge.csv](https://github.com/kaylaisnomyname/group7/tree/Database_main/Resources)  

:heavy_exclamation_mark: This data will be used temporary only until the database connection is fully integrated to machine learning.

 
 
 
 ## Database
 
 ### Database Planning
  For this project we will use PostGreSQL for the database. Each team member will setup the database on the local machine. 
  Here are the step for setting the database on the local machine:
  * Create database Bike_sharing in PostGreSQL
  * Run script [Create_table.sql](https://github.com/kaylaisnomyname/group7/tree/Database_main/Database_bike_sharing) on the query tool to create tbl_weather_data and tbl_bike_data
  * Run [Pandas_to_SQL_connection.ipynb](https://github.com/kaylaisnomyname/group7/tree/Database_main/Database_bike_sharing) to transfer data from pandas dataframe to PostGreSQL database
  * To connect database machine learning with the database , team member will use [Header_Machine_Learning.ipynb](https://github.com/kaylaisnomyname/group7/tree/Database_main/Database_bike_sharing) in the header.

:inbox_tray: The detailed process can be seen on [Step to add database on the local PostGreSQL.pdf](https://github.com/kaylaisnomyname/group7/tree/Database_main/Database_bike_sharing)


### Database Connection

* Database name :Bike_sharing 
* Table : tbl_weather_data , tbl_bike_data

#### :large_orange_diamond:  Tables Description 
 
##### tbl_weather_data
|Field_name|Key|Data Type|Metric|Description|
|---|---|---|---|---|
|w_date|Primary Key|Date||Date|
|w_temp_max|-|float8|Celcius|Maximum Temperature|
|w_temp_avg|-|float8|Celcius|Average Temperature|
|w_temp_min|-|float8|Celcius|Minimum Temperature|
|w_max_wind|-|float8|Km/h|Maximum Wind Speed|
|w_avg_wind|-|float8|Km/h|Average Wind Speed|
|w_min_wind|-|float8|Km/h|Minimum Wind Speed|
|w_wind_gust|-|float8|Km/h|Wind Gust|
|w_air_pressure|-|float8|hPa|Air Pressure|
|w_snow_depth|-|float8|mm|Snow Depth|
|w_max_humid|-|float8|%|Maximum Humidity|
|w_avg_humid|-|float8|%|Average Humidity|
|w_min_humid|-|float8|%|Minimum Humidity|
|w_max_dp|-|float8|Celcius|Maximum Dew Point|
|w_avg_dp|-|float8|Celcius|Average Dew Point|
|w_min_dp|-|float8|Celcius|Minimum Dew Point|



##### tbl_bike_data
|Field_name|Key|Data Type|Metric|Description|
|---|---|---|---|---|
|b_date |Primary Key|Date|Date|
|b_counts_trips|-|int||Trip counts|
|b_counts_Bike|-|int||count of unique bike id on that date|
|b_trip_duration|-|float8||sum of trip duration on that date|
|b_counts_member_annual|-|int||count of trip with annual member type|
|b_counts_member_casual|-|int||count of trip with casual member type|


#### :large_orange_diamond:   Table and Data in Bike_sharing database
Figure 1 will show us The list table in the PostGreSQL database Bike_sharing, it consists of tbl_weather_data and tbl_bike_data. All of the data succesfully transferred to database table as shown in Figure 2.

 <p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/150616544-611db12a-e6b1-4d96-8210-782865ca3539.png"/>
        
</p>

<p align="center">
  <sub>Figure 1 List Tables </sub>
</p>


<p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/150616589-f8f24d29-627b-4a99-9bdf-5e017c0c8a0b.png" width="600" height="250"/>
 <img src="https://user-images.githubusercontent.com/88597187/150616604-e382ed6d-bc8f-4299-affb-829eeca09198.png" width="600" height="250"/>
 
        
</p>

<p align="center">
  <sub>Figure 2 Data in tables </sub>
</p>


#### :large_orange_diamond:  Join Table  and Integration to Machine Learning

For the purpose of machine learning, tbl_bike_data and tbl_weather_data need to be joined into one dataframe. Using Sqlalchemy to connect to database, the tables will be joined using sql query as shown in Figure 3.


<p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/150617412-fbda73c7-fa1a-43eb-b918-3206abe81b46.png" width="600" height="250"/>
        
</p>

<p align="center">
  <sub>Figure 3 Database Connection and Join Tables </sub>
</p>

 
 ### ERD 

 <p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/150483728-910e3691-1118-45fd-a638-d6ae8d21f1fd.png"/>
        
</p>

<p align="center">
  <sub>Figure 4 ERD for Bikesharing Database </sub>
</p>


