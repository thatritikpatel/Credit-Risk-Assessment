# Credit Risk Assessment

[![Python](https://img.shields.io/badge/Python-3.7%2B-blue.svg)](https://www.python.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.2-green.svg)](https://www.mongodb.com/)

## Author
[Ritik Patel](https://github.com/thatritikpatel)

## Project Overview
This project implements a machine learning solution for credit card default prediction using historical transaction data from Taiwan. The system helps identify key factors determining credit card default likelihood and provides an automated model for predicting default risk.

### 🎯 Objectives
- Identify key drivers of credit card default
- Build an automated prediction model using supervised learning
- Provide insights for risk management and decision-making
- Help banks control cash flow and manage credit risk effectively

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
- **ID**: Client identifier
- **LIMIT_BAL**: Credit amount in NT dollars
- **Demographic**: Gender, Education, Marriage, Age
- **Payment Status**: Monthly payment records (PAY_0 to PAY_6)
- **Bill Amounts**: Monthly bill statements (BILL_AMT1 to BILL_AMT6)
- **Payment Amounts**: Previous payments (PAY_AMT1 to PAY_AMT6)
- **Target**: Default payment next month (1=yes, 0=no)

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
imblearn==0.0
pymongo==4.2.0
seaborn==0.12.2
xgboost==1.6.2
python-dotenv==0.21.0
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
- Lichman, M. (2013). UCI Machine Learning Repository