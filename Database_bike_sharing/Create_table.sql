CREATE TABLE tbl_weather_data (
w_date DATE NOT NULL,
w_temp_max float8,
w_temp_avg float8,
w_temp_min float8,
w_max_wind float8,
w_avg_wind float8,
w_min_wind float8,
w_wind_gust float8,
w_air_pressure float8,
w_snow_depth float8,
w_max_humid	float8,
w_avg_humid	float8,
w_min_humid	float8,
w_max_dp float8,
W_avg_dp float8,
w_min_dp float8,
PRIMARY KEY (W_Date)
);


CREATE TABLE tbl_bike_data (
b_date DATE NOT NULL,
b_counts_trips int,
b_counts_bike int,
b_trip_duration float8,
b_counts_member_annual int,
b_counts_member_casual int,
PRIMARY KEY (b_date)
);