# directory-app

live demo https://registration-registry-app.herokuapp.com/

This repository contains a Django and React project that:

- Has responsive Form to capture Name, Mobile and email with OTP input to proceed to a main dashboard
- Lists form submissions in a responsive table format with order and search features
- Impements an API: 
    - to share/query the data https://registration-registry-app.herokuapp.com/api/view/
    - to post data https://registration-registry-app.herokuapp.com/api/create/
    - to filter data https://registration-registry-app.herokuapp.com/api/view?name=''&phone_number=''&email=''

Styled with TailwindCSS

For the Requirements please check package.json and requirements.txt files at the root of the folder

# Setup your Database
.. code:: bash

    sudo -u postgres psql

This opens an interactive shell for your database. Run the following commands:
.. code:: bash

    CREATE USER dashboard WITH CREATEDB CREATEROLE SUPERUSER LOGIN PASSWORD 'dashboard';
    CREATE DATABASE dashboard WITH OWNER postgres;
    GRANT ALL ON DATABASE dashboard TO dashboard;

Next it's time to install the packages required to run.

.. code:: bash

    pip install -r requirements.txt
  
    // You must install nodejs
    npm install 
    npm run build
    
To run the project:

.. code:: bash

   python manage runserver 8000
