pipeline {
    agent any
   
    
    stages {
        stage('build') {
            steps {
                ls -la
                pwd
                echo 'doing npm install'
                sh 'npm install'
                echo 'done with npm install'
                
            }
        }
        
        stage('test') {
            steps {
                echo 'inside testing phase'
            }
        }
        
        stage('deploy') {
            steps {
                echo 'inside deploy phase'
            }
        }
       
    }
}
