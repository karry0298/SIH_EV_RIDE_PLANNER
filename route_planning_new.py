
# coding: utf-8

# In[13]:


start_lon=str(72.831353)
start_lat=str(18.968835)
end_lon=str(77.166284)
end_lat=str(28.677697)


# In[14]:




import requests
import json
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
    route_array=[] #Main list of properly visited node
    #total number of steps taken
    num_steps=len(route_json['legs'][0]['steps'])
    count=0
    for i in range(0,num_steps):
        #this is for number of intersections
        num_intersections=len(route_json['legs'][0]['steps'][i]['intersections'])
        # options_findStation={'lat':lat,'lon':lon,'options':['tesla supercharger','chademo'],'rad':1000}
        # findStationURL="http://192.168.2.13:2454/api/getStation"
        # nearMeStations= requests.post(findStationURL, data=(options_findStation)).json()['status']

        for j in range(0,num_intersections):
            offset=0
            lat_new=route_json['legs'][0]['steps'][i]['intersections'][j]['location'][1]
            lon_new=route_json['legs'][0]['steps'][i]['intersections'][j]['location'][0]
            location={'lat':lat_new,'lon':lon_new}
            route_array.append(location)
    routes={'locations':route_array}
    # routes = { 'locations' : [ { 'lat' : 19 , 'lon' : 72 } , { 'lat' : 19 , 'lon' : 71 } ] }
    # print(routes)
    findStationURL="http://192.168.43.141:2454/api/getStation"
    headers = {'Content-Type': 'application/json', 'Accept':'application/json'}
    nearMeStations= requests.post(findStationURL, data=json.dumps(routes), headers=headers).json()['response']
    print((nearMeStations))
    last_charge_lat=lat
    last_charge_lon=lon
    prev_lat=lat
    prev_lon=lon
    final_route_array=[]
    distance=0
    for i in range(0,len(nearMeStations)):
        final_route_array.append({ 'lat' : float(prev_lat) , 'lon' : float(prev_lon) } )
        if(nearMeStations[i]):
            distance=0
            last_charge_lat=route_array[i]['lat']
            last_charge_lon=route_array[i]['lon']
        else:
            distance=distance+haversine(float(prev_lon),float(prev_lat),float(route_array[i]['lon']),float(route_array[i]['lat']))
            
        if(distance>=range_car):
            r = requests.get('http://0.0.0.0:5000/route/v1/driving/'+last_charge_lon+','+last_charge_lat+';'+end_lon+','+end_lat+'?alternatives=3&overview=false&steps=true')
            route_data=r.json()
            num_routes=len(route_data['routes'])
            route_present=0
                
            for i in range(0,num_routes):
                route=plan_route_oneway(route_data['routes'][i],prev_lon,prev_lat,end_lon,end_lat,range_car)
                    
                #since route array is not null it will return some route append it to original route and send ahead
                if(route!=None):
                    route_present=1
                    final_route_array=final_route_array+route
                    return final_route_array
                return None 
        prev_lat=route_array[i]['lat']
        prev_lon=route_array[i]['lon']    

    return final_route_array


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
    

