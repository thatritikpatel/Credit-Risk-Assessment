from flask import Flask, render_template, jsonify, request, send_file
from src.exception import CustomException
from src.logger import logging as lg
import os,sys
import json
import pandas as pd

from src.pipeline.train_pipeline import TrainingPipeline
from src.pipeline.predict_pipeline import PredictionPipeline


app = Flask(__name__)


@app.route("/")
def home():
    return "Welcome to my application"




@app.route("/train")
def train_route():
    try:
        train_pipeline = TrainingPipeline()
        train_pipeline.run_pipeline()


        return "Training Completed."


    except Exception as e:
        raise CustomException(e,sys)


@app.route('/predict', methods=['POST', 'GET'])
def upload():
   
    try:




        if request.method == 'POST':
            # it is a object of prediction pipeline
            prediction_pipeline = PredictionPipeline(request)
           
            #now we are running this run pipeline method
            prediction_file_detail = prediction_pipeline.run_pipeline()


            lg.info("prediction completed. Downloading prediction file.")
            return send_file(prediction_file_detail.prediction_file_path,
                            download_name= prediction_file_detail.prediction_file_name,
                            as_attachment= True)




        else:
            return render_template('upload_file.html')
    except Exception as e:
        raise CustomException(e,sys)
   


@app.route('/predict_by_form', methods=['POST', 'GET'])
def predict_by_form():
    try:
        if request.method == 'GET':
            return render_template('predict_by_form.html')
        elif request.method == 'POST':
            data = request.get_json()
            data = json.dumps(data)
            data = json.loads(data)
            
            index = [0]
            data = pd.DataFrame(data,index=index)
            print(data)

             # it is a object of prediction pipeline
            prediction_pipeline = PredictionPipeline(request)
           
            #now we are running this run pipeline method
            predictions = prediction_pipeline.predict(data)
            print(predictions)

            isDefaulter = bool(predictions[0])

            return jsonify({
            "message": "Data received successfully!",
            "isDefaulter": isDefaulter
            })            
        else:
            return render_template('predict_by_form.html')

    except Exception as e:
        print("An exception has occured in predict_by_form route.")
        print(e)
        lg.info("An exception has occured in predict_by_form route.")
        raise CustomException(e, sys)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug= True)