"""

# Project Name: AI Based Early Stroke Detection 
# Author List: Nehal Kalnad,Ashley Lobo, e-Yantra Team 
# Filename: app.py 
# Functions: loadCSV , loadEEG , checker, predict
# Global Variables:	smokeModel , scaler, app


"""			


import flask
import os
from flask import jsonify, request
from flask import flash, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import requests, json
import pandas as pd
import Route_Planning as rp







app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.secret_key = 'super secret key'
cors = CORS(app, resources={r"/*": {"origins": "*"}})





"""

	* Function Name: 	loadCSV
	* Input: 		temp.csv uploaded in upload folder
	* Output: 		systolic, diastolic, heartrate and temperature data.
	* Logic: 		function uses pandas library to read data which was logged at tera-term
	* Example Call:	get request to "/loadCSV"


"""


@app.route('/route', methods=['POST'])
def route():
    start_lon = request.args.get('slon')
    start_lat = request.args.get('slat')
    end_lon = request.args.get('elon')
    end_lat = request.args.get('elat')
    range_car=300000
    print(rp.plan_route(start_lon,start_lat,end_lon,end_lat,range_car))
    return jsonify(rp.plan_route(start_lon,start_lat,end_lon,end_lat,range_car))



def checker(val,need = True):
    return 1 if val == need else 0

app.run(host='0.0.0.0',port=5002)
