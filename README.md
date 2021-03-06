

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

:large_orange_diamond: Visualization: Tableau/HTML/CSS/Bootstrap/Javascript


### Questions we hope to answer: 

* How weather conditions affect the demand of bike sharing in Toronto?
* Which weather condition(s) or feature(s) is having the most impact on the demand of bike sharing in Toronto? 
* Suggestions for next business strategy.  
  
    Assessing ridership on a monthly as to annual level to factor in the influence of seasonality and weather.


## Group communication protocols:
* Team members communicate via Slack, Email and Google drive.  
* Responsibilities:
  - Inez Suyono   : ETL, Develop Database
  - Ivan Coelho   : Develop Database / Visualization
  - Shohesh Patel : Develop Machine Learning
  - Xiaodan Du       : Manage Repo, ETL, Machine Learning

## Machine Learning Model:  
Result model scores and R2 scores:  
![result](https://github.com/kaylaisnomyname/group7/blob/main/Images/model_score_R2_score_result.png?raw=true)  

Best R2 score and model score so far:  
![best_yet_model_report](https://github.com/kaylaisnomyname/group7/blob/main/Images/RandomForestReport_seg3.png?raw=true)  

Feature importance chart:  
![result_chart](https://user-images.githubusercontent.com/88597187/151683713-b971f832-69ca-49d4-a8f5-7fdb2b134778.jpg)  

For more detailed about the Machine Learning Model please click button below
   
<a href="https://github.com/kaylaisnomyname/group7/tree/Machine_learning_main"> ![More Detail](https://img.shields.io/badge/-DETAILS%20>>-brightgreen?style=for-the-badge)</a>


 ## Data and Database:
 Data will consists of two tables, one for bike data and the other is for weather data.
 This data will be extracted from datasource and stored on database using PostGreSQL. 
 
 For more detailed about ETL Process and Database please click button below


<a href="https://github.com/kaylaisnomyname/group7/tree/Database_main"> ![More Detail](https://img.shields.io/badge/-DETAILS%20>>-brightgreen?style=for-the-badge)</a>




## Visualization:  

### <img src="https://user-images.githubusercontent.com/88597187/151684747-e0141d56-07d6-4f36-bd40-ff6932e6e896.png" width="50" height="50"/> Dashboard Presentation

#### :diamond_shape_with_a_dot_inside: Google slides: [Google Slides](https://docs.google.com/presentation/d/1tis3Y4NxnJhJgd8WlkxADeIJdGZQeWNUWOC0Q9_YSIY/edit)  


#### :diamond_shape_with_a_dot_inside: Google Presentation: [Google_Slides_pdf](https://github.com/kaylaisnomyname/group7/blob/main/group7-Toronto%20Bike%20Sharing%20Demand%20Prediction.pdf)    


:globe_with_meridians: Website  <a href="https://kaylaisnomyname.github.io/group7/">![Website](https://img.shields.io/badge/-CLICK%20FOR%20WEBSITE-blue?style=for-the-badge)</a>  
### <img src="https://user-images.githubusercontent.com/88597187/151684727-2deeb082-b5fc-42ea-9825-2162591f3614.png" width="150" height="30"/> 

We use Tableau to interactive data visualization with the project to identify some relevant points. We transform the way we see the data to solves those problems below.


#### :diamond_shape_with_a_dot_inside: Bike  Data: [Dashboard](https://public.tableau.com/app/profile/ivan4393/viz/ProjectBikeDataDashboard/DashboardBikeData?publish=yes)      
#### :diamond_shape_with_a_dot_inside: Bike  Data: [Story](https://public.tableau.com/app/profile/ivan4393/viz/ProjectBikeDataStory/ProjectBikeData#2)


#### :diamond_shape_with_a_dot_inside: Bike and Weather Data: [Dashboard](https://public.tableau.com/app/profile/ivan4393/viz/Bike-WeatherDashboard/Bike_Weather_Data?publish=yes)  
#### :diamond_shape_with_a_dot_inside: Bike and Weather Data: [Story](https://public.tableau.com/app/profile/ivan4393/viz/Bike-Weather-Story/Bike_Weather_DataStory?publish=yes)    
  



## Suggestion for Future Analysis:
 
  - to futher improve accuracy:  
    - try different decision tree models, such as BaggingRegressor, ExtraTreeRegressor, and AdaBoostRegressor
    - add more weather features into fitting dataset
  - Prediction equation : eventurally come up with a prediction equation which takes in the weather conditions and estimates the demand of bikes.  
 










