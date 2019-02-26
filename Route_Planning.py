
# coding: utf-8

# In[13]:


start_lon=str(72.831353)
start_lat=str(18.968835)
end_lon=str(77.166284)
end_lat=str(28.677697)


# In[14]:




import requests
from math import radians, cos, sin, asin, sqrt
#r = requests.get('http://0.0.0.0:5000/route/v1/driving/'+start_lon+','+start_lat+';'+end_lon+','+end_lat+'?alternatives=3&overview=false&steps=true')
#route_data=r.json()


# In[15]:


def haversine(lon1, lat1, lon2, lat2):
    """
    Calculate the great circle distance between two points 
    on the earth (specified in decimal degrees)
    """
    # convert decimal degrees to radians 
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

    # haversine formula 
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a)) 
    r = 6371 # Radius of earth in kilometers. Use 3956 for miles
    return c * r


# In[16]:


# num_routes=len(route_data['routes'])
# route_data['routes'][0]['legs'][0]['steps'][0]['intersections'][0]['location'][1]


# In[17]:


def plan_route_oneway(route_json,lon,lat,end_lon,end_lat,range_car):
    #assuming only 1 leg
    range_left=range_car
    route_array=[] #Main list of properly visited nodes
    route_array_temp=[] # secondary temp list for storing nodes till next node is confirmed
    prev_lat=lat
    prev_lon=lon
    #last fully charged co ordinates
    last_charge_lat=prev_lat 
    last_charge_lon=prev_lon
    
    #total number of steps taken
    num_steps=len(route_json['legs'][0]['steps'])
    
    for i in range(0,num_steps):
        #this is for number of intersections
        num_intersections=len(route_json['legs'][0]['steps'][i]['intersections'])
        
        for j in range(0,num_intersections):
            offset=0#Have to put offset here
            #get lat and lon
            lat_new=route_json['legs'][0]['steps'][i]['intersections'][j]['location'][1]
            lon_new=route_json['legs'][0]['steps'][i]['intersections'][j]['location'][0]
            #check for range left after considering offset and prev values
            range_left=range_left-(haversine(float(prev_lon),float(prev_lat),float(lon_new),float(lat_new))+offset)
            
            #if stations are present in 1 KM radius 
            # 1.Reset Range Left
            # 2.Update last Charge Values
            # 3. Add temp values in final route_array and clear temp array
            route_array_temp.append(route_json['legs'][0]['steps'][i]['intersections'][j]['location'])

            import json

            options_findStation={'lat':lat_new,'lon':lon_new,'options':['tesla supercharger','chademo'],'rad':1000}
            findStationURL="http://192.168.2.13:2454/api/getStation"
            nearMeStations = requests.post(findStationURL, data=json.dumps(options_findStation))
            print(nearMeStations)

            if(nearMeStations):
                range_left=range_car
                last_charge_lat=lat_new
                last_charge_lon=lon_new
                route_array=route_array+route_array_temp
                route_array_temp.clear()
            
            #Update Previous Values for lat lon to be used in next iteration
            prev_lat=lat_new
            prev_lon=lon_new
            
            #if no range left and values same as starting values indicating there no possible path
            
            if(range_left<=0 and last_charge_lat==lat and last_charge_lon==lon):
                return None
            #if no range left reroute path
            elif(range_left<=0):
                
                r = requests.get('http://0.0.0.0:5000/route/v1/driving/'+last_charge_lon+','+last_charge_lat+';'+end_lon+','+end_lat+'?alternatives=3&overview=false&steps=true')
                route_data=r.json()
                
                num_routes=len(route_data['routes'])
                #check for presence of route 
                route_present=0
                
                for i in range(0,num_routes):
                    route=plan_route_oneway(route_data['routes'][i],prev_lon,prev_lat,end_lon,end_lat,range_car)
                    
                    #since route array is not null it will return some route append it to original route and send ahead
                    if(route!=None):
                        route_present=1
                        route_array=route_array+route
                        return route_array
                    
                #no route is present ahead
                if(route_present==0):
                    return None
                
    return route_array


# In[18]:


def plan_route(start_lon,start_lat,end_lon,end_lat,range_car):
    #start_lon,start_lat,end_lon,end_lat
    # start_lon=str(72.831353)
    # start_lat=str(18.968835)
    # end_lon=str(77.166284)
    # end_lat=str(28.677697)
    r = requests.get('http://0.0.0.0:5000/route/v1/driving/'+start_lon+','+start_lat+';'+end_lon+','+end_lat+'?alternatives=3&overview=false&steps=true')
    route_data=r.json()
    #number of routes
    num_routes=len(route_data['routes'])
    #routing array which will be sent
    route_arr=[]
    
    for i in range(0,num_routes):
        route_arr.append(plan_route_oneway(route_data['routes'][i],start_lon,start_lat,end_lon,end_lat,range_car))
    return route_arr    
    

