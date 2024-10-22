# Credit Risk Assessment

[![Python](https://img.shields.io/badge/Python-3.7%2B-blue.svg)](https://www.python.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.2-green.svg)](https://www.mongodb.com/)

## Author
[Ritik Patel](https://github.com/thatritikpatel)

## Screenshots

### Prediction Page
![Prediction Page](screenshots\image.png)

## Project Overview
This project implements a machine learning solution for credit card default prediction using historical transaction data from Taiwan. The system helps identify key factors determining credit card default likelihood and provides an automated model for predicting default risk.

### 🎯 Objectives
- Identify key drivers of credit card default
- Build an automated prediction model using supervised learning
- Provide insights for risk management and decision-making
- Help banks control cash flow and manage credit risk effectively

## Tech Stack
- Python 3.8+
- MongoDB
- Machine Learning Libraries:
  - scikit-learn
  - pandas
  - numpy
- Web Framework:
  - Flask
- Development Tools:
  - Git
  - pytest (for testing)
  - Docker (for containerization)

## Project Structure
```
sensor_fault_detection/
├── src/
│   ├── components/
│   │   ├── data_ingestion.py
│   │   ├── data_transformation.py
│   │   └── model_trainer.py
│   ├── pipeline/
│   │   └── train_pipeline.py
│   ├── exception.py
│   └── utils.py
├── tests/
├── config/
├── artifacts/
├── notebooks/
├── app.py
├── requirements.txt
└── README.md
```

## 🏗️ Architecture
The project follows a modular architecture with four main components:

1. **Data Ingestion Component**
   - Handles data import from MongoDB
   - Creates data ingestion artifacts

2. **Data Transformation Component**
   - Performs data preprocessing and feature engineering
   - Splits data into training and testing sets
   - Handles data scaling and encoding

3. **Model Trainer Component**
   - Implements multiple ML algorithms (Logistic Regression, Random Forest, SVM)
   - Performs model training and hyperparameter tuning
   - Generates model artifacts

4. **Model Evaluation Component**
   - Evaluates model performance
   - Generates performance metrics and reports

## 📊 Dataset Information
The dataset contains credit card client data from Taiwan (April 2005 to September 2005), including:
- Default payments information
- Demographic factors
- Credit data
- Payment history
- Bill statements

### Features

- **ID**: ID of each client
- **LIMIT_BAL**: Amount of given credit in NT dollars (includes individual and family/supplementary credit)
- **SEX**: Gender (1=male, 2=female)
- **EDUCATION**: 
  - 1: Graduate school 
  - 2: University 
  - 3: High school 
  - 4: Others 
  - 5: Unknown 
  - 6: Unknown
- **MARRIAGE**: Marital status 
  - 1: Married 
  - 2: Single 
  - 3: Others
- **AGE**: Age in years
- **PAY_0**: Repayment status in September, 2005 
  - -1: Pay duly 
  - 1: Payment delay for one month 
  - 2: Payment delay for two months 
  - … 
  - 8: Payment delay for eight months 
  - 9: Payment delay for nine months and above
- **PAY_2**: Repayment status in August, 2005 (scale same as above)
- **PAY_3**: Repayment status in July, 2005 (scale same as above)
- **PAY_4**: Repayment status in June, 2005 (scale same as above)
- **PAY_5**: Repayment status in May, 2005 (scale same as above)
- **PAY_6**: Repayment status in April, 2005 (scale same as above)
- **BILL_AMT1**: Amount of bill statement in September, 2005 (NT dollar)
- **BILL_AMT2**: Amount of bill statement in August, 2005 (NT dollar)
- **BILL_AMT3**: Amount of bill statement in July, 2005 (NT dollar)
- **BILL_AMT4**: Amount of bill statement in June, 2005 (NT dollar)
- **BILL_AMT5**: Amount of bill statement in May, 2005 (NT dollar)
- **BILL_AMT6**: Amount of bill statement in April, 2005 (NT dollar)
- **PAY_AMT1**: Amount of previous payment in September, 2005 (NT dollar)
- **PAY_AMT2**: Amount of previous payment in August, 2005 (NT dollar)
- **PAY_AMT3**: Amount of previous payment in July, 2005 (NT dollar)
- **PAY_AMT4**: Amount of previous payment in June, 2005 (NT dollar)
- **PAY_AMT5**: Amount of previous payment in May, 2005 (NT dollar)
- **PAY_AMT6**: Amount of previous payment in April, 2005 (NT dollar)
- **default.payment.next.month**: Default payment (1=yes, 0=no)



## 🔑 Key Findings
1. **Low Repayment Revenue**
   - Majority of customers pay less than 200,000 NTD monthly
   - Large number of customers make minimal or zero payments

2. **Low Credit Card Usage**
   - Right-skewed distribution of monthly bill amounts
   - 6000-8000 customers have bills less than 5000 NTD monthly

3. **Late Payment Patterns**
   - Significant correlation between payment delays and default risk
   - Higher default rates among customers with two-month payment delays

## 💻 Technologies Used
```
aiofiles
dill==0.3.5.1
dnspython==2.2.1
database-connect==0.1.66
evidently==0.1.58.dev0
Flask==2.2.3
httptools==0.5.0
imblearn==0.0
ipykernel
jinja2==3.1.2
mypy-boto3-s3==1.24.76
pip-chill==1.0.1
pymongo==4.2.0
python-dotenv==0.21.0
python-multipart==0.0.6
seaborn==0.12.2
types-s3transfer==0.6.0.post4
uvicorn==0.18.3
watchfiles==0.17.0
websockets==10.3
wincertstore==0.2
xgboost==1.6.2
neuro-mf==0.0.5
boto3==1.26.105
Werkzeug==2.2.2
```

## 🚀 Getting Started

### Prerequisites
- Python 3.7+
- MongoDB 4.2+
- pip package manager

### Installation
1. Clone the repository
```bash
git clone https://github.com/thatritikpatel/Credit-Risk-Assessment.git
cd Credit-Risk-Assessment
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your MongoDB credentials
```

### Usage
1. Start the data pipeline
```python
from pipeline.training_pipeline import TrainingPipeline

# Initialize and run the pipeline
pipeline = TrainingPipeline()
pipeline.run_pipeline()
```

2. Make predictions
```python
from pipeline.prediction_pipeline import PredictionPipeline

# Initialize prediction pipeline
predictor = PredictionPipeline()
predictions = predictor.predict(input_data)
```

## 📝 Recommendations
1. **Customer Retention Program**
   - Implement campaigns for inactive cardholders
   - Focus on increasing card utilization

2. **Delinquent Account Management**
   - Early intervention for accounts with payment delays
   - Structured follow-up for accounts with 2+ months delay

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss proposed changes.

## 📄 License
This project is available under the MIT License.

## 🙏 Acknowledgements
- UCI Machine Learning Repository
- Taiwan Credit Card Dataset contributors


## Contact
- Ritik Patel - [ritik.patel129@gmail.com]