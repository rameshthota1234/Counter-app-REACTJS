pipeline {
    agent any
   
    
    stages {
        stage('build') {
            steps {
               sh "ls -la"
                sh "cd src"
                sh "pwd"
                echo 'doing npm install'
                sh 'npm install'
                echo 'done with npm install'
                sh "npm start"
                
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
